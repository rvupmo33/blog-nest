import React, { useState, useEffect } from "react";
import "./Profile.css";



const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Mock user data - Replace with actual API call
    const fetchProfile = async () => {
      const userData = {
        name: "John Doe",
        email: "johndoe@example.com",
        bio: "Software Engineer with a passion for learning.",
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
      <h1>Profile</h1>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
    </div>
  );
};

export default Profile;
