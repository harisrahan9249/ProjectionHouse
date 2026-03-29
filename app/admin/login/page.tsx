'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {

  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      router.push("/admin");

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-[360px] space-y-4"
      >

        <h1 className="text-xl font-semibold text-center">
          Admin Login
        </h1>

        {error && (
          <div className="text-red-600 text-sm text-center">
            {error}
          </div>
        )}

        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
          className="border p-2 w-full rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="border p-2 w-full rounded"
          required
        />

        <button
          disabled={loading}
          className="bg-black text-white w-full p-2 rounded hover:bg-gray-900 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

    </div>
  );
}