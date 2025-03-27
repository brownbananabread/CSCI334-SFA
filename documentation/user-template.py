import hashlib
import secrets

class User:
    VALID_ROLES = {'admin', 'isBusiness', 'customer'}

    def __init__(self, username, password, role):
        if role not in self.VALID_ROLES:
            raise ValueError(f"Invalid role: {role}. Valid roles are: {self.VALID_ROLES}")
        self.username = username
        self.password_hash = self._hash_password(password)
        self.role = role
        self.ratings = None  # Initialize ratings as None by default

    @classmethod
    def create_admin(cls, username, password):
        return cls(username, password, 'admin')
    
    @classmethod
    def create_isBusiness(cls, username, password):
        instance = cls(username, password, 'isBusiness')
        instance.ratings = cls.Ratings()  # Instantiate ratings only for sole traders
        return instance
    
    @classmethod
    def create_customer(cls, username, password):
        return cls(username, password, 'customer')
    
    def show_details(self):
        return {
            'username': self.username,
            'role': self.role
        }
    
    @property
    def is_admin(self):
        return self.role == 'admin'

    def _hash_password(self, password):
        salt = secrets.token_hex(16)
        hashed = hashlib.sha256((salt + password).encode('utf-8')).hexdigest()
        return f"{salt}${hashed}"

    def verify_password(self, password):
        try:
            salt, hashed = self.password_hash.split('$')
            return hashed == hashlib.sha256((salt + password).encode('utf-8')).hexdigest()
        except ValueError:
            return False

    def update_password(self, old_password, new_password):
        if not self.verify_password(old_password):
            raise ValueError("Old password is incorrect")
        self.password_hash = self._hash_password(new_password)

    def change_role(self, new_role):
        if new_role not in self.VALID_ROLES:
            raise ValueError(f"Invalid role: {new_role}. Valid roles are: {self.VALID_ROLES}")
        self.role = new_role

    class Ratings:
        def __init__(self):
            self.ratings = []

        def add_rating(self, rating):
            if not (0 <= rating <= 5):
                raise ValueError("Rating must be between 0 and 5")
            self.ratings.append(rating)

        def average_rating(self):
            if not self.ratings:
                return 0
            return sum(self.ratings) / len(self.ratings)

        def get_ratings(self):
            return self.ratings