import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus, IconMinus, IconQuestionMark } from "@tabler/icons-react";

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
        <section className="py-24 bg-[#F5F5F4] px-4">
            <div className="max-w-3xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#C5A059] shadow-sm mx-auto mb-6"
                    >
                        <IconQuestionMark size={28} />
                    </motion.div>
                    <h2 className="text-4xl font-light text-zinc-900 mb-4">
                        Dúvidas <span className="font-serif italic text-[#C5A059]">Frequentes</span>
                    </h2>
                    <p className="text-zinc-500 max-w-lg mx-auto">
                        Tudo o que você precisa saber para comprar com total segurança e tranquilidade.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
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
                    className="mt-16 text-center"
                >
                    <p className="text-zinc-400 text-sm">
                        Ainda tem dúvidas? <a href="https://wa.me/55XXXXXXXXXXX" className="text-[#C5A059] font-bold hover:underline">Fale conosco no WhatsApp</a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-50/50 transition-colors"
            >
                <span className="text-lg font-medium text-zinc-900 pr-8">{question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#C5A059] text-white rotate-180' : 'bg-zinc-100 text-zinc-400'}`}>
                    {isOpen ? <IconMinus size={18} /> : <IconPlus size={18} />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-zinc-500 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
