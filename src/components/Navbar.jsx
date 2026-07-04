import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={styles.nav}>
      <h3>Enterprise CRM</h3>

      <button onClick={logout} style={styles.btn}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  nav: {
    height: "60px",
    background: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    borderBottom: "1px solid #ddd",
  },
  btn: {
    padding: "8px 12px",
    border: "none",
    background: "#ef4444",
    color: "white",
    borderRadius: "5px",
  },
};

export default Navbar;