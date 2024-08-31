import { motion } from "framer-motion";

// Animation Variants
const stairAnimation = {
    initial: {
        top: "0%", // Start from top
    },
    animate: {
        top: "100%", // Animate to the bottom
    },
    exit: {
        top: ["100%","0%"] // Return to top on exit
    },
};

// Reverse index calculation for delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => (
                <motion.div 
                    key={index} 
                    variants={stairAnimation} 
                    initial="initial" 
                    animate="animate" 
                    exit="exit" 
                    transition={{
                        duration: 0.4, 
                        ease: 'easeInOut', 
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-white relative"
                />
            ))}
        </>
    );
}

export default Stairs;
