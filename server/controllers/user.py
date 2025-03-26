# from flask import Blueprint, request
# from models.user import (
#     get_all_users,
#     get_user_by_id,
#     create_user,
#     update_user,
#     delete_user
# )

# user_routes = Blueprint('user_routes', __name__, url_prefix='/api/users')

# @user_routes.route('', methods=['GET'])
# def users():
#     return get_all_users()

# @user_routes.route('/<int:user_id>', methods=['GET'])
# def user_detail(user_id):
#     return get_user_by_id(user_id)

# @user_routes.route('', methods=['POST'])
# def add_user():
#     data = request.get_json()
#     return create_user(data)

# @user_routes.route('/<int:user_id>', methods=['PUT'])
# def edit_user(user_id):
#     data = request.get_json()
#     return update_user(user_id, data)

# @user_routes.route('/<int:user_id>', methods=['DELETE'])
# def remove_user(user_id):
#     return delete_user(user_id)
