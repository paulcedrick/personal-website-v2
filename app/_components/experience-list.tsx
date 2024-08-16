"use client";

import { useSectionTracker } from "@/app/_components/section-tracker";
import { motion } from "framer-motion";
import { useState } from "react";
import ExperienceCard from "./experience-card";

const experiences = [
  {
    id: Math.random().toString(36).substring(7),
    dateRange: "2024 - Present",
    company: "Twoconnect",
    title: "Software Engineer",
    description:
      "I am modernizing the backend of a child care system product, focusing on integrating with state education departments, migrating from Ruby to Node.js, developing new features, improving performance, ensuring data security, collaborating with frontend developers, and providing technical guidance. I am responsible for the overall architecture and design of the backend system, as well as the development and maintenance of the backend codebase.",
    highlights: [
      {
        title: "Backend Modernization",
        description:
          "Spearheading efforts to update and improve the backend infrastructure of a child care system product, leading to enhanced performance, scalability, and maintainability. I have successfully migrated key components to Node.js using the NestJS framework, resulting in a more efficient and flexible system.",
      },
      {
        title: "Integration Specialist",
        description:
          "Creating and managing jobs to ensure smooth integration with a state's Department of Education, streamlining data exchange and processes. I have developed robust data mapping and transformation logic to ensure accurate and timely data transfer.",
      },
      {
        title: "Technology Migration",
        description:
          "Leading the transition from Ruby to Node.js, utilizing NestJS framework, modernizing the technology stack for increased efficiency and development agility. I have successfully migrated core business logic and services to Node.js, improving code readability and maintainability.",
      },
      {
        title: "Full-Stack Development",
        description:
          "Contributing to both backend and frontend features, showcasing versatility and proficiency in multiple technologies. I have collaborated closely with the frontend team to ensure seamless integration and optimal user experience.",
      },
      {
        title: "Quality Assurance",
        description:
          "Implementing automated testing (unit and integration tests) to ensure the robustness and reliability of the new backend system. I have established a comprehensive test suite that covers critical functionalities and edge cases, improving code quality and reducing defects.",
      },
      {
        title: "Performance Optimization",
        description:
          "Focusing on optimizing endpoints to improve application speed and user experience. I have conducted thorough performance profiling and identified bottlenecks, implementing targeted optimizations to significantly reduce response times.",
      },
    ],
    technologies: ["Node.js", "NestJS", "TypeScript", "AWS", "React", "Nextjs"],
  },
  {
    id: Math.random().toString(36).substring(7),
    dateRange: "2022-2024",
    company: "Kroma Entertainment",
    title: "Senior Software Engineer",
    description:
      "I spearheaded the development of a real-time audience interaction platform, architecting its foundation and curating the optimal tech stack. This innovative solution, akin to a streamlined Twitch, empowered our clients to dynamically engage with their audience through polls, questions, and live chat. I adeptly navigated the complexities of real-time data processing and scaling, while optimizing database performance to meet the platform's demanding requirements. Through this project, I become more proficient practitioner in AWS serverless technologies.",
    highlights: [
      {
        title: "Product Development & Architecture",
        description:
          "Led the design and implementation of a real-time interactive product, from conceptualization to deployment. Demonstrated strong problem-solving and critical thinking skills in architecting a scalable and resilient solution.",
      },
      {
        title: "Tech Stack Selection",
        description:
          "Curated a robust tech stack that aligned with project goals and constraints, considering factors such as performance, cost-efficiency, and maintainability. Successfully evaluated and integrated various technologies to create a cohesive and efficient system.",
      },
      {
        title: "Serverless Architecture",
        description:
          "Leveraged AWS serverless technology to build a cost-effective, scalable, and secure infrastructure. Proactively managed infrastructure provisioning, deployment, and scaling to ensure optimal performance and reliability.",
      },
      {
        title: "Real-Time Data Processing",
        description:
          "Developed and implemented efficient algorithms and data structures to handle high-volume, low-latency data processing. Successfully optimized system performance to meet real-time requirements and deliver a seamless user experience.",
      },
      {
        title: "Database Optimization",
        description:
          "Designed and implemented database schemas, indexes, and query optimization strategies to improve data retrieval and update performance. Collaborated with database administrators to fine-tune database configurations and troubleshoot performance issues.",
      },
      {
        title: "AWS Cloud Proficiency",
        description:
          "Gained extensive hands-on experience with AWS, particularly in serverless technologies",
      },
    ],
    technologies: ["React", "Node.js", "AWS", "Serverless", "Typescript"],
  },
  {
    id: Math.random().toString(36).substring(7),
    dateRange: "2021",
    company: "Freelance",
    title: "Full Stack Developer",
    description:
      "I have been deeply involved in the development and enhancement of a hotel management system tailored for the Japanese market. This experience has exposed me to a wide range of technical challenges and provided valuable insights into the hotel industry's operational needs. This project has equipped me with the technical expertise and strategic mindset to tackle complex challenges in software development and system optimization. I am confident in my ability to contribute to future projects that require technical proficiency, innovative problem-solving, and effective collaboration.",
    highlights: [
      {
        title: "Modernization of Technology Stack",
        description:
          "Successfully transitioned the system from JavaScript to TypeScript, improving code maintainability, reliability, and scalability. This involved refactoring existing code, implementing type checking, and leveraging TypeScript's advanced features to enhance code quality and developer productivity.",
      },
      {
        title: "Containerization and Orchestration",
        description:
          "Implemented Docker and Kubernetes to streamline deployment, management, and scaling of system components. This included designing container images, defining Kubernetes resources, and implementing CI/CD pipelines for automated deployments.",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description:
          "Developed a flexible RBAC system, allowing users to create roles and assign permissions aligned with their organizational needs. This involved designing the RBAC model, implementing role and permission management, and integrating RBAC with the system's authentication and authorization mechanisms.",
      },
      {
        title: "Dynamic Feature Visibility",
        description:
          "Enabled the system to show or hide features based on user roles and permissions, delivering a customized user experience. This involved developing a flexible feature configuration system, implementing role-based feature visibility logic, and ensuring seamless user experience across different roles and permissions.",
      },
      {
        title: "Mentorship and Teamwork",
        description:
          "Actively assisted and mentored colleagues, particularly in React best practices for frontend development. This included conducting code reviews, providing technical guidance, and facilitating knowledge sharing within the team.",
      },
      {
        title: "Strategic Thinking",
        description:
          "Gained valuable experience in modernizing legacy systems and developing effective strategies for system improvement. This involved analyzing system requirements, identifying modernization opportunities, and collaborating with stakeholders to define a roadmap for system enhancement.",
      },
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Kubernetes",
      "Docker",
      "GCP",
    ],
  },
  {
    id: Math.random().toString(36).substring(7),
    dateRange: "2017-2020",
    company: "uGroop",
    title: "Full Stack Developer",
    description:
      "I specialize in developing a comprehensive school trip management platform tailored for the Australian market. This product streamlines the trip planning process for schools, facilitates seamless communication with parents, and efficiently manages participant information. My contributions span various facets of the platform, including trip statistics, event data management, and real-time communication. Overall, this experience has significantly contributed to my growth as a software engineer. Working alongside talented colleagues has elevated the quality of my code, and I've gained valuable insights into Test-Driven Development (TDD) practices for both frontend and backend development.",
    highlights: [
      {
        title: "GraphQL Integration",
        description:
          "I was instrumental in introducing GraphQL (leveraging AWS Appsync and Apollo Client) to our tech stack. This enabled the development of a feature to display comprehensive trip statistics, providing valuable insights for school administrators.",
      },
      {
        title: "Full-stack Development",
        description:
          "I contributed to multiple services within the product ecosystem. I maintained a .NET service responsible for delivering event data essential for trip planning, and a Node.js-based aggregator service that orchestrated data flow.",
      },
      {
        title: "Push Notification Implementation",
        description:
          "I implemented robust push notifications using Firebase Cloud Messaging, ensuring timely communication with parents and participants regarding trip updates and important announcements.",
      },
      {
        title: "Tech Lead Role",
        description:
          "I took on a proactive role in technology research and evaluation, identifying suitable tech stacks to address evolving product requirements. My responsibilities included conducting thorough assessments and presenting recommendations to the engineering lead, influencing technology adoption decisions.",
      },
      {
        title: "Collaborative Problem-Solving",
        description:
          "I actively collaborated with cross-functional teams to overcome technical challenges and deliver high-quality solutions. My ability to effectively communicate technical concepts and collaborate with non-technical stakeholders was instrumental in project success.",
      },
    ],
    technologies: ["React", "Node.js", "GraphQL", "Firebase", "AWS", ".NET"],
  },
  {
    id: Math.random().toString(36).substring(7),
    dateRange: "2014-2019",
    company: "Freelance",
    title: "Freelance Web Developer",
    description:
      "My freelance career has been a journey of diverse project development, spanning from crafting WordPress websites to architecting robust backend APIs with Node.js and constructing dynamic web applications using React. This hands-on experience has not only solidified my technical expertise but also cultivated a comprehensive skill set encompassing time management, negotiation, resource optimization, project leadership, effective client communication, and contract management. By immersing myself in the world of freelancing, I've honed my ability to translate complex technical concepts into actionable solutions that meet client needs. Additionally, I've cultivated a keen eye for emerging technologies, enabling me to stay at the forefront of industry advancements and leverage them to create innovative and effective solutions. Overall, my freelance experience has equipped me with a well-rounded skill set, making me a versatile and adaptable software engineer. I am confident in my ability to deliver high-quality solutions, build strong client relationships, and drive project success.",
    highlights: [
      {
        title: "Technical Proficiency",
        description:
          "Demonstrated expertise in WordPress, Node.js, React, and API development through the successful completion of multiple projects.",
      },
      {
        title: "Client-Centric Approach",
        description:
          "Proven ability to effectively communicate complex technical concepts to clients and tailor solutions to their specific needs.",
      },
      {
        title: "Contractual Expertise",
        description:
          "Demonstrated proficiency in crafting and negotiating contracts that protect client interests and mitigate risks.",
      },
      {
        title: "Technological Innovation",
        description:
          "Actively explored and evaluated emerging technologies, identifying opportunities for integration into projects and staying ahead of industry trends.",
      },
      {
        title: "Problem-Solving Acumen",
        description:
          "Consistently demonstrated the ability to analyze complex problems, develop creative solutions, and implement them effectively.",
      },
      {
        title: "Continuous Learning",
        description:
          "Maintained a strong commitment to professional development by staying updated on the latest industry trends and technologies.",
      },
      {
        title: "Adaptability",
        description:
          "Proven ability to thrive in a fast-paced, dynamic environment and quickly adapt to changing project requirements.",
      },
    ],
    technologies: ["WordPress", "React", "Node.js", "AWS"],
  },
  {
    id: Math.random().toString(36).substring(7),
    dateRange: "2014-2016",
    company: "Codesignate",
    title: "Developer",
    description:
      "My professional experience spans website development, content management systems, and custom platform creation. I am proficient in WordPress, including theme development, and have worked with Joomla. A significant achievement was my role in building a blogging platform akin to Medium, specifically tailored for the Filipino audience. This project provided an opportunity to work with React at an early stage in its development cycle, allowing me to contribute to the platform's technological direction. Furthermore, my training in Solutions Architecture has equipped me with strong systems thinking capabilities and the ability to articulate complex technical concepts to both technical and non-technical stakeholders.",
    technologies: ["WordPress", "Joomla", "React", "Node.js", "AWS"],
    highlights: [
      {
        title: "Full-Stack Development",
        description:
          "Proficient in building web applications using React and Node.js. I have experience in designing and implementing both front-end and back-end components, ensuring seamless integration and optimal performance.",
      },
      {
        title: "Content Management Systems",
        description:
          "Expert in WordPress, including theme development and customization. I have a deep understanding of its architecture and can effectively leverage its features to create dynamic and user-friendly websites. Additionally, I have hands-on experience with Joomla, allowing me to adapt to different CMS environments.",
      },
      {
        title: "Platform Development",
        description:
          "Played a key role in building a Filipino-focused blogging platform similar to Medium. This involved architecting the platform, developing core functionalities, and integrating user-friendly features. I successfully delivered a platform that catered to the specific needs of the Filipino audience.",
      },
      {
        title: "Early Adopter",
        description:
          "Worked with React in its early stages, gaining valuable experience in its evolving ecosystem. I actively contributed to the platform's development by staying up-to-date with the latest trends and best practices.",
      },
      {
        title: "Solutions Architecture",
        description:
          "Trained in systems thinking and effective communication across technical and non-technical audiences. I can translate complex technical concepts into clear and understandable language, fostering collaboration and alignment within diverse teams.",
      },
      {
        title: "Problem-Solving",
        description:
          "Demonstrated ability to suggest technology solutions and paths forward during project development. I possess a strong analytical mindset and can effectively troubleshoot technical challenges, leading to innovative and efficient solutions.",
      },
    ],
  },
];

function ExperienceList() {
  const { onSectionVisible, onSectionLeave, sectionRefs } = useSectionTracker();
  const [selected, setSelected] = useState<number | undefined>(undefined);

  return (
    <motion.div
      className="flex flex-col gap-6"
      onViewportEnter={() => onSectionVisible("Experiences")}
      onViewportLeave={() => onSectionLeave("Experiences")}
      ref={sectionRefs.experiences}
      id="experiences"
    >
      <h2 className="text-lg font-bold tracking-widest">Experiences</h2>
      <div className="flex flex-col gap-2">
        {experiences.map((experience, index) => {
          return (
            <ExperienceCard
              key={index}
              onMouseEnter={() => setSelected(index)}
              onMouseLeave={() => setSelected(undefined)}
              className={`${selected === index ? "z-20 bg-[#333]" : ""} ${selected !== undefined && selected !== index ? "bg-50 bg-[#222]" : ""}`}
              {...experience}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default ExperienceList;
