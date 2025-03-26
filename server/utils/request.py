def get_body(request):
    try:
        if not request.data:
            return None

        body = request.get_json()

        if not body:
            return None
        
        return body

    except Exception:
        return None

def get_param(body, param):
    try:
        value = body.get(param)

        if value in [None, '']:
            return None
        
        return value
    except Exception:
        return None