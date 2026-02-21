from fastapi import APIRouter

try:
    from ..controllers.login_controller import login, LoginRequest
except ImportError:
    from controllers.login_controller import login, LoginRequest

router = APIRouter()

@router.post("/login")
async def login_route(request: LoginRequest):
    return login(request)
