import { useState } from 'react';
import { initializeProducts } from '../utils/initProducts';

export function AdminPanel() {
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleInitProducts = async () => {
    setLoading(true);
    setStatus('제품 데이터 초기화 중...');
    
    const success = await initializeProducts();
    
    if (success) {
      setStatus('✅ 제품 데이터 초기화 완료!');
    } else {
      setStatus('❌ 초기화 실패. 콘솔을 확인하세요.');
    }
    
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-xl border border-gray-200 z-[9999]">
      <h3 className="font-bold mb-4 text-gray-900">관리자 패널</h3>
      
      <div className="space-y-4">
        <div>
          <button
            onClick={handleInitProducts}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? '처리 중...' : '1. 제품 데이터 초기화'}
          </button>
          <p className="text-xs text-gray-600 mt-1">
            KV store에 제품 정보 저장
          </p>
        </div>

        {status && (
          <div className={`p-3 rounded text-sm ${
            status.includes('✅') ? 'bg-green-50 text-green-800' : 
            status.includes('❌') ? 'bg-red-50 text-red-800' : 
            'bg-blue-50 text-blue-800'
          }`}>
            {status}
          </div>
        )}

        <div className="border-t pt-4 mt-4">
          <h4 className="font-semibold text-sm mb-2 text-gray-900">다음 단계:</h4>
          <ol className="text-xs text-gray-700 space-y-2">
            <li>2. Supabase 대시보드 → Storage → sinsuru 버킷 이동</li>
            <li>3. 아래 폴더 구조대로 이미지 업로드:</li>
          </ol>
          <div className="mt-2 bg-gray-100 p-2 rounded text-xs font-mono text-gray-800 overflow-x-auto">
            products/<br/>
            ├─ body/<br/>
            │  ├─ lotion/<br/>
            │  ├─ wash/<br/>
            │  ├─ soap/<br/>
            │  │  ├─ donkey-milk-soap/<br/>
            │  │  │  ├─ thumbnail.png<br/>
            │  │  │  └─ details/<br/>
            │  │  │     ├─ 1.png<br/>
            │  │  │     └─ ...<br/>
            │  │  ├─ shaving-soap/<br/>
            │  │  ├─ almond-scrub-soap/<br/>
            │  │  └─ hair-removal-soap/<br/>
            │  └─ oil/<br/>
            ├─ skin/<br/>
            ├─ bath/<br/>
            └─ gift/<br/>
               └─ set/<br/>
                  ├─ soap-set-4/<br/>
                  ├─ scrub-towel-set/<br/>
                  ├─ face-body-set/<br/>
                  └─ cleansing-towel-set/
          </div>
          <p className="text-xs text-gray-600 mt-2">
            자세한 가이드: <span className="font-semibold">UPLOAD_GUIDE.md</span> 참고
          </p>
        </div>
      </div>
    </div>
  );
}