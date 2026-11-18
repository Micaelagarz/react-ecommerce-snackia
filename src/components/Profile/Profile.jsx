import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Error while logging out", error);
    }
  };

  return (
    <div className="profileContainer">
      <h2>My profile</h2>
      <p>Hello again, {user?.email}!</p>
      <p>Role: {user?.role === "admin" ? "Administrator" : "User"}</p>

      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Profile;
