import { projectId, publicAnonKey } from './supabase/info';

// 제품 초기 데이터
const initialProducts = [
  {
    id: "donkey-milk-soap",
    title: "나귀우유 클렌징 괄사 비누",
    price: "19,000원",
    category: "body",
    subCategory: "soap",
    description: `"맑게 벗기고, 깊이 흐르는 정화의 의식."

신수루가 책가도 한 켠에 고이 숨겨 두었다는 비밀의 미용 도구
피부의 흐름을 깨우는 괄사의 형상을 본뜬 프리미엄 클렌징 솝입니다.
오랜 시간 사랑받아온 나귀(驢) 우유 성분을 중심으로,
세안이라는 일상을 한 단계 고요한 의식으로 바꾸어 줍니다.

• 촉촉하게 미끄러지는 크리미한 거품
• 괄사 면이 피부를 부드럽게 따라 움직이며 마사지감 강화
• 씻어낸 후에도 유분기 없이 부드럽고 촉촉한 마무리
• 아침 세안, 저녁 딥클렌징 모두 적합`,
    thumbnailUrl: "",
    detailImages: [],
    ingredients: "정제수, 글리세린, 나귀우유(10%), 코코넛오일, 팜오일, 올리브오일, 피마자오일, 수산화나트륨, 스테아린산, 향료, 토코페롤",
    usage: `1. 미온수로 얼굴을 충분히 적셔줍니다.
2. 괄사 비누를 손에 문질러 풍성한 거품을 냅니다.
3. 거품을 얼굴에 펴 바르고 괄사 면으로 부드럽게 마사지합니다.
4. 미온수로 깨끗이 헹구어냅니다.`,
    scent: `Top: 시트러스, 베르가못
Middle: 화이트 플로럴, 재스민
Base: 머스크, 앰버`
  },
  {
    id: "shaving-soap",
    title: "선비가드 쉐이빙 괄사 비누",
    price: "19,000원",
    category: "body",
    subCategory: "soap",
    description: "부드러운 면도를 위한 전용 비누입니다.",
    thumbnailUrl: "",
    detailImages: [],
  },
  {
    id: "almond-scrub-soap",
    title: "작선아몬드 스크럽 괄사 비누",
    price: "19,000원",
    category: "body",
    subCategory: "soap",
    description: "천연 아몬드 스크럽이 함유된 각질 제거용 비누입니다.",
    thumbnailUrl: "",
    detailImages: [],
  },
  {
    id: "hair-removal-soap",
    title: "연단 제모 괄사 비누",
    price: "19,000원",
    category: "body",
    subCategory: "soap",
    description: "부드러운 제모를 돕는 특별한 비누입니다.",
    thumbnailUrl: "",
    detailImages: [],
  },
  {
    id: "soap-set-4",
    title: "신스루 괄사 비누 4개 세트",
    price: "76,000원",
    category: "gift",
    subCategory: "set",
    description: "인기 비누 4종을 한 세트로 구성했습니다.",
    thumbnailUrl: "",
    detailImages: [],
  },
  {
    id: "scrub-towel-set",
    title: "바디 스크럽 비누&타올 세트",
    price: "29,000원",
    category: "gift",
    subCategory: "set",
    description: "스크럽 비누와 전용 타올을 함께 구성한 세트입니다.",
    thumbnailUrl: "",
    detailImages: [],
  },
  {
    id: "face-body-set",
    title: "페이스&바디 스크럽 세트",
    price: "39,000원",
    category: "gift",
    subCategory: "set",
    description: "얼굴과 바디 모두 사용 가능한 스크럽 세트입니다.",
    thumbnailUrl: "",
    detailImages: [],
  },
  {
    id: "cleansing-towel-set",
    title: "페이스 클렌징 비누&타올 세트",
    price: "27,000원",
    category: "gift",
    subCategory: "set",
    description: "클렌징 비누와 부드러운 타올을 함께 구성한 세트입니다.",
    thumbnailUrl: "",
    detailImages: [],
  },
];

// 제품 데이터를 서버에 저장하는 함수
export async function initializeProducts() {
  try {
    for (const product of initialProducts) {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-cb50e858/products`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify(product)
        }
      );

      if (!response.ok) {
        console.error(`Failed to create product ${product.id}:`, await response.text());
      } else {
        console.log(`Product ${product.id} created successfully`);
      }
    }
    
    console.log('All products initialized!');
    return true;
  } catch (error) {
    console.error('Error initializing products:', error);
    return false;
  }
}