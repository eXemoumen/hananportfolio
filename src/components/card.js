
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
      <div className="container max-w-5xl px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Work
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore a selection of our latest UI/UX design projects, showcasing
            our expertise in creating visually stunning and user-friendly
            digital experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <Link
            href="/casestudy"
            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            prefetch={false}
          >
            <Image
              src="/projetc1 study.png"
              alt="Project 1"
              width={500}
              height={300}
              className="w-full h-48 object-cover object-center"
              style={{ aspectRatio: "500/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold group-hover:underline">
                Project 1
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                A detailed case study showcasing our design process and the
                innovative solutions we developed for this project.
              </p>
            </div>
          </Link>
          <Link
            href="/casestudy2"
            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            prefetch={false}
          >
            <Image
              src="/project2 study.png"
              alt="Project 2"
              width={500}
              height={300}
              className="w-full h-48 object-cover object-center"
              style={{ aspectRatio: "500/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold group-hover:underline">
                Project 2
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                A detailed case study showcasing our design process and the
                innovative solutions we developed for this project.
              </p>
            </div>
          </Link>
          <Link
            href="/casestudy3"
            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            prefetch={false}
          >
            <Image
              src="/project3 study.png"
              alt="Project 3"
              width={500}
              height={300}
              className="w-full h-48 object-cover object-center"
              style={{ aspectRatio: "500/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold group-hover:underline">
                Project 3
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                A detailed case study showcasing our design process and the
                innovative solutions we developed for this project.
              </p>
            </div>
          </Link>
         
        </div>
      </div>
    </section>
  );
}
