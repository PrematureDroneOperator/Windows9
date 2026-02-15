# main.py
from fastapi import FastAPI, Request
from agent import agent_reply

app = FastAPI()

@app.post("/webhook")
async def whatsapp_webhook(req: Request):
    data = await req.json()

    # simulate WhatsApp payload
    user_id = data["user"]
    message = data["message"]

    reply = agent_reply(user_id, message)

    return {"reply": reply}
