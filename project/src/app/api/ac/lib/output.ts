// 메세지 출력: 에어컨을 작동시킬 때/이미 꺼져 있을 때/종료할 때
//status의 기준으로 출력 상태 나누기
import { controlResult } from "./control";

export function statusMessage (result: controlResult){
    if(result["status"] == "turnOn") {
        return `${result["roomName"]}방 ${result["mode"]} ${result["power"]}세기로 작동합니다`;
    } else if(result["status"] == "alreadyOff") {
        return `${result["roomName"]}방은 이미 꺼져있습니다. 먼저 전원을 켜주세요.`;
    } else if(result["status"] == "turnOff") {
        return `${result["roomName"]}방의 에어컨을 종료합니다.`;
    }
}   