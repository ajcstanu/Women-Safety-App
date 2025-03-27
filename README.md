# Women Safety App

## Overview
The Women Safety App is designed to detect threats using real-time sensor data and machine learning models. It integrates multi-modal data such as motion, voice, video, and GPS to trigger automatic SOS alerts.

## Features
- Real-time threat detection using ML models
- Automatic SOS alerts with location details
- WebSocket-based real-time communication
- Mesh networking for offline support
- Secure MongoDB database for storage

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/women-safety-app.git
   cd women-safety-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
4. Start the frontend:
   ```bash
   cd frontend
   npm install
   npm start
   ```

## Project Structure
```
 women-safety-app/
 ├── backend/
 │   ├── server.js
 │   ├── models/
 │   │   ├── sosModel.js
 │   ├── routes/
 │   │   ├── sosRoutes.js
 │   ├── config/
 │   │   ├── db.js
 │   ├── ml_model/
 │   │   ├── ml_model.py
 │   ├── websocket/
 │   │   ├── socket.js
 │
 ├── frontend/
 │   ├── index.html
 │   ├── styles.css
 │   ├── script.js
 ```

## API Endpoints
### SOS Alert
- **Endpoint:** `/api/sos`
- **Method:** `POST`
- **Description:** Sends SOS alert and processes threat level using ML model.
- **Payload:**
  ```json
  {
    "user": "JohnDoe",
    "location": { "latitude": 12.34, "longitude": 56.78 },
    "audioData": "base64_audio_string"
  }
  ```
- **Response:**
  ```json
  {
    "message": "SOS Alert Sent Successfully!",
    "threatLevel": "High"
  }
  ```

## WebSocket Communication
- **Connection:** `ws://localhost:5000`
- **Events:**
  - `sosAlert`: Receives real-time SOS alerts

## UI Implementation
### Frontend
The UI consists of an HTML, CSS, and JavaScript-based interface:
- **index.html:** Structure of the web app
- **styles.css:** UI styling
- **script.js:** Handles API calls and WebSocket communication

## Machine Learning Model
- **Script:** `ml_model.py`
- **Functionality:** Processes audio data and classifies threat levels.

## Future Enhancements
- Improve ML model accuracy
- Integrate smartwatch sensors
- Optimize battery consumption

## License
MIT License

