"use client";
import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";

export default function LiveTicker() {
    const [news, setNews] = useState<string>("Connecting to live news feed...");

    useEffect(() => {
        // Connect to the generic FastAPI backend SSE endpoint
        const eventSource = new EventSource("http://localhost:8000/api/live-ticker/");

        eventSource.onmessage = (event) => {
            setNews(event.data);
        };

        eventSource.onerror = () => {
            setNews("Live breaking news temporarily unavailable.");
            eventSource.close();
        };

        return () => eventSource.close();
    }, []);

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white z-50 shadow-2xl border-t-2 border-red-800">
            <div className="container mx-auto px-4 py-[6px] flex items-center gap-3">
                <div className="bg-white text-red-600 px-3 py-1 text-xs font-black w-max shrink-0 uppercase animate-pulse flex items-center gap-2 rounded-r-xl shadow-md">
                    <AlertCircle size={16} strokeWidth={3} /> Breaking News
                </div>
                <div className="flex-1 overflow-hidden whitespace-nowrap">
                    <p className="inline-block animate-marquee font-medium tracking-wide">{news}</p>
                </div>
            </div>
        </div>
    );
}
