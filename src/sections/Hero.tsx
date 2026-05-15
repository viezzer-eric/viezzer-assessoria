import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Users } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";

// Lazy load pesado só quando necessário
import LogisticFlow from "../components/LogisticFlow";

function HeroContent() {
    return (
        <>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/20 bg-white mb-8 shadow-sm">
                <Users size={14} className="text-[#C5A059]" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600">
                    Compras Coletivas & Atacado
                </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-zinc-900 leading-[1.1] mb-6 md:mb-8 tracking-tight">
                Preço de atacado, <br />
                <span className="font-serif italic text-[#C5A059]">unidade por unidade.</span>
            </h1>

            <p className="text-base md:text-lg text-zinc-500 mb-8 md:mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Fechamos lotes exclusivos direto com fornecedores.
                <br />
                Nós organizamos o grupo e enviamos para sua casa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <a
                    href="#"
                    className="w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white font-bold flex items-center justify-center gap-3 shadow-xl rounded-none active:scale-95 transition-transform"
                >
                    Entrar no Grupo VIP
                    <IconBrandWhatsapp size={20} />
                </a>
            </div>
        </>
    );
}

// Versão mobile: sem sticky, sem scroll tracking, animação por inView
function HeroMobile() {
    return (
        <section className="relative bg-[#F5F5F4] md:hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#C5A059] opacity-5 blur-[120px] pointer-events-none" />
            <div className="px-4 py-20 flex flex-col gap-10 z-10 relative">
                <div className="text-center">
                    <HeroContent />
                </div>
                <LogisticFlow />
            </div>
        </section>
    );
}

// Versão desktop: sticky com scroll tracking
function HeroDesktop() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={sectionRef} className="relative bg-[#F5F5F4] h-[340vh] hidden md:block">
            <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden px-6">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#C5A059] opacity-5 blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-16 items-center z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
                    >
                        <HeroContent />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="w-full"
                    >
                        <LogisticFlow scrollYProgress={scrollYProgress} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default function Hero() {
    return (
        <>
            <HeroMobile />
            <HeroDesktop />
        </>
    );
}