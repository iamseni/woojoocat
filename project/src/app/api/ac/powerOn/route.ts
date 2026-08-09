import { NextResponse } from "next/server";

import { getStatus, setStatus } from "../lib/acStatus";

export async function GET() {
    if (getStatus()) {
        return NextResponse.json({ message: "에어컨은 이미 켜져 있습니다." }, { status: 200 });
    }

    setStatus(true);
    return NextResponse.json({ message: "에어컨 전원을 켰습니다." }, { status: 200 });
}