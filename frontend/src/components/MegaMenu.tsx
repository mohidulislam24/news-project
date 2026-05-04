import { X } from "lucide-react";

export default function MegaMenu({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-95 z-50 flex flex-col text-white backdrop-blur-md animate-in fade-in duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <h2 className="text-2xl font-black text-red-500 tracking-wider">সব ক্যাটাগরি</h2>
                <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-full transition-colors group">
                    <X className="w-8 h-8 group-hover:rotate-90 transition-transform" />
                </button>
            </div>
            <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-8 overflow-y-auto w-full max-w-7xl mx-auto">
                <div className="space-y-4">
                    <h3 className="font-bold text-xl border-l-4 border-red-500 pl-3">জাতীয়</h3>
                    <ul className="space-y-3 text-gray-300 font-medium">
                        <li className="hover:text-red-400 cursor-pointer transition-colors hover:-translate-y-0.5 inline-block w-full">রাজনীতি</li>
                        <li className="hover:text-red-400 cursor-pointer transition-colors hover:-translate-y-0.5 inline-block w-full">আইন ও বিচার</li>
                        <li className="hover:text-red-400 cursor-pointer transition-colors hover:-translate-y-0.5 inline-block w-full">শিক্ষা</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="font-bold text-xl border-l-4 border-red-500 pl-3">জেলার খবর</h3>
                    <ul className="space-y-3 text-gray-300 font-medium">
                        <li className="hover:text-red-400 cursor-pointer transition-colors hover:-translate-y-0.5 inline-block w-full">ঢাকা</li>
                        <li className="hover:text-red-400 cursor-pointer transition-colors hover:-translate-y-0.5 inline-block w-full">চট্টগ্রাম</li>
                        <li className="hover:text-red-400 cursor-pointer transition-colors hover:-translate-y-0.5 inline-block w-full">রাজশাহী</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="font-bold text-xl border-l-4 border-red-500 pl-3">খেলা</h3>
                    <ul className="space-y-3 text-gray-300 font-medium">
                        <li className="hover:text-red-400 cursor-pointer transition-colors hover:-translate-y-0.5 inline-block w-full">ক্রিকেট</li>
                        <li className="hover:text-red-400 cursor-pointer transition-colors hover:-translate-y-0.5 inline-block w-full">ফুটবল</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="font-bold text-xl border-l-4 border-red-500 pl-3">অন্যান্য</h3>
                    <ul className="space-y-3 text-gray-300 font-medium">
                        <li className="hover:text-red-400 cursor-pointer transition-colors hover:-translate-y-0.5 inline-block w-full">ভিডিও গ্যালারী</li>
                        <li className="hover:text-red-400 cursor-pointer transition-colors hover:-translate-y-0.5 inline-block w-full">লগইন</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
