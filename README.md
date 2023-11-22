# Tekhnogaz Searcher

Project name is a `searcher` that allows `professionals, who works with information` to `work with different search engines, getting summary and other workflows`.

The Web Content Search and Analysis Platform is a powerful tool designed for executing search queries and analyzing websites to extract valuable information. Built on Python with the Django and Django REST frameworks for the backend, and utilizing React for the frontend, this program offers a user-friendly interface for query execution, web page analysis, and result storage in a robust database.

## LIVE PREVIEW

Live preview is located on our [Site (CLICKABLE)](<https://tekhnogaz.ru>).

## Installing and Running Searcher

To install Searcher, follow these steps:

Firstly, remember to setup envoirment. `DATABASE_URL` envoirment variable is required.
Secondly, remember to setup `ALLOWED_HOSTS` at [backend/settings.py](backend/settings.py).
Thirdly, download chromedriver to [src/searcher/drivers/](src/searcher/drivers/).

Python Django Backend Installing and Running
```
pip3 install -r requirements.txt
```

React Front-End running
```
npm install
npm run server # debugging
```
## Using Searcher

To use Searcher, follow these steps:

Starting backend
```
python3 manage.py runserver
```
or
```
gunicorn backend.wsgi
```

React 
```
npm run build
```

After, setup your http server and you are ready to go!

## Contact

If you want to contact us, reach our email contact@tekhnogaz.ru or reach us at our [Site](<https://tekhnogaz.ru>).