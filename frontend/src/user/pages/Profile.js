import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";

const Profile = () => {
  const { username, isLoggedIn } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!isLoggedIn) {
        setError("User is not logged in.");
        setLoading(false);
        return;
      }

      try {
        // Fetch user profile by username
        const response = await fetch(
          `http://localhost:8080/api/users/${username}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const data = await response.json();
        setProfile(data.user);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username, isLoggedIn]);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="profile-container">
      <div className="user-info-container">
        <div className="profile-avatar">
          <img src="https://via.placeholder.com/150" alt={profile.username} />
        </div>
        <div className="profile-info">
          <p id="profile-username">{profile.username}</p>
          <p id="profile-email">{profile.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
