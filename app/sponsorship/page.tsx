import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SponsorshipCard } from "../components/SponsorshipCard";

const sponsors = [
  {
    logoSrc: "/tbp-logo-nobg.png",
    name: "University of Bath",
    description: "The University of Bath generously sponsor our research and development.",
    website: ""
  },
]

export default function SponsorshipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-16 py-4">
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
