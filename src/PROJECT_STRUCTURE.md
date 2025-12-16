# 📁 프로젝트 구조

## 전체 파일 트리

```
sinsuru-ecommerce/
├── 📄 App.tsx                          # 메인 앱 (라우팅 & 반응형 레이아웃)
│
├── 📁 components/                       # React 컴포넌트
│   ├── AdminPanel.tsx                  # 관리자 패널 (제품 데이터 초기화)
│   ├── RollingImages.tsx               # 제품 상세 롤링 이미지 컴포넌트
│   ├── 📁 figma/                       # Figma 관련 컴포넌트
│   │   └── ImageWithFallback.tsx       # Fallback 이미지 컴포넌트
│   └── 📁 ui/                          # UI 라이브러리 컴포넌트
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── dialog.tsx
│       └── ... (기타 UI 컴포넌트)
│
├── 📁 pages/                           # 페이지 컴포넌트
│   ├── BodySoap.tsx                    # BODY/SOAP 카테고리 페이지
│   └── ProductDetail.tsx               # 제품 상세 페이지
│
├── 📁 imports/                         # Figma 임포트 에셋
│   ├── Frame60.tsx                     # 홈 페이지 (메인 프레임)
│   ├── Category.tsx                    # 카테고리 컴포넌트
│   ├── Product.tsx                     # 제품 컴포넌트
│   ├── ProductDetail-25-1239.tsx       # 제품 상세 컴포넌트
│   └── svg-*.tsx / svg-*.ts            # SVG 에셋
│
├── 📁 utils/                           # 유틸리티 함수
│   ├── products.ts                     # 제품 API 함수 (CRUD)
│   ├── initProducts.ts                 # 제품 데이터 초기화 함수
│   └── 📁 supabase/                    # Supabase 관련
│       ├── client.ts                   # Supabase 클라이언트
│       └── info.tsx                    # Supabase 프로젝트 정보
│
├── 📁 supabase/                        # Supabase Edge Functions
│   └── 📁 functions/
│       └── 📁 server/
│           ├── index.tsx               # 메인 서버 (Hono)
│           └── kv_store.tsx            # KV Store 유틸리티 (보호됨)
│
├── 📁 styles/                          # 스타일시트
│   └── globals.css                     # 글로벌 CSS (Tailwind 포함)
│
├── 📁 guidelines/                      # 가이드라인
│   └── Guidelines.md
│
├── 📄 README.md                        # 프로젝트 소개
├── 📄 QUICK_START.md                   # 빠른 시작 가이드
├── 📄 DEPLOYMENT.md                    # 배포 가이드
├── 📄 SUPABASE_SETUP.md                # Supabase 설정 가이드
├── 📄 UPLOAD_GUIDE.md                  # 이미지 업로드 가이드
├── 📄 SECURITY.md                      # 보안 가이드
├── 📄 PROJECT_STRUCTURE.md             # 프로젝트 구조 (이 문서)
│
├── 📄 .gitignore                       # Git 제외 파일
├── 📄 .env.example                     # 환경 변수 예시
├── 📄 vercel.json                      # Vercel 배포 설정
└── 📄 Attributions.md                  # 라이선스 및 출처

```

---

## 주요 파일 상세 설명

### 🎯 핵심 파일

| 파일 | 역할 | 중요도 |
|------|------|--------|
| `/App.tsx` | 메인 앱 컴포넌트, 라우팅 & 반응형 레이아웃 관리 | ⭐⭐⭐⭐⭐ |
| `/pages/BodySoap.tsx` | BODY/SOAP 카테고리 페이지, 제품 목록 표시 | ⭐⭐⭐⭐ |
| `/pages/ProductDetail.tsx` | 제품 상세 페이지, 롤링 이미지 표시 | ⭐⭐⭐⭐ |
| `/utils/products.ts` | 제품 API 함수 (CRUD 작업) | ⭐⭐⭐⭐⭐ |
| `/supabase/functions/server/index.tsx` | 백엔드 서버 (Edge Functions) | ⭐⭐⭐⭐⭐ |

### 📦 컴포넌트

| 파일 | 역할 |
|------|------|
| `/components/AdminPanel.tsx` | 관리자 기능 (제품 데이터 초기화) |
| `/components/RollingImages.tsx` | 제품 상세 페이지 이미지 갤러리 |
| `/components/figma/ImageWithFallback.tsx` | 이미지 로드 실패 시 fallback 처리 |
| `/components/ui/*` | 재사용 가능한 UI 컴포넌트 라이브러리 |

### 🖼️ Figma 임포트

| 파일 | 역할 |
|------|------|
| `/imports/Frame60.tsx` | 홈 페이지 메인 프레임 |
| `/imports/Category.tsx` | 카테고리 컴포넌트 |
| `/imports/Product.tsx` | 제품 카드 컴포넌트 |
| `/imports/ProductDetail-25-1239.tsx` | 제품 상세 컴포넌트 |
| `/imports/svg-*.tsx` | SVG 벡터 에셋 |

### 🔧 유틸리티

| 파일 | 역할 |
|------|------|
| `/utils/products.ts` | 제품 CRUD API 함수 |
| `/utils/initProducts.ts` | 제품 데이터 초기화 스크립트 |
| `/utils/supabase/client.ts` | Supabase 클라이언트 생성 |
| `/utils/supabase/info.tsx` | Supabase 프로젝트 정보 (⚠️ 보안 주의) |

### 🌐 백엔드

