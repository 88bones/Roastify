const express = require("express");
const querystring = require("querystring");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

const frontend_uri = process.env.FRONTEND_URI;

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
router.get("/", (req, res) => {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email user-top-read";

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
router.get("/callback", async (req, res) => {
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

module.exports = router;
