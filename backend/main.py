from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modèle de données pour le JSON reçu
class ContactMessage(BaseModel):
    full_name: str
    email: str
    phone: str
    subject: str
    message: str

@app.post("/contact")
async def contact(data: ContactMessage):
    print("Message reçu ✅")
    print(f"Nom: {data.full_name}, Email: {data.email}, Sujet: {data.subject}")
    return {"status": "ok", "message": "Message reçu avec succès"}
