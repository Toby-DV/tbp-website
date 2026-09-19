import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";

const projects = [
  {
    page: "bionic-arm",
    name: "Bionic Arm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-16 py-16">
        <h1 className="mb-10 text-4xl font-extrabold text-brand">Projects</h1>
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
