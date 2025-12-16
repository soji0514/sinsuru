import svgPaths from "../imports/svg-qdz2faxx2f";
import imgSinsuruDualsetThumb18 from "figma:asset/13ae98754e1e4c6ce21b41a6ad1aae225b716b15.png";
import imgSinsuruDualsetThumb19 from "figma:asset/577af72b4f63a859b1e7453ba980c829676cf5e1.png";
import imgSinsuruDualsetThumb20 from "figma:asset/9fb6e4a7464ccc7263bcce90d9ff5516b24a63cf.png";
import imgSinsuruDualsetThumb21 from "figma:asset/20493f18abedb1e25bbaa5c9e8b0c44c97a4546f.png";
import imgSinsuruDualsetThumb22 from "figma:asset/0f5a4c797042f5ed87c2dfabc744b8a608a0bcac.png";
import imgSinsuruDualsetThumb23 from "figma:asset/0555788ce8c1cbd941296b2e123ec446880c5edc.png";
import imgSinsuruDualsetThumb24 from "figma:asset/8f499447446fe817f36f823a5fdc67e397631311.png";
import imgSinsuruDualsetThumb25 from "figma:asset/b8249519cb05f479bb98f89311a708a8c53a5b36.png";
import { img1 } from "../imports/svg-cs0r4";
import { useState, useEffect } from "react";
import { getAllProducts, type Product } from "../utils/products";

// 기본 이미지 매핑 (fallback용)
const defaultImages: { [key: string]: string } = {
  "donkey-milk-soap": imgSinsuruDualsetThumb18,
  "shaving-soap": imgSinsuruDualsetThumb19,
  "almond-scrub-soap": imgSinsuruDualsetThumb20,
  "hair-removal-soap": imgSinsuruDualsetThumb21,
  "soap-set-4": imgSinsuruDualsetThumb22,
  "scrub-towel-set": imgSinsuruDualsetThumb23,
  "face-body-set": imgSinsuruDualsetThumb24,
  "cleansing-towel-set": imgSinsuruDualsetThumb25,
};

function LogoComponent() {
  return (
    <div
      className="absolute inset-[2.41%_46.48%_96.03%_46.51%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.008px_0.002px] mask-size-[134.547px_40.768px]"
      data-name="그룹 1"
      style={{ maskImage: `url('${img1}')` }}
    >
      <div className="absolute inset-[-1.23%_-0.37%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 136 42"
        >
          <g id="ê·¸ë£¹ 1">
            <g id="í¨ì¤ 1">
              <path
                d={svgPaths.p11b99504}
                fill="var(--fill-0, white)"
              />
              <path d={svgPaths.p11b99504} />
            </g>
            <path
              d={svgPaths.p18b36c00}
              fill="var(--fill-0, white)"
              id="í¨ì¤ 2"
            />
            <g id="í¨ì¤ 3">
              <path
                d={svgPaths.p3aa4a700}
                fill="var(--fill-0, white)"
              />
              <path d={svgPaths.p3aa4a700} />
            </g>
            <path
              d={svgPaths.p324e33c0}
              fill="var(--fill-0, white)"
              id="í¨ì¤ 4"
            />
            <path
              d={svgPaths.p1f8ed100}
              fill="var(--fill-0, white)"
              id="í¨ì¤ 5"
            />
            <path
              d={svgPaths.p2d714200}
              fill="var(--fill-0, white)"
              id="í¨ì¤ 6"
            />
            <path
              d={svgPaths.p36fe780}
              fill="var(--fill-0, white)"
              id="í¨ì¤ 7"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="absolute inset-[2.41%_46.48%_96.03%_46.51%]"
      data-name="Clip path group"
    >
      <LogoComponent />
    </div>
  );
}

function Component1() {
  return (
    <div
      className="absolute inset-[2.41%_46.48%_96.03%_46.51%]"
      data-name="그룹 31"
    >
      <ClipPathGroup />
    </div>
  );
}

