# Kardian

## System Requirements
There is the complete list of packages required by the project. Update your system before start.

    sudo apt-get update

#### Pip3
    
    sudo apt-get install python3-pip
    
#### Virtualenvwrapper
    
    sudo pip3 install virtualenvwrapper

## Project Install

### Virtualenv Setup
    
    mkvirtualenv --python=/usr/bin/python3 pocket_law
    
Activate your enviroment, inside the calaris folder run the following command:

    workon pocket_law
    
Install requirements:
    
    pip install -r requirements.txt


Run migrations
    
    python manage.py migrate

Run migrations in specific schema
    
    python manage.py migrate_schemas --schema=SCHEMA_NAME

### Tests

#### Coverage
Run tests with coverage

    coverage run --source='.' manage.py test

Report coverage

    coverage report

#### Functional tests

If you want to run functional tests, you need the Chrome driver https://chromedriver.chromium.org/

Don't forget link the driver, please use absolute path:

    sudo ln -s /path/to/chromedriver /usr/bin

If you can't make the link work, you can set the variable directly in the function tests/functional_tests/base_test_case.py

And now you can run the functional tests:

    python manage.py test tests.functional_tests.<test_file>.<test_class>.<test_function>

## Celery
    
### Run celery (another terminal for dev)

    $ celery worker -A kardian_backend.celery --loglevel=info
    
### Run beat for cronjobs (another terminal for dev)

    $ celery beat -A kardian_backend.celery --loglevel=info -S django

## Internationalization

Install in server

    $ sudo apt-get install gettext

Create file called "locale" in root level

    $ python manage.py makemessages -l de
    
After add all translations run this command:

    python manage.py compilemessages
   
Update translations

    python manage.py makemessages -a  
    
In rest, add to header "Accept-Language" as the follow link
    
    https://www.django-rest-framework.org/topics/internationalization/


## Radon

https://radon.readthedocs.io/en/latest/commandline.html

- We are checking CC (Cyclomatic Complexity), based on the next table

        CC score    Rank    Risk
        1 - 5	    A       low - simple block
        6 - 10	    B       low - well structured and stable block
        11 - 20	    C       moderate - slightly complex block
        21 - 30	    D       more than moderate - more complex block
        31 - 40	    E       high - complex block, alarming
        41+	    F       very high - error-prone, unstable block

    Using the next command:
    
        radon cc . --min B --show-complexity


- We are checking MI (Maintainability Index), based on the next table

        MI score	Rank	Maintainability
        100 - 20	A	Very high
        19 - 10	B	Medium
        9 - 0	        C	Extremely low

    Using the next command:
    
        radon mi . --min B


##Fixtures

Dump data

    $ python manage.py dumpdata <app>.<model> --indent 2 > <dir>

Load Fixtures to share apps

    $ python manage.py loaddata fixtures/public/.json


###### Developed by Dekoding S.R.L
