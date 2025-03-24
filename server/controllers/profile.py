from flask import jsonify

def get_profile():
    return jsonify({
        'name': 'John Doe',
        'email': 'johndoe@example.com',
        'role': 'admin',
        'sole_trader': False
    }), 200

