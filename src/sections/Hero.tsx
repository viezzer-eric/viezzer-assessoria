import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LogisticFlow from "../components/LogisticFlow";
import { Users } from "lucide-react";
import { IconBrandWhatsapp, IconArrowRight } from "@tabler/icons-react";

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={sectionRef} className="relative h-[340vh] bg-[#F5F5F4]">
            <div className="sticky top-0 min-h-screen md:h-screen w-full flex items-center overflow-hidden px-4 py-20 md:py-0">

                {/* Efeito de Glow */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#C5A059] opacity-5 blur-[120px] pointer-events-none" />
                {/* Glow secundário sutil */}
                <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-[#C5A059] opacity-3 blur-[160px] pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center z-10">

                    {/* COLUNA ESQUERDA */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C5A059]/25 bg-white mb-8 shadow-[0_2px_12px_rgba(197,160,89,0.1)]"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
                            <Users size={13} className="text-[#C5A059]" />
                            <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-zinc-600">
                                Compras Coletivas & Atacado
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl md:text-6xl lg:text-7xl font-light text-zinc-900 leading-[1.08] mb-6 md:mb-8 tracking-tight"
                        >
                            Preço de atacado, <br />
                            <span className="font-serif italic text-[#C5A059]">unidade por unidade.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45 }}
                            className="text-base md:text-lg text-zinc-500 mb-10 md:mb-14 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            Fechamos lotes exclusivos direto com fornecedores.
                            <br />
                            Nós organizamos o grupo e enviamos para sua casa.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.55 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="w-full sm:w-auto group relative px-8 py-4 bg-[#25D366] text-white font-bold flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.45)] transition-shadow"
                            >
                                <IconBrandWhatsapp size={20} className="shrink-0" />
                                <span>Entrar no Grupo VIP</span>
                                <motion.div
                                    className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                                >
                                    <IconArrowRight size={16} />
                                </motion.div>
                            </motion.a>

                            {/* Social proof micro */}
                            <div className="flex items-center gap-2.5 text-zinc-400">
                                <div className="flex -space-x-2">
                                    {["M", "A", "C"].map((l, i) => (
                                        <div key={i} className="w-7 h-7 rounded-full bg-zinc-200 border-2 border-[#F5F5F4] flex items-center justify-center text-[9px] font-bold text-zinc-500">
                                            {l}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs text-zinc-500 font-medium">+2.4k membros</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* COLUNA DIREITA */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full"
                    >
                        <LogisticFlow scrollYProgress={scrollYProgress} />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}