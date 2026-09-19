import Image from "next/image";

type SponsorshipCardProps = {
  logoSrc?: string;
  name: string;
  description?: string;
  website?: string;
};

export function SponsorshipCard({
  logoSrc,
  name,
  description,
  website,
}: SponsorshipCardProps) {
  const content = (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative flex aspect-video w-full items-center justify-center bg-brand/10 p-8">
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={name}
            fill
            className="object-contain p-8"
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-14 w-14 text-brand/30"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2 2 7v6c0 5 4.3 9.3 10 11 5.7-1.7 10-6 10-11V7l-10-5Zm0 2.2 8 4v4.8c0 4-3.4 7.4-8 8.8-4.6-1.4-8-4.8-8-8.8V8.2l8-4Z" />
          </svg>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-xl font-semibold text-brand">{name}</h3>
        {description && (
          <p className="text-sm text-brand/70">{description}</p>
        )}
      </div>
    </div>
  );

  if (website) {
    return (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-full"
      >
        {content}
      </a>
    );
  }

  return content;
}
