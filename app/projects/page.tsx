import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";

const projects = [
  {
    page: "bionic-arm",
    name: "Bionic Arm",
    description:
      "The full production of a transradial prosthetic arm built with the goal of reducing abandonment rates of new prosthetics.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-16 py-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.page} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
