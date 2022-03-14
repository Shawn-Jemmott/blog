.DEFAULT_GOAL := all
all:
	docker-compose up --build
	docker-compose django_backend python manage.py migrate
	docker-compose django_backend python manage.py loaddata fixtures/*.yaml

build:
	docker-compose build

up:
	docker-compose up -d

stop:
	docker-compose stop

down:
	docker-compose down

test:
	docker-compose django_backend python manage.py test --noinput
