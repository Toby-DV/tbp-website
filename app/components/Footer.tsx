import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-8 border-t border-black/5 bg-white px-12 py-10">
      <Image
        src="/university-of-bath-logo.png"
        alt="University of Bath logo"
        width={240}
        height={96}
        className="h-12 w-auto"
      />
      <div className="text-right text-sm leading-relaxed">
        <p>
          <a
            href="mailto:undefinedEmail@bath.ac.uk"
            className="font-medium text-brand transition-colors hover:text-brand-accent"
          >
            TBP@bath.ac.uk
          </a>
        </p>
        <p className="text-brand/70">
          2 East, University of Bath, Claverton Down, Bath, BA2 7AY, United
          Kingdom
        </p>
      </div>
    </footer>
  );
}
