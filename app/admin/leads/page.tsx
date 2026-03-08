"use client";

import { useEffect, useState } from "react";

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);

  const loadLeads = async () => {
    const res = await fetch("/api/admin/leads");
    const data = await res.json();
    setLeads(data);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const deleteLead = async (id: number) => {
    if (!confirm("Delete this lead?")) return;

    await fetch("/api/admin/leads", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    loadLeads();
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-semibold mb-8">
        Leads Management
      </h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Message</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead: any) => (
              <tr key={lead.id} className="border-t">

                <td className="p-3">{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.company}</td>
                <td className="max-w-[300px] truncate">
                  {lead.message}
                </td>

                <td>
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>

                <td>
                  <button
                    onClick={() => deleteLead(lead.id)}
                    className="text-red-600 text-sm"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}