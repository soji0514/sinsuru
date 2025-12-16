import svgPaths from "../imports/svg-phwqg3s5q2";
import imgSinsuruDualsetThumb18 from "figma:asset/13ae98754e1e4c6ce21b41a6ad1aae225b716b15.png";
import imgRectangle226 from "figma:asset/2741261c4baeba5bb7bbaa737b8b03016bd4a208.png";
import imgRectangle222 from "figma:asset/a8380826c8c8f8ea0670ea8175d2b2b28ca73e8c.png";
import imgRectangle225 from "figma:asset/2ade4f16ef61a6000575c8639fa29fc08cf33d45.png";
import imgRectangle224 from "figma:asset/c0645543abad4e6c991ce6ed3166f0eb6521d011.png";
import { img1 } from "../imports/svg-9hq3t";
import { useState, useEffect } from "react";
import { getProduct, type Product } from "../utils/products";

// 기본 이미지 (fallback용)
const defaultDetailImages = [imgRectangle226, imgRectangle222, imgRectangle225, imgRectangle224];

function Component() {
  return (
    <div className="absolute inset-[2.41%_46.48%_96.03%_46.51%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.008px_0.002px] mask-size-[134.547px_40.768px]" data-name="그룹 1" style={{ maskImage: `url('${img1}')` }}>
      <div className="absolute inset-[-1.23%_-0.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 42">
          <g id="ê·¸ë£¹ 1">
            <g id="í¨ì¤ 1">
              <path d={svgPaths.p11b99504} fill="var(--fill-0, white)" />
              <path d={svgPaths.p11b99504} stroke="var(--stroke-0, white)" />
            </g>
            <path d={svgPaths.p18b36c00} fill="var(--fill-0, white)" id="í¨ì¤ 2" stroke="var(--stroke-0, white)" />
            <g id="í¨ì¤ 3">
              <path d={svgPaths.p3aa4a700} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3aa4a700} stroke="var(--stroke-0, white)" />
            </g>
            <path d={svgPaths.p324e33c0} fill="var(--fill-0, white)" id="í¨ì¤ 4" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p1f8ed100} fill="var(--fill-0, white)" id="í¨ì¤ 5" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p2d714200} fill="var(--fill-0, white)" id="í¨ì¤ 6" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p36fe780} fill="var(--fill-0, white)" id="í¨ì¤ 7" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute inset-[2.41%_46.48%_96.03%_46.51%]" data-name="Clip path group">
      <Component />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute inset-[2.41%_46.48%_96.03%_46.51%]" data-name="그룹 70817">
      <ClipPathGroup />
    </div>
  );
}

function Hold({ onNavigateHome, onNavigateToBodySoap }: { onNavigateHome?: () => void; onNavigateToBodySoap?: () => void }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-50" style={{
      transform: 'scale(var(--app-scale, 1))',
      transformOrigin: 'top left',
      width: '1920px',
      height: '2604px'
    }}>
      {/* 로고 영역 */}
      <div className="absolute inset-[2.41%_46.48%_96.03%_46.51%] cursor-pointer pointer-events-auto" onClick={onNavigateHome}>
        <Component1 />
      </div>
      
      {/* SHOP 영역 */}
      <div className="absolute flex inset-[21.32%_93.46%_76.45%_4.97%] items-center justify-center cursor-pointer pointer-events-auto" onClick={onNavigateToBodySoap}>
        <div className="flex-none h-[30px] rotate-[90deg] w-[58px] text-center" style={{ transform: 'scale(calc(1 / var(--app-scale, 1)))' }}>
          <p className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative text-nowrap text-white whitespace-pre" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>SHOP</p>
        </div>
      </div>
      
      {/* STORY 영역 */}
      <div className="absolute flex inset-[21.21%_4.95%_76.26%_93.49%] items-center justify-center cursor-pointer pointer-events-auto" onClick={onNavigateHome}>
        <div className="flex-none h-[30px] rotate-[270deg] w-[66px] text-center" style={{ transform: 'scale(calc(1 / var(--app-scale, 1)))' }}>
          <p className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative text-nowrap text-white whitespace-pre" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>STORY</p>
        </div>
      </div>
    </div>
  );
}

