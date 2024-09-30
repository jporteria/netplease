# [NetPlease](https://netplease.onrender.com/) (in progress)

[NetPlease](https://netplease.onrender.com/) is a movie rating website designed to allow users to discover, rate, and review movies. Built using MERN stack, it leverages a RESTful API and implements secure authentication with JWT and hashed passwords. The project integrates movie data from [TMDb](https://www.themoviedb.org/). Please note that the website is still under development and does not yet have a responsive design.

# Features

- [X] **Explore Movies:** Browse the four catalog of movies, or use the search function to find specific titles.
- [X] **Sign Up or Log In:** Create a free account or log in with your existing credentials to access the full features of NetPlease.
- [ ] **Rate and Review:** Share your opinions and insights by rating movies and leaving detailed reviews. Help other users make informed decisions and contribute to the collective knowledge base of the FilmFusion community.

# Installation

**1. Clone the repository:**
```bash
https://github.com/jporteria/netplease.git
```

**2. Install npm packages for both frontend and backend:**
```
npm install
```
**3. Update the environment variables in the .env file with your own/preferred credentials.**

**4. Run the application in separate terminals:**
  
- Terminal 1: Navigate to the frontend folder and start the development server:
```
cd netplease/frontend
npm run dev
```
- Terminal 2: Navigate to the backend folder and run the backend server with nodemon:
```
cd netplease/backend
nodemon app
```

