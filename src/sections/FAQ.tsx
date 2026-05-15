import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus, IconMinus, IconMessageCircleQuestion } from "@tabler/icons-react";

const faqs = [
    {
        question: "Como funciona a assessoria de compras?",
        answer: "Nós atuamos como seus olhos e braços no mercado de luxo e atacado. Selecionamos os melhores fornecedores, negociamos preços exclusivos por volume e cuidamos de toda a logística até a sua porta."
    },
    {
        question: "Quais são as formas de pagamento aceitas?",
        answer: "Aceitamos Pix, transferências bancárias e cartões de crédito. Para compras coletivas, o pagamento é feito diretamente na reserva do seu item no lote."
    },
    {
        question: "É seguro comprar através dos grupos VIP?",
        answer: "Sim, absolutamente. Todos os nossos fornecedores são homologados e cada compra possui seguro total. Além disso, você recebe atualizações em tempo real via WhatsApp sobre o status do seu pedido."
    },
    {
        question: "Quanto tempo demora para eu receber meu produto?",
        answer: "O prazo varia de acordo com o lote e a origem do produto, mas geralmente leva entre 7 a 15 dias úteis após o fechamento do grupo de compra."
    },
    {
        question: "Posso solicitar um item específico que não está nos grupos?",
        answer: "Sim! Oferecemos o serviço de Personal Shopper. Você nos envia o que procura e nossa equipe de curadoria faz a busca pelo melhor preço e procedência garantida."
    }
];

export default function FAQ() {
    return (
        <section className="py-28 bg-[#F5F5F4] px-4">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#C5A059] shadow-[0_4px_16px_rgba(197,160,89,0.15)] mx-auto mb-6"
                    >
                        <IconMessageCircleQuestion size={26} />
                    </motion.div>
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] mb-4">
                        <span className="w-5 h-px bg-[#C5A059]" />
                        Tire suas dúvidas
                        <span className="w-5 h-px bg-[#C5A059]" />
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-zinc-900 mb-4 leading-[1.1] tracking-tight">
                        Dúvidas <span className="font-serif italic text-[#C5A059]">Frequentes</span>
                    </h2>
                    <p className="text-zinc-500 max-w-lg mx-auto text-[15px] leading-relaxed">
                        Tudo o que você precisa saber para comprar com total segurança e tranquilidade.
                    </p>
                </motion.div>

                {/* FAQ List */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                    ))}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-14 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                        <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                        <p className="text-zinc-400 text-[13px]">
                            Ainda tem dúvidas?{" "}
                            <a href="https://wa.me/55XXXXXXXXXXX" className="text-[#C5A059] font-bold hover:underline underline-offset-2">
                                Fale conosco no WhatsApp
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen
                    ? "border-[#C5A059]/30 shadow-[0_4px_24px_rgba(197,160,89,0.1)]"
                    : "border-zinc-100 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:border-zinc-200 hover:shadow-[0_2px_12px_rgba(0,0,0,0.07)]"
                }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors duration-150"
            >
                <div className="flex items-start gap-4">
                    {/* Número */}
                    <span className="text-[11px] font-mono text-zinc-300 mt-0.5 shrink-0 font-medium">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-zinc-900" : "text-zinc-700"}`}>
                        {question}
                    </span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-[#C5A059] text-white" : "bg-zinc-100 text-zinc-400"
                        }`}
                >
                    <IconPlus size={16} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="px-6 pb-6 pl-14 text-[14px] text-zinc-500 leading-relaxed border-t border-zinc-50 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}