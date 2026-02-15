# main.py
from fastapi import FastAPI
from pydantic import BaseModel
from agent import agent_reply

app = FastAPI()

# Define the request body schema
class WhatsAppPayload(BaseModel):
    user: str
    message: str

@app.post("/webhook")
async def whatsapp_webhook(payload: WhatsAppPayload):
    # Access validated fields
    user_id = payload.user
    message = payload.message

    reply = agent_reply(user_id, message)

    return {"reply": reply}