from flask import Blueprint, request
from controllers.auth import (
    validate,
)

auth_blueprint = Blueprint('auth_blueprint', __name__, url_prefix='/api')

@auth_blueprint.route('/validate', methods=['POST'])
def register_route(): 
    body = request.get_json()
    print(body)
    email = body.get('email')
    if email: 
        return validate(email)
    else:
        return {'message': 'Email is required'}, 400
