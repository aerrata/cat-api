from fastapi import FastAPI
from random import choice

app = FastAPI()

cat_facts = [
    "Cats sleep for 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have five toes on their front paws, but only four on the back.",
    "A house cat can run up to 30 mph.",
    "The oldest cat lived to be 38 years old!",
]

@app.get("/")
async def get_cat_fact():
    return {"fact": choice(cat_facts)}