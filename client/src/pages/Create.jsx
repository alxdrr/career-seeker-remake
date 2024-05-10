import React, { useState } from "react";

const Create = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [umur, setUmur] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { nama, alamat, umur };
    console.log(data);
    fetch("http://localhost:8081/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create user");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        // Clear form fields after successful submission
        setNama("");
        setAlamat("");
        setUmur("");
      })
      .catch((error) => {
        setError("Failed to create user. Please try again later.");
        console.error(error);
      });
  };

  return (
    <div>
      <p>Hello World !</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form action="" method="post" onSubmit={handleSubmit}>
        <label>
          Nama : <input type="text" name="nama" value={nama} onChange={(event) => setNama(event.target.value)} className="border border-violet-950" />
        </label>
        <label>
          Alamat : <input type="text" name="alamat" value={alamat} onChange={(event) => setAlamat(event.target.value)} className="border border-violet-950" />
        </label>
        <label>
          Umur : <input type="number" name="umur" value={umur} onChange={(event) => setUmur(event.target.value)} className="border border-violet-950" />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
