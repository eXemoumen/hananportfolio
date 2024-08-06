import Nav from "../components/nav";
import ParticlesComponent from "../components/partical";


export default function Component() {
  return (
    <>
      <ParticlesComponent id="partical"></ParticlesComponent>
      <Nav/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Proftoil: Crafting Exceptional User Experiences
              </h1>
              <p className="mt-4 text-muted-foreground">
                Discover how Proftoil’s design expertise transformed digital
                products and drove remarkable business outcomes.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Design Process</h2>
              <p className="text-muted-foreground">
                Proftoil\’s design process is a meticulously crafted approach
                that puts the user at the heart of every project. From in-depth
                user research to iterative prototyping, their team ensures that
                each design solution is tailored to the unique needs and pain
                points of the target audience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold">User Research</h3>
                  <p className="text-muted-foreground">
                    Proftoil\’s team conducts comprehensive user research,
                    including interviews, surveys, and usability testing, to
                    deeply understand the target audience and their pain points.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Ideation & Prototyping
                  </h3>
                  <p className="text-muted-foreground">
                    The design team engages in collaborative ideation sessions
                    to generate innovative concepts, which are then transformed
                    into interactive prototypes for user testing and refinement.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Iterative Design</h3>
                  <p className="text-muted-foreground">
                    Proftoil\’s design process is an iterative one, with
                    continuous user feedback and testing driving the evolution
                    of the design solutions until they meet the users’ needs and
                    expectations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Implementation & Validation
                  </h3>
                  <p className="text-muted-foreground">
                    The final designs are implemented with a focus on seamless
                    user experiences, and their impact is validated through
                    ongoing monitoring and analysis.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Projects</h2>
              <p className="text-muted-foreground">
                Proftoil has worked on a diverse range of projects, each
                showcasing their ability to create innovative and user-centric
                designs. Here are a few highlights:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    E-commerce Platform Redesign
                  </h3>
                  <p className="text-muted-foreground">
                    Proftoil’s redesign of a leading e-commerce platform
                    resulted in a 25% increase in conversion rates and a 15%
                    boost in customer satisfaction.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Mobile Banking App Overhaul
                  </h3>
                  <p className="text-muted-foreground">
                    Proftoil’s work on a mobile banking app led to a 30%
                    reduction in customer support inquiries and a 20% increase
                    in user engagement.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    SaaS Platform Optimization
                  </h3>
                  <p className="text-muted-foreground">
                    Proftoil’s optimization of a SaaS platform’s user interface
                    and workflows resulted in a 35% increase in user retention
                    and a 25% boost in customer lifetime value.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Healthcare App Redesign
                  </h3>
                  <p className="text-muted-foreground">
                    Proftoil’s redesign of a healthcare app led to a 40%
                    increase in user adoption and a 25% reduction in patient
                    no-show rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="/project3 study.png "
                width={400}
                height={300}
                alt="Wireframe"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <img
                src="/project3 study2.png"
                width={400}
                height={300}
                alt="Prototype"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="/project3 study3.png"
                width={400}
                height={300}
                alt="Final Design"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <img
                src="/project3 study4.png"
                width={400}
                height={300}
                alt="User Testing"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
