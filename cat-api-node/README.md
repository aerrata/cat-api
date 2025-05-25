# Cat API Node

Simple Express.js app for generating random cat facts.

### Setup

1. Make sure you have Docker installed.

2. Build the image

```bash
docker build -t cat-api-node .
```

2. Run the container

```bash
docker run -p 3000:3000 --name cat-api-node-container cat-api-node
```

3. Go to `http://localhost:3000`

### Endpoints

`GET /` — Returns a random cat fact in JSON format

Sample response:

```json
{
  "fact": "Cats sleep for 70% of their lives."
}
```