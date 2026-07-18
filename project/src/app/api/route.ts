//인사 라우터: get형식으로 받기
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ status: "Success" }, { status: 200 });
}
