# Pick Your Puck

### Slogan
...or Search for Kittens, Because It's More Fun.

### Introduction
"Pick Your Puck" is made for hockey lovers to save all of their absolutely not boring pucks in one place. If you are feeling adventurous, you can search for all different colors such as Black Hole black, asphalt black, or coffee without milk black.

### Prerequisites
Before running the app, ensure you have Node.js installed on your computer. You will also need API keys for Google Custom Search and Auth0. Add these to a `.env` file following the instructions below.

Create a `.env` file in the frontend folder and add your API keys:

```
VITE_AUTH0_CLIENT_ID_KEY = <Your_Auth0_Client_ID>
VITE_AUTH0_DOMAIN_KEY = <Your_Auth0_Domain>

VITE_GOOGLE_SEARCH_ID_KEY = <Your_Google_Search_ID>
VITE_GOOGLE_APIKEY = <Your_Google_API_Key>
```

**Note:** Replace `<Your_Auth0_Client_ID>`, `<Your_Auth0_Domain>`, `<Your_Google_Search_ID>`, and `<Your_Google_API_Key>` with your actual keys.

Ensure your `.env` file is listed in your `.gitignore` to keep your secrets safe.

### Installation
Follow these steps to get started:

1. **Clone the repository:**
   ```bash
   git clone <repo_url>
   ```

2. **Start in the root directory of your cloned project.**

3. **Install dependencies for both frontend and backend:**

   - For the backend:
     ```bash
     cd backend
     npm install
     ```

   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

### Start
To start the backend and frontend, open two terminal windows and run the following commands:

- **Backend:**
  ```bash
  cd backend
  node server.js
  ```

- **Frontend:**
  ```bash
  cd frontend
  npm run dev
  ```

The app will now be accessible in your web browser. 
