export const dynamic = 'force-dynamic';

import { prisma } from "../../lib/prisma";
import LeadsChart from "./LeadsChart";

export default async function AdminDashboard() {
  const totalLeads = await prisma.contactLead.count();
  const totalEvents = await prisma.event.count();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const leadsToday = await prisma.contactLead.count({
    where: {
      createdAt: { gte: today },
    },
  });

  // last 7 days
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

  const recent = await prisma.contactLead.findMany({
    where: {
      createdAt: { gte: sevenDaysAgo },
    },
  });

  const grouped: Record<string, number> = {};

  recent.forEach((lead) => {
    const day = lead.createdAt.toISOString().slice(0, 10);
    grouped[day] = (grouped[day] || 0) + 1;
  });

  const chartData = Object.entries(grouped).map(
    ([date, count]) => ({ date, count })
  );

  return (
    <div className="p-10 space-y-10">
      <h1 className="text-3xl font-semibold">
        Admin Dashboard
      </h1>

      {/* METRICS */}
      <div className="grid md:grid-cols-3 gap-6">
        <Stat title="Total Leads" value={totalLeads} />
        <Stat title="Leads Today" value={leadsToday} />
        <Stat title="Total Events" value={totalEvents} />
      </div>

      {/* CHART */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-medium mb-4">
          Leads Last 7 Days
        </h2>

        <LeadsChart data={chartData} />
      </div>

      {/* RECENT */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-medium mb-4">
          Recent Leads
        </h2>

        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recent.slice(0, 6).map((l) => (
              <tr key={l.id} className="border-t">
                <td className="p-2">{l.name}</td>
                <td>{l.email}</td>
                <td>{l.company}</td>
                <td>
                  {new Date(l.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <p className="text-sm text-gray-500">
        {title}
      </p>
      <p className="text-3xl font-semibold mt-2">
        {value}
      </p>
    </div>
  );
}
