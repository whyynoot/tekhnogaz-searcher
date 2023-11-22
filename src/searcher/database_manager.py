import uuid
from typing import List

import sqlalchemy_utils
from sqlalchemy import create_engine, Column, Date, func, Text, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import declarative_base, sessionmaker, relationship

from sqlalchemy.exc import OperationalError

from dotenv import load_dotenv
import os

from src.searcher.search_result import SearchResult
from src.searcher.idatabase_manager import IDatabaseManager


# Класс предоставляет функциональность для управления базой данных,
# включая инициализацию, сохранение и извлечение данных.
class DatabaseManager(IDatabaseManager):
    def __init__(self):
        self.engine = None
        self.Base = None
        self.database_url = None
        self.is_initialized = False

        try:
            self.initialize_database()
            self.is_initialized = True
        except OperationalError as e:
            # Обработка ошибок при подключении
            self.is_initialized = False
            print("Error when connecting to database:", e)
        except Exception as e:
            # Обработка ошибок при инициализации
            self.is_initialized = False
            print("Database initialization error:", e)

    def initialize_database(self):
        self.get_database_config()
        self.engine = create_engine(self.database_url)
        # Проверка существует ли база данных
        if not sqlalchemy_utils.database_exists(self.engine.url):
            sqlalchemy_utils.create_database(self.engine.url, encoding='utf8mb4')
            print(f"The new database has been created: {self.engine}")
        else:
            print("The database already exists")

        self.Base = declarative_base()
        self.define_model()
        # Создание таблицы в базе данных
        self.Base.metadata.create_all(self.engine)

    def get_database_config(self):
        load_dotenv()
        self.database_url = os.getenv("DATABASE_URL")
        #self.database_url = ''
        if self.database_url is None:
            raise Exception("Failed to retrieve database URL from .env file.")

    def define_model(self):
        class SearchResultDB(self.Base):
            __tablename__ = 'search_results'
            id = Column(UUID(as_uuid=True),
                        primary_key=True,
                        default=uuid.uuid4,
                        nullable=False,
                        unique=True)
            url = Column(Text, nullable=False)
            photo = Column(Text, nullable=True)
            region = Column(Text, nullable=False)
            relevance = Column(Date, nullable=False, server_default=func.current_date())
            content_analysis = Column(Text, nullable=True)
            query_task_id = Column(UUID(as_uuid=True), ForeignKey('task_query.id'), nullable=False)
            query_task = relationship("QueryTaskDB")

            def __init__(self, SearchResultModel):
                self.url = SearchResultModel.url
                self.photo = SearchResultModel.photo
                self.region = SearchResultModel.region
                self.content_analysis = SearchResultModel.content_analysis
                self.query_task_id = SearchResultModel.query_id

        class QueryTaskDB(self.Base):
            __tablename__ = 'task_query'
            # Always in
            id = Column(UUID(as_uuid=True),
                        primary_key=True,
                        default=uuid.uuid4,
                        nullable=False,
                        unique=True)
            status = Column(Text, nullable=False)
            obj = Column(Text, nullable=False)
            # Not always in
            positive = Column(Text, nullable=True)
            negative = Column(Text, nullable=True)

            def __init__(self, user_request):
                self.status = "created"
                self.obj = user_request.object
                if len(user_request.positive) != 0:
                    self.positive = ''.join(user_request.positive)
                if len(user_request.negative) != 0:
                    self.negative = ''.join(user_request.negative)

        self.QueryTaskDB = QueryTaskDB
        self.SearchResultDB = SearchResultDB

    def create_session(self):
        Session = sessionmaker(bind=self.engine)
        return Session()

    def create_task(self, user_request):
        session = None
        try:
            if not self.is_initialized:
                print("Error: DatabaseManager is not initialized")
            else:
                session = self.create_session()
                new_request = self.QueryTaskDB(user_request)
                session.add(new_request)
                session.flush()
                session.commit()
                return new_request.id
        except Exception as e:
            print("Error occurred during create_task():", e)
            return None
        finally:
            self.close_session(session)

    def update_task_status(self, query_id, status):
        session = None
        try:
            if not self.is_initialized:
                print("Error: DatabaseManager is not initialized")
            else:
                session = self.create_session()
                existing_task = session.query(self.QueryTaskDB).get(query_id)

                if existing_task is not None:
                    existing_task.status = status
                    session.commit()
                    return True
                else:
                    print("Error: Task with query_id not found")
                    return False
        except Exception as e:
            print("Error occurred during update_task_status():", e)
            return False
        finally:
            self.close_session(session)

    def get_task_from_database(self, query_id):
        session = None
        try:
            if not self.is_initialized:
                print("Error: DatabaseManager is not initialized")
            else:
                session = self.create_session()
                result = session.query(self.QueryTaskDB).filter_by(id=query_id).first()
                return result
        finally:
            self.close_session(session)

    def get_task_result(self, query_id):
        session = None
        try:
            if not self.is_initialized:
                print("Error: DatabaseManager is not initialized")
            else:
                session = self.create_session()
                results = session.query(self.SearchResultDB).filter(self.SearchResultDB.query_task_id == query_id).all()
                listings = []
                for result in results:
                    listing = SearchResult(result)
                    listings.append(listing)
                return listings
        finally:
            self.close_session(session)

    def save_search_result(self, search_result):
        session = None
        try:
            if not self.is_initialized:
                print("Error: DatabaseManager is not initialized")
            else:
                session = self.create_session()
                new_result = self.SearchResultDB(search_result)
                session.add(new_result)
                session.commit()
        except Exception as e:
            print("Error occurred during save_search_result():", e)
            return False
        finally:
            self.close_session(session)

        return True

    def get_search_result_from_database(self, search_result_id):
        session = None
        try:
            if not self.is_initialized:
                print("Error: DatabaseManager is not initialized")
            else:
                session = self.create_session()
                result = session.query(self.SearchResultDB).filter_by(id=search_result_id).first()
                if result:
                    search_result = SearchResult(result)
                    return search_result
                else:
                    return None
        finally:
            self.close_session(session)

    def get_all_search_results_from_database(self):
        session = None
        try:
            if not self.is_initialized:
                print("Error: DatabaseManager is not initialized")
            else:
                session = self.create_session()
                results = session.query(self.SearchResultDB).all()
                listings = []
                for result in results:
                    listing = SearchResult(result)
                    listings.append(listing)
                return listings
        finally:
            self.close_session(session)

    def close_session(self, session):
        if session is not None:
            session.close()
