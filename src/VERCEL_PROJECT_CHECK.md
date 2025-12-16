# 🔧 Vercel 프로젝트 설정 전체 체크

## 1️⃣ Git 연동 확인

### Settings → Git

**확인 사항:**

| 항목 | 올바른 값 | 현재 값 확인 |
|-----|----------|------------|
| Repository | `soji0514/sinsuru2` | [ ] |
| Production Branch | `main` | [ ] |
| Connected Git Branch | `main` | [ ] |

**만약 다른 값이라면:**
1. **Disconnect** 클릭
2. GitHub 재연결
3. `soji0514/sinsuru2` 선택
4. `main` 브랜치 선택

---

## 2️⃣ Build & Development Settings

### Settings → General → Build & Development Settings

**확인 사항:**

| 설정 | 올바른 값 | 현재 값 확인 |
|-----|----------|------------|
| Framework Preset | `Vite` | [ ] |
| Build Command | `npm run build` | [ ] |
| Output Directory | `dist` | [ ] |
| Install Command | `npm install` | [ ] |

**만약 다른 값이라면:**
- **Edit** 클릭하여 수정
- 저장 후 재배포 필요

---

## 3️⃣ Root Directory

### Settings → General → Root Directory

**올바른 설정:**
- Root Directory: `.` (루트) 또는 비어있음

**만약 다른 폴더가 설정되어 있다면:**
- 이것이 문제의 원인일 수 있습니다!
- 빈 값 또는 `.`으로 변경

---

## 4️⃣ Node.js Version

### Settings → General → Node.js Version

**권장 버전:**
- `20.x` (최신 LTS)

**만약 다른 버전이라면:**
- `20.x`로 변경 (Vite 6 호환성)

---

## 5️⃣ 최근 배포 상태 확인

### Deployments 탭

**최신 배포 클릭 후 확인:**

1. **Building 탭:**
   ```
   Cloning github.com/soji0514/sinsuru2 (Branch: main, Commit: ?????)
   ```
   - 커밋 해시가 `0c81eb9` 또는 그 이후인지 확인!

2. **만약 여전히 `6bc2ffc`라면:**
   - Git 연동이 제대로 안 된 것
   - 위의 "1️⃣ Git 연동 확인" 다시 확인

---

## 6️⃣ 캐시 문제 해결

### Settings → General → Clear Cache

**캐시 문제가 의심된다면:**

1. 페이지 하단의 **"Clear Cache"** 버튼 클릭
2. 확인 팝업에서 **"Clear"** 클릭
3. Deployments → 최신 배포 → **Redeploy** (without cache)

---

## 7️⃣ 빌드 로그 분석

### 최신 배포 → Building 탭

**체크 포인트:**

```bash
# 1. Clone 단계
✅ Cloning github.com/soji0514/sinsuru2 (Branch: main, Commit: 0c81eb9)
❌ Cloning github.com/soji0514/sinsuru2 (Branch: main, Commit: 6bc2ffc)

# 2. Install 단계
✅ npm install
   ✅ Installing dependencies...
   ✅ added XXX packages
❌ npm error code E404
❌ Not Found - GET https://registry.npmjs.org/@jsr%2f...

# 3. Build 단계
✅ npm run build
   ✅ vite build
   ✅ ✓ built in XXXms
❌ Error: ...
```

---

## 🔍 문제 진단 플로우차트

```
커밋이 6bc2ffc인가?
├─ YES → Git 연동 문제
│   ├─ Git 재연결
│   ├─ 강제 재배포
│   └─ 캐시 클리어
│
└─ NO (0c81eb9) → npm install 실패?
    ├─ YES → package.json 문제
    │   └─ 확인: @supabase/supabase-js 버전
    │
    └─ NO → Build 실패?
        └─ 로그 확인 필요
```

---

## 📤 보고 양식

다음을 확인하고 알려주세요:

### Git 설정:
- [ ] Repository: `soji0514/sinsuru2`
- [ ] Branch: `main`
- [ ] 최근 배포 커밋: `_______`

### Build 설정:
- [ ] Framework: `Vite`
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Root Directory: `.` 또는 비어있음

### 환경 변수:
- [ ] 4개 Supabase 변수 모두 설정됨

### 최근 배포 로그:
- [ ] 첫 줄 커밋 해시: `_______`
- [ ] npm install 성공/실패: `_______`
- [ ] 에러 메시지 (있다면): `_______`

---

## 🚀 다음 단계

모든 설정이 올바르다면:
1. **Deployments** → 최신 배포
2. 오른쪽 위 **⋮** → **Redeploy**
3. **Use existing Build Cache** 체크 해제
4. **Redeploy** 클릭

5분 내에 배포 완료되어야 합니다!
