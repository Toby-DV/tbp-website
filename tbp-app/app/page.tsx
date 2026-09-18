import { Header } from "./components/Header";
import { ProstheticArmIllustration } from "./components/ProstheticArmIllustration";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <section className="grid flex-1 grid-cols-2 px-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-6xl font-extrabold leading-[1.1] text-brand">
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
    </div>
  );
}
