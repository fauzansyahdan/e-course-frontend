import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Nanti bagian ini kita ganti pakai API ke backend (axios.post)
    console.log("Register data:", { name, email, password });
    alert("Pendaftaran berhasil! (simulasi)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Daftar Akun Baru
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Masukkan nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Daftar Sekarang
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
