//냉방/제습/송풍 모드 

const modes = ["냉방", "제습", "송풍"] as const; //허용할 값들의 배열 선언 해둔 것
type mode = typeof modes[number]; // 0:냉방, 1:제습, 2: 송풍 * mode 자체가 타입임! mode = string = int

let currentMode: mode = "냉방"; //에어컨 모드는 냉방이 기본값

export function getMode(): mode{
    return currentMode;
}

export function setMode(changeMode: mode): mode{
    if(!modes.includes(changeMode)){
        throw new Error('잘못된 모드값 입니다');
    }
    currentMode = changeMode; //호출된 모드 반영하기
    return currentMode;
}