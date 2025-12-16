# 🔧 Vercel 환경 변수 체크리스트

## 필수 환경 변수

Vercel 대시보드에서 다음이 설정되어 있는지 확인하세요:

### 접속 경로:
1. https://vercel.com/dashboard
2. `sinsuru2` 프로젝트 클릭
3. **Settings** → **Environment Variables**

---

## ✅ 필수 변수 목록

### Supabase 변수 (4개)

| 변수 이름 | 설명 | 값 예시 |
|----------|------|---------|
| `SUPABASE_URL` | Supabase 프로젝트 URL | `https://xxxxx.supabase.co` |
| `SUPABASE_ANON_KEY` | Public Anon Key | `eyJhbGciOiJIUzI1...` |
| `SUPABASE_SERVICE_ROLE_KEY` | Service Role Key | `eyJhbGciOiJIUzI1...` |
| `SUPABASE_DB_URL` | Database URL | `postgresql://...` |

**중요:**
- 모든 변수는 **Production, Preview, Development** 모두 체크되어야 합니다
- 값 뒤에 공백이 없는지 확인하세요

---

## 🔍 Supabase 키 확인 방법

### Supabase 대시보드에서:

1. https://supabase.com/dashboard 접속
2. 프로젝트 선택
3. **Settings** → **API**

여기서 다음을 찾을 수 있습니다:
- ✅ Project URL → `SUPABASE_URL`
- ✅ anon/public key → `SUPABASE_ANON_KEY`
- ✅ service_role key → `SUPABASE_SERVICE_ROLE_KEY`

### Database URL:

**Settings** → **Database** → **Connection string**
- URI 형식 선택
- `postgresql://postgres:[YOUR-PASSWORD]@...`

---

## ⚠️ 흔한 실수

### 1. 환경 변수 이름 오타
```
❌ SUPABASE_API_URL
✅ SUPABASE_URL

❌ SUPABASE_KEY
✅ SUPABASE_ANON_KEY
```

### 2. 값에 공백 포함
```
❌ "eyJhbGciOiJIUzI1... "  (끝에 공백)
✅ "eyJhbGciOiJIUzI1..."
```

### 3. 환경 선택 누락
- ✅ Production 체크
- ✅ Preview 체크  
- ✅ Development 체크

모두 체크되어야 합니다!

---

## 🔧 환경 변수 추가/수정 후

환경 변수를 추가하거나 수정한 후:

1. **저장** 버튼 클릭
2. **재배포 필수!** (자동 재배포 안 됨)
3. Deployments → 최신 배포 → **Redeploy** 클릭

---

## 📤 확인 완료 후 보고

다음을 확인하고 알려주세요:

- [ ] 4개의 환경 변수가 모두 설정되어 있나요?
- [ ] 각 변수마다 Production, Preview, Development 모두 체크되어 있나요?
- [ ] 값에 오타나 공백이 없나요?
- [ ] 환경 변수 설정 후 재배포했나요?
