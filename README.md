# 👻 From the Other Side

A full-stack Node.js application for sharing and documenting paranormal encounters and ghostly sightings.

## 📋 About

From the Other Side is a platform where users can:
- Browse reported ghost sightings
- Submit their own paranormal experiences
- View live news updates about supernatural events worldwide

Built with **vanilla JavaScript** and **Node.js** (no frameworks), this project demonstrates core concepts of full-stack web development including HTTP servers, REST APIs, event-driven architecture, and Server-Sent Events (SSE).

## 🚀 Features

- **Browse Sightings**: View all reported paranormal encounters
- **Upload Sightings**: Submit your own ghost stories with title, location, timestamp, and details
- **Live News Feed**: Real-time updates about supernatural events using Server-Sent Events
- **Input Sanitization**: HTML sanitization to prevent XSS attacks
- **Event-Driven Architecture**: Custom event emitter for sighting notifications
- **Static File Serving**: Custom implementation without Express

## 🛠️ Tech Stack

- **Backend**: Node.js (pure Node.js HTTP module)
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Data Storage**: JSON file-based storage
- **Security**: `sanitize-html` for input sanitization

## 📁 Project Structure

vjezba6FullstackNodeApp/
├── data/
│ ├── data.json # Sightings database
│ └── stories.js # News stories data
├── events/
│ └── sightingEvents.js # Event emitter for sightings
├── handlers/
│ └── routeHandlers.js # API route handlers
├── public/
│ ├── images/ # Static images
│ ├── index.html # Home page
│ ├── sightings.html # Browse sightings
│ ├── upload-sighting.html # Submit form
│ ├── news.html # Live news feed
│ ├── index.js # Home page script
│ ├── upload-sighting.js # Form submission logic
│ └── news.js # SSE client
├── utils/
│ ├── addNewSighting.js # Add sighting to database
│ ├── createAlert.js # Alert helper
│ ├── getData.js # Read sightings data
│ ├── getContentType.js # MIME type resolver
│ ├── parseJSONBody.js # Parse request body
│ ├── sanitizeInput.js # HTML sanitization
│ ├── sendResponse.js # HTTP response helper
│ └── serveStatic.js # Static file server
├── server.js # Main server file
└── package.json

text

## 📦 Installation

1. **Clone the repository**:
``bash
git clone https://github.com/karlojuric/Fullstack-Node-app.git
cd Fullstack-Node-app
Install dependencies:

bash
npm install
Start the server:

bash
npm start
Open your browser:

text
http://localhost:8000
🔌 API Endpoints
GET /api
Returns all sightings as JSON array.

Response:

json
[
  {
    "title": "Ghostly Figure in the Fog",
    "location": "London, UK",
    "timeStamp": "17 February 2026, 23:45",
    "text": "Witnessed a translucent figure walking through walls..."
  }
]
POST /api
Submit a new sighting.

Request Body:

json
{
  "title": "Shadow Person",
  "location": "Varaždin, Croatia",
  "timeStamp": "18 February 2026, 00:30",
  "text": "Saw a dark figure in my room..."
}
Response: 201 Created

GET /api/news
Server-Sent Events endpoint for live news updates.

Event Format:

javascript
data: {"event":"news-update","story":"BBC: London Underground ghost sighting..."}
🎨 Pages
/ - Home page with introduction

/sightings.html - Browse all reported sightings

/upload-sighting.html - Submit new sighting form

/news.html - Live news feed (beta)

🔒 Security
Input Sanitization: All user inputs are sanitized using sanitize-html to prevent XSS attacks

Content-Type Validation: Proper MIME type handling for all static files

Error Handling: Graceful error handling with appropriate HTTP status codes

🧪 How It Works
Request Flow
Client sends HTTP request to server

Server routes request based on URL and method

Handler processes request (GET/POST/SSE)

Utils perform operations (read/write data, sanitize input)

Events emit notifications for new sightings

Response sent back to client

Event System
When a new sighting is added:

javascript
sightingEvents.emit('sighting-added', sanitizedBody)
Event listener logs alert:

javascript
sightingEvents.on('sighting-added', createAlert)
Server-Sent Events (SSE)
The /api/news endpoint maintains a persistent connection and pushes updates every 3 seconds:

javascript
res.setHeader("Content-Type", "text/event-stream")
setInterval(() => {
  res.write(`data: ${JSON.stringify(newsData)}\n\n`)
}, 3000)
🐛 Troubleshooting
Server won't start
Check if port 8000 is available

Ensure Node.js v18+ is installed

POST requests fail
Verify data/data.json exists and contains valid JSON array []

Check console for error messages

Static files not loading
Ensure public/ directory contains all HTML/CSS/JS files

Check file paths are correct

📝 TODO / Future Improvements
 Add database (MongoDB/PostgreSQL) instead of JSON file

 User authentication and authorization

 Image upload for sightings

 Search and filter functionality

 Pagination for sightings list

 Rate limiting for API endpoints

 Unit and integration tests

 Docker containerization

👨‍💻 Author
Karlo Jurić

📄 License
ISC License - see LICENSE file for details

🙏 Acknowledgments
Built as part of a full-stack Node.js course project at Faculty of Organization and Informatics (FOI), Varaždin.

Happy ghost hunting! 👻🔦

text

Spremi ovo kao `README.md` u root direktoriju projekta! 🎯
