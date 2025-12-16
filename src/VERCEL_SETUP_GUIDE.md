# 🚀 Vercel 새 프로젝트 설정 가이드

## 📋 체크리스트

- [ ] 1단계: 새 GitHub 저장소 생성 완료
- [ ] 2단계: 로컬 파일 푸시 완료
- [ ] 3단계: Vercel 임포트 완료
- [ ] 4단계: 환경 변수 설정 완료
- [ ] 5단계: 첫 배포 성공

---

## 🔧 4단계: Vercel 환경 변수 설정 (필수!)

### Configure Project 화면에서:

**Environment Variables** 섹션을 펼치고 다음 4개 변수를 **정확히** 입력:

---

### ✅ 변수 1: SUPABASE_URL

| 필드 | 값 |
|-----|-----|
| **Key** | `SUPABASE_URL` |
| **Value** | `https://your-project.supabase.co` |
| **Environment** | Production, Preview, Development 모두 체크 ✅ |

**값 찾기:**
1. https://supabase.com/dashboard 접속
2. 프로젝트 선택
3. Settings → API
4. **Project URL** 복사

---

### ✅ 변수 2: SUPABASE_ANON_KEY

| 필드 | 값 |
|-----|-----|
| **Key** | `SUPABASE_ANON_KEY` |
| **Value** | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (긴 문자열) |
| **Environment** | Production, Preview, Development 모두 체크 ✅ |

**값 찾기:**
1. Supabase Dashboard → Settings → API
2. **Project API keys** 섹션
3. **anon** **public** key 복사 (Show 버튼 클릭)

---

### ✅ 변수 3: SUPABASE_SERVICE_ROLE_KEY

| 필드 | 값 |
|-----|-----|
| **Key** | `SUPABASE_SERVICE_ROLE_KEY` |
| **Value** | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (긴 문자열, anon과 다름) |
| **Environment** | Production, Preview, Development 모두 체크 ✅ |

**값 찾기:**
1. Supabase Dashboard → Settings → API
2. **Project API keys** 섹션
3. **service_role** **secret** key 복사 (Show 버튼 클릭)

⚠️ **주의:** service_role key는 절대 프론트엔드에 노출하면 안 됩니다!

---

### ✅ 변수 4: SUPABASE_DB_URL

| 필드 | 값 |
|-----|-----|
| **Key** | `SUPABASE_DB_URL` |
| **Value** | `postgresql://postgres:[YOUR-PASSWORD]@db.xxx.supabase.co:5432/postgres` |
| **Environment** | Production, Preview, Development 모두 체크 ✅ |

**값 찾기:**
1. Supabase Dashboard → Settings → Database
2. **Connection string** 섹션
3. **URI** 탭 선택
4. 전체 URL 복사
5. `[YOUR-PASSWORD]`를 실제 데이터베이스 비밀번호로 변경

**비밀번호를 모른다면:**
- Supabase 프로젝트 생성 시 설정한 비밀번호
- 또는 Settings → Database → Reset Database Password

---

## 📊 환경 변수 입력 예시

Vercel Configure Project 화면:

```
┌─────────────────────────────────────────────────────┐
│ Environment Variables                               │
├─────────────────────────────────────────────────────┤
│                                                     │
│ Key:   SUPABASE_URL                                │
│ Value: https://abcdefgh.supabase.co                │
│ [✓] Production  [✓] Preview  [✓] Development      │
│                                                     │
│ [+ Add Another]                                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│ Key:   SUPABASE_ANON_KEY                           │
│ Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV...       │
│ [✓] Production  [✓] Preview  [✓] Development      │
│                                                     │
│ [+ Add Another]                                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│ Key:   SUPABASE_SERVICE_ROLE_KEY                   │
│ Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV...       │
│ [✓] Production  [✓] Preview  [✓] Development      │
│                                                     │
│ [+ Add Another]                                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│ Key:   SUPABASE_DB_URL                             │
│ Value: postgresql://postgres:mypass123@db...      │
│ [✓] Production  [✓] Preview  [✓] Development      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 🚀 5단계: 배포 시작

### 모든 설정 완료 후:

1. **Deploy** 버튼 클릭

2. **빌드 진행 확인:**
   - Building...
   - Deploying...

3. **예상 빌드 로그:**

```
✓ Cloning github.com/soji0514/sinsuru-shop (Branch: main)
✓ Installing dependencies...
  npm install
  added 200 packages in 15s

✓ Building application...
  npm run build
  vite build
  ✓ 150 modules transformed
  ✓ built in 3.45s

