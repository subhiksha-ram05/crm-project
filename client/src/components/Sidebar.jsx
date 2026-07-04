import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaUserTie } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={{ color: "white" }}>CRM</h2>

      <Link style={styles.link} to="/dashboard">
        <FaHome /> Dashboard
      </Link>

      <Link style={styles.link} to="/customers">
        <FaUsers /> Customers
      </Link>

      <Link style={styles.link} to="/leads">
        <FaUserTie /> Leads
      </Link>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#1f2937",
    padding: "20px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
};

export default Sidebar;