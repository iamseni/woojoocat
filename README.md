# woojoocat

개인 프로젝트 woojoocat입니다. 2026년 7월 중순부터 8월 9일까지는 프로젝트를 잠시 멈추고, 에어컨 기능 구현 스터디를 통해 라우팅, 입력 검증, 상태 분기, 응답 메시지 설계를 정리했습니다. 이후 다시 본 프로젝트로 재개하는 흐름으로 정리하고 있습니다.

실제 애플리케이션 코드는 [project/](project/) 디렉터리에 있습니다. 스터디 배경, 설계 흐름, API 예시 등 자세한 내용은 [project/README.md](project/README.md)를 참고해 주세요.

## 실행 방법

```bash
cd project
pnpm install
pnpm run dev
```

개발 서버를 실행한 뒤 `http://localhost:3000/api/ac/[룸이름]?쿼리파라미터`에서 확인할 수 있습니다.

## 사용 기술

- Next.js 16
- React 19
- TypeScript
