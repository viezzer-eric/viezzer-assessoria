import { motion } from "framer-motion";
import { IconBrandInstagram, IconBrandWhatsapp, IconArrowUp } from "@tabler/icons-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const navItems = [
        { id: "hero", label: "Início" },
        { id: "sobre", label: "Sobre" },
        { id: "depoimentos", label: "Depoimentos" },
        { id: "diferenciais", label: "Diferenciais" },
        { id: "faq", label: "Dúvidas" },
    ];

    return (
        <footer className="bg-zinc-950 text-white py-20 px-4 border-t border-zinc-900 relative overflow-hidden">

            {/* Glow decorativo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-20 bg-[#C5A059]/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Logo & Info */}
                    <div className="md:col-span-2">
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -1 }}
                            className="flex flex-col items-start gap-0.5 mb-6 group"
                        >
                            <span className="text-[13px] font-black uppercase tracking-[0.3em] text-white group-hover:text-zinc-300 transition-colors">
                                Viezzer
                            </span>
                            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#C5A059]">
                                Assessoria
                            </span>
                        </motion.button>
                        <p className="text-zinc-500 max-w-xs leading-relaxed text-[13px]">
                            Curadoria de elite e assessoria personalizada para suas compras de luxo e atacado.
                            Qualidade garantida em cada lote.
                        </p>

                        {/* Stats */}
                        <div className="mt-8 flex items-center gap-6">
                            <div>
                                <p className="text-xl font-light text-[#C5A059]">2.4k+</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mt-0.5">Membros ativos</p>
                            </div>
                            <div className="w-px h-10 bg-zinc-800" />
                            <div>
                                <p className="text-xl font-light text-[#C5A059]">5+</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mt-0.5">Anos de mercado</p>
                            </div>
                            <div className="w-px h-10 bg-zinc-800" />
                            <div>
                                <p className="text-xl font-light text-[#C5A059]">100%</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mt-0.5">Satisfação</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-[11px] uppercase tracking-[0.25em]">Navegação</h4>
                        <ul className="space-y-3">
                            {navItems.map(({ id, label }) => (
                                <li key={id}>
                                    <motion.button
                                        onClick={() => scrollTo(id)}
                                        whileHover={{ x: 4 }}
                                        className="text-zinc-500 hover:text-[#C5A059] transition-colors text-[13px] flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-[#C5A059] group-hover:w-3 transition-all duration-200" />
                                        {label}
                                    </motion.button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials + Back to top */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-[11px] uppercase tracking-[0.25em]">Contato</h4>
                        <div className="flex gap-3 mb-8">
                            <motion.a
                                href="https://instagram.com/avz.assessoria"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-200"
                            >
                                <IconBrandInstagram size={18} />
                            </motion.a>
                            <motion.a
                                href="https://wa.me/55XXXXXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#25D366] hover:border-[#25D366]/30 transition-all duration-200"
                            >
                                <IconBrandWhatsapp size={18} />
                            </motion.a>
                        </div>

                        {/* Back to top */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -2 }}
                            className="flex items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors text-[11px] uppercase tracking-[0.15em] group"
                        >
                            <div className="w-7 h-7 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
                                <IconArrowUp size={13} />
                            </div>
                            Voltar ao topo
                        </motion.button>
                    </div>
                </div>

                {/* Separador */}
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-700 text-[11px] tracking-[0.15em] uppercase">
                        © {currentYear} Viezzer Assessoria. Todos os direitos reservados.
                    </p>
                    <p className="text-zinc-700 text-[11px] tracking-[0.18em] uppercase">
                        Design by <span className="text-zinc-500">Eric Viezzer</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}