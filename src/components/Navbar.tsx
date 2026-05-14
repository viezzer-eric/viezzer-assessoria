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

    // Detecta scroll para ativar o fundo glassmorphism
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Scroll Spy: detecta a seção ativa baseada na posição do scroll
    useLenis(({ scroll }) => {
        const scrollPos = scroll + 200; // Offset de 200px para o gatilho

        const sectionPositions = links.map(link => {
            const el = document.getElementById(link.href);
            return {
                id: link.href,
                top: el?.offsetTop || 0
            };
        });

        // Encontra a última seção que já passou pelo ponto de scroll
        const current = sectionPositions
            .filter(section => section.top <= scrollPos)
            .slice(-1)[0];

        if (current && current.id !== active) {
            setActive(current.id);
        }
    });

    const scrollTo = (id: string) => {
        lenis?.scrollTo(`#${id}`, { duration: 1.4, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        setMenuOpen(false);
    };

    return (
        <>
            {/* Navbar fixo */}
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.2 }}
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
                    ? "py-3 bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                    : "py-5 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5 focus:outline-none">
                        <span
                            className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-900"
                            style={{ letterSpacing: "0.3em" }}
                        >
                            Viezzer
                        </span>
                        <div className="w-[1px] h-4 bg-[#C5A059]/60" />
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#C5A059]">
                            Assessoria
                        </span>
                    </button>

                    {/* Links — Desktop */}
                    <div className="hidden md:flex items-center gap-1 bg-zinc-100/80 backdrop-blur-sm px-2 py-1.5 rounded-full">
                        {links.map(link => {
                            const isActive = active === link.href;
                            return (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className="relative px-4 py-1.5 text-sm font-medium focus:outline-none"
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 rounded-full bg-white shadow-sm"
                                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                        />
                                    )}
                                    <span className={`relative z-10 transition-colors duration-200 ${isActive ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-800"}`}>
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
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 flex items-center justify-center rounded-full text-white shadow-lg transition-transform"
                            style={{
                                background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
                            }}
                        >
                            <IconBrandInstagram size={22} stroke={2.5} />
                        </motion.a>
                        <motion.a
                            href="https://wa.me/55XXXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-sm font-bold rounded-full shadow-sm hover:bg-zinc-800 transition-colors"
                        >
                            <IconBrandWhatsapp size={16} />
                            Grupo VIP
                        </motion.a>
                    </div>

                    {/* Hamburger — Mobile */}
                    <button
                        onClick={() => setMenuOpen(v => !v)}
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-700"
                    >
                        {menuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Menu Mobile */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ type: "spring", stiffness: 300, damping: 26 }}
                        className="fixed top-[68px] inset-x-0 z-40 mx-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-zinc-100 p-6 md:hidden"
                    >
                        <ul className="flex flex-col gap-1">
                            {links.map((link, i) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07, type: "spring", stiffness: 300, damping: 24 }}
                                >
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className={`w-full text-left px-4 py-3 rounded-2xl text-base font-medium transition-colors ${active === link.href
                                            ? "bg-zinc-100 text-zinc-900"
                                            : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800"
                                            }`}
                                    >
                                        {link.label}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-3">
                            <a
                                href="https://wa.me/55XXXXXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3.5 bg-zinc-900 text-white text-sm font-bold rounded-2xl"
                            >
                                <IconBrandWhatsapp size={18} />
                                Entrar no Grupo VIP
                            </a>
                            <a
                                href="https://instagram.com/avz.assessoria"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3.5 text-white text-sm font-bold rounded-2xl shadow-md"
                                style={{
                                    background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
                                }}
                            >
                                <IconBrandInstagram size={20} stroke={2.5} />
                                Siga no Instagram
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
