import { getSupabaseClient } from './supabase/client';
import { projectId, publicAnonKey } from './supabase/info';

export interface Product {
  id: string;
  title: string;
  price: string;
  category: string; // body, skin, bath, gift
  subCategory: string; // lotion, wash, soap, oil 등
  description: string;
  thumbnailUrl: string;
  detailImages: string[];
  ingredients?: string;
  usage?: string;
  scent?: string;
}

const supabase = getSupabaseClient();

// 제품 썸네일 이미지 URL 가져오기
export async function getProductThumbnail(category: string, subCategory: string, productId: string): Promise<string | null> {
  try {
    const { data, error } = await supabase.storage
      .from('sinsuru')
      .createSignedUrl(`products/${category}/${subCategory}/${productId}/thumbnail.png`, 3600);
    
    if (error) {
      // 파일이 없으면 null 반환 (에러 로그 제거)
      return null;
    }
    
    return data.signedUrl;
  } catch (error) {
    // 에러 발생 시 조용히 null 반환
    return null;
  }
}

// 제품 상세 이미지들 가져오기
export async function getProductDetailImages(category: string, subCategory: string, productId: string): Promise<string[]> {
  try {
    // 제품 폴더의 모든 이미지 파일 목록 가져오기
    const { data: files, error } = await supabase.storage
      .from('sinsuru')
      .list(`products/${category}/${subCategory}/${productId}/details`, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' }
      });

    if (error) {
      // 폴더가 없으면 빈 배열 반환
      return [];
    }

    if (!files || files.length === 0) {
      return [];
    }

    // 각 파일에 대한 signed URL 생성
    const imageUrls = await Promise.all(
      files.map(async (file) => {
        const { data, error } = await supabase.storage
          .from('sinsuru')
          .createSignedUrl(`products/${category}/${subCategory}/${productId}/details/${file.name}`, 3600);
        
        if (error) {
          return null;
        }
        
        return data.signedUrl;
      })
    );

    return imageUrls.filter((url): url is string => url !== null);
  } catch (error) {
    // 에러 발생 시 빈 배열 반환
    return [];
  }
}

// 모든 제품 목록 가져오기
export async function getAllProducts(): Promise<Product[]> {
  try {
    // KV store에서 제품 데이터 가져오기
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-cb50e858/products`,
      {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      }
    );

    if (!response.ok) {
      console.error('Error fetching products:', await response.text());
      return [];
    }

    const products = await response.json();
    
    // 각 제품에 썸네일 URL 추가
    const productsWithImages = await Promise.all(
      products.map(async (product: Product) => {
        const thumbnailUrl = await getProductThumbnail(product.category, product.subCategory, product.id);
        return {
          ...product,
          thumbnailUrl: thumbnailUrl || product.thumbnailUrl
        };
      })
    );

    return productsWithImages;
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    return [];
  }
}

// 특정 제품 정보 가져오기
export async function getProduct(productId: string): Promise<Product | null> {
  try {
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-cb50e858/products/${productId}`,
      {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      }
    );

    if (!response.ok) {
      console.error('Error fetching product:', await response.text());
      return null;
    }

    const product = await response.json();
    
    // 썸네일과 상세 이미지 URL 가져오기
    const [thumbnailUrl, detailImages] = await Promise.all([
      getProductThumbnail(product.category, product.subCategory, productId),
      getProductDetailImages(product.category, product.subCategory, productId)
    ]);

    return {
      ...product,
      thumbnailUrl: thumbnailUrl || product.thumbnailUrl,
      detailImages: detailImages.length > 0 ? detailImages : product.detailImages
    };
  } catch (error) {
    console.error('Error in getProduct:', error);
    return null;
  }
}