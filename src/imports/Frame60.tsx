import svgPaths from "./svg-015df6opfn";
import img5 from "figma:asset/a2f2ce9508bf6399208af18e225e89d3739dfea6.png";
import img6 from "figma:asset/135508302f03e633db9ffd48e3bd5d6e5f773558.png";
import imgShinsuruModel3315 from "figma:asset/fe32f511d06d8bafe18f4fe761bdad2a687e99c2.png";
import imgShinsuruModel6546Re3 from "figma:asset/13726aa3a2fc44d7630fd6b5bb2289001e4c2d11.png";
import { img4, img1 } from "./svg-cl5a7";
import { RollingImages } from "../components/RollingImages";
import { useState } from "react";
import Category from "./Category";

function Component2() {
  return (
    <div className="absolute bottom-[52.53%] left-0 right-0 top-0" data-name="사각형 20714">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 1240">
        <g id="ì¬ê°í 20714">
          <path d="M1920 0H0V1240H1920V0Z" fill="url(#paint0_linear_1_89)" id="Vector" />
          <path d={svgPaths.pde626f0} id="Vector_2" stroke="var(--stroke-0, #707070)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_89" x1="960" x2="960" y1="0" y2="1240">
            <stop stopColor="#B27B43" />
            <stop offset="1" stopColor="#FF4500" />
          </linearGradient>
        </defs>
      </svg>
      {/* 롤링 이미지 영역 */}
      <div className="absolute inset-0">
        <RollingImages />
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-[52.53%] contents left-0 right-0 top-0" data-name="Mask group">
    </div>
  );
}

function ThroughYourScene() {
  return (
    <div
      className="absolute contents inset-[41.14%_85.99%_56.18%_5.21%]"
      data-name="Through your 
scene"
    >
      <p className="absolute inset-[41.14%_85.99%_57.71%_5.21%]">{`THROUGH YOUR `}</p>
      <p className="absolute inset-[42.67%_91.3%_56.18%_5.21%]">SCENE</p>
    </div>
  );
}

function YourSinsuru() {
  return (
    <div
      className="absolute contents inset-[41.16%_5.51%_56.16%_89.56%]"
      data-name="Your
sinsuru"
    >
      <p className="absolute inset-[41.16%_5.51%_57.7%_91.47%]">YOUR</p>
      <p className="absolute inset-[42.69%_5.85%_56.16%_89.56%] text-right">SINSURU</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute contents font-['PP_Fragment:Serif_Light',sans-serif] inset-[41.14%_5.51%_56.16%_5.21%] leading-[normal] not-italic text-nowrap text-white whitespace-pre" data-name="그룹 70550" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>
      <ThroughYourScene />
      <p className="absolute inset-[42.69%_57.66%_56.16%_30.94%]">NATURAL BODY CARE</p>
      <YourSinsuru />
      <p className="absolute inset-[42.69%_30.89%_56.16%_56.51%]">FIND YOUR OWN SCENE</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[2.41%_46.48%_96.03%_46.51%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.008px_0.002px] mask-size-[134.547px_40.768px]" data-name="그룹 1" style={{ maskImage: `url('${img1}')` }}>
      <div className="absolute inset-[-1.23%_-0.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 42">
          <g id="ê·¸ë£¹ 1">
            <g id="í¨ì¤ 1">
              <path d={svgPaths.p11b99504} fill="var(--fill-0, white)" />
              <path d={svgPaths.p11b99504} />
            </g>
            <path d={svgPaths.p18b36c00} fill="var(--fill-0, white)" id="í¨ì¤ 2" />
            <g id="í¨ì¤ 3">
              <path d={svgPaths.p3aa4a700} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3aa4a700} />
            </g>
            <path d={svgPaths.p324e33c0} fill="var(--fill-0, white)" id="í¨ì¤ 4" />
            <path d={svgPaths.p1f8ed100} fill="var(--fill-0, white)" id="í¨ì¤ 5" />
            <path d={svgPaths.p2d714200} fill="var(--fill-0, white)" id="í¨ì¤ 6" />
            <path d={svgPaths.p36fe780} fill="var(--fill-0, white)" id="í¨ì¤ 7" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[2.41%_46.48%_96.03%_46.51%]" data-name="Clip path group">
      <Component />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute contents inset-[2.41%_46.48%_96.03%_46.51%]" data-name="그룹 31">
      <ClipPathGroup />
    </div>
  );
}

