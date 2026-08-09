//에어컨 상태 제어 모듈

let acPowerStatus: boolean = false; //에어컨 꺼져있는 상태가 디폴트값

export function getStatus():boolean {
    return acPowerStatus;
}

export function setStatus(changeStatus: boolean): boolean {
    acPowerStatus = changeStatus;
    return acPowerStatus;
} 