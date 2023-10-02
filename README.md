# Django Budget Expenses

## Pre requisites

- Python
- Node.js

## Setup

- Clone the repository
- Create a new virtualenv `python3 -m venv .env`
- Install the requirements `pip install requirements-dev.txt`
- Install the frontend requirements `cd expenses-fe` and `npm install`
- Migrate `./manage.py migrate`
- Create a superuser `./manage.py createsuperuser`
- Run the server `./manage.py runserver` and `npm start`
