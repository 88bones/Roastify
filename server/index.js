const express = require("express");
const cors = require("cors");
const querystring = require("querystring");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI; // http://127.0.0.1:3001/callback
const frontend_uri = process.env.FRONTEND_URI; // http://localhost:5173

function generateRandomString(length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

// Step 1: Login route
app.get("/login", (req, res) => {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email";

  const authUrl =
    "https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id,
      scope,
      redirect_uri,
      state,
    });

  res.redirect(authUrl);
});

// Step 2: Callback route
app.get("/callback", async (req, res) => {
  const code = req.query.code || null;

  if (!code) return res.status(400).send("No code returned from Spotify");

  try {
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      querystring.stringify({
        code,
        redirect_uri,
        grant_type: "authorization_code",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(client_id + ":" + client_secret).toString("base64"),
        },
      }
    );

    const { access_token } = tokenResponse.data;

    // Redirect to frontend with token
    res.redirect(`${frontend_uri}/dashboard?access_token=${access_token}`);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send("Error exchanging code for token");
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Backend running on port", process.env.PORT || 3001);
});