function Hold({
  onNavigateHome,
}: {
  onNavigateHome?: () => void;
}) {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        transform: "scale(var(--app-scale, 1))",
        transformOrigin: "top left",
        width: "1920px",
        height: "2604px",
      }}
    >
      {/* 로고 영역 - 메인과 동일한 위치 */}
      <div
        className="absolute inset-[2.41%_46.48%_96.03%_46.51%] cursor-pointer pointer-events-auto"
        onClick={onNavigateHome}
      >
        <Component1 />
      </div>

      {/* SHOP 영역 - 메인과 동일한 위치 */}
      <div className="absolute flex inset-[21.32%_93.46%_76.45%_4.97%] items-center justify-center pointer-events-auto">
        <div
          className="flex-none h-[30px] rotate-[90deg] w-[58px] text-center"
          style={{
            transform: "scale(calc(1 / var(--app-scale, 1)))",
          }}
        >
          <p
            className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative text-nowrap text-white whitespace-pre"
            style={{ fontSize: "clamp(10px, 1.04vw, 20px)" }}
          >
            SHOP
          </p>
        </div>
      </div>

      {/* STORY 영역 - 메인과 동일한 위치 */}
      <div
        className="absolute flex inset-[21.21%_4.95%_76.26%_93.49%] items-center justify-center cursor-pointer pointer-events-auto"
        onClick={onNavigateHome}
      >
        <div
          className="flex-none h-[30px] rotate-[270deg] w-[66px] text-center"
          style={{
            transform: "scale(calc(1 / var(--app-scale, 1)))",
          }}
        >
          <p
            className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative text-nowrap text-white whitespace-pre"
            style={{ fontSize: "clamp(10px, 1.04vw, 20px)" }}
          >
            STORY
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryNav() {
  return (
    <div
      className="content-stretch flex gap-[20px] items-center relative shrink-0"
      style={{ fontSize: "clamp(10px, 1.04vw, 20px)" }}
    >
      <p className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-nowrap text-white tracking-[0.9px] uppercase whitespace-pre">
        Lotion
      </p>
      <div className="h-[11px] relative shrink-0 w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1 11"
          >
            <path
              d="M0.5 0V11"
              id="Vector 97"
              stroke="var(--stroke-0, white)"
            />
          </svg>
        </div>
      </div>
      <p className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-nowrap text-white tracking-[0.9px] uppercase whitespace-pre">
        wash
      </p>
      <div className="h-[11px] relative shrink-0 w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1 11"
          >
            <path
              d="M0.5 0V11"
              id="Vector 97"
              stroke="var(--stroke-0, white)"
            />
          </svg>
        </div>
      </div>
      <p className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[orangered] text-nowrap tracking-[0.9px] uppercase whitespace-pre">
        soap
      </p>
      <div className="h-[11px] relative shrink-0 w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1 11"
          >
            <path
              d="M0.5 0V11"
              id="Vector 97"
              stroke="var(--stroke-0, white)"
            />
          </svg>
        </div>
      </div>
      <p className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-nowrap text-white tracking-[0.9px] uppercase whitespace-pre">
        oil
      </p>
    </div>
  );
}

function CategoryHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p
        className="font-['PP_Fragment:Serif_Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-nowrap text-white tracking-[1.2px] whitespace-pre"
        style={{ fontSize: "clamp(10px, 1.04vw, 20px)" }}
      >
        BODY
      </p>
      <CategoryNav />
    </div>
  );
}

function CategorySection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <CategoryHeader />
      <div className="h-0 relative shrink-0 w-[1217px]">
        <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1217 1"
          >
            <path
              d="M0 0.25H1217"
              id="Vector 100"
              stroke="var(--stroke-0, white)"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  image,
  title,
  price,
  onClick,
}: {
  image: string;
  title: string;
  price: string;
  onClick?: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-[229px] cursor-pointer hover:opacity-80 transition-opacity" onClick={onClick}>
      <div
        className="aspect-[1080/1920] relative shrink-0 w-full"
        data-name="sinsuru_dualset_thumb1 – 8"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={image}
        />
      </div>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-[157px]">
        <div
          className="content-stretch flex flex-col font-['SUIT:Medium',sans-serif] gap-[7px] items-start leading-[normal] not-italic relative shrink-0 text-center text-white uppercase"
          style={{ fontSize: "clamp(10px, 0.73vw, 18px)" }}
        >
          <p className="relative shrink-0 w-[157px]">{title}</p>
          <p className="relative shrink-0 w-[157px]">{price}</p>
        </div>
      </div>
    </div>
  );
}

function ProductGrid({ onNavigateToProductDetail }: { onNavigateToProductDetail?: () => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts().then((data) => {
      // BODY/SOAP 카테고리만 필터링
      const soapProducts = data.filter(
        p => p.category === 'body' && p.subCategory === 'soap'
      );
      const giftProducts = data.filter(
        p => p.category === 'gift' && p.subCategory === 'set'
      );
      setProducts([...soapProducts, ...giftProducts]);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="h-[1008px] relative shrink-0 w-[1156px] flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  // 상위 4개 제품 (첫 번째 줄)
  const topProducts = products.slice(0, 4);
  // 하위 4개 제품 (두 번째 줄)
  const bottomProducts = products.slice(4, 8);

  return (
    <div className="h-[1008px] relative shrink-0 w-[1156px]">
      {/* 첫 번째 줄 */}
      <div className="absolute content-stretch flex gap-[80px] items-center left-0 top-0">
        {topProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            image={product.thumbnailUrl || defaultImages[product.id] || imgSinsuruDualsetThumb18}
            title={product.title}
            price={product.price}
            onClick={onNavigateToProductDetail}
          />
        ))}
      </div>
      
      {/* 두 번째 줄 */}
      <div className="absolute content-stretch flex gap-[80px] items-center left-0 top-[544px]">
        {bottomProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            image={product.thumbnailUrl || defaultImages[product.id] || imgSinsuruDualsetThumb22}
            title={product.title}
            price={product.price}
            onClick={onNavigateToProductDetail}
          />
        ))}
      </div>
    </div>
  );
}

function MainContent({ onNavigateToProductDetail }: { onNavigateToProductDetail?: () => void }) {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[100px] items-center left-[calc(50%+0.5px)] top-[261px] w-[1217px]"
      style={{
        transform:
          "translateX(-50%) scale(var(--app-scale, 1))",
        transformOrigin: "top center",
      }}
    >
      <CategorySection />
      <ProductGrid onNavigateToProductDetail={onNavigateToProductDetail} />
    </div>
  );
}

export default function BodySoap({
  onNavigateHome,
  onNavigateToProductDetail,
}: {
  onNavigateHome?: () => void;
  onNavigateToProductDetail?: () => void;
}) {
  return (
    <div
      className="bg-black relative size-full"
      data-name="product"
    >
      <Hold onNavigateHome={onNavigateHome} />
      <MainContent onNavigateToProductDetail={onNavigateToProductDetail} />
    </div>
  );
}