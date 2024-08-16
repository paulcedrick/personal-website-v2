"use client";
import { useSectionTracker } from "@/app/_components/section-tracker";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  const { onSectionVisible, onSectionLeave, sectionRefs } = useSectionTracker();

  return (
    <motion.div
      className="flex flex-col gap-4 pb-10"
      onViewportEnter={() => onSectionVisible("Contact")}
      onViewportLeave={() => onSectionLeave("Contact")}
      ref={sectionRefs.contact}
    >
      <h2 className="text-lg font-bold tracking-widest" id="contact">
        Keep in touch
      </h2>
      <p className="text-sm">
        Interested in collaborating or have a project you&apos;d like to
        discuss? Feel free to reach out to me at{" "}
        <a
          href="mailto:paulcedrick.artigo@gmail.com"
          className="underline underline-offset-4"
        >
          paulcedrick.artigo@gmail.com
        </a>
        .
      </p>
      <p className="text-sm">
        Ready to bring me on board? View my CV{" "}
        <a
          href="/cv.pdf"
          download="cv.pdf"
          className="underline underline-offset-4"
        >
          here
        </a>
        .
      </p>
    </motion.div>
  );
}
