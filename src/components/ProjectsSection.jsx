// components/ProjectsSection.js
export default function ProjectsSection() {
    const projects = [
      {
        title: "Survey Sense",
        description:
          "Explore Survey Sense and revolutionize how you gather feedback and insights. Our platform offers a unique blend of creativity and customization, making it easy to engage with your audience and gain actionable insights.",
        techs: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
        image: "/survey-sense.png", // Replace with actual image path
        liveLink: "#",
        codeLink: "#",
      },
      {
        title: "Food Sharing",
        description:
          "Dive into the world of Food Sharing, the platform that brings communities together through the joy of sharing food. Explore recipes, share your food experiences, and help reduce food waste.",
        techs: ["HTML", "CSS", "JavaScript", "React", "Express", "MongoDB"],
        image: "/food-sharing.png", // Replace with actual image path
        liveLink: "#",
        codeLink: "#",
      },

      {
        title: "Food Sharing",
        description:
          "Dive into the world of Food Sharing, the platform that brings communities together through the joy of sharing food. Explore recipes, share your food experiences, and help reduce food waste.",
        techs: ["HTML", "CSS", "JavaScript", "React", "Express", "MongoDB"],
        image: "/food-sharing.png", // Replace with actual image path
        liveLink: "#",
        codeLink: "#",
      },
      {
        title: "Food Sharing",
        description:
          "Dive into the world of Food Sharing, the platform that brings communities together through the joy of sharing food. Explore recipes, share your food experiences, and help reduce food waste.",
        techs: ["HTML", "CSS", "JavaScript", "React", "Express", "MongoDB"],
        image: "/food-sharing.png", // Replace with actual image path
        liveLink: "#",
        codeLink: "#",
      }
    ];
  
    return (
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
            HERE IS MY CREATED WEBSITES
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Welcome to my portfolio, where creativity meets functionality. Explore my projects, skills, and experiences
            in web development and design. Each project reflects my dedication to excellence and innovation.
          </p>
  
          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
  
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
  
                  {/* Technologies */}
                  <h4 className="font-semibold text-gray-700 mb-2">Techs I Used</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
  
                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600"
                    >
                      Live Site
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 text-white px-4 py-2 rounded-md shadow hover:bg-pink-600"
                    >
                      Code Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  