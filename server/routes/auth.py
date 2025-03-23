from flask import Blueprint, request
from controllers.auth import (
    validate,
    login,
    register
)

auth_blueprint = Blueprint('auth_blueprint', __name__, url_prefix='/api')

@auth_blueprint.route('/validate', methods=['POST'])
def validate_route(): 
    body = request.get_json()
    email = body.get('email')
    if email: 
        return validate(email)
    else:
        return {'message': 'Email is required'}, 400

@auth_blueprint.route('/login', methods=['POST'])
def login_route(): 
    body = request.get_json()
    password = body.get('password')
    if password: 
        return login(password)
    else:
        return {'message': 'Password is required'}, 400
    
@auth_blueprint.route('/register', methods=['POST'])
def register_route(): 
    body = request.get_json()
    firstName = body.get('firstName')
    lastName = body.get('lastName')
    password = body.get('password')
    isTermsChecked = body.get('isTermsChecked')
    isBusinessAccount = body.get('isBusinessAccount')
    
    if firstName and lastName and password and isTermsChecked is not None and isBusinessAccount is not None: 
        return register(firstName, lastName, password, isTermsChecked, isBusinessAccount)
    else:
        return {'message': 'All register params are required'}, 400