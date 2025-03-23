from flask import jsonify, make_response

def validate(email: str):
    if email == 'brownbro1634@gmail.com':
        return jsonify({'isValid': True}), 200
    else:
        return jsonify({'isValid': False}), 404

def login(password: str):
    if password == 'JBrown1634':
        response = make_response(jsonify({'isValid': True}), 200)
        response.set_cookie('accessToken', "123")
        response.set_cookie('refreshToken', "456")
        return response
    else:
        return jsonify({'isValid': False}), 404

def register(firstName: str, lastName: str, password: str, isTermsChecked: bool, isBusinessAccount: bool):
    if firstName and lastName and password and isTermsChecked:
        response = make_response(jsonify({'isValid': True}), 200)
        response.set_cookie('accessToken', "123")
        response.set_cookie('refreshToken', "456")
        return response
    else:
        return jsonify({'isValid': False}), 404
