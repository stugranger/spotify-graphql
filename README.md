# Spotify GraphQL

A GraphQL interface for the [Spotify Web API](https://developer.spotify.com/documentation/web-api/).

## Getting Started

### Obtaining Client Credentials

1. __Set up user account__ - If you don't already have a Spotify user account (Free or Premium), go to [Spotify](https://www.spotify.com) and sign up.
2. __Connect Spotify Developer__ - Go to the [Dashboard](https://developer.spotify.com/dashboard/) page at the Spotify Developer website and connect Spotify Developer to your user account by logging in. You'll need to accept the Spotify Developer Terms to proceed.
3. __Register your application__ - From the Dashboard, click the "Create an App" button and enter the details.
4. __View client ID and secret__ - Click on your newly created app from the Dashboard to view your client ID and secret.

### Adding Client Credentials to the Project

1. __Create `.env` file__ - Create a copy of the `.env.template` file at the root of the project and name it `.env`.
2. __Add client ID and secret__ - Add your client ID and secret to `.env` by setting `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` respectively.
