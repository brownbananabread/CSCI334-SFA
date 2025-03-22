from flask import jsonify, request

def get_all_users():
    return jsonify({'message': 'GET all users request complete'}), 200

def get_user_by_id(user_id):
    return jsonify({'message': f'GET user {user_id} request complete'}), 200

def create_user(data):
    return jsonify({'message': 'POST create user request complete'}), 201

def update_user(user_id, data):
    return jsonify({'message': f'PUT update user {user_id} request complete'}), 200

def delete_user(user_id):
    return jsonify({'message': f'DELETE user {user_id} request complete'}), 200
