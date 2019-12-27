import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  useEffect(() => {
    getTokenFromParams();
  }, []);

  const getHashParams = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  };

  const getTokenFromParams = spotifyApi => {
    const params = getHashParams();
    if (params.access_token) {
      window.localStorage.setItem("refreshToken", params.refresh_token);
      window.localStorage.setItem("accessToken", params.access_token);
      //clear tokens from url
      window.history.pushState({}, "", "/welcome");
    }
    return params.access_token;
  };

  return (
    <div>
      <h1>WelcomePage</h1>
      <Link to="/browse">Get started</Link>
    </div>
  );
};

export default WelcomePage;
