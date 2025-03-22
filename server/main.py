from flask import Flask
from flask_cors import CORS
from routes.user import user_blueprint
from routes.auth import auth_blueprint

def create_app():
    app = Flask(__name__)
    CORS(app, origins=["http://localhost:5173"])

    # Register Blueprints
    app.register_blueprint(user_blueprint)
    app.register_blueprint(auth_blueprint)

    @app.route('/')
    def index():
        return {'message': 'Flask REST API is running'}, 200
    
    @app.errorhandler(404)
    def not_found_error(error):
        return {'error': 'Resource not found'}, 404

    @app.errorhandler(405)
    def method_not_allowed_error(error):
        return {'error': 'Method not allowed'}, 405
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='localhost', port=5174)
