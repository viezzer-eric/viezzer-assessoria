import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LogisticFlow from "../components/LogisticFlow";
import { Users } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    return (
        /* 
           1. A PISTA: O container pai tem 200vh. 
           Isso define quanto tempo o usuário vai scrollar para a animação do caminhão rodar.
        */
        <section ref={sectionRef} className="relative h-[340vh] bg-[#F5F5F4]">

            {/* 2. O PALCO: sticky top-0 e min-h-screen mantém tudo travado na tela enquanto o caminhão desce */}
            <div className="sticky top-0 min-h-screen md:h-screen w-full flex items-center overflow-hidden px-4 py-20 md:py-0">

                {/* Efeito de Glow ao fundo */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#C5A059] opacity-5 blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center z-10">

                    {/* COLUNA ESQUERDA: Mantive exatamente seus textos e estilos */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
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
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white font-bold flex items-center justify-center gap-3 shadow-xl rounded-none"
                            >
                                Entrar no Grupo VIP
                                <IconBrandWhatsapp size={20} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* COLUNA DIREITA: LogisticFlow agora tem espaço para brilhar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full"
                    >
                        <LogisticFlow scrollYProgress={scrollYProgress} />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}