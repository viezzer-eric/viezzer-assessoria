import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { IconBrandWhatsapp, IconBrandInstagram, IconX, IconMenu2 } from "@tabler/icons-react";

const links = [
    { label: "Início", href: "hero" },
    { label: "Sobre", href: "sobre" },
    { label: "Depoimentos", href: "depoimentos" },
    { label: "Diferenciais", href: "diferenciais" },
    { label: "Dúvidas", href: "faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("hero");
    const [menuOpen, setMenuOpen] = useState(false);
    const lenis = useLenis();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useLenis(({ scroll }) => {
        const scrollPos = scroll + 200;
        const sectionPositions = links.map(link => {
            const el = document.getElementById(link.href);
            return { id: link.href, top: el?.offsetTop || 0 };
        });
        const current = sectionPositions.filter(section => section.top <= scrollPos).slice(-1)[0];
        if (current && current.id !== active) setActive(current.id);
    });

    const scrollTo = (id: string) => {
        lenis?.scrollTo(`#${id}`, { duration: 1.4, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        setMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.2 }}
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
                        ? "py-3 bg-white/85 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_24px_rgba(0,0,0,0.04)]"
                        : "py-5 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 focus:outline-none group">
                        <div className="flex flex-col items-start">
                            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-zinc-900 leading-none group-hover:text-zinc-700 transition-colors">
                                Viezzer
                            </span>
                            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#C5A059] leading-none mt-0.5">
                                Assessoria
                            </span>
                        </div>
                    </button>

                    {/* Links — Desktop */}
                    <div className="hidden md:flex items-center gap-0.5 bg-zinc-100/90 backdrop-blur-sm px-1.5 py-1.5 rounded-full border border-zinc-200/50 shadow-inner">
                        {links.map(link => {
                            const isActive = active === link.href;
                            return (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className="relative px-4 py-1.5 text-[13px] font-medium focus:outline-none"
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.1),0_0_0_0.5px_rgba(0,0,0,0.06)]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className={`relative z-10 transition-colors duration-200 ${isActive ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"}`}>
                                        {link.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* CTA — Desktop */}
                    <div className="hidden md:flex items-center gap-3">
                        <motion.a
                            href="https://instagram.com/avz.assessoria"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.08, rotate: 3 }}
                            whileTap={{ scale: 0.92 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="w-9 h-9 flex items-center justify-center rounded-full text-white shadow-lg shadow-pink-500/20 transition-shadow hover:shadow-pink-500/40"
                            style={{
                                background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
                            }}
                        >
                            <IconBrandInstagram size={18} stroke={2} />
                        </motion.a>
                        <motion.a
                            href="https://wa.me/55XXXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-[13px] font-semibold rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:bg-zinc-800 hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-200"
                        >
                            <IconBrandWhatsapp size={15} />
                            Grupo VIP
                        </motion.a>
                    </div>

                    {/* Hamburger — Mobile */}
                    <button
                        onClick={() => setMenuOpen(v => !v)}
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={menuOpen ? "x" : "menu"}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                            >
                                {menuOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </div>
            </motion.nav>

            {/* Menu Mobile */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        className="fixed top-[68px] inset-x-0 z-40 mx-4 bg-white/98 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.05)] p-5 md:hidden"
                    >
                        <ul className="flex flex-col gap-0.5">
                            {links.map((link, i) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06, type: "spring", stiffness: 340, damping: 26 }}
                                >
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className={`w-full text-left px-4 py-3 rounded-2xl text-[15px] font-medium transition-all duration-150 ${active === link.href
                                                ? "bg-zinc-100 text-zinc-900"
                                                : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800"
                                            }`}
                                    >
                                        {active === link.href && (
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059] mr-2 mb-0.5" />
                                        )}
                                        {link.label}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-2.5">
                            <a
                                href="https://wa.me/55XXXXXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3.5 bg-zinc-900 text-white text-[14px] font-semibold rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.18)] active:scale-[0.98] transition-transform"
                            >
                                <IconBrandWhatsapp size={17} />
                                Entrar no Grupo VIP
                            </a>
                            <a
                                href="https://instagram.com/avz.assessoria"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3.5 text-white text-[14px] font-semibold rounded-2xl shadow-[0_4px_16px_rgba(213,38,159,0.25)] active:scale-[0.98] transition-transform"
                                style={{
                                    background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
                                }}
                            >
                                <IconBrandInstagram size={18} stroke={2} />
                                Siga no Instagram
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}