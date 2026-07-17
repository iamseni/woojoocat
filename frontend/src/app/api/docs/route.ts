//API라우트 생성(라우트 핸들러 구성하기)
import { NextResponse } from "next/server";
import { getApiDocs } from "@/lib/swagger";

export async function GET() {
    const spec = getApiDocs();
    return NextResponse.json(spec);
}