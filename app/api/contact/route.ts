import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { ok: false, message: "Not implemented" },
    { status: 501 },
  );
}
