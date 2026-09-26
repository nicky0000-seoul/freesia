# Freesia Deployment 1-Minute Checklist

## 1) Before Push (Local)

- [ ] `npm run build` 성공
- [ ] `git status`가 의도한 변경만 포함
- [ ] 민감정보(API 키, 토큰, 비밀번호) 커밋 대상 아님
- [ ] 히스토리 메뉴(`/history`)와 홈(`/home`) 라우팅 확인

## 2) Push & Trigger

- [ ] `main` 브랜치에 push 완료
- [ ] Railway/Vercel에 새 배포가 생성됨

## 3) Railway Variable Quick Check

- [ ] 서비스의 Variables 화면에서 `CLAUDE_API_KEY`가 실제로 보임
- [ ] 중복 키(`VITE_CLAUDE_API_KEY`)는 운영에서 제거
- [ ] 저장 후 Redeploy 실행

## 4) Runtime Log Check (Railway)

- [ ] `[config] Anthropic key source: CLAUDE_API_KEY` 확인
- [ ] `authentication_error` / `invalid x-api-key` 없음
- [ ] 서버 시작 로그에 포트 바인딩 정상

## 5) Smoke Test (Production)

- [ ] 메인 페이지 로딩 성공
- [ ] 로그인/회원가입 라우트 진입 가능
- [ ] 감정 메시지 1회 전송 시 답변 수신
- [ ] 히스토리 탭 진입 및 목록 표시

## 6) If Same Error Repeats

- [ ] Railway 서비스가 맞는지 재확인(프로젝트/서비스 혼동 방지)
- [ ] Variables가 "No Environment Variables"가 아닌지 확인
- [ ] 키 삭제 후 재생성(복붙 후 앞뒤 공백/따옴표 제거)
- [ ] Redeploy 후 최신 배포 로그 기준으로 판단

## 7) Security Hygiene

- [ ] 노출된 키는 즉시 폐기(revoke)
- [ ] 새 키로 로컬/배포 환경 모두 교체
- [ ] 스크린샷/채팅에 키 원문 공유 금지
