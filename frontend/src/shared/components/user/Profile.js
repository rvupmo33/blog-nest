import React, { useState, useEffect } from "react";
import "./Profile.css";
import UserBlogs from "../../../blogs/pages/UserBlogs";

const Profile = ({ blogs }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Mock user data - Replace with actual API call
    const fetchProfile = async () => {
      const userData = {
        username: "devwizard",
        email: "devwizard@example.com",
        pfp: "https://i.pinimg.com/736x/f7/d8/f2/f7d8f2df2827bd6f8e0e95b12434ceab.jpg",
      };
      setProfile(userData);
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-container">
      <div className="user-info-container">
        <div className="profile-avatar">
          <img src={profile.pfp} alt={profile.username} />
        </div>
        <div className="profile-info">
          <p id="profile-username">{profile.username}</p>
          <p id="profile-email">{profile.email}</p>
        </div>
      </div>
      <UserBlogs blogs={blogs} />
    </div>
  );
};

export default Profile;
