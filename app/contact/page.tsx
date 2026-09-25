import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-8 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-brand">Contact Us</h1>
        <div className="text-lg text-brand/70">
          <p>
            <a
              href="mailto:TBP@bath.ac.uk"
              className="font-medium text-brand transition-colors hover:text-brand-accent"
            >
              TBP@bath.ac.uk
            </a>
          </p>
          <p>
            2 East, University of Bath, Claverton Down, Bath, BA2 7AY, United
            Kingdom
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/join-us"
            className="inline-block border-2 border-brand bg-transparent px-8 py-4 text-lg font-semibold text-brand transition-colors hover:bg-brand/10"
          >
            Join Us
          </Link>
          <Link
          // TODO: Make Sponsor page
            href=""
            className="inline-block border-2 border-brand bg-transparent px-8 py-4 text-lg font-semibold text-brand transition-colors hover:bg-brand/10"
          >
            Sponsor
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
