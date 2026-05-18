"use client";
import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function SmoothScroll({ children }) {
    const [, api] = useSpring(() => ({ y: 0 }));

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            api.start({ y: window.scrollY + e.deltaY * 0.8, immediate: false });
        };

        window.addEventListener("wheel", handleScroll, { passive: false });
        return () => window.removeEventListener("wheel", handleScroll);
    }, [api]);

    return <animated.div style={{}}>{children}</animated.div>;
}
