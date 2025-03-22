from flask import jsonify

def validate(email: str):
    print(email)
    if email == 'brownbro1634@gmail.com':
        return jsonify({'isValid': True}), 200
    else:
        return jsonify({'isValid': False}), 404
