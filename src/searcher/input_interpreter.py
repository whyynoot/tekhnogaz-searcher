from typing import List

# UserRequest класс описывающий обработанный входной запрос пользователя.
# Является результатом обработки другим классом.
class UserRequest:


    def __init__(self, obj: str, goal: str, postive: List[str], negative: List[str]):
        # object - интересующий объект поиска, его вхождение обязательно для нашего поискового запроса
        self.object = obj
        # goal - интересующая нас цель. Цена, рубли, квадратные метры и другое
        self.goal = goal 
        # positive - массив позитивных кейвордов, их пристутсвие уточняет поисковой запрос
        self.positive = postive
        # negative - массив негативных кейвордов, они не должны присутствовать в результатах поиска
        self.negative = negative

    # В будущем можно добавить методы преобразования в JSON, или сохранения в бд и так далее

# InputInterpreter интерейфс для анализа входных данных
class InputInterpreter:
    # на вход подается строка, которая должна быть переобразованна в UserRequest
    def analyse_input(self, user_input: str) -> UserRequest: 
        raise NotImplemented

# ExmapleInterpreter как пример того, чего мы ожидаем от анализа входных данных для последующего формирования запроса
class ExampleInterpreter(InputInterpreter):

    # analyse_input заглушка на статический ответ
    def analyse_input(self, obj, postivie, negative) -> UserRequest:
        ## Строка для анализа: Трубы напорные полиэтиленовые, кроме газопроводных ПЭ100, для транспортировки воды, стандартное размерное отношение SDR17, номинальный наружный диаметр 110 мм, толщина стенки 6,6 мм
        return UserRequest(obj=obj, goal="", postive=postivie.split(" "), negative=negative.split(" "))
        ## Логика анализа входных данных с преобразованием

        ## На выходе должны получить
        # user_request = UserRequest(obj="трубы напорные", goal="м3", 
        #              postive=[],
        #              negative=["газопроводных ПЭ100"])
        
        # return user_request