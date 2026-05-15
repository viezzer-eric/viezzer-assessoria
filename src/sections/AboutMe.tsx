import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import {
    IconBrandInstagram,
    IconBrandWhatsapp,
} from '@tabler/icons-react';

const AboutMe = () => {
    return (
        <section className="py-28 bg-white px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                    {/* LADO ESQUERDO: FOTO */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        {/* Moldura decorativa — offset maior */}
                        <div className="absolute -top-5 -left-5 w-full h-full border border-[#C5A059]/60 z-0" />
                        {/* Segunda moldura para profundidade */}
                        <div className="absolute -top-2 -left-2 w-full h-full border border-[#C5A059]/20 z-0" />

                        {/* Imagem */}
                        <div className="relative z-10 bg-zinc-100 aspect-[4/5] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                            <img
                                src="/sua-foto.jpg"
                                alt="Assessoria"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
                            />
                            {/* Overlay sutil */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                        </div>

                        {/* Card flutuante — anos de experiência */}
                        <motion.div
                            initial={{ opacity: 0, y: 16, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute -bottom-6 -right-6 bg-zinc-900 text-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] hidden sm:block z-20"
                        >
                            <p className="text-4xl font-light text-[#C5A059] leading-none">05+</p>
                            <p className="text-[9px] uppercase tracking-[0.25em] opacity-60 mt-1">Anos de experiência</p>
                        </motion.div>

                        {/* Detalhe dourado canto superior */}
                        <div className="absolute -top-5 -left-5 w-8 h-8 border-t-2 border-l-2 border-[#C5A059] z-20" />
                        <div className="absolute -bottom-5 -right-5 w-8 h-8 border-b-2 border-r-2 border-[#C5A059] z-20 hidden sm:block" />
                    </motion.div>

                    {/* LADO DIREITO: TEXTO */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.35em] block mb-5 flex items-center gap-2"
                        >
                            <span className="w-6 h-px bg-[#C5A059]" />
                            A Mentoria por trás dos Lotes
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl font-light text-zinc-900 mb-7 leading-[1.1] tracking-tight">
                            Muito prazer, <br />
                            <span className="font-serif italic font-normal">eu sou a Aline Viezzer.</span>
                        </h2>

                        <div className="space-y-5 text-zinc-500 leading-relaxed text-[15px]">
                            <p>
                                Minha missão é democratizar o acesso à moda de qualidade.
                                Percebi que muita gente queria as peças certas, mas o preço do varejo
                                e a logística de entrega eram barreiras constantes.
                            </p>
                            <p>
                                Hoje, eu atuo diretamente na negociação com fornecedores e na
                                organização dos grupos de compra. Eu pessoalmente faço a curadoria
                                de cada lote e garanto que cada peça chegue impecável na sua mão.
                            </p>
                        </div>

                        {/* Checklist */}
                        <ul className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                "Negociação Direta",
                                "Curadoria de Peças",
                                "Logística Segura",
                                "Suporte no WhatsApp"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -8 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                    className="flex items-center gap-3 text-zinc-800 font-medium text-[13px] bg-zinc-50 px-4 py-3 rounded-xl border border-zinc-100"
                                >
                                    <CheckCircle2 size={15} className="text-[#C5A059] shrink-0" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        {/* Redes Sociais */}
                        <div className="mt-10 pt-8 border-t border-zinc-100 flex items-center gap-5">
                            <motion.a
                                href="#"
                                whileHover={{ y: -2 }}
                                className="flex items-center gap-2 text-zinc-400 hover:text-zinc-800 transition-all duration-200 group"
                            >
                                <div className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-zinc-400 group-hover:bg-zinc-50 transition-all">
                                    <IconBrandInstagram size={17} />
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-widest">Instagram</span>
                            </motion.a>
                            <div className="w-px h-5 bg-zinc-200" />
                            <motion.a
                                href="#"
                                whileHover={{ y: -2 }}
                                className="flex items-center gap-2 text-zinc-400 hover:text-zinc-800 transition-all duration-200 group"
                            >
                                <div className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-zinc-400 group-hover:bg-zinc-50 transition-all">
                                    <IconBrandWhatsapp size={17} />
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-widest">WhatsApp</span>
                            </motion.a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;