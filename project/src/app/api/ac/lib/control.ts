// 각 방별로 에어컨 상태 판정
import { type roomAc,roomsAc } from '../lib/rooms'
import {  validationMode, validationPower } from '../lib/validation'

// 각 방 상태를 사용자가 파라미터로 입력 받을거니 함수 생성
// 에어컨 킴/ 이미꺼짐/ 종료에 대한 타입 지정 : 셋중에 하나만 만족해도 됨
export type controlResult =
   { status: "turnOn"; roomName: string; mode: string; power: number }
  | { status: "alreadyOff"; roomName: string }
  | { status: "turnOff"; roomName: string };

// 6개의 방만 입력 되도록 검증(?) + 끌껀지, 킬껀지에 대한 인수 action 추가!
export function roomStatus (roomName : string, action: "on"|"off",mode: string, power: number): controlResult{
    if(!(roomName in roomsAc)) {
        throw new Error ('존재하지 않는 방입니다. 다시 입력해주세요');
    } 

    // 상태객체 room: JSON 구조의 데이터 (검증부분)
    const room = roomsAc[roomName as keyof roomAc];

    // 에어컨 킬게~
    if(action === "on") {
        // query 파라미터로 입력할 모드/ 세기 검증
        const validMode = validationMode(mode);
        const validPower = validationPower(power);

        room["acStatus"] = true;
        room["mode"] = validMode;
        room["power"] = validPower;

        return {"status": "turnOn", roomName: roomName, mode: validMode, power: validPower};
    } else {
    // 에어컨 끌게 ~
        if(!room["acStatus"]){
            return {"status": "alreadyOff", roomName: roomName} //이미 꺼져있잖니
        } else{
            room["acStatus"] = false;
            return {"status": "turnOff", roomName: roomName} //알았어 종료해~
        }
    }
}

