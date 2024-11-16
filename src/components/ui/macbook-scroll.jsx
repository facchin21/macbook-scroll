import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SpeakerGrid } from "./SpeakerGrid";
import { Trackpad } from "./Trackpad";
import { Keypad } from "./Keypad";
import { Lid } from "./Lid";
import { useText } from "../../hooks/useText";

export const MacbookScroll = ({
    src,
    showGradient,
    title,
    badge
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const [isMobile, setIsMobile] = useState(false);
    const { displayedText: displayTitle } = useText(title);

    useEffect(() => {
        if (window && window.innerWidth < 768) {
            setIsMobile(true);
        }
    }, []);

    const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.5]);
    const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.5]);
    const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
    const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
    const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        (<div
            ref={ref}
            className="min-h-[200vh]  flex flex-col items-center py-0 md:py-80 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100  scale-[0.35] sm:scale-50">
            <motion.h2
                style={{
                    translateY: textTransform,
                    opacity: textOpacity,
                }}
                className="text-white text-5xl font-bold mb-28 text-center">
                {displayTitle || (
                    <span>
                        This Macbook is built with Tailwindcss. <br /> No kidding.
                    </span>
                )}
            </motion.h2>
            {/* Lid */}
            <Lid
                src={src}
                scaleX={scaleX}
                scaleY={scaleY}
                rotate={rotate}
                translate={translate} />
            {/* Base area */}
            <div
                className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
                {/* above keyboard bar */}
                <div className="h-10 w-full relative">
                    <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
                </div>
                <div className="flex relative">
                    <div className="mx-auto w-[10%] overflow-hidden  h-full">
                        <SpeakerGrid />
                    </div>
                    <div className="mx-auto w-[80%] h-full">
                        <Keypad />
                    </div>
                    <div className="mx-auto w-[10%] overflow-hidden  h-full">
                        <SpeakerGrid />
                    </div>
                </div>
                <Trackpad />
                <div
                    className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
                {showGradient && (
                    <div
                        className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50"></div>
                )}
                {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
            </div>
        </div>)
    );
};

