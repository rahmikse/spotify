import React, { useEffect, useState } from "react";
import Login from "./Login/Login";
import "./App.css";
import {getTokenFromUrl} from "./Login/Spotify"
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Players/Player";
import { useDataLayerValue } from "./Context/DataLayer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavbarMenu from "./Navbar/NavbarMenu";


const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      console.log("[token]", token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: playlist,
        });
      });
    }
  }, []);

  return (
    <div className="App">
       <Router>
      <>
        <NavbarMenu/>
      </>
      

      <Switch>
      <Route path="/login" exact>
          <Login/>
        </Route>
      <Route path="/">
          <Player/>
        </Route>
      
      
       
      </Switch>
    
  </Router>
    </div>
  );
}

export default App;