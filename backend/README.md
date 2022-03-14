Install Dependencies
```terminal
pip3 install -r requirements.txt
```

Build & Run App
```terminal
python manage.py migrate && python manage.py runserver
```

Run Test Cases
```terminal
python manage.py test
```

API Endpoints
```
posts/ - gets all & create posts - GET, CREATE
posts/{id}/ - gets specifc posts - PUT, UPDATE, DELETE
```

Seed DB
```
python manage.py loaddata fixtures/*.yaml    
```

Generate Secret Key
```
python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
```
