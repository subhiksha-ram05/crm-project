import { useEffect, useState } from "react";
import API from "../services/api";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
  });

  // Fetch Customers
  const fetchCustomers = async () => {
    try {
      const res = await API.get("/customers");
      setCustomers(res.data.customers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add Customer
  const addCustomer = async (e) => {
    e.preventDefault();

    try {
      await API.post("/customers", form);
      alert("Customer Added");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
      });

      fetchCustomers();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  // Delete Customer
  const deleteCustomer = async (id) => {
    try {
      await API.delete(`/customers/${id}`);
      alert("Deleted");
      fetchCustomers();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div>

      <h2>Customers</h2>

      {/* FORM */}
      <form onSubmit={addCustomer} style={styles.form}>

        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />

        <button type="submit">Add Customer</button>

      </form>

      {/* TABLE */}
      <table style={styles.table}>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.company}</td>
              <td>
                <button onClick={() => deleteCustomer(c._id)}>
                  Delete
                </button>
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
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "10px",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    background: "white",
    padding: "10px",
  },
};

export default Customers;