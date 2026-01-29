'use client';

import { useState } from 'react';
import { useZxing } from 'react-zxing';
import { Loader2, ScanLine, X, Check, AlertTriangle } from 'lucide-react';

interface ProductData {
    name: string;
    image: string;
    sugar: number; // g per 100g
    brand: string;
}

export default function ProductScanner() {
    const [result, setResult] = useState<string | null>(null);
    const [product, setProduct] = useState<ProductData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isScanning, setIsScanning] = useState(true);

    const { ref } = useZxing({
        onResult(result) {
            if (isScanning && !loading) {
                setResult(result.getText());
                setIsScanning(false);
                fetchProduct(result.getText());
            }
        },
    });

    const fetchProduct = async (barcode: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
            const data = await response.json();

            if (data.status === 1) {
                const productData = data.product;
                setProduct({
                    name: productData.product_name_ar || productData.product_name || 'منتج غير معروف',
                    image: productData.image_front_small_url || '',
                    sugar: productData.nutriments?.sugars_100g || 0,
                    brand: productData.brands || ''
                });
            } else {
                setError('لم يتم العثور على المنتج');
            }
        } catch (err) {
            setError('خطأ في الاتصال بقاعدة البيانات');
        } finally {
            setLoading(false);
        }
    };

    const resetScan = () => {
        setResult(null);
        setProduct(null);
        setError(null);
        setIsScanning(true);
    };

    // TCF7L2 Gene Match Logic (Simulation of Genetic Overlay)
    const isSafe = product ? product.sugar < 10 : false;

    return (
        <div className="space-y-4 text-center">
            {/* Camera / Scanner View */}
            {isScanning && !loading && (
                <div className="relative mx-auto w-full max-w-sm rounded-2xl overflow-hidden bg-black aspect-square">
                    <video ref={ref} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-64 h-64 border-2 border-green-500/50 rounded-xl relative">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-green-500 animate-pulse"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-green-500 animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-green-500 animate-pulse"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-green-500 animate-pulse"></div>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md">
                            وجه الكاميرا نحو الباركود
                        </span>
                    </div>
                </div>
            )}

            {/* Loading State */}
            {loading && (
                <div className="flex flex-col items-center justify-center p-12 gap-4">
                    <Loader2 className="w-12 h-12 text-teal-600 animate-spin" />
                    <p className="text-slate-500 animate-pulse">جاري تحليل المنتج...</p>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                    <AlertTriangle className="w-10 h-10 text-red-500 mx-auto mb-2" />
                    <p className="text-red-700 font-bold">{error}</p>
                    <button
                        onClick={resetScan}
                        className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                        حاول مرة أخرى
                    </button>
                </div>
            )}

            {/* Result State */}
            {product && (
                <div className="animate-in fade-in zoom-in duration-300">
                    <div className={`rounded-2xl border-2 p-6 mb-4 relative overflow-hidden ${isSafe ? 'border-green-100 bg-green-50' : 'border-red-100 bg-red-50'}`}>
                        {/* Generic Trust Badge */}
                        <div className="absolute top-4 left-4">
                            <span className="px-2 py-1 bg-white/80 backdrop-blur rounded text-[10px] font-bold text-slate-500 border border-slate-200">
                                Open Food Facts
                            </span>
                        </div>

                        {product.image && (
                            <img src={product.image} alt={product.name} className="w-24 h-24 object-contain mx-auto mb-4 bg-white rounded-lg shadow-sm p-2" />
                        )}

                        <h3 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h3>
                        <p className="text-sm text-slate-500 mb-6">{product.brand}</p>

                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-white p-3 rounded-xl border border-slate-100">
                                <span className="block text-xs text-slate-400 mb-1">السكر / 100غ</span>
                                <span className={`text-lg font-bold ${isSafe ? 'text-green-600' : 'text-red-600'}`}>
                                    {product.sugar}g
                                </span>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-slate-100">
                                <span className="block text-xs text-slate-400 mb-1">تحليل الجين</span>
                                <span className="text-lg font-bold text-slate-800">
                                    TCF7L2
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Genetic Verdict */}
                    <div className={`p-4 rounded-xl flex items-center gap-3 text-right ${isSafe ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        <div className={`p-2 rounded-full ${isSafe ? 'bg-green-200' : 'bg-red-200'}`}>
                            {isSafe ? <Check className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                        </div>
                        <div>
                            <strong className="block text-sm">
                                {isSafe ? 'آمن جينياً' : 'تحذير: سكر مرتفع'}
                            </strong>
                            <p className="text-xs opacity-90">
                                {isSafe
                                    ? 'هذا المنتج مناسب لحساسية الأنسولين لديك.'
                                    : 'جيناتك قد تواجه صعوبة في حرق هذه الكمية من السكر.'}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={resetScan}
                        className="mt-6 w-full py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-bold flex items-center justify-center gap-2"
                    >
                        <ScanLine className="w-4 h-4" /> فحص منتج آخر
                    </button>

                    <p className="mt-4 text-[10px] text-slate-400">
                        تحليل تجريبي يعتمد على بيانات Open Food Facts المفتوحة. لا يعتبر نصيحة طبية.
                    </p>
                </div>
            )}
        </div>
    );
}
