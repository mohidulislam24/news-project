import Header from "@/components/Header";
import LiveTicker from "@/components/LiveTicker";

// Fetching initial layout data from the backend
async function fetchLatestArticles() {
    try {
        const res = await fetch("http://localhost:8000/api/articles/", { next: { revalidate: 10 } });
        if (!res.ok) return [];
        return res.json();
    } catch (e) {
        return [];
    }
}

export default async function Home() {
    const articles = await fetchLatestArticles();

    return (
        <div className="min-h-screen pb-20 bg-slate-50 text-slate-900 font-sans">
            <Header />

            <main className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

                    {/* Main Content Area */}
                    <div className="xl:col-span-8 flex flex-col gap-8">

                        {/* Hero Lead Story */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-200">
                            <div className="h-[450px] bg-slate-200 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/30 transition-colors z-10" />
                                <span className="text-slate-400 font-bold text-lg">Image Thumbnail Area</span>
                            </div>
                            <div className="p-8 relative bg-white -mt-20 z-20 rounded-t-3xl mx-4 shadow-2xl">
                                <span className="text-white bg-red-600 px-4 py-1.5 font-bold mb-4 inline-block rounded-full uppercase text-xs tracking-widest shadow-md">লিড নিউজ</span>
                                <h1 className="text-3xl md:text-5xl font-black mb-4 group-hover:text-red-600 transition-colors leading-tight">
                                    {articles[0]?.title || "The Lead Story Title Placeholder: Breaking Local News Coverage"}
                                </h1>
                                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                    {articles[0]?.content || "In an unprecedented turn of events, dummy content is spanning the container to give editors a good idea of how text flows in this lead card. The integration is flawless..."}
                                </p>
                            </div>
                        </div>

                        {/* Sub Story Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[1, 2, 3, 4].map(v => (
                                <div key={v} className="bg-white p-4 rounded-2xl border border-slate-200 hover:shadow-lg transition-all group flex flex-col gap-4 cursor-pointer">
                                    <div className="w-full h-48 bg-slate-200 rounded-xl shrink-0 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-xl group-hover:text-red-600 transition-colors leading-snug line-clamp-3">Sub-story headline placeholder {v} demonstrating article flow and grid layouts natively</h3>
                                        <p className="text-sm text-slate-500 mt-3 font-semibold tracking-wide">২ ঘন্টা আগে</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <aside className="xl:col-span-4 space-y-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm sticky top-48">
                            <div className="flex border-b-2 border-slate-100 mb-6">
                                <button className="flex-1 pb-3 border-b-4 border-red-600 font-black text-red-600 text-lg tracking-wide">সর্বশেষ</button>
                                <button className="flex-1 pb-3 text-slate-400 font-bold hover:text-slate-800 transition-colors text-lg tracking-wide">জনপ্রিয়</button>
                            </div>
                            <ul className="space-y-6">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <li key={i} className="flex gap-4 group cursor-pointer items-start">
                                        <span className="text-4xl font-black text-slate-200 group-hover:text-red-200 transition-colors -mt-1 tracking-tighter">0{i}</span>
                                        <p className="font-bold text-slate-700 leading-snug group-hover:text-red-600 transition-colors text-lg">This is a trending sidebar article headline for users to engage with instantly.</p>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full mt-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors">
                                আরও পড়ুন
                            </button>
                        </div>
                    </aside>

                </div>
            </main>

            <LiveTicker />
        </div>
    );
}
