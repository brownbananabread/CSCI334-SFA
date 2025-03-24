from flask import Flask, request  # Ensure Flask is installed
from flask_cors import CORS  # Ensure flask-cors is installed
from routes.user import user_blueprint
from routes.auth import auth_blueprint
from routes.profile import profile_blueprint

def create_app():
    app = Flask(__name__)
    CORS(app, supports_credentials=True, origins=["http://localhost:5173", "http://localhost:4173"])

    # Register Blueprints
    app.register_blueprint(user_blueprint)
    app.register_blueprint(auth_blueprint)
    app.register_blueprint(profile_blueprint)

    @app.before_request
    def log_request_info():  # Flask calls this function before each request
        if request.method == 'OPTIONS':
            return
        print()
        print("\033[93mPING:\033[0m")
        print("  \033[94mRequest:\033[0m")
        print(f"    \033[92mMethod:\033[0m {request.method}")
        print(f"    \033[92mURL:\033[0m {request.url}")
        print(f"    \033[92mUser Agent:\033[0m {request.headers.get('User-Agent')}")
        print(f"    \033[92mOrigin:\033[0m {request.headers.get('Origin')}")
        try:
            print(f"    \033[92mBody:\033[0m {request.data.decode('utf-8') if request.data else 'None'}")
        except UnicodeDecodeError:
            print(f"    \033[92mBody:\033[0m (non-UTF-8 data)")

    @app.after_request
    def log_response_info(response):  # Flask calls this function after each request
        if request.method == 'OPTIONS':
            return response
        print("  \033[94mResponse:\033[0m")
        print(f"    \033[92mStatus Code:\033[0m {response.status_code}")
        print(f"    \033[92mBody:\033[0m {response.get_data(as_text=True)}")
        return response

    @app.route('/')
    def index():  # This is the root route handler
        return {'message': 'Flask REST API is running'}, 200
    
    # Error handling
    @app.errorhandler(404)
    def not_found_error(error):  # Flask uses this function internally
        return {'error': 'Resource not found'}, 404

    @app.errorhandler(405)
    def method_not_allowed_error(error):  # Flask uses this function internally
        return {'error': 'Method not allowed'}, 405

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='localhost', port=5174)
