import { useEffect, useState } from "react";
import Button from "../components/Button";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8081/user");
      const jsonData = await response.json();
      setData(jsonData.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:8081/user/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete user");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Proses respons jika perlu
        // Menerapkan pembaruan UI jika perlu
      })
      .catch((error) => {
        console.error(error);
        // Menangani kesalahan jika perlu
      });
  };

  return (
    <div style={{ margin: "auto" }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.ID}</td>
              <td>{d.nama}</td>
              <td>{d.alamat}</td>
              <td>{d.umur}</td>
              <button onClick={() => handleDeleteUser(d.ID)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
      <Button variant={"primary"} type={"clickable"} link={"/create"} title={"Create New"}></Button>
    </div>
  );
};

export default App;
