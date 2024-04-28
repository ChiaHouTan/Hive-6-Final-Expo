import pymongo
import time
import RPi.GPIO as GPIO
from pymongo import MongoClient
from datetime import datetime, timedelta
from picamera2 import Picamera2, Preview

Configuration
config = {
    "mongo_uri": "database_link",
    "database_name": "database_name",
    "collection_name": "collection_name",
    "motion_pin": 12
}

Set up GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(config["motion_pin"], GPIO.IN)

try:
    # Connect to MongoDB
    client = pymongo.MongoClient(config["mongo_uri"])
    db = client[config["database_name"]]
    collection = db[config["collection_name"]]
    print("Connected to MongoDB")

    print("Motion sensor and camera script running...")

    # Initialize PiCamera
    picam2 = Picamera2()
    picam2.resolution = (640, 480)  # Set desired resolution
    camera_config = picam2.create_still_configuration(main={"size": (1920, 1080)}, lores={"size": (640, 480)}, display="lores")
    picam2.configure(camera_config)
    picam2.start_preview(Preview.QTGL)
    picam2.start()

    while True:
        # Delete old documents and insert new document
        with picam2.capture_still() as image_output:
            image_data = image_output.read()
            timestamp = datetime.now()

            delete_filter = {"timestamp": {"$lt": timestamp - timedelta(seconds=30)}}
            collection.delete_many(delete_filter)

            data_to_insert = {"timestamp": timestamp, "image_data": image_data}
            collection.insert_one(data_to_insert)

            print("Image captured and inserted into MongoDB")

            # Wait for motion or a short time
            time.sleep(3 if GPIO.input(config["motion_pin"]) else 0.1)

except KeyboardInterrupt:
    print("KeyboardInterrupt: Exiting program.")

except Exception as e:
    print(f"Error: {e}")

finally:
    # Clean up GPIO and close MongoDB connection and PiCamera
    GPIO.cleanup()
    client.close()
    picam2.close()