| 파일 | 역할 |
|------|------|
| `/supabase/functions/server/index.tsx` | Hono 웹 서버, API 엔드포인트 정의 |
| `/supabase/functions/server/kv_store.tsx` | KV Store 유틸리티 (보호된 파일) |

### 🎨 스타일

| 파일 | 역할 |
|------|------|
| `/styles/globals.css` | 글로벌 CSS, Tailwind 설정, 타이포그래피 |

### 📚 문서

| 파일 | 내용 |
|------|------|
| `/README.md` | 프로젝트 소개 및 개요 |
| `/QUICK_START.md` | 빠른 배포 가이드 (3단계) |
| `/DEPLOYMENT.md` | 상세 배포 가이드 (GitHub + Vercel) |
| `/SUPABASE_SETUP.md` | Supabase 설정 및 연동 가이드 |
| `/UPLOAD_GUIDE.md` | 제품 이미지 업로드 가이드 |
| `/SECURITY.md` | 보안 강화 가이드 |
| `/PROJECT_STRUCTURE.md` | 프로젝트 구조 설명 (이 문서) |

### ⚙️ 설정 파일

| 파일 | 역할 |
|------|------|
| `.gitignore` | Git에서 제외할 파일 목록 |
| `.env.example` | 환경 변수 예시 |
| `vercel.json` | Vercel 배포 설정 |

---

## 데이터 흐름

### 제품 목록 페이지 (BodySoap.tsx)

```
BodySoap.tsx
  ↓ useEffect
  ↓ getAllProducts()
  ↓
utils/products.ts
  ↓ fetch API
  ↓
Supabase Edge Functions
  (/make-server-cb50e858/products)
  ↓
kv_store.tsx (getByPrefix)
  ↓
Supabase KV Store
  (kv_store_cb50e858 테이블)
```

### 제품 상세 페이지 (ProductDetail.tsx)

```
ProductDetail.tsx
  ↓ useEffect
  ↓ getProduct(id)
  ↓
utils/products.ts
  ↓ fetch API
  ↓
Supabase Edge Functions
  (/make-server-cb50e858/products/:id)
  ↓
kv_store.tsx (get)
  ↓
Supabase KV Store
```

### 이미지 로딩

```
BodySoap.tsx / ProductDetail.tsx
  ↓ thumbnailUrl / detailImageUrls
  ↓
Supabase Storage
  (sinsuru 버킷)
  ↓ Signed URL
  ↓
이미지 표시
  ↓ 실패 시
Fallback 이미지 (Figma asset)
```

---

## API 엔드포인트

### GET /make-server-cb50e858/products
- **설명**: 모든 제품 목록 조회
- **응답**: `Product[]`
- **사용처**: `BodySoap.tsx`

### GET /make-server-cb50e858/products/:id
- **설명**: 특정 제품 상세 정보 조회
- **응답**: `Product`
- **사용처**: `ProductDetail.tsx`

### POST /make-server-cb50e858/products
- **설명**: 제품 생성/업데이트
- **요청**: `Product` 객체
- **응답**: 성공 메시지
- **사용처**: `initProducts.ts`

### DELETE /make-server-cb50e858/products/:id
- **설명**: 제품 삭제
- **응답**: 성공 메시지
- **사용처**: (향후 구현)

---

## Supabase 구조

### KV Store 테이블
- **테이블명**: `kv_store_cb50e858`
- **스키마**:
  - `key` (TEXT): 제품 키 (예: `product:donkey-milk-soap`)
  - `value` (JSONB): 제품 데이터 (JSON)
  - `created_at` (TIMESTAMP)
  - `updated_at` (TIMESTAMP)

### Storage 버킷
- **버킷명**: `sinsuru`
- **구조**:
  ```
  products/
    {category}/
      {subCategory}/
        {productId}/
          thumbnail.png
          details/
            1.png
            2.png
            ...
  ```

---

## 반응형 시스템

### App.tsx의 aspectRatio 시스템

```typescript
// 1920x2604 비율 유지
<div style={{ aspectRatio: '1920/2604' }}>
  ...
</div>

// CSS 변수로 스케일 관리
const scale = containerWidth / 1920;
document.documentElement.style.setProperty('--app-scale', scale.toString());
```

### 전역 스케일 적용

필요한 경우 CSS에서 `var(--app-scale)` 사용 가능:

```css
.my-element {
  font-size: calc(16px * var(--app-scale));
}
```

---

## 🔒 보호된 파일

다음 파일들은 **절대 수정하지 마세요**:

1. `/supabase/functions/server/kv_store.tsx` - KV Store 유틸리티
2. `/components/figma/ImageWithFallback.tsx` - Figma 시스템 컴포넌트

---

## 🚀 다음 단계

1. **제품 데이터 추가**: `/utils/initProducts.ts` 수정
2. **새 카테고리 페이지**: `/pages/` 폴더에 추가
3. **결제 시스템**: Stripe/Toss Payments 연동
4. **장바구니 기능**: 상태 관리 추가 (Zustand/Redux)
5. **사용자 인증**: Supabase Auth 연동

---

## 📞 지원

문제가 발생하면 다음 문서를 참조하세요:
- 배포 문제: [`DEPLOYMENT.md`](./DEPLOYMENT.md)
- 이미지 문제: [`UPLOAD_GUIDE.md`](./UPLOAD_GUIDE.md)
- 보안 문제: [`SECURITY.md`](./SECURITY.md)
