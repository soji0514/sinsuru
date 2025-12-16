# ⚡ 빠른 시작 가이드

이 문서는 프로젝트를 **최대한 빠르게** GitHub와 Vercel에 배포하는 방법을 안내합니다.

---

## ⚠️ Vercel 배포 에러가 발생했나요?

**npm 404 에러**가 발생했다면 [`VERCEL_DEPLOY_FIX.md`](./VERCEL_DEPLOY_FIX.md)를 먼저 확인하세요!

모든 필요한 설정 파일(`package.json`, `vite.config.ts` 등)이 이미 생성되어 있습니다.

---

## 🎯 3단계로 배포하기

### 1️⃣ GitHub에 푸시 (5분)

```bash
# 프로젝트 폴더에서 실행
git init
git add .
git commit -m "Initial commit: Sinsuru e-commerce with build config"
git branch -M main

# GitHub에서 새 저장소 생성 후 (https://github.com/new)
git remote add origin https://github.com/YOUR_USERNAME/sinsuru-ecommerce.git
git push -u origin main
```

**✅ 확인**: GitHub에서 다음 파일들이 있는지 확인
- `package.json`
- `vite.config.ts`
- `index.html`
- `main.tsx`

### 2️⃣ Vercel 배포 (3분)

1. https://vercel.com 접속 및 GitHub 로그인
2. "New Project" → 방금 만든 저장소 선택
3. **Framework Preset**: Vite (자동 감지)
4. **Environment Variables** 추가:
   ```
   SUPABASE_URL = https://ucoghecfsnphdguexbiv.supabase.co
   SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjb2doZWNmc25waGRndWV4Yml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NjI2NDQsImV4cCI6MjA3MjQzODY0NH0.sSCxnOQvmAxROvvAKf3AP9pJTPtVQQ48YDFweXwjslI
   ```
5. **SERVICE_ROLE_KEY**와 **DB_URL**은 [Supabase 대시보드](https://supabase.com/dashboard)에서 확인:
   - Settings → API → service_role
   - Settings → Database → Connection string (URI)
6. "Deploy" 클릭

**🎉 배포 성공!** 약 1-2분 후 사이트 URL이 생성됩니다.

### 3️⃣ Edge Functions 배포 (5분)

```bash
# Supabase CLI 설치
npm install -g supabase

# 로그인
supabase login

# 프로젝트 연결
supabase link --project-ref ucoghecfsnphdguexbiv

# Edge Functions 배포
supabase functions deploy make-server-cb50e858

# 환경 변수 설정
supabase secrets set SUPABASE_URL=https://ucoghecfsnphdguexbiv.supabase.co
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

---

## ✅ 배포 완료!

Vercel에서 제공한 URL로 접속하여 사이트를 확인하세요.

**다음 단계**:
1. 우측 하단 "관리자 패널" 클릭 → "제품 데이터 초기화" 실행
2. SHOP → BODY → SOAP 메뉴로 이동하여 제품 목록 확인
3. 제품 이미지 업로드 (선택사항) - [`UPLOAD_GUIDE.md`](./UPLOAD_GUIDE.md) 참조

---

## 📚 자세한 가이드

- **전체 배포 가이드**: [`DEPLOYMENT.md`](./DEPLOYMENT.md)
- **이미지 업로드**: [`UPLOAD_GUIDE.md`](./UPLOAD_GUIDE.md)
- **보안 강화**: [`SECURITY.md`](./SECURITY.md)
- **프로젝트 구조**: [`README.md`](./README.md)

---

## 🐛 문제 발생 시

1. **페이지가 비어있어요**: Vercel 환경 변수 확인
2. **API 에러**: Edge Functions 배포 확인
3. **이미지가 안 보여요**: 정상입니다 (이미지는 별도 업로드 필요)

자세한 문제 해결은 [`DEPLOYMENT.md`](./DEPLOYMENT.md#-문제-해결) 참조