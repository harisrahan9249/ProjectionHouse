export const dynamic = 'force-dynamic';

import { prisma } from "../../../lib/prisma";

export default async function LeadsPage() {
  const leads = await prisma.contactLead.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-6">
        All Contact Leads
      </h1>

      <table className="w-full bg-white rounded-xl shadow text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((l) => (
            <tr key={l.id} className="border-t">
              <td className="p-3">{l.name}</td>
              <td>{l.email}</td>
              <td>{l.phone}</td>
              <td>{l.company}</td>
              <td>
                {new Date(l.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
