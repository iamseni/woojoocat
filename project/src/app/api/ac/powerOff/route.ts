import { NextResponse } from "next/server";

import { getStatus, setStatus } from "../lib/acStatus";

export async function GET() {
    if (!getStatus()) {
        return NextResponse.json({ message: "에어컨은 이미 꺼져 있습니다." }, { status: 200 });
    }

    setStatus(false);
    return NextResponse.json({ message: "에어컨 전원을 껐습니다." }, { status: 200 });
}