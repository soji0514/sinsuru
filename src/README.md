# Sinsuru E-commerce Website

피그마 디자인을 그대로 반응형 웹사이트로 구현한 신스루 이커머스 프로젝트입니다.

## 🎯 주요 특징

- **원본 디자인 완벽 재현**: 1920x2604 비율을 유지하는 반응형 레이아웃
- **Supabase 백엔드**: KV Store를 활용한 제품 데이터 관리
- **이미지 관리**: Supabase Storage로 제품 이미지 체계적 관리
- **카테고리별 페이지**: BODY/SOAP 카테고리 및 제품 상세 페이지 구현

## 🚀 빠른 시작

### 사전 요구사항

- Node.js 18+ 
- npm 또는 yarn
- Git

### 1. 프로젝트 클론

```bash
git clone https://github.com/soji0514/sinsuru2.git
cd sinsuru2
npm install
```

### 2. 환경 변수 설정

Vercel 대시보드 또는 로컬 `.env.local` 파일에 다음 환경 변수를 설정하세요:

```bash
# Supabase 설정
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
SUPABASE_DB_URL=your_supabase_db_url
```

⚠️ **중요**: 현재 프로젝트 ID와 키가 코드에 하드코딩되어 있습니다. 배포 전에 `/utils/supabase/info.tsx` 파일을 환경 변수를 사용하도록 수정해야 합니다.

### 3. 로컬 실행

```bash
npm run dev
```

## 📁 프로젝트 구조

```
/
├── App.tsx                      # 메인 앱 컴포넌트 (라우팅)
├── components/
│   ├── AdminPanel.tsx           # 관리자 패널 (제품 데이터 초기화)
│   ├── RollingImages.tsx        # 제품 상세 롤링 이미지
│   └── figma/                   # Figma 임포트 컴포넌트
├── pages/
│   ├── BodySoap.tsx            # BODY/SOAP 카테고리 페이지
│   └── ProductDetail.tsx        # 제품 상세 페이지
├── imports/                     # Figma 임포트 에셋
├── utils/
│   ├── products.ts             # 제품 API 함수
│   ├── initProducts.ts         # 제품 데이터 초기화
│   └── supabase/               # Supabase 클라이언트
├── supabase/
│   └── functions/server/       # Supabase Edge Functions
│       ├── index.tsx           # 메인 서버
│       └── kv_store.tsx        # KV Store 유틸리티
└── styles/
    └── globals.css             # 글로벌 스타일
```

## 🗄️ Supabase 설정

### Storage 구조

```
sinsuru/
└── products/
    ├── body/
    │   └── soap/
    │       ├── donkey-milk-soap/
    │       │   ├── thumbnail.png
    │       │   └── details/
    │       │       ├── 1.png
    │       │       ├── 2.png
    │       │       └── ...
    │       └── ...
    └── gift/
        └── set/
            └── ...
```

### 제품 데이터 초기화

1. 앱 실행 후 우측 하단 **관리자 패널** 열기
2. "1. 제품 데이터 초기화" 버튼 클릭
3. 8개 제품 데이터가 KV store에 저장됨

### 이미지 업로드

자세한 내용은 [`UPLOAD_GUIDE.md`](./UPLOAD_GUIDE.md) 참조

## 🌐 배포 (Vercel)

### 1. GitHub에 푸시

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Vercel 배포

1. [Vercel](https://vercel.com) 접속 및 로그인
2. "New Project" 클릭
3. GitHub 저장소 연결
4. 프로젝트 임포트
5. **Environment Variables** 섹션에서 환경 변수 추가:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `SUPABASE_DB_URL`
6. "Deploy" 클릭

### 3. Supabase Edge Functions 배포

```bash
# Supabase CLI 설치
npm install -g supabase

# 로그인
supabase login

# 프로젝트 연결
supabase link --project-ref your-project-ref

# Edge Functions 배포
supabase functions deploy make-server-cb50e858
```

## 🔧 환경 변수 보안 강화 (권장)

배포 전에 다음 파일을 수정하여 하드코딩된 키를 제거하세요:

### `/utils/supabase/info.tsx` 수정

```typescript
export const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID || "";
export const publicAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
```

### Vercel 환경 변수 추가

- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_ANON_KEY`

## 📱 반응형 디자인

- 기본 비율: **1920x2604**
- 가로 기준 자동 스케일링
- `--app-scale` CSS 변수로 전역 스케일 관리

## 🎨 주요 페이지

1. **홈 페이지** (`Frame60.tsx`)
   - SHOP 메뉴를 통해 BODY/SOAP 카테고리로 이동

2. **BODY/SOAP 카테고리** (`BodySoap.tsx`)
   - 8개 제품 그리드 레이아웃
   - Supabase Storage 썸네일 연동
   - Fallback 이미지 지원

3. **제품 상세 페이지** (`ProductDetail.tsx`)
   - 롤링 이미지 갤러리
   - 제품 정보 표시
   - 구매하기 버튼

## 🛠️ 기술 스택

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Supabase (KV Store, Storage, Edge Functions)
- **Deployment**: Vercel
- **Build Tool**: Vite

## 📖 추가 문서

- [Supabase 설정 가이드](./SUPABASE_SETUP.md)
- [이미지 업로드 가이드](./UPLOAD_GUIDE.md)

## 🐛 문제 해결

### 이미지가 표시되지 않는 경우

1. Supabase Storage 경로 확인
2. 파일명 정확히 확인 (`thumbnail.png`, `1.png` 등)
3. 브라우저 콘솔에서 에러 확인
4. 브라우저 새로고침

### API 에러

1. 환경 변수 설정 확인
2. Supabase Edge Functions 배포 확인
3. CORS 설정 확인

## 📝 라이선스

이 프로젝트는 Figma 디자인을 기반으로 제작되었습니다.

## 👥 기여

문의사항이나 버그 리포트는 Issues를 통해 제출해주세요.