from fastapi.testclient import TestClient
from app import app

client = TestClient(app)

def test_get_cat_fact():
    response = client.get("/")
    assert response.status_code == 200
    assert "fact" in response.json()
    assert isinstance(response.json()["fact"], str)