import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

function ImagePlaceholder() {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-2xl bg-brand/10">
      <svg
        viewBox="0 0 24 24"
        className="h-14 w-14 text-brand/30"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2v9.59l4.3-4.3a1 1 0 0 1 1.4 0L14 15.59l1.3-1.3a1 1 0 0 1 1.4 0L19 16.59V7H5Zm3 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
      </svg>
    </div>
  );
}

export default function TactileFeedbackPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-16 py-16">
        <h1 className="mb-6 text-4xl font-extrabold text-brand">
          Vibrotactile Feedback
        </h1>
        <p className="max-w-3xl text-lg text-brand/90">
          We are designing and testing a modular haptic feedback system that
          can be fitted to any prosthesis. The system measures how strongly
          the user is gripping an object and conveys that grip strength
          through vibration motors built into an armband, restoring a sense
          of touch that prostheses usually lack.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ImagePlaceholder />
          <ImagePlaceholder />
          <ImagePlaceholder />
        </div>
      </main>
      <Footer />
    </div>
  );
}
