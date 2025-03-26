from flask import Blueprint, request
import models.profile as profile
import utils

profile_routes = Blueprint('profile_routes', __name__, url_prefix='/api')


@profile_routes.route('/profile', methods=['GET'])
def profile_route():
    try:
        user = profile.get_profile()
        
        if not user:
            return {'message': 'Profile not found'}, 404
        
        return user, 200
    
    except Exception as error:
        print(error)
        return {'message': "server error"}, 500