try:
    from ..supabase_client import supabase
except ImportError:
    from supabase_client import supabase
from pydantic import BaseModel, EmailStr
from fastapi import HTTPException

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

def login(request: LoginRequest):
    try:
        res = supabase.auth.sign_in_with_password({
            "email": request.email,
            "password": request.password
        })
        
        if not res.user or not res.session:
            raise HTTPException(status_code=401, detail="Invalid credentials")
            
        return {
            "user": res.user,
            "session": res.session,
            "message": "Login successful"
        }
    except HTTPException as he:
        raise he
    except Exception as e:
        status_code = getattr(e, "status", None) or getattr(e, "status_code", 500)
        message = getattr(e, "message", None) or str(e)

        if isinstance(status_code, int):
            raise HTTPException(status_code=status_code, detail=message)
        raise HTTPException(status_code=500, detail=message)
