import Image from "next/image";

type TeamMemberCardProps = {
  photoSrc?: string;
  name: string;
  role: string;
  description: string;
};

export function TeamMemberCard({
  photoSrc,
  name,
  role,
  description,
}: TeamMemberCardProps) {
  return (
    <div className="flex h-[420px] w-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative h-[65%] w-full bg-brand/10">
        {photoSrc ? (
          <Image src={photoSrc} alt={name} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="h-16 w-16 text-brand/30"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12Zm0 2.5c-3.3 0-9.8 1.6-9.8 4.9v2.4h19.6v-2.4c0-3.3-6.5-4.9-9.8-4.9Z" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex h-[35%] flex-col items-center justify-center gap-1 px-4 text-center">
        <h3 className="text-lg font-semibold text-brand">{name}</h3>
        <p className="text-sm font-medium text-brand-accent">{role}</p>
        <p className="text-sm text-brand/70">{description}</p>
      </div>
    </div>
  );
}
