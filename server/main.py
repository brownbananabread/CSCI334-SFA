from flask import Flask
from routes.user import user

def create_app():
    app = Flask(__name__)

    # Register Blueprints
    app.register_blueprint(user)

    @app.route('/')
    def index():
        return {'message': 'Flask REST API is running'}, 200

    @app.errorhandler(404)
    def not_found(error):
        return {'error': 'Resource not found'}, 404

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
