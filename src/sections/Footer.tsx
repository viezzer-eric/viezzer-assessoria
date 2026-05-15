import { motion } from "framer-motion";
import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-zinc-950 text-white pt-20 pb-[calc(5rem+env(safe-area-inset-bottom))] px-4 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Logo & Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2.5 mb-6">
                            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-white">
                                Viezzer
                            </span>
                            <div className="w-[1px] h-4 bg-[#C5A059]/60" />
                            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#C5A059]">
                                Assessoria
                            </span>
                        </div>
                        <p className="text-zinc-500 max-w-xs leading-relaxed text-sm">
                            Curadoria de elite e assessoria personalizada para suas compras de luxo e atacado.
                            Qualidade garantida em cada lote.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navegação</h4>
                        <ul className="space-y-4">
                            {["hero", "sobre", "depoimentos", "diferenciais", "faq"].map((id) => (
                                <li key={id}>
                                    <button
                                        onClick={() => scrollTo(id)}
                                        className="text-zinc-500 hover:text-[#C5A059] transition-colors text-sm capitalize"
                                    >
                                        {id === "hero" ? "Início" : id === "faq" ? "Dúvidas" : id}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <motion.a
                                href="https://instagram.com/avz.assessoria"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -4, color: "#C5A059" }}
                                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 transition-colors"
                            >
                                <IconBrandInstagram size={20} />
                            </motion.a>
                            <motion.a
                                href="https://wa.me/55XXXXXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -4, color: "#25D366" }}
                                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 transition-colors"
                            >
                                <IconBrandWhatsapp size={20} />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-600 text-xs tracking-wider">
                        © {currentYear} VIEZZER ASSESSORIA. TODOS OS DIREITOS RESERVADOS.
                    </p>
                    <p className="text-zinc-600 text-[10px] tracking-[0.2em] uppercase">
                        Design by <span className="text-zinc-400">Eric Viezzer</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
