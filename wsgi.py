from app import app  # Import the app from your main Flask file

if __name__ == "__main__":
    app.run()  # This is for local testing, Gunicorn will run the app in production.
