import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const res = NextResponse.json({ success: true });

    res.cookies.set("admin-auth", "true", {
      httpOnly: true,
      secure: false,
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return res;
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}