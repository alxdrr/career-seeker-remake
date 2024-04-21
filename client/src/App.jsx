import React, { useEffect, useState } from "react";

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

  return (
    <div style={{ margin: "auto" }}>
      <p>hey</p>
      <p>{console.log(data)}</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.ID}</td>
              <td>{d.nama}</td>
              <td>{d.alamat}</td>
              <td>{d.umur}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
