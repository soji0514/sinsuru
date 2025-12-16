import Frame from './imports/Frame60';
import BodySoap from './pages/BodySoap';
import ProductDetail from './pages/ProductDetail';
import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'body-soap' | 'product-detail'>('home');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const scale = containerWidth / 1920;
        document.documentElement.style.setProperty('--app-scale', scale.toString());
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  if (currentPage === 'product-detail') {
    return (
      <div ref={containerRef} className="w-full mx-auto" style={{ aspectRatio: '1920/2604' }}>
        <ProductDetail 
          onNavigateHome={() => setCurrentPage('home')} 
          onNavigateToBodySoap={() => setCurrentPage('body-soap')}
        />
      </div>
    );
  }

  if (currentPage === 'body-soap') {
    return (
      <div ref={containerRef} className="w-full mx-auto" style={{ aspectRatio: '1920/2604' }}>
        <BodySoap 
          onNavigateHome={() => setCurrentPage('home')}
          onNavigateToProductDetail={() => setCurrentPage('product-detail')}
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full mx-auto" style={{ aspectRatio: '1920/2604' }}>
      <Frame onNavigateToBodySoap={() => setCurrentPage('body-soap')} />
    </div>
  );
}