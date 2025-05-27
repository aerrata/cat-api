# 🐈 ✨ Cat Facts API Python App

Simple FastAPI app for generating random cat facts.

## Setup

1. Make sure you have Docker installed.

2. Build the image

```bash
docker build -t cat-api/py .
```

2. Run the container

```bash
docker run -d -p 8000:8000 --name cat-api-py-container cat-api/py
```

3. Go to `http://localhost:8000`

## Endpoints

`GET /` — Returns a random cat fact in JSON format

Sample response:

```json
{
  "fact": "Cats sleep for 70% of their lives."
}
```
