// 모드는 냉방, 제습, 송풍으로 제한 값을 둔다 쿼리파라미터

export function validationMode (inputMode: string) {
    if (inputMode !== "냉방" && inputMode !== "제습" && inputMode !== "송풍") {
        throw new Error("잘못된 모드 접근입니다. 다시 입력해주세요.");
    } else {
        return inputMode;
    }
}


// 세기: 1(매우 약함) 2(약함) 3(강함) 4(매우 강함)으로 제한 값을 둔다

export function validationPower (inputPower: number) {
    if (inputPower !== 1 && inputPower !== 2 && inputPower !== 3 && inputPower !==4) {
        throw new Error("잘못된 세기 접근입니다. 다시 입력해주세요.");
    } else {
        return inputPower;
    }
}

// 킬꺼냐 끌거냐
export function validationAction (inputAction: string): "on"|"off" {
    if (inputAction !== "on" && inputAction !== "off") {
        throw new Error("킬꺼냐 끌거냐");
    } else {
        return inputAction;
    }
}