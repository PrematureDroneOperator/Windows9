# tools.py
import requests
import os

GOOGLE_API = os.getenv("GOOGLE_MAPS_API")

def find_route(origin, destination):
    url = "https://maps.googleapis.com/maps/api/directions/json"

    params = {
        "origin": origin,
        "destination": destination,
        "key": GOOGLE_API
    }

    res = requests.get(url, params=params).json()

    if res["routes"]:
        leg = res["routes"][0]["legs"][0]
        return {
            "distance": leg["distance"]["text"],
            "duration": leg["duration"]["text"]
        }

    return None


def book_ride(user_id, ride_type):
    # mock booking
    return {
        "driver": "Ramesh",
        "vehicle": ride_type,
        "eta": "5 mins"
    }
