'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-[360px]"
      >
        <h1 className="text-xl font-semibold mb-6">
          Admin Login
        </h1>

        <input
          placeholder="Username"
          className="border p-2 w-full mb-4"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="bg-black text-white w-full p-2 rounded">
          Login
        </button>

      </form>

    </div>
  );
}