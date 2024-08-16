import ContactFormSection from "@/app/_components/contact-form-section";
import ExperienceList from "@/app/_components/experience-list";
import { memo } from "react";

function Contents() {
  console.log("RERENDERING");
  return (
    <div className="px-6 py-8 lg:absolute lg:right-0 lg:max-w-[600px] lg:py-10 xl:max-w-[736px] xl:px-10 xl:py-24">
      <div className="flex flex-col gap-20">
        <ExperienceList />

        <ContactFormSection />
      </div>
    </div>
  );
}

export default memo(Contents);
