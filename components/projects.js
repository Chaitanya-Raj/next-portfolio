import Project from "./project";

export default function Projects() {
  const projects = [
    // {
    //   title: "Amazon Clone",
    //   description: "lalalalala",
    //   preview: "/amazon-clone.png",
    //   source: "https://github.com/Chaitanya-Raj/amazon-clone",
    // },
    // {
    //   title: "Github Timeline",
    //   description: "lalalalala",
    //   preview: "/github-timeline.png",
    //   source: "https://github.com/Chaitanya-Raj/timeline",
    // },
    // {
    //   title: "Chatroom",
    //   description: "lalalalala",
    //   preview: "/chatroom.png",
    //   source: "https://github.com/Chaitanya-Raj/chatroom",
    // },
    // {
    //   title: "Password Generator",
    //   description: "lalalalala",
    //   preview: "/password-generator.png",
    //   source: "https://github.com/Chaitanya-Raj/password-generator",
    // },
    {
      title: "Aria Oslo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti nam magni, doloremque dignissimos qui, aperiam sapiente voluptatibus, ratione quia fugit! Earum, consectetur. Sunt eius, voluptas voluptatum odio minima cum.",
      preview: "/images/aria-oslo.png",
      source: "https://github.com/Chaitanya-Raj/aria-oslo",
      deployed: "https://chaitanya-raj.github.io/aria-oslo",
    },
    {
      title: "AM Studio",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti nam magni, doloremque dignissimos qui, aperiam sapiente voluptatibus, ratione quia fugit! Earum, consectetur. Sunt eius, voluptas voluptatum odio minima cum.",
      preview: "/images/am-studio.png",
      source: "https://github.com/Chaitanya-Raj/am-studio",
      deployed: "https://chaitanya-raj.github.io/am-studio",
    },
    // {
    //   title: "Vincent Schwartz",
    //   description: "lalalalala",
    //   preview: "/vincent-schwartz.png",
    //   source: "https://github.com/Chaitanya-Raj/vincent-schwartz",
    // },
  ];

  return (
    <section
      id="projects"
      class="flex flex-col min-h-[calc(100vh-32px)] space-y-20 my-16 py-4"
    >
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </section>
  );
}
