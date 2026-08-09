// 세기: 1(매우 약함) 2(약함) 3(강함) 4(매우 강함)

const powerList = [1, 2, 3, 4] as const; //허용할 값들을 배열 선언 해둔 것
type power = typeof powerList[number]; 

let currentPower: power = 3; // 세기는 3이 기본값

export function getPower(): power {
    return currentPower;
}

export function setPower(changePower: power): power {
    if(!powerList.includes(changePower)){
        throw new Error('존재하지 않는 세기입니다.')
    }
    currentPower = changePower;
    return currentPower;
}