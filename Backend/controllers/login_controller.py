try:
    from ..supabase_client import supabase
except ImportError:
    from supabase_client import supabase
from pydantic import BaseModel
from fastapi import HTTPException

class LoginRequest(BaseModel):
    email: str
    password: str

def login(request: LoginRequest):
    try:
        res = supabase.auth.sign_in_with_password({
            "email": request.email,
            "password": request.password
        })
        
        if not res.user:
            raise HTTPException(status_code=401, detail="Invalid credentials")
            
        return {
            "user": res.user,
            "session": res.session,
            "message": "Login successful"
        }
    except HTTPException as he:
        raise he
    except Exception as e:
        if hasattr(e, 'message'):
            raise HTTPException(status_code=401, detail=e.message)
        raise HTTPException(status_code=500, detail=str(e))
