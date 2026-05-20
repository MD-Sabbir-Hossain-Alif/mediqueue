import { useInView, animated } from "@react-spring/web";

const ScrollAnimation = ({ children }) => {
    const [ref, springs] = useInView(() => ({
        from: { opacity: 0, transform: "translateY(40px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: { tension: 170, friction: 26 },
    }));

    return (
        <animated.div ref={ref} style={springs}>
            {children}
        </animated.div>
    );
};
export default ScrollAnimation;
