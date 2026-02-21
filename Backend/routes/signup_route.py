from fastapi import APIRouter

try:
    from ..controllers.signup_controller import signup, SignupRequest
except ImportError:
    from controllers.signup_controller import signup, SignupRequest

router = APIRouter()

@router.post("/signup")
async def signup_route(request: SignupRequest):
    return signup(request)
