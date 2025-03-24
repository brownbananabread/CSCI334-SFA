from flask import Blueprint, request
import controllers.profile as profile

profile_blueprint = Blueprint('profile_blueprint', __name__, url_prefix='/api')

@profile_blueprint.route('/profile', methods=['GET'])
def validate_route(): return profile.get_profile()