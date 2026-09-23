import Link from "next/link";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProstheticArmIllustration } from "./components/ProstheticArmIllustration";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <section className="grid flex-1 grid-cols-2 px-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-6xl font-extrabold leading-[1.1] text-black">
            Team Bath
            <br />
            Prosthetics
          </h1>
          <p className="mt-6 max-w-md text-center text-lg text-brand/70">
            We are a team dedicated to development and research 
            with the goal of improving the experience of using prosthetics
            in everyday life.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <ProstheticArmIllustration className="h-auto w-full max-w-md text-brand" />
        </div>
      </section>
      <section className="bg-brand px-8 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3">
          <div className="text-left md:border-l-4 md:border-white md:pl-12 md:pr-12">
            <h2 className="text-2xl font-bold text-white">Our Goal</h2>
            <p className="mt-2 text-lg text-white/80">
              Improving the experience
              amputees have with their prostheses, aiming to reduce the rate at which prostheses are abandoned.
            </p>
          </div>
          <div className="text-left md:border-l-4 md:border-white md:pl-12 md:pr-12">
            <h2 className="text-2xl font-bold text-white">Current Work</h2>
            <p className="mt-2 text-lg text-white/80">
              We are developing a prosthesis to present at conferences and future competitions, whilst contributing to
              research into sensory feedback for upper-limb prostheses.
            </p>
            <Link
              href="/projects"
              className="mt-4 inline-block border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our Projects
            </Link>
          </div>
          <div className="text-left md:border-l-4 md:border-white md:pl-12">
            <h2 className="text-2xl font-bold text-white">Get Involved!</h2>
            <p className="mt-2 text-lg text-white/80">
              If you want to build skills beyond your
              course, joining the team is a great chance to do so while contributing to a project that makes a real
              difference.
            </p>
            <Link
              href="/join-us"
              className="mt-4 inline-block border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
