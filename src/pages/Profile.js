import React from "react";
import "./CSS/Profile.css"
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div class="profile_text">
      THIS IS THE PROFILE PAGE FOR {username}!
      <button
        onClick={() => {
          navigate("/About");
        }}
      >
        {" "}
        Change to about page
      </button>
    </div>
  );
}

export default Profile;