export default function Frame({ onNavigateToBodySoap }: { onNavigateToBodySoap?: () => void }) {
  const [showCategory, setShowCategory] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const handleMouseEnter = () => {
    setShowCategory(true);
  };

  const handleMouseLeave = () => {
    if (!isPinned) {
      setShowCategory(false);
    }
  };

  const handleClick = () => {
    setIsPinned(!isPinned);
    setShowCategory(!isPinned);
  };

  const handleCategoryClick = (category: string, subcategory: string) => {
    if (category === 'BODY' && subcategory === 'soap' && onNavigateToBodySoap) {
      onNavigateToBodySoap();
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute bottom-[0.31%] left-0 right-0 top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 2604">
          <path d="M1920 0H0V2604H1920V0Z" fill="var(--fill-0, #FF4500)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[0.31%] left-0 right-0 top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 2604">
          <path d="M1920 0H0V2604H1920V0Z" fill="var(--fill-0, #FF4500)" id="Vector" />
        </svg>
      </div>
      <Component2 />
      <MaskGroup />
      <Component3 />
      <Component1 />
      
      {/* SHOP 영역 - 호버 및 클릭 이벤트 추가 */}
      <div 
        className="absolute flex inset-[21.32%_93.46%_76.45%_4.97%] items-center justify-center cursor-pointer z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="flex-none h-[30px] rotate-[90deg] w-[58px] text-center">
          <p className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative text-nowrap text-white whitespace-pre" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>SHOP</p>
        </div>
      </div>

      {/* 카테고리 메뉴 - SHOP 우측 50px 위치 */}
      <div 
        className={`absolute left-[8%] top-[21%] z-40 transition-opacity duration-300 ease-in-out ${
          showCategory ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Category onCategoryClick={handleCategoryClick} />
      </div>
      
      <div className="absolute flex inset-[21.21%_4.95%_76.26%_93.49%] items-center justify-center">
        <div className="flex-none h-[30px] rotate-[270deg] w-[66px] text-center">
          <p className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative text-nowrap text-white whitespace-pre" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>STORY</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-4 px-[6%] h-[25.46%] bg-[#FF4500] pb-[100px]">
        {/* Footer 섹션 제목 */}
        <div className="flex justify-between border-b border-black pb-[20px] pt-[47px] pr-[0px] pl-[0px]">
          <div>
            <p className="font-['SUIT:Heavy',sans-serif] leading-[normal] not-italic text-black mb-2" style={{ fontSize: 'clamp(13px, 1.35vw, 26px)' }}>COMPANY</p>
            <div className="font-['SUIT:Heavy',sans-serif] leading-relaxed not-italic text-black space-y-1" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>
              <p>Company. 주식회사 뷰에누보</p>
              <p>Business License.380-88-00957</p>
              <p>Mail Order License. 제2018-서울강남-01731호</p>
            </div>
          </div>
          
          <div>
            <p className="font-['SUIT:Heavy',sans-serif] leading-[normal] not-italic text-black mb-2" style={{ fontSize: 'clamp(13px, 1.35vw, 26px)' }}>ADDRESS</p>
            <div className="font-['SUIT:Heavy',sans-serif] leading-relaxed not-italic text-black space-y-1" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>
              <p>Address. 서울 강남구 역삼로 179 한빛빌딩</p>
              <p>Call. 02-2138-0628</p>
              <p>Email. sinsuru@blankcrop.kr</p>
            </div>
          </div>
          
          <div>
            <p className="font-['SUIT:Heavy',sans-serif] leading-[normal] not-italic text-black mb-2 text-right" style={{ fontSize: 'clamp(13px, 1.35vw, 26px)' }}>SNS</p>
            <div className="font-['SUIT:Heavy',sans-serif] leading-relaxed not-italic text-black space-y-1 text-right" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>
              <p>INSTAGRAM</p>
              <p>YOUTUBE</p>
            </div>
          </div>
        </div>
        
        {/* Footer 하단 링크 */}
        <div className="flex justify-between items-center mt-[14px] mr-[0px] mb-[90px] ml-[0px] p-[0px]">
          <div className="flex gap-4">
            <p className="font-['SUIT:Medium',sans-serif] leading-[normal] not-italic text-black" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>이용안내</p>
            <p className="font-['SUIT:Medium',sans-serif] leading-[normal] not-italic text-black" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>개인정보취급방침</p>
            <p className="font-['SUIT:Medium',sans-serif] leading-[normal] not-italic text-black" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>이용약관</p>
          </div>
          <p className="font-['SUIT:Medium',sans-serif] leading-[normal] not-italic text-black" style={{ fontSize: 'clamp(10px, 1.04vw, 20px)' }}>Copyright © 주식회사 뷰에누보 all rights reserved.</p>
        </div>
      </div>
      <div className="absolute bottom-[25.46%] left-0 right-1/2 top-[47.21%] overflow-hidden" data-name="SHINSURU(model)3315">
        <img alt="" className="block w-full h-full object-cover" height="714" src={imgShinsuruModel3315} width="960" />
      </div>
      <div className="absolute bottom-[25.46%] left-1/2 right-0 top-[47.21%] overflow-hidden" data-name="SHINSURU(model)6546-re3">
        <img alt="" className="block w-full h-full object-cover" height="714" src={imgShinsuruModel6546Re3} width="960" />
      </div>
      <p className="absolute bottom-[88.09%] font-['PP_Fragment:Glare_Light',sans-serif] leading-[normal] left-1/2 not-italic text-center text-nowrap text-white top-[4.56%] translate-x-[-50%] whitespace-pre" style={{ fontSize: 'clamp(52px, 5vw, 116px)' }}>Through Scene be Suru</p>
    </div>
  );
}