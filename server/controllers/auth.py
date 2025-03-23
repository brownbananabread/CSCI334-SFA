from flask import jsonify

def validate(email: str):
    if email == 'brownbro1634@gmail.com':
        return jsonify({'isValid': True}), 200
    else:
        return jsonify({'isValid': False}), 404

def login(password: str):
    if password == 'JBrown1634':
        return jsonify({'isValid': True}), 200
    else:
        return jsonify({'isValid': False}), 404

def register(firstName: str, lastName: str, password: str, isTermsChecked: bool, isBusinessAccount: bool):
    if firstName and lastName and password and isTermsChecked:
        return jsonify({'isValid': True}), 200
    else:
        return jsonify({'isValid': False}), 404