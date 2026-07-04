import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get("/dashboard");
      setData(res.data);
    };

    fetchData();
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Dashboard</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Customers</h3>
          <p>{data.totalCustomers}</p>
        </div>

        <div style={styles.card}>
          <h3>Leads</h3>
          <p>{data.totalLeads}</p>
        </div>

        <div style={styles.card}>
          <h3>New Leads</h3>
          <p>{data.leadStatus.newLeads}</p>
        </div>

        <div style={styles.card}>
          <h3>Won</h3>
          <p>{data.leadStatus.won}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
    marginTop: "20px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};

export default Dashboard;