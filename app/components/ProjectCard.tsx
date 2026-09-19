import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  page: string;
  photoSrc?: string;
  name: string;
  description: string;
};

export function ProjectCard({
  page,
  photoSrc,
  name,
  description,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${page}`}
      className="group flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-brand/10">
        {photoSrc ? (
          <Image
            src={photoSrc}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="h-14 w-14 text-brand/30"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2v9.59l4.3-4.3a1 1 0 0 1 1.4 0L14 15.59l1.3-1.3a1 1 0 0 1 1.4 0L19 16.59V7H5Zm3 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-xl font-semibold text-brand">{name}</h3>
        <p className="text-sm text-brand/70">{description}</p>
      </div>
    </Link>
  );
}
