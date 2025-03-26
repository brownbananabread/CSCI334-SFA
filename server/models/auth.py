def find_user(email: str):
    if email == 'brownbro1634@gmail.com':
        return True
    else:
        return False


def login(email:str, password: str):
    if email == "brownbro1634@gmail.com" and password == 'JBrown1634':
        return True
    else:
        return False
    

def register(firstName: str, lastName: str, email: str, password: str, isBusinessAccount: bool):
    if firstName and lastName and email and password:
        return True
    else:
        return False