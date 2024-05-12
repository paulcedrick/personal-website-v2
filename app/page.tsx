import ProjectList from "@/app/_components/project-list";
import ExperienceList from "./_components/experience-list";
import Navigation from "@/app/_components/navigation";

export default function Home() {
  return (
    <main className="relative mx-auto flex h-screen max-w-[1440px] justify-between gap-4 overflow-auto scrollbar-hide">
      <div className="fixed left-0 top-0 z-10 h-10 w-full bg-gradient-to-b from-[#222] to-transparent" />

      <div className="fixed flex h-screen max-w-[496px] flex-col justify-between px-10 py-24">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold">Paul Artigo</h1>
            <h2 className="mt-[16px] text-xl font-semibold text-[#eee]">
              Software Engineer @ Twoconnect
            </h2>
            <div className="mt-[40px] flex flex-col gap-4 text-sm">
              <p className="text-[#999]">
                I&apos;m a software engineer based in the Philippines. I work
                not just in frontend but also backend including designing the
                infrastructure. Despite my current role, I consider myself as a{" "}
                <a
                  href="https://posthog.com/blog/product-engineer-vs-software-engineer"
                  target="_blank"
                  className="text-[#eee] underline hover:text-[#fff]"
                >
                  Product Engineer
                </a>
                .
              </p>
              <p className="text-[#999]">
                I&apos;m a software engineer with a passion for web development.
                I tinker not just in frontend but also in backend.
              </p>
            </div>
          </div>

          <Navigation />
        </div>

        <div>Footer</div>
      </div>

      <div className="absolute right-0 px-10 py-24">
        <div className="flex flex-col gap-20">
          <ExperienceList />

          <ProjectList />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 z-10 h-10 w-full bg-gradient-to-t from-[#222] to-transparent" />
    </main>
  );
}
