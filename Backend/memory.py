# memory.py

user_sessions = {}

def get_session(user_id):
    if user_id not in user_sessions:
        user_sessions[user_id] = {
            "state": "idle",
            "pickup": None,
            "destination": None,
            "ride_type": None
        }
    return user_sessions[user_id]
