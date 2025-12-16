# 🔧 Vercel 배포 에러 해결 가이드

## ❌ 발생한 에러

```
npm error 404 Not Found - GET https://registry.npmjs.org/@jsr%2fsupabase__supabase-js
npm error code E404
Error: Command "npm install" exited with 1
```

## 🎯 원인

Figma Make 환경에서는 Deno 스타일의 import를 사용하지만, Vercel은 Node.js 환경입니다.
- Figma Make: `import { ... } from "npm:hono"`, `figma:asset/*`
- Vercel/Node: `import { ... } from "hono"`, 일반 파일 경로

## ✅ 해결 방법

다음 파일들이 새로 생성되어 문제가 해결되었습니다:

### 1. 필수 설정 파일

- ✅ **`package.json`** - npm 패키지 및 스크립트 정의
- ✅ **`vite.config.ts`** - Vite 빌드 설정
- ✅ **`tsconfig.json`** - TypeScript 설정
- ✅ **`index.html`** - HTML 엔트리 포인트
- ✅ **`main.tsx`** - React 엔트리 포인트
- ✅ **`postcss.config.js`** - PostCSS 및 Tailwind 설정
- ✅ **`.npmrc`** - npm 설정

### 2. 특수 플러그인

- ✅ **`vite-plugin-figma-assets.ts`** - Figma Make의 특수 import 처리
  - `figma:asset/*` 임포트 처리
  - `package@version` 형식 정규화

## 🚀 이제 배포하기

### 단계 1: GitHub에 모든 파일 푸시

```bash
# 모든 새 파일 추가
git add .

# 커밋
git commit -m "Add build configuration for Vercel deployment"

# 푸시
git push origin main
```

### 단계 2: Vercel 자동 재배포

GitHub에 푸시하면 Vercel이 자동으로 재배포를 시작합니다.

**또는 수동 재배포**:
1. Vercel 대시보드 접속
2. 프로젝트 선택
3. "Deployments" 탭
4. 최신 배포 옆 "..." 클릭 → "Redeploy" 선택

### 단계 3: 배포 확인

1. Vercel 대시보드에서 배포 로그 확인
2. 성공 메시지 확인
3. 배포 URL 클릭하여 사이트 접속

## 📋 배포 체크리스트

- [x] `package.json` 생성 완료
- [x] `vite.config.ts` 생성 완료
- [x] `tsconfig.json` 생성 완료
- [x] `index.html` 생성 완료
- [x] `main.tsx` 생성 완료
- [x] `.gitignore` 생성 완료
- [x] Figma assets 플러그인 생성 완료
- [ ] GitHub에 푸시
- [ ] Vercel 재배포
- [ ] 사이트 접속 확인
- [ ] 기능 테스트

## 🔍 배포 후 확인 사항

### 1. 홈 페이지 로드 확인
- URL: `https://your-project.vercel.app`
- 기대: 메인 페이지가 정상적으로 표시됨

### 2. 제품 목록 확인
- SHOP → BODY → SOAP 메뉴 클릭
- 기대: 8개 제품이 그리드로 표시됨

### 3. 제품 상세 페이지 확인
- 제품 카드 클릭
- 기대: 상세 페이지로 이동, 롤링 이미지 표시

### 4. API 연결 확인
- 브라우저 콘솔 (F12) 열기
- Network 탭에서 `/make-server-cb50e858/products` 요청 확인
- 기대: 200 OK 응답

## 🐛 추가 문제 해결

### 문제 1: 여전히 빌드 실패

**증상**: `npm install`에서 계속 실패

**해결**:
```bash
# 로컬에서 테스트
npm install
npm run build

# 에러가 있다면 package.json 확인
```

### 문제 2: 페이지가 비어있음

**증상**: 배포 성공했지만 흰 화면

**원인**: 환경 변수 미설정

**해결**:
1. Vercel → Settings → Environment Variables
2. 다음 변수 추가:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `SUPABASE_DB_URL`
3. Redeploy

### 문제 3: 이미지가 안 보임

**증상**: 제품 이미지가 플레이스홀더로 표시됨

**원인**: 정상입니다! `figma:asset/*` 이미지는 플레이스홀더로 대체됩니다.

**해결**:
- Supabase Storage에 실제 이미지 업로드 (선택사항)
- [`UPLOAD_GUIDE.md`](./UPLOAD_GUIDE.md) 참조

### 문제 4: API 404 에러

**증상**: 제품 데이터를 가져올 수 없음

**원인**: Edge Functions 미배포

**해결**:
```bash
npm install -g supabase
supabase login
supabase link --project-ref ucoghecfsnphdguexbiv
supabase functions deploy make-server-cb50e858
```

## 📦 생성된 파일 요약

| 파일 | 용도 |
|------|------|
| `package.json` | npm 패키지 및 스크립트 정의 |
| `vite.config.ts` | Vite 빌드 도구 설정 |
| `tsconfig.json` | TypeScript 컴파일러 설정 |
| `tsconfig.node.json` | Node.js 환경용 TS 설정 |
| `index.html` | HTML 엔트리 포인트 |
| `main.tsx` | React 애플리케이션 엔트리 |
| `postcss.config.js` | PostCSS 및 Tailwind 설정 |
| `vite-plugin-figma-assets.ts` | Figma 특수 import 처리 플러그인 |
| `.npmrc` | npm 설정 (peer deps) |
| `.gitignore` | Git 제외 파일 목록 |
| `vercel.json` | Vercel 배포 설정 |

## 🎉 성공!

이제 프로젝트가 Vercel에 성공적으로 배포될 것입니다!

**다음 단계**:
1. GitHub에 푸시
2. Vercel 자동 배포 대기
3. 배포 URL 확인
4. 기능 테스트
5. 제품 데이터 초기화 (관리자 패널)
6. 이미지 업로드 (선택사항)

---

## 💡 로컬 개발

로컬에서 개발하려면:

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:5173 접속
```

## 📞 추가 지원

- [전체 배포 가이드](./DEPLOYMENT.md)
- [프로젝트 구조](./PROJECT_STRUCTURE.md)
- [보안 가이드](./SECURITY.md)
