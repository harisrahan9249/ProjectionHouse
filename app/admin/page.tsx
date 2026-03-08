export const dynamic = "force-dynamic";

import { db } from "../../lib/mysql";
import LeadsChart from "./LeadsChart";
import LogoutButton from "./LogoutButton";
import { RowDataPacket } from "mysql2";

import {
  LayoutDashboard,
  Users,
  BarChart3,
  Search,
} from "lucide-react";

type CountRow = RowDataPacket & {
  count: number;
};

export default async function AdminDashboard() {

  const [totalLeadsRows] = await db.query<CountRow[]>(
    "SELECT COUNT(*) as count FROM contactLead"
  );
  const totalLeads = totalLeadsRows[0].count;

  const [totalEventsRows] = await db.query<CountRow[]>(
    "SELECT COUNT(*) as count FROM event"
  );
  const totalEvents = totalEventsRows[0].count;

  const [leadsTodayRows] = await db.query<CountRow[]>(
    `SELECT COUNT(*) as count
     FROM contactLead
     WHERE DATE(createdAt) = CURDATE()`
  );
  const leadsToday = leadsTodayRows[0].count;

  const [recent] = await db.query<RowDataPacket[]>(
    `SELECT *
     FROM contactLead
     ORDER BY createdAt DESC
     LIMIT 6`
  );

  const [chartRows] = await db.query<RowDataPacket[]>(
    `SELECT DATE(createdAt) as date, COUNT(*) as count
     FROM contactLead
     WHERE createdAt >= DATE_SUB(CURDATE(), INTERVAL 6 DAY)
     GROUP BY DATE(createdAt)
     ORDER BY date`
  );

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r flex flex-col">

        <div className="p-6 text-xl font-semibold">
          Projection House Admin
        </div>

        <nav className="flex-1 px-4 space-y-2">

          <a
            href="/admin"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </a>

          <a
            href="/admin/leads"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
          >
            <Users size={18} />
            Leads
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
          >
            <BarChart3 size={18} />
            Analytics
          </a>

        </nav>

        <div className="p-6 border-t">
          <LogoutButton />
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 space-y-10">

        {/* TOP BAR */}
        <div className="flex justify-between items-center">

          <h1 className="text-3xl font-semibold">
            Dashboard
          </h1>

          <div className="relative">

            <Search
              size={18}
              className="absolute left-3 top-2.5 text-gray-400"
            />

            <input
              placeholder="Search leads..."
              className="pl-10 pr-4 py-2 border rounded-md text-sm"
            />

          </div>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6">

          <Stat
            title="Total Leads"
            value={totalLeads}
            color="from-green-500 to-emerald-600"
          />

          <Stat
            title="Leads Today"
            value={leadsToday}
            color="from-blue-500 to-indigo-600"
          />

          <Stat
            title="Total Events"
            value={totalEvents}
            color="from-purple-500 to-pink-600"
          />

        </div>

        {/* CHART */}
        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="font-medium mb-4">
            Leads Last 7 Days
          </h2>

          <div className="h-[300px]">
            <LeadsChart data={chartRows} />
          </div>

        </div>

        {/* RECENT LEADS */}
        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="font-medium mb-6">
            Recent Leads
          </h2>

          <table className="w-full text-sm">

            <thead className="text-left border-b">
              <tr>
                <th className="pb-3">Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              {recent.map((l: any) => (
                <tr key={l.id} className="border-b hover:bg-gray-50">

                  <td className="py-3">{l.name}</td>
                  <td>{l.email}</td>
                  <td>{l.company}</td>

                  <td>
                    {new Date(l.createdAt).toLocaleDateString()}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </main>
    </div>
  );
}

function Stat({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div
      className={`bg-gradient-to-r ${color} text-white p-6 rounded-xl shadow`}
    >

      <p className="text-sm opacity-80">
        {title}
      </p>

      <p className="text-3xl font-semibold mt-2">
        {value}
      </p>

    </div>
  );
}