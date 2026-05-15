import { motion } from "framer-motion";
import { IconDiscount2, IconUsers, IconTrophy, IconTruck } from "@tabler/icons-react";


const cardData: Record<string, { title: string; description: string; Icon: any; bg: string; iconBg: string; iconColor: string }> = {
    curadoria: {
        title: "Curadoria de Elite",
        description: "Não somos um marketplace aberto. Cada item é testado e selecionado: só entra o que é nota 10.",
        Icon: IconTrophy,
        bg: "bg-white border border-zinc-100",
        iconBg: "bg-[#C5A059]/10 text-[#C5A059]",
        iconColor: "#C5A059",
    },
    preco: {
        title: "Preço Real",
        description: '"O preço que você vê é o preço que você paga. Sem taxas surpresas."',
        Icon: IconDiscount2,
        bg: "bg-[#F5F5F4] border border-zinc-200/60",
        iconBg: "bg-white text-[#C5A059] shadow-sm",
        iconColor: "#C5A059",
    },
    comunidade: {
        title: "+2.4k Membros",
        description: "Pessoas economizando juntas nos grupos de compra.",
        Icon: IconUsers,
        bg: "bg-[#F5F5F4] border border-zinc-200/60",
        iconBg: "bg-white text-[#C5A059] shadow-sm",
        iconColor: "#C5A059",
    },
    logistica: {
        title: "Logística Transparente",
        description: "Monitoramos cada etapa desde o fornecedor até a sua porta, com seguro total incluso.",
        Icon: IconTruck,
        bg: "bg-white border border-zinc-100",
        iconBg: "bg-[#C5A059]/10 text-[#C5A059]",
        iconColor: "#C5A059",
    },
};

const cards = [
    { id: "curadoria", size: "md:col-span-2", isMain: true },
    { id: "preco", size: "md:col-span-1", isMain: false },
    { id: "comunidade", size: "md:col-span-1", isMain: false },
    { id: "logistica", size: "md:col-span-2", isMain: true },
];

export default function WhyUs() {
    return (
        <section className="py-28 bg-white px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] mb-5">
                        <span className="w-5 h-px bg-[#C5A059]" />
                        Nossos diferenciais
                        <span className="w-5 h-px bg-[#C5A059]" />
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-zinc-900 mb-4 tracking-tight leading-[1.1]">
                        Por que comprar{" "}
                        <span className="font-serif italic text-[#C5A059]">conosco?</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto text-[15px] leading-relaxed">
                        Unimos o poder da comunidade com uma curadoria rigorosa para entregar o que há de melhor.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:auto-rows-[280px]">
                    {cards.map((card, index) => {
                        const { title, description, Icon, bg, iconBg } = cardData[card.id];

                        return (
                            <motion.div
                                key={card.id}
                                className={`group relative overflow-hidden rounded-2xl p-8 flex flex-col justify-between ${bg} ${card.size} shadow-[0_1px_3px_rgba(0,0,0,0.06)]`}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 16px 48px -8px rgba(197,160,89,0.18), 0 2px 8px rgba(0,0,0,0.06)"
                                }}
                                transition={{
                                    y: { type: "spring", stiffness: 320, damping: 24 },
                                    boxShadow: { duration: 0.2 },
                                    opacity: { duration: 0.4, delay: index * 0.08 },
                                }}
                                viewport={{ once: true }}
                            >
                                {/* Hover glow */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                                    style={{
                                        background: "radial-gradient(ellipse at 20% 0%, rgba(197,160,89,0.06) 0%, transparent 60%)",
                                    }}
                                />

                                {/* Linha decorativa topo */}
                                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Ícone */}
                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${iconBg} transition-transform duration-300 group-hover:scale-110`}>
                                    <Icon size={22} />
                                </div>

                                {/* Texto */}
                                <div>
                                    <h3 className={`font-semibold text-zinc-900 mb-2.5 tracking-tight ${card.isMain ? "text-2xl" : "text-lg"}`}>
                                        {title}
                                    </h3>
                                    <p className={`text-zinc-500 leading-relaxed ${card.isMain ? "text-[15px] max-w-md" : "text-[13px]"}`}>
                                        {description}
                                    </p>
                                </div>

                                {/* Ícone decorativo de fundo */}
                                <div className="absolute -bottom-8 -right-8 opacity-[0.035] text-zinc-900 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                    <Icon size={130} />
                                </div>

                                {/* Número de ordem sutil */}
                                <div className="absolute top-6 right-7 text-[11px] font-mono text-zinc-300 font-medium">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}