✓ Deployment ready
  https://sinsuru-shop-xxx.vercel.app
```

---

## ✅ 배포 성공 확인

### 배포 완료 후:

1. **Visit** 버튼 클릭하여 웹사이트 확인

2. **확인 사항:**
   - [ ] 페이지가 로드되는가?
   - [ ] 메인 이미지가 보이는가?
   - [ ] 메뉴가 작동하는가?
   - [ ] SHOP 페이지가 열리는가?
   - [ ] 콘솔 에러가 없는가? (F12로 확인)

---

## 🔍 문제 해결

### 🔴 빌드 실패: "npm install" 에러

**증상:**
```
npm error code E404
npm error 404 Not Found
```

**원인:** package.json이 GitHub에 없거나 손상됨

**해결:**
1. GitHub 저장소에서 package.json 확인
2. 파일이 없으면 로컬에서 다시 푸시:
   ```bash
   git add package.json
   git commit -m "Add package.json"
   git push origin main
   ```
3. Vercel에서 Redeploy

---

### 🔴 빌드 실패: "vite build" 에러

**증상:**
```
Error: Cannot find module 'vite-plugin-figma-assets'
```

**원인:** vite-plugin-figma-assets.ts가 GitHub에 없음

**해결:**
1. 로컬에서 파일 확인:
   ```bash
   ls -la vite-plugin-figma-assets.ts
   ```
2. 있으면 푸시:
   ```bash
   git add vite-plugin-figma-assets.ts
   git commit -m "Add Figma assets plugin"
   git push origin main
   ```
3. Vercel에서 Redeploy

---

### 🔴 런타임 에러: Supabase 연결 실패

**증상:**
- 페이지는 로드되지만 데이터가 안 보임
- 콘솔: "Invalid API key" 또는 "401 Unauthorized"

**원인:** 환경 변수가 잘못 설정됨

**해결:**
1. Vercel Dashboard → 프로젝트 Settings
2. Environment Variables 확인
3. 값이 정확한지, 공백이 없는지 확인
4. 수정 후 Redeploy (자동 재배포 안 됨!)

---

### 🔴 런타임 에러: "figma:asset not found"

**증상:**
- 이미지가 깨져서 보임
- 콘솔: "Failed to load resource: figma:asset/xxx"

**원인:** Figma assets가 placeholder로 처리됨 (정상)

**해결:**
- vite-plugin-figma-assets.ts가 placeholder 이미지를 반환
- 실제 이미지는 Supabase Storage에서 로드
- Storage에 이미지 업로드 필요

---

## 📤 배포 완료 후 보고

다음을 확인하고 알려주세요:

### ✅ GitHub 푸시:
- [ ] 새 저장소 생성 완료
- [ ] 모든 파일 푸시 완료
- [ ] GitHub에서 파일 확인 완료

### ✅ Vercel 설정:
- [ ] 프로젝트 임포트 완료
- [ ] Framework: Vite 선택됨
- [ ] 4개 환경 변수 추가 완료

### ✅ 배포 결과:
- [ ] 빌드 성공
- [ ] 웹사이트 접속 가능
- [ ] 배포 URL: _______________

### 🔴 문제 발생 시:
- [ ] 빌드 로그 복사
- [ ] 에러 메시지 복사
- [ ] 스크린샷 첨부

---

## 🎯 예상 소요 시간

- GitHub 저장소 생성: **2분**
- 로컬 푸시: **3분**
- Vercel 임포트 및 설정: **5분**
- 첫 배포: **3-5분**

**총 소요 시간: 약 15분**

---

## 💡 추가 팁

### Vercel 프로젝트 설정 최적화:

**Settings → General:**
- Node.js Version: `20.x` (권장)
- Build & Development Settings:
  - Framework Preset: `Vite`
  - Build Command: `npm run build`
  - Output Directory: `dist`

**Settings → Domains:**
- 커스텀 도메인 연결 가능
- `sinsuru.com` → Vercel 프로젝트

**Settings → Git:**
- Production Branch: `main`
- Auto Deploy: 활성화 (기본값)

---

## 🚀 성공 시 다음 단계

1. **Supabase Storage 설정:**
   - 제품 이미지 업로드
   - 버킷 구조: `sinsuru/products/{category}/...`

2. **KV Store 데이터 추가:**
   - 제품 정보 입력
   - 카테고리 데이터 입력

3. **도메인 연결:**
   - 커스텀 도메인 설정
   - SSL 인증서 자동 발급

4. **성능 최적화:**
   - 이미지 최적화
   - 코드 스플리팅 확인
