//인사 라우터: get형식으로 받기
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const target = searchParams.get("url_target");
  return NextResponse.json({ status: target + "님 안녕하세요" }, { status: 200 })
}
