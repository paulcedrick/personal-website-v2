import { motion, useInView } from "framer-motion";
import { HTMLAttributes, useRef } from "react";
import { twMerge } from "tailwind-merge";

type FadingCardProps = {
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function FadingCard(props: FadingCardProps) {
  const { className, children, onMouseEnter, onMouseLeave, onClick } = props;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    rest: { scale: 1, transition: { duration: 0 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileHover="hover"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants}
      className={twMerge(
        "flex transform flex-col gap-4",
        "rounded-sm bg-[#222] p-8 text-white",
        className,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
