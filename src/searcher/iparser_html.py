from abc import ABC, abstractmethod
from src.searcher.link import Link
from src.searcher.input_interpreter import UserRequest
from src.searcher.search_result import SearchResult


class IHtmlParser(ABC):
    @abstractmethod
    def analyze(self, link: Link, user_request: UserRequest) -> SearchResult:
        pass
