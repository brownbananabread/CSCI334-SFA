from flask import Flask
from routes.user import user_blueprint

def create_app():
    app = Flask(__name__)

    # Register Blueprints
    app.register_blueprint(user_blueprint)

    @app.route('/')
    def index():
        return {'message': 'Flask REST API is running'}, 200

    @app.errorhandler(404)
    def not_found(error):
        return {'error': 'Resource not found'}, 404

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=False, host='localhost', port=5174)
