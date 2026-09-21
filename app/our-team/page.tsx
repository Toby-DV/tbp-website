import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TeamMemberCard } from "../components/TeamMemberCard";

const teamMembers = [
  {
    name: "Maxim Bezpalko",
    role: "Electrical Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    name: "Zavier Achiampong",
    role: "Electrical Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    name: "Toby Davis-Varnell",
    role: "Software Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  }
];

export default function OurTeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-16 py-4">
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
