import { useEffect, useState } from "react";
import API from "../services/api";

const Leads = () => {
  const [leads, setLeads] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  // Fetch Leads
  const fetchLeads = async () => {
    try {
      const res = await API.get("/leads");
      setLeads(res.data.leads);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add Lead
  const addLead = async (e) => {
    e.preventDefault();

    try {
      await API.post("/leads", form);
      alert("Lead Added");

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
      });

      fetchLeads();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  // Update Lead Status
  const updateStatus = async (id, status) => {
    try {
      await API.put(`/leads/${id}/status`, { status });
      fetchLeads();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div>

      <h2>Leads</h2>

      {/* FORM */}
      <form onSubmit={addLead} style={styles.form}>

        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />

        <button type="submit">Add Lead</button>

      </form>

      {/* TABLE */}
      <table style={styles.table}>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((l) => (
            <tr key={l._id}>

              <td>{l.name}</td>
              <td>{l.email}</td>
              <td>{l.phone}</td>
              <td>{l.company}</td>

              <td>

                <select
                  value={l.status}
                  onChange={(e) =>
                    updateStatus(l._id, e.target.value)
                  }
                >

                  <option>New</option>
                  <option>Contacted</option>
                  <option>Qualified</option>
                  <option>Won</option>
                  <option>Lost</option>

                </select>

              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

const styles = {
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    background: "white",
    padding: "10px",
  },
};

export default Leads;