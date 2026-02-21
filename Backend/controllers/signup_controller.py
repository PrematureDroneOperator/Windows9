
try:
    from ..supabase_client import supabase
except ImportError:
    from supabase_client import supabase
from pydantic import BaseModel


class SignupRequest(BaseModel):
    email: str
    username: str
    password: str

def signup(request: SignupRequest):
    res = supabase.auth.sign_up({
        "email": request.email,
        "password": request.password,
        "options": {
            "data": {
                "username": request.username
            }
        }
    })
    return res
