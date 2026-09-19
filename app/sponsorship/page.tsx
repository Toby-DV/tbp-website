import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SponsorshipCard } from "../components/SponsorshipCard";

const sponsors = [
  {
    logoSrc: "",
    name: "University of Bath",
    description: "The University of Bath",
    website: "bath.ac.uk"
  },
  {
    logoSrc: "",
    name: "University of Bath 2",
    description: "The University of Bath",
    website: "bath.ac.uk"
  }
]

export default function SponsorshipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-16 py-16">
        <h1 className="mb-10 text-4xl font-extrabold text-brand">
          Sponsorship
        </h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {sponsors.map((sponsor) => (
            <SponsorshipCard 
            key={sponsor.name} 
            {...sponsor}
            />
          ))

          }
        </div>
      </main>
      <Footer />
    </div>
  );
}
