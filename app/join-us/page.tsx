import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const applicationUrl =
  "https://app.onlinesurveys.jisc.ac.uk/s/bathreg/university-of-bath-vertically-integrated-projects-vips-2026-27-";

export default function JoinUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-8 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-brand">Join Us</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-brand/80">
          We are a team of students from across the university, spanning a
          wide range of disciplines, all working together to improve the
          experience of amputees. Whether it&apos;s designing electronics,
          mechanical design, developing machine learning for prosthesis
          control or securing sponsorships, there&apos;s a place for you. If
          you want to build skills beyond your course, joining the team is a
          great chance to do so while contributing to a project that makes a
          real difference.
        </p>
        <a
          href={applicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block border-2 border-brand bg-transparent px-8 py-4 text-lg font-semibold text-brand transition-colors hover:bg-brand/10"
        >
          Apply Now
        </a>
      </main>
      <Footer />
    </div>
  );
}
