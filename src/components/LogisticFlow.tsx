import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import {
    IconBrandWhatsapp,
    IconUsersGroup,
    IconPackageExport,
    IconTruckDelivery,
    IconCheck,
    IconSend,
    IconStarFilled
} from '@tabler/icons-react';

interface LogisticFlowProps {
    scrollYProgress?: MotionValue<number>;
}

export default function LogisticFlow({ scrollYProgress: externalScrollYProgress }: LogisticFlowProps = {}) {
    const containerRef = useRef<HTMLDivElement>(null);

    // 1. PERFORMANCE: Usamos o targetRef para que o progresso 
    // seja relativo apenas a esta seção, evitando cálculos globais desnecessários.
    const { scrollYProgress: internalScrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"] // Começa quando o topo entra no meio, termina quando o fim chega no meio
    });

    const progressToUse = externalScrollYProgress || internalScrollYProgress;

    // 2. SUAVE E RESPONSIVO: Spring com menos damping para evitar o "atraso" visual
    const smoothProgress = useSpring(progressToUse, { stiffness: 70, damping: 25 });

    // Distribuímos as 4 etapas ao longo do scroll (terminando em 0.75 para dar tempo de pausa no final)
    const STEP1 = 0.05;
    const STEP2 = 0.28;
    const STEP3 = 0.51;
    const STEP4 = 0.75;

    // 3. O CAMINHO DO CAMINHÃO: 
    // Distância exata de 4 ícones com gap 12 é 288px.
    const scaleY = useTransform(smoothProgress, [STEP1, STEP4], [0, 1]);
    const truckY = useTransform(smoothProgress, [STEP1, STEP4], [0, 288]);

    // Gatilhos para os Checks
    const step1Active = useTransform(smoothProgress, [0, STEP1], [1, 1]);
    const step2Active = useTransform(smoothProgress, [STEP2 - 0.1, STEP2], [0, 1]);
    const step3Active = useTransform(smoothProgress, [STEP3 - 0.1, STEP3], [0, 1]);
    const step4Active = useTransform(smoothProgress, [STEP4 - 0.1, STEP4], [0, 1]);

    return (
        <div className="w-full flex items-center justify-center py-6 md:py-20">
            <motion.div
                ref={containerRef}
                className="bg-white border border-zinc-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] p-6 md:p-10 relative overflow-hidden w-full rounded-2xl max-w-lg"
            >
                <div className="mb-8 md:mb-12">
                    <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1">Status da Logística</h3>
                    <p className="text-xl md:text-2xl font-light text-zinc-900">Acompanhe o processo</p>
                </div>

                <div className="relative">
                    {/* Linhas de trilha */}
                    <div className="absolute left-[23px] top-6 h-[288px] w-[2px] bg-zinc-50" />
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-[23px] top-6 h-[288px] w-[2px] bg-[#C5A059] z-10 origin-top"
                    />

                    {/* Caminhão */}
                    <motion.div
                        style={{ y: truckY }}
                        className="absolute left-[13px] top-4 z-20 bg-white p-1 rounded-full border border-[#C5A059] text-[#C5A059] shadow-md"
                    >
                        <IconTruckDelivery size={18} />
                    </motion.div>

                    {/* Conteiner dos Steps */}
                    <div className="space-y-12 relative z-30">
                        <Step activeProgress={step1Active} icon={<IconBrandWhatsapp size={22} />} title="1. Pedido" desc="Reserva via WhatsApp." />
                        <Step activeProgress={step2Active} icon={<IconUsersGroup size={22} />} title="2. Grupo" desc="Volume de atacado atingido." />
                        <Step activeProgress={step3Active} icon={<IconPackageExport size={22} />} title="3. Separação" desc="Separação e conferência." />
                        <Step 
                            activeProgress={step4Active} 
                            icon={<IconSend size={22} />} 
                            title="4. Envio" 
                            desc="Despacho direto para você." 
                            activeColor="#10b981" 
                            isHeart={true} 
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function Step({ activeProgress, icon, title, desc, activeColor = "#C5A059", showStars = false }: any) {
    const bgColor = useTransform(activeProgress, [0, 1], ["#f4f4f5", activeColor]);
    const textColor = useTransform(activeProgress, [0, 1], ["#a1a1aa", "#ffffff"]);

    const checkOpacity = useTransform(activeProgress, [0.6, 0.9], [0, 1]);
    const iconOpacity = useTransform(activeProgress, [0.1, 0.4], [1, 0]);

    return (
        <div className="flex items-start gap-8 text-left h-12">
            <motion.div
                style={{ backgroundColor: bgColor, color: textColor }}
                className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center relative border border-white shadow-sm"
            >
                {/* Estrelas Douradas Cintilantes */}
                {showStars && (
                    <motion.div
                        style={{ opacity: checkOpacity }} // Só aparece quando o passo está ativo
                        className="absolute inset-0 pointer-events-none"
                    >
                        <motion.div
                            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: [0, 90] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                            className="absolute -top-2 -left-2 text-[#C5A059]"
                        >
                            <IconStarFilled size={12} />
                        </motion.div>
                        <motion.div
                            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: [0, -90] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                            className="absolute -top-1 -right-3 text-[#C5A059]"
                        >
                            <IconStarFilled size={14} />
                        </motion.div>
                        <motion.div
                            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: [0, 45] }}
                            transition={{ duration: 2.2, repeat: Infinity, delay: 1 }}
                            className="absolute -bottom-2 -left-4 text-[#C5A059]"
                        >
                            <IconStarFilled size={10} />
                        </motion.div>
                        <motion.div
                            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: [0, -45] }}
                            transition={{ duration: 1.8, repeat: Infinity, delay: 0.2 }}
                            className="absolute -bottom-1 -right-2 text-[#C5A059]"
                        >
                            <IconStarFilled size={12} />
                        </motion.div>
                    </motion.div>
                )}

                <motion.div 
                    style={{ opacity: iconOpacity }} 
                    animate={showStars ? { scale: [1, 1.15, 1] } : {}}
                    transition={showStars ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : {}}
                    className="absolute"
                >
                    {icon}
                </motion.div>
                <motion.div 
                    style={{ opacity: checkOpacity }} 
                    animate={showStars ? { scale: [1, 1.15, 1] } : {}}
                    transition={showStars ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : {}}
                    className="absolute"
                >
                    {showStars ? <IconSend size={22} fill="currentColor" /> : <IconCheck size={24} stroke={3} />}
                </motion.div>
            </motion.div>

            <motion.div
                style={{ opacity: useTransform(activeProgress, [0, 1], [0.4, 1]) }}
                className="pt-1 flex flex-col justify-center"
            >
                <p className="text-base font-bold text-zinc-900 uppercase tracking-tight leading-none">{title}</p>
                <p className="text-sm text-zinc-500 mt-1">{desc}</p>
            </motion.div>
        </div>
    );
}