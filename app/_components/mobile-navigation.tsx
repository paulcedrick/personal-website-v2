import { useSectionTracker } from "@/app/_components/section-tracker";
import { motion } from "framer-motion";

type MobileNavigationProps = {
  isOpen: boolean;
};
function MobileNavigation({ isOpen }: MobileNavigationProps) {
  const { currentSection, sectionRefs } = useSectionTracker();

  return (
    <motion.nav
      className="fixed z-50 flex h-16 w-full items-center bg-zinc-900 px-6 py-2 lg:hidden"
      animate={{ top: isOpen ? "0" : "-100%", transition: { duration: 0.5 } }}
    >
      <select
        className="bg-transparent text-white"
        value={currentSection}
        onChange={(ev) => {
          ev.preventDefault();
          if (ev.target.value === "Experience") {
            sectionRefs.experiences.current?.scrollIntoView({
              behavior: "smooth",
            });
          }

          if (ev.target.value === "Contact") {
            sectionRefs.contact.current?.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
      >
        <option value="Experience">Experience</option>
        <option value="Contact">Contact</option>
      </select>
    </motion.nav>
  );
}

export default MobileNavigation;
