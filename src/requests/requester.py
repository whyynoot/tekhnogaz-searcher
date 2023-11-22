from abc import ABC, abstractmethod
import requests

# Интерфейс для работы с базой данных
# Испоьзуется для инициаозиации подключения и работы.
# Применяется шаблон Фасад.
# Реализация варируется взависимсоти от БД.
class IRequester(ABC):
    # Метод для сохранения результата поиска в базе данных
    #@abstractmethod
    def process_request(self, request) -> bool:
        pass

class Requester(IRequester):

    TELEGRAM_BOT_TOKEN = '6801425331:AAF5LM5H8PsDxvNIN0V8RrqANuRRlToFqmg'
    TELEGRAM_CHAT_ID = '-1001737831271'

    def process_request(self, request) -> bool:
        return self._send_request_to_telegram(request=request)
    
    def _send_request_to_telegram(self, request) -> bool:
        text = f"Text: {request['msg']}\nName: {request['name']}\nContact Method: {request['mobile']}"
        link = f"https://api.telegram.org/bot{self.TELEGRAM_BOT_TOKEN}/sendMessage"
        try: 
            resp = requests.post(link, json={'chat_id': self.TELEGRAM_CHAT_ID, 'text': text})
            print(resp.text)
            if resp.status_code == 200:
                return True
        except Exception as e:
            #print(resp, request, e)
            link = f"https://api.telegram.org/bot{self.TELEGRAM_BOT_TOKEN}/sendMessage"
            try:
                resp = requests.post(link, json={'chat_id': self.TELEGRAM_CHAT_ID, 'text': 'error sending'})
                if resp.status_code == 200:
                    return True
            except: 
                return False
