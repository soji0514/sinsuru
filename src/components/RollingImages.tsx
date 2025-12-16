import { useEffect, useState } from 'react';
import { getSupabaseClient } from '../utils/supabase/client';

export function RollingImages() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const supabase = getSupabaseClient();

        console.log('🔍 Fetching images from sinsuru/main folder...');

        // sinsuru 버킷에서 이미지 목록 가져오기
        const { data: files, error } = await supabase.storage
          .from('sinsuru')
          .list('main', {
            limit: 100,
            offset: 0,
          });

        if (error) {
          console.error('❌ Error loading images from storage:', error);
          setLoading(false);
          return;
        }

        console.log('📁 Files found:', files);

        if (files && files.length > 0) {
          // 공개 URL 생성
          const imageUrls = files
            .filter(file => {
              const ext = file.name.toLowerCase();
              return ext.endsWith('.jpg') || ext.endsWith('.jpeg') || 
                     ext.endsWith('.png') || ext.endsWith('.gif') || 
                     ext.endsWith('.webp');
            })
            .map(file => {
              const { data } = supabase.storage
                .from('sinsuru')
                .getPublicUrl(`main/${file.name}`);
              console.log('🖼️ Image URL:', data.publicUrl);
              return data.publicUrl;
            });

          console.log('✅ Total images loaded:', imageUrls.length);
          setImages(imageUrls);
        } else {
          console.log('⚠️ No files found in sinsuru/main');
        }
        setLoading(false);
      } catch (err) {
        console.error('❌ Error in loadImages:', err);
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // 자동 슬라이드 효과
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4초마다 이미지 변경

    return () => clearInterval(interval);
  }, [images.length]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-white">Loading images...</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-white text-center px-4">No images found in sinsuru bucket</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
          .fade-image {
            animation: fadeIn 1s ease-in-out;
          }
        `}
      </style>
      {images.map((url, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 fade-image' : 'opacity-0'
          }`}
        >
          <img
            src={url}
            alt={`Slideshow image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}