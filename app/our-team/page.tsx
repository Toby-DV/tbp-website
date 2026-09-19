import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TeamMemberCard } from "../components/TeamMemberCard";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Team Lead",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    name: "John Smith",
    role: "Mechanical Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    name: "Alex Johnson",
    role: "Electronics Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    name: "Sam Taylor",
    role: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
];

export default function OurTeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-16 py-16">
        <h1 className="mb-10 text-4xl font-extrabold text-brand">Our Team</h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
