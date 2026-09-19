import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function BionicHandPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <h1 className="text-3xl font-semibold text-brand">
          Bionic Arm — coming soon
        </h1>
      </main>
      <Footer />
    </div>
  );
}
