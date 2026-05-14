import { motion } from "framer-motion";
import { IconShieldCheck, IconDiscount2, IconUsers, IconTrophy, IconTruck } from "@tabler/icons-react";


const cardData: Record<string, { title: string; description: string; Icon: any; bg: string; iconBg: string }> = {
    curadoria: {
        title: "Curadoria de Elite",
        description: "Não somos um marketplace aberto. Cada item é testado e selecionado: só entra o que é nota 10.",
        Icon: IconTrophy,
        bg: "bg-white border border-zinc-100 shadow-sm",
        iconBg: "bg-[#C5A059]/10 text-[#C5A059]",
    },
    preco: {
        title: "Preço Real",
        description: '"O preço que você vê é o preço que você paga. Sem taxas surpresas."',
        Icon: IconDiscount2,
        bg: "bg-[#F5F5F4] border border-zinc-200/50",
        iconBg: "bg-white text-[#C5A059] shadow-sm",
    },
    comunidade: {
        title: "+2.4k Membros",
        description: "Pessoas economizando juntas nos grupos de compra.",
        Icon: IconUsers,
        bg: "bg-[#F5F5F4] border border-zinc-200/50",
        iconBg: "bg-white text-[#C5A059] shadow-sm",
    },
    logistica: {
        title: "Logística Transparente",
        description: "Monitoramos cada etapa desde o fornecedor até a sua porta, com seguro total incluso.",
        Icon: IconTruck,
        bg: "bg-white border border-zinc-100 shadow-sm",
        iconBg: "bg-[#C5A059]/10 text-[#C5A059]",
    },
};

const cards = [
    { id: "curadoria", size: "md:col-span-2", isMain: true },
    { id: "preco",     size: "md:col-span-1", isMain: false },
    { id: "comunidade",size: "md:col-span-1", isMain: false },
    { id: "logistica", size: "md:col-span-2", isMain: true },
];

export default function WhyUs() {
    return (
        <section className="py-24 bg-white px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-zinc-900 mb-4">
                        Por que comprar{" "}
                        <span className="font-serif italic text-[#C5A059]">conosco?</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto mb-5">
                        Unimos o poder da comunidade com uma curadoria rigorosa para entregar o que há de melhor.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[280px]">
                    {cards.map((card, index) => {
                        const { title, description, Icon, bg, iconBg } = cardData[card.id];

                        return (
                            <motion.div
                                key={card.id}
                                className={`relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between ${bg} ${card.size}`}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -6, boxShadow: "0 20px 48px -12px rgba(197,160,89,0.2)" }}
                                transition={{
                                    y: { type: "spring", stiffness: 300, damping: 22 },
                                    boxShadow: { duration: 0.25 },
                                    opacity: { duration: 0.4, delay: index * 0.08 },
                                }}
                                viewport={{ once: true }}
                            >
                                {/* Glow de fundo no hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        background: "radial-gradient(circle at 50% 0%, rgba(197,160,89,0.07) 0%, transparent 70%)",
                                    }}
                                />

                                {/* Ícone */}
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${iconBg}`}>
                                    <Icon size={26} />
                                </div>

                                {/* Texto */}
                                <div>
                                    <h3
                                            className={`font-semibold text-zinc-900 mb-2 ${card.isMain ? "text-2xl" : "text-lg"}`}
                                        >
                                            {title}
                                        </h3>
                                    <p
                                            className={`text-zinc-500 leading-relaxed ${card.isMain ? "text-base max-w-md" : "text-sm"}`}
                                        >
                                            {description}
                                        </p>
                                </div>

                                {/* Ícone decorativo de fundo */}
                                <div className="absolute -bottom-6 -right-6 opacity-[0.04] text-zinc-900 pointer-events-none">
                                    <Icon size={130} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}