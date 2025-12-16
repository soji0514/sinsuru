// BODY 타이틀 텍스트 컴포넌트
function BodyTitle() {
  return (
    <p className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-center text-nowrap text-white tracking-[1.5px] whitespace-pre" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>BODY</p>
  );
}

// BODY 타이틀 래퍼
function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <BodyTitle />
    </div>
  );
}

// BODY 하위 항목 리스트
function Frame10({ onCategoryClick }: { onCategoryClick?: (category: string, subcategory: string) => void }) {
  return (
    <div className="content-stretch flex flex-col font-['PP_Fragment:Serif_Light',sans-serif] gap-[15px] items-start leading-[normal] not-italic relative shrink-0 text-center text-white tracking-[1.14px] uppercase w-full" style={{ fontSize: 'clamp(8px, 0.83vw, 16px)' }}>
      <p className="relative shrink-0 w-full cursor-pointer hover:text-[orangered] transition-colors" onClick={() => onCategoryClick?.('BODY', 'Lotion')}>Lotion</p>
      <p className="relative shrink-0 w-full cursor-pointer hover:text-[orangered] transition-colors" onClick={() => onCategoryClick?.('BODY', 'Wash')}>Wash</p>
      <p className="relative shrink-0 w-full cursor-pointer hover:text-[orangered] transition-colors" onClick={() => onCategoryClick?.('BODY', 'soap')}>soap</p>
      <p className="relative shrink-0 w-full cursor-pointer hover:text-[orangered] transition-colors" onClick={() => onCategoryClick?.('BODY', 'oil')}>oil</p>
    </div>
  );
}

// BODY 하위 항목 래퍼
function Frame13({ onCategoryClick }: { onCategoryClick?: (category: string, subcategory: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame10 onCategoryClick={onCategoryClick} />
    </div>
  );
}

// BODY 카테고리 전체
function Frame18({ onCategoryClick }: { onCategoryClick?: (category: string, subcategory: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center relative shrink-0 w-[101px]">
      <Frame11 />
      <Frame13 onCategoryClick={onCategoryClick} />
    </div>
  );
}

// SKIN 타이틀 텍스트 컴포넌트
function SkinTitle() {
  return (
    <p className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-center text-nowrap text-white tracking-[1.5px] whitespace-pre" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>SKIN</p>
  );
}

// SKIN 타이틀 래퍼
function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <SkinTitle />
    </div>
  );
}

// SKIN 하위 항목 리스트
function Frame8() {
  return (
    <div className="content-stretch flex flex-col font-['PP_Fragment:Serif_Light',sans-serif] gap-[15px] items-start leading-[normal] not-italic relative shrink-0 text-center text-white tracking-[1.14px] uppercase w-full" style={{ fontSize: 'clamp(8px, 0.83vw, 16px)' }}>
      <p className="relative shrink-0 w-full">cleasing</p>
      <p className="relative shrink-0 w-full">serum</p>
      <p className="relative shrink-0 w-full">cream</p>
      <p className="relative shrink-0 w-full">blam</p>
    </div>
  );
}

// SKIN 하위 항목 래퍼
function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

// SKIN 카테고리 전체
function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center relative shrink-0 w-[108px]">
      <Frame9 />
      <Frame1 />
    </div>
  );
}

// BATH 타이틀 텍스트 컴포넌트
function BathTitle() {
  return (
    <p className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-center text-nowrap text-white tracking-[1.5px] whitespace-pre" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>BATH</p>
  );
}

// BATH 타이틀 래퍼
function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <BathTitle />
    </div>
  );
}

// BATH 하위 항목 리스트
function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['PP_Fragment:Serif_Light',sans-serif] gap-[15px] items-start leading-[normal] not-italic relative shrink-0 text-center text-white tracking-[1.14px] uppercase w-full" style={{ fontSize: 'clamp(8px, 0.83vw, 16px)' }}>
      <p className="relative shrink-0 w-full">tools</p>
      <p className="relative shrink-0 w-full">fabric</p>
      <p className="relative shrink-0 w-full">towel</p>
    </div>
  );
}

// BATH 하위 항목 래퍼
function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

// BATH 카테고리 전체
function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center relative shrink-0 w-[93px]">
      <Frame7 />
      <Frame2 />
    </div>
  );
}

// GIFT 타이틀 텍스트 컴포넌트
function GiftTitle() {
  return (
    <p className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-center text-nowrap text-white tracking-[1.5px] whitespace-pre" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>GIFT</p>
  );
}

// GIFT 타이틀 래퍼
function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <GiftTitle />
    </div>
  );
}

// GIFT 하위 항목 리스트
function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['PP_Fragment:Serif_Light',sans-serif] gap-[15px] items-start leading-[normal] not-italic relative shrink-0 text-center text-white tracking-[1.14px] uppercase w-full" style={{ fontSize: 'clamp(8px, 0.83vw, 16px)' }}>
      <p className="relative shrink-0 w-full">set</p>
      <p className="relative shrink-0 w-full">travel</p>
      <p className="relative shrink-0 w-full">seasonal</p>
      <p className="relative shrink-0 w-full">collab</p>
    </div>
  );
}

// GIFT 하위 항목 래퍼
function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

// GIFT 카테고리 전체
function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center relative shrink-0 w-[112px]">
      <Frame5 />
      <Frame3 />
    </div>
  );
}

// 카테고리 그룹
function Category({ onCategoryClick }: { onCategoryClick?: (category: string, subcategory: string) => void }) {
  return (
    <div className="absolute content-stretch flex gap-[16.25px] items-start left-[24.5px] top-[15px]" data-name="category">
      <Frame18 onCategoryClick={onCategoryClick} />
      <Frame16 />
      <Frame14 />
      <Frame17 />
    </div>
  );
}

// 메인 익스포트
export default function Category1({ onCategoryClick }: { onCategoryClick?: (category: string, subcategory: string) => void }) {
  return (
    <div className="relative size-full" data-name="category">
      <Category onCategoryClick={onCategoryClick} />
    </div>
  );
}