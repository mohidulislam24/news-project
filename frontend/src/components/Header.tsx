"use client";
import { useState } from "react";
import { Menu, Search } from "lucide-react";
import MegaMenu from "./MegaMenu";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentDate = new Date().toLocaleDateString("bn-BD", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

    return (
        <>
            <header className="bg-white sticky top-0 z-40 border-b shadow-md">
                {/* Top Info Bar */}
                <div className="bg-slate-100 hidden md:block border-b">
                    <div className="container mx-auto px-4 py-1.5 flex justify-between items-center text-[13px] text-gray-600 font-medium tracking-wide">
                        <div>{currentDate} | ঢাকা</div>
                        <div className="flex gap-4">
                            <span className="cursor-pointer hover:text-red-600 transition-colors font-bold text-red-500">English Mode</span>
                        </div>
                    </div>
                </div>

                {/* Main Logo & Icons */}
                <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center bg-white relative">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="flex items-center gap-2 hover:text-red-600 transition-colors group"
                    >
                        <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors">
                            <Menu className="w-8 h-8 group-hover:scale-110 transition-transform text-slate-800 group-hover:text-red-600" />
                        </div>
                        <span className="font-black text-xl hidden md:block uppercase tracking-wide">সব</span>
                    </button>

                    <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer">
                        <div className="text-4xl md:text-5xl font-black text-red-600 tracking-tighter" style={{ fontFamily: 'serif' }}>
                            The Daily Akash
                        </div>
                        <p className="text-xs text-slate-500 font-medium mt-1 tracking-widest uppercase">পরিবর্তনের পথে সময়ের সাথে</p>
                    </div>

                    <button className="p-2.5 hover:bg-slate-100 rounded-full transition-colors bg-slate-50 border border-slate-100 shadow-sm group">
                        <Search className="w-6 h-6 text-slate-700 group-hover:text-red-600 transition-colors group-hover:scale-110" />
                    </button>
                </div>

                {/* Navigation Bar */}
                <nav className="hidden lg:flex justify-center gap-8 py-3 bg-red-600 font-bold border-t border-red-700 shadow-inner">
                    {[
                        { name: 'প্রচ্ছদ', href: '/' },
                        { name: 'জাতীয়', href: '/national' },
                        { name: 'রাজনীতি', href: '/politics' },
                        { name: 'বাংলাদেশ', href: '/bangladesh' },
                        { name: 'আর্ন্তজাতিক', href: '/international' },
                        { name: 'খেলা', href: '/sports' },
                        { name: 'বিনোদন', href: '/entertainment' },
                        { name: 'অর্থনীতি', href: '/economy' }
                    ].map(item => (
                        <Link key={item.name} href={item.href} className="text-white/90 hover:text-white transition-colors uppercase tracking-widest text-sm hover:-translate-y-0.5 hover:scale-105 duration-200">
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </header>
            <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
