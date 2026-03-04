export const dynamic = "force-dynamic";

import { prisma } from "../../../lib/prisma";
import { headers } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing fields" }),
        { status: 400 }
      );
    }

    const h = headers();

    await prisma.contactLead.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        message,
        ip: h.get("x-forwarded-for") ?? undefined,
      },
    });

    await prisma.event.create({
      data: {
        name: "contact_submit",
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}
