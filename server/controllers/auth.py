from flask import Blueprint, request, make_response
import models.auth as auth
import utils

auth_routes = Blueprint('auth_routes', __name__, url_prefix='/api')


@auth_routes.route('/validate', methods=['POST'])
def validate_route():
    try:
        body = utils.get_body(request)

        if not body:
            return {'message': 'Body is required'}, 400
        
        email = utils.get_param(body, 'email')

        if not email:
            return {'message': 'Email is required'}, 400
        
        if not auth.find_user(email):
            return {'message': 'User not found'}, 404
        
        return {'message': 'User found'}, 200
    
    except Exception as error:
        print(error)
        return {'message': "server error"}, 500


@auth_routes.route('/login', methods=['POST'])
def login_route(): 
    try:
        body = utils.get_body(request)

        if not body:
            return {'message': 'Body is required'}, 400
        
        email = utils.get_param(body, 'email')
        password = utils.get_param(body, 'password')

        if not email or not password:
            return {'message': 'Email and password are required'}, 400
        
        if not auth.login(email, password):
            return {'message': 'User not logged in'}, 404
        
        response = make_response({'message': 'User logged in'}, 200)
        response.set_cookie('accessToken', "123")
        response.set_cookie('refreshToken', "456")
        return response

    except Exception as error:
        print(error)
        return {'message': 'Server error'}, 500


@auth_routes.route('/register', methods=['POST'])
def register_route(): 
    try:
        body = utils.get_body(request)

        if not body:
            return {'message': 'Body is required'}, 400
        
        firstName = utils.get_param(body, 'firstName')
        lastName = utils.get_param(body, 'lastName')
        email = utils.get_param(body, 'email')
        password = utils.get_param(body, 'password')
        isBusinessAccount = utils.get_param(body, 'isBusinessAccount')

        if not email or not password or not firstName or not lastName or isBusinessAccount is None:
            return {'message': 'All params are required'}, 400
        
        if not auth.register(firstName, lastName, email, password, isBusinessAccount):
            return {'message': 'User not created'}, 404
        
        response = make_response({'message': 'User created'}, 200)
        response.set_cookie('accessToken', "123")
        response.set_cookie('refreshToken', "456")
        return response

    except Exception as error:
        print(error)
        return {'message': 'Server error'}, 500
