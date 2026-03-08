import { db } from "../../../lib/mysql";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await db.query(
      `INSERT INTO contactLead (name, email, phone, company, message)
       VALUES (?, ?, ?, ?, ?)`,
      [name, email, phone, company, message]
    );

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}