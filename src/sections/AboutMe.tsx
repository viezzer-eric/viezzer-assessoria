import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react';

const items = ["Negociação Direta", "Curadoria de Peças", "Logística Segura", "Suporte no WhatsApp"];

const AboutMe = () => {
    return (
        <section className="py-24 bg-white px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* FOTO */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute -top-4 -left-4 w-full h-full border border-[#C5A059] z-0" />
                        <div className="relative z-10 bg-zinc-100 aspect-[4/5] overflow-hidden shadow-2xl">
                            <img
                                src="/sua-foto.jpg"
                                alt="Aline Viezzer — Assessoria"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 bg-zinc-900 text-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hidden sm:block z-20">
                            <p className="text-3xl font-light text-[#C5A059]">05+</p>
                            <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">Anos de experiência</p>
                        </div>
                    </motion.div>

                    {/* TEXTO */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em] block mb-4">
                            A Mentoria por trás dos Lotes
                        </span>
                        <h2 className="text-4xl font-light text-zinc-900 mb-6 leading-tight">
                            Muito prazer, <br />
                            <span className="font-serif italic font-normal">eu sou a Aline Viezzer.</span>
                        </h2>
                        <div className="space-y-6 text-zinc-500 leading-relaxed">
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

                        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {items.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-800 font-medium text-sm">
                                    <CheckCircle2 size={16} className="text-[#C5A059] shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 pt-10 border-t border-zinc-100 flex items-center gap-6">
                            <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors">
                                <IconBrandInstagram size={20} />
                                <span className="text-xs font-bold uppercase tracking-widest">Instagram</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors">
                                <IconBrandWhatsapp size={20} />
                                <span className="text-xs font-bold uppercase tracking-widest">WhatsApp Direct</span>
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;