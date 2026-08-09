import { type NextRequest, NextResponse } from "next/server";

import { roomStatus } from "../lib/control";
import { statusMessage } from "../lib/output";
import { validationAction } from "../lib/validation";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ room: string }> }
) {
  const searchParams = request.nextUrl.searchParams;
  const { room } = await params;
  const action = searchParams.get("action");
  const mode = searchParams.get("mode");
  const power = searchParams.get("power");

  if (!action || !mode || !power) {
    return NextResponse.json(
      { message: "다시 네가 뭘 빠뜨렸는지 확인해봐" },
      { status: 400 }
    );
  }

  const validAction = validationAction(action);
  const result = roomStatus(room, validAction, mode, Number(power));
  const message = statusMessage(result);

  return NextResponse.json({ message });
}