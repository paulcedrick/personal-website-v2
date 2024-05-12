import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type CardProps = HTMLAttributes<HTMLDivElement>;
function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={twMerge("rounded-sm bg-[#222] p-8 text-white", className)}
      {...props}
    />
  );
}

export default Card;