function Frame({ onNavigateToBodySoap }: { onNavigateToBodySoap?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-nowrap text-white tracking-[1.2px] uppercase whitespace-pre cursor-pointer hover:opacity-80 transition-opacity" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }} onClick={onNavigateToBodySoap}>Back</p>
    </div>
  );
}

function Frame2({ onNavigateToBodySoap }: { onNavigateToBodySoap?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame onNavigateToBodySoap={onNavigateToBodySoap} />
      <div className="h-0 relative shrink-0 w-[1217px]">
        <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1217 1">
            <path d="M0 0.25H1217" id="Vector 100" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1({ onNavigateToBodySoap }: { onNavigateToBodySoap?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame2 onNavigateToBodySoap={onNavigateToBodySoap} />
    </div>
  );
}

function Frame10({ onNavigateToBodySoap }: { onNavigateToBodySoap?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 onNavigateToBodySoap={onNavigateToBodySoap} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['SUIT:Medium',sans-serif] gap-[20px] items-start leading-[normal] not-italic relative shrink-0 text-[30px] text-white uppercase w-full">
      <p className="relative shrink-0 w-full">신스루 나귀우유 클렌징 괄사 솝</p>
      <p className="relative shrink-0 w-full">27,000원</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame5 />
      <div className="h-0 relative shrink-0 w-[637px]">
        <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 637 1">
            <path d="M0 0.25H637" id="Vector 104" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  const [openIngredients, setOpenIngredients] = useState(false);
  const [openUsage, setOpenUsage] = useState(false);
  const [openScent, setOpenScent] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[50px] pt-0 px-0 relative shrink-0">
      <div className="h-0 relative shrink-0 w-[637px]">
        <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 637 1">
            <path d="M0 0.25H637" id="Vector 104" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      
      {/* 성분표 */}
      <div className="w-full">
        <div 
          className="flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity w-full"
          onClick={() => setOpenIngredients(!openIngredients)}
        >
          <p className="font-['SUIT:Medium',sans-serif] leading-[normal] not-italic text-[14px] text-white uppercase">성분표</p>
          <span className="text-white text-[20px]">{openIngredients ? '−' : '+'}</span>
        </div>
        {openIngredients && (
          <div className="mt-[16px] font-['SUIT:Regular',sans-serif] text-[12px] text-white/80 leading-[1.6]">
            정제수, 글리세린, 나귀우유(10%), 코코넛오일, 팜오일, 올리브오일, 피마자오일, 수산화나트륨, 
            스테아린산, 향료, 토코페롤
          </div>
        )}
      </div>

      <div className="h-0 relative shrink-0 w-[637px]">
        <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 637 1">
            <path d="M0 0.25H637" id="Vector 104" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      
      {/* 사용방법 */}
      <div className="w-full">
        <div 
          className="flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity w-full"
          onClick={() => setOpenUsage(!openUsage)}
        >
          <p className="font-['SUIT:Medium',sans-serif] leading-[normal] not-italic text-[14px] text-white uppercase">사용방법</p>
          <span className="text-white text-[20px]">{openUsage ? '−' : '+'}</span>
        </div>
        {openUsage && (
          <div className="mt-[16px] font-['SUIT:Regular',sans-serif] text-[12px] text-white/80 leading-[1.6]">
            <p className="mb-[8px]">1. 미온수로 얼굴을 충분히 적셔줍니다.</p>
            <p className="mb-[8px]">2. 괄사 비누를 손에 문질러 풍성한 거품을 냅니다.</p>
            <p className="mb-[8px]">3. 거품을 얼굴에 펴 바르고 괄사 면으로 부드럽게 마사지합니다.</p>
            <p>4. 미온수로 깨끗이 헹구어냅니다.</p>
          </div>
        )}
      </div>

      <div className="h-0 relative shrink-0 w-[637px]">
        <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 637 1">
            <path d="M0 0.25H637" id="Vector 104" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      
      {/* 향 노트 */}
      <div className="w-full">
        <div 
          className="flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity w-full"
          onClick={() => setOpenScent(!openScent)}
        >
          <p className="font-['SUIT:Medium',sans-serif] leading-[normal] not-italic text-[14px] text-white uppercase">향 노트</p>
          <span className="text-white text-[20px]">{openScent ? '−' : '+'}</span>
        </div>
        {openScent && (
          <div className="mt-[16px] font-['SUIT:Regular',sans-serif] text-[12px] text-white/80 leading-[1.6]">
            <p className="mb-[8px]">Top: 시트러스, 베르가못</p>
            <p className="mb-[8px]">Middle: 화이트 플로럴, 재스민</p>
            <p>Base: 머스크, 앰버</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full">
      <div className="font-['SUIT:Medium','Noto_Sans_JP:Medium','Noto_Sans:Medium',sans-serif] leading-[0] relative shrink-0 text-[14px] text-nowrap text-white uppercase" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[23px] mb-0 whitespace-pre">"맑게 벗기고, 깊이 흐르는 정화의 의식."</p>
        <p className="leading-[23px] mb-0 whitespace-pre">&nbsp;</p>
        <p className="leading-[23px] mb-0 whitespace-pre">
          신수루가 책가도 한 켠에 고이 숨겨 두었다는 비밀의 미용 도구
          <br aria-hidden="true" />
          피부의 흐름을 깨우는 괄사의 형상을 본뜬 프리미엄 클렌징 솝입니.
          <br aria-hidden="true" />
          오랜 시간 사랑받아온 나귀(驢) 우유 성분을 중심으로,
          <br aria-hidden="true" />
          세안이라는 일상을 한 단계 고요한 의식으로 바꾸어 줍니다.
        </p>
        <p className="leading-[23px] mb-0 whitespace-pre">&nbsp;</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[23px]">촉촉하게 미끄러지는 크리미한 거품</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[23px]">괄사 면이 피부를 부드럽게 따라 움직이며 마사지감 강화</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[23px]">씻어낸 후에도 유분기 없이 부드럽고 촉촉한 마무리</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[23px]">아침 세안, 저녁 딥클렌징 모두 적합</span>
          </li>
        </ul>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame4 />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[637px]" data-name="info">
      <p className="font-['SUIT:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white uppercase w-full">Body - Soap</p>
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[90px] items-start relative shrink-0">
      <div className="h-[833px] relative shrink-0 w-[469px]" data-name="sinsuru_dualset_thumb1 – 8">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSinsuruDualsetThumb18} />
      </div>
      <Info />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1219px]">
      <Frame12 />
    </div>
  );
}

function PageDetail({ onNavigateToBodySoap }: { onNavigateToBodySoap?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full" data-name="page detail">
      <Frame10 onNavigateToBodySoap={onNavigateToBodySoap} />
      <Frame9 />
      <div className="h-0 relative shrink-0 w-[1217px]">
        <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1217 1">
            <path d="M0 0.25H1217" id="Vector 100" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ImageHold() {
  const [detailImages, setDetailImages] = useState<string[]>(defaultDetailImages);

  useEffect(() => {
    // 나중에 productId로 이미지를 가져올 수 있습니다
    // getProductDetailImages(productId).then(images => {
    //   if (images.length > 0) setDetailImages(images);
    // });
  }, []);

  return (
    <div className="content-stretch flex gap-[31px] items-center overflow-x-auto relative shrink-0 w-[1219px] scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent hover:scrollbar-thumb-white/50" data-name="image hold" style={{ scrollBehavior: 'smooth' }}>
      {detailImages.map((img, index) => (
        <div key={index} className="h-[900px] relative shrink-0 w-[719px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute inset-0 max-w-none object-center object-cover size-full" src={img} />
          </div>
        </div>
      ))}
    </div>
  );
}

function MainContent({ onNavigateToBodySoap }: { onNavigateToBodySoap?: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[100px] items-start left-[calc(50%+0.5px)] top-[251px] w-[1237px]" style={{
      transform: 'translateX(-50%) scale(var(--app-scale, 1))',
      transformOrigin: 'top center'
    }}>
      <PageDetail onNavigateToBodySoap={onNavigateToBodySoap} />
      <ImageHold />
    </div>
  );
}

export default function ProductDetail({ onNavigateHome, onNavigateToBodySoap }: { onNavigateHome?: () => void; onNavigateToBodySoap?: () => void }) {
  return (
    <div className="bg-black relative size-full" data-name="product-detail">
      <Hold onNavigateHome={onNavigateHome} onNavigateToBodySoap={onNavigateToBodySoap} />
      <MainContent onNavigateToBodySoap={onNavigateToBodySoap} />
    </div>
  );
}