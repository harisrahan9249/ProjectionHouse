"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <button
      onClick={logout}
      className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-black"
    >
      Logout
    </button>
  );
}