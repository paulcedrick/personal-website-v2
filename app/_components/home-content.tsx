"use client";

import ArticleList from "@/app/_components/article-list";
import ContactSection from "@/app/_components/contact-form-section";
import ExperienceList from "@/app/_components/experience-list";
import Footer from "@/app/_components/footer";
import Navigation from "@/app/_components/navigation";
import ProjectList from "@/app/_components/project-list";
import Sidebar from "@/app/_components/sidebar";
import { useSectionTracker } from "@/app/_components/section-tracker";
import { motion } from "framer-motion";

type Article = {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  href: string;
};

type HomeContentProps = {
  articles: Article[];
};

export default function HomeContent({ articles }: HomeContentProps) {
  const { sectionRefs } = useSectionTracker();

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[2fr_3fr] xl:grid-cols-[minmax(320px,420px)_1fr]">
      {/* Desktop Sidebar - sticky, vertically centered */}
      <aside className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:flex-col lg:justify-center lg:px-12 xl:px-16 bg-bg-elevated border-r border-border-subtle">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <main>
        {/* Mobile Navigation - hidden on desktop */}
        <div className="lg:hidden">
          <Navigation />
        </div>

        {/* Scrollable Content */}
        <div className="px-6 pb-24 pt-32 md:px-8 lg:pt-20 lg:pb-16 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-3xl lg:max-w-[750px]">
            {/* Hero Section - Mobile only (desktop shows in sidebar) */}
            <section className="mb-32 md:mb-40 lg:hidden">
              <motion.h1
                className="font-serif text-display text-text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Paul Artigo
              </motion.h1>

              <motion.p
                className="mt-4 text-lg text-text-muted"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Software Engineer
              </motion.p>

              <motion.div
                className="mt-8 max-w-xl space-y-4 text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <p>
                  I&apos;m a software engineer based in the Philippines. I work not
                  just in frontend but also backend including designing the
                  infrastructure. Despite my current role, I consider myself as a{" "}
                  <a
                    href="https://posthog.com/blog/product-engineer-vs-software-engineer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors duration-200 underline underline-offset-4"
                  >
                    Product Engineer
                  </a>
                  .
                </p>
              </motion.div>
            </section>

            {/* Experiences Section */}
            <section
              ref={sectionRefs.experiences}
              id="experiences"
              className="mb-32 md:mb-40 scroll-mt-24 lg:scroll-mt-12"
            >
              <motion.h2
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Experiences
              </motion.h2>
              <ExperienceList />
            </section>

            {/* Writing Section */}
            <section
              ref={sectionRefs.writing}
              id="writing"
              className="mb-32 md:mb-40 scroll-mt-24 lg:scroll-mt-12"
            >
              <motion.h2
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Writing
              </motion.h2>
              <ArticleList articles={articles} />
            </section>

            {/* Projects Section */}
            <section
              ref={sectionRefs.projects}
              id="projects"
              className="mb-32 md:mb-40 scroll-mt-24 lg:scroll-mt-12"
            >
              <motion.h2
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Projects
              </motion.h2>
              <ProjectList />
            </section>

            {/* Contact Section */}
            <section
              ref={sectionRefs.contact}
              id="contact"
              className="mb-24 scroll-mt-24 lg:scroll-mt-12"
            >
              <ContactSection />
            </section>

            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
