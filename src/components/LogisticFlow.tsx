import { useRef, useState, useEffect } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
    useMotionValue,
    animate,
    useInView,
} from 'framer-motion';
import {
    IconBrandWhatsapp,
    IconUsersGroup,
    IconPackageExport,
    IconTruckDelivery,
    IconCheck,
    IconSend,
    IconStar,
} from '@tabler/icons-react';

interface LogisticFlowProps {
    scrollYProgress?: MotionValue<number>;
}

// Pontos de gatilho de cada step
const STEP1 = 0.05;
const STEP2 = 0.28;
const STEP3 = 0.51;
const STEP4 = 0.75;

export default function LogisticFlow({ scrollYProgress: externalScrollYProgress }: LogisticFlowProps = {}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });
    const isMobile = !externalScrollYProgress; // se não recebeu prop, é mobile
    const autoProgress = useMotionValue(0);

    // No mobile anima automaticamente quando entra na tela
    useEffect(() => {
        if (isMobile && isInView) {
            animate(autoProgress, 1, {
                duration: 3,
                ease: 'easeInOut',
                delay: 0.4,
            });
        }
    }, [isMobile, isInView, autoProgress]);

    const { scrollYProgress: internalScrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    const rawProgress = isMobile ? autoProgress : (externalScrollYProgress || internalScrollYProgress);

    // Spring mais leve — menos damping para resposta mais rápida
    const smoothProgress = useSpring(rawProgress, { stiffness: 80, damping: 28, restDelta: 0.001 });

    const scaleY = useTransform(smoothProgress, [STEP1, STEP4], [0, 1]);
    const truckY = useTransform(smoothProgress, [STEP1, STEP4], [0, 288]);

    const step1Active = useTransform(smoothProgress, [0, STEP1], [1, 1]);
    const step2Active = useTransform(smoothProgress, [STEP2 - 0.1, STEP2], [0, 1]);
    const step3Active = useTransform(smoothProgress, [STEP3 - 0.1, STEP3], [0, 1]);
    const step4Active = useTransform(smoothProgress, [STEP4 - 0.1, STEP4], [0, 1]);

    return (
        <div className="w-full flex items-center justify-center py-6 md:py-20">
            <div
                ref={containerRef}
                className="bg-white border border-zinc-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] p-6 md:p-10 relative overflow-hidden w-full rounded-2xl max-w-lg"
            >
                <div className="mb-8 md:mb-12">
                    <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1">
                        Status da Logística
                    </h3>
                    <p className="text-xl md:text-2xl font-light text-zinc-900">Acompanhe o processo</p>
                </div>

                <div className="relative">
                    {/* Trilha de fundo */}
                    <div className="absolute left-[23px] top-6 h-[288px] w-[2px] bg-zinc-50" />
                    {/* Trilha animada */}
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
                            isFinal
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

interface StepProps {
    activeProgress: MotionValue<number>;
    icon: React.ReactNode;
    title: string;
    desc: string;
    activeColor?: string;
    isFinal?: boolean;
}

function Step({ activeProgress, icon, title, desc, activeColor = '#C5A059', isFinal = false }: StepProps) {
    // Usar useState + useEffect em vez de múltiplos useTransform encadeados
    const [active, setActive] = useState(() => activeProgress.get() > 0.6);

    useEffect(() => {
        // Sync initial value
        setActive(activeProgress.get() > 0.6);
        const unsub = activeProgress.on('change', (v) => {
            setActive(v > 0.6);
        });
        return unsub;
    }, [activeProgress]);

    return (
        <div className="flex items-start gap-8 text-left h-12">
            <div
                className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center relative border border-white shadow-sm transition-colors duration-500"
                style={{ backgroundColor: active ? activeColor : '#f4f4f5', color: active ? '#fff' : '#a1a1aa' }}
            >
                <div
                    className="absolute transition-opacity duration-300"
                    style={{ opacity: active ? 0 : 1 }}
                >
                    {icon}
                </div>
                <div
                    className="absolute transition-opacity duration-300"
                    style={{ opacity: active ? 1 : 0 }}
                >
                    {isFinal
                        ? <IconSend size={22} fill="currentColor" />
                        : <IconCheck size={24} strokeWidth={3} />
                    }
                </div>
                
                {isFinal && active && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        {[...Array(5)].map((_, i) => {
                            const angle = (i / 5) * Math.PI * 2;
                            const radius = 35; // Distância do centro (fora da bolinha de 48px)
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5, x, y, rotate: 0 }}
                                    animate={{
                                        opacity: [0, 1, 0],
                                        scale: [0.5, 1.2, 0.5],
                                        rotate: [0, 180],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "easeInOut",
                                        delay: i * 0.4,
                                    }}
                                    className="absolute text-[#C5A059]"
                                >
                                    <IconStar size={14} fill="currentColor" />
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>

            <div
                className="pt-1 flex flex-col justify-center transition-opacity duration-500"
                style={{ opacity: active ? 1 : 0.4 }}
            >
                <p className="text-base font-bold text-zinc-900 uppercase tracking-tight leading-none">{title}</p>
                <p className="text-sm text-zinc-500 mt-1">{desc}</p>
            </div>
        </div>
    );
}