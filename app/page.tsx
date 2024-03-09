import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/layout/header";
import { Button } from "@/components/reusable/button";
import { CodeLetter } from "@/components/reusable/code-letter";
import { PricingContent } from "@/components/reusable/pricing/content";
import { Grid } from "@/components/services/layout";
import { TeamBasedSection } from "@/components/team-based-section";
import { benefits, planList, services } from "@/constants";
import { cn } from "@/utils/cn";
import {
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col px-5">
      <Hero>
        <Hero.Content>
          <div className="flex flex-col items-center justify-between z-20 bg-clip-content">
            <div className="flex gap-8 flex-col items-center justify-between mt-12 px-3">
              <h1
                className={cn(
                  "font-semibold text-2xl md:text-4xl text-center max-w-5xl",
                )}
              >
                Powering Intelligent Decisions.
                <span className="text-gray-base">
                  {" "}
                  Build smarter, scale confidently, and innovate with ease.
                </span>
              </h1>
              <div className="flex gap-7">
                <Button>
                  <Button.Text className="font-semibold text-black">
                    Start now
                  </Button.Text>
                </Button>

                <Button secondary>
                  <Button.Text className="font-semibold">
                    Schedule a demo
                  </Button.Text>
                </Button>
              </div>
            </div>
          </div>
          <figure className="absolute bottom-0 aspect-[1.3/1] md:aspect-[3/1] w-full">
            <Image
              src="/hero-img.svg"
              alt="Zenith"
              className="object-cover w-full"
              priority
              sizes="(min-width: 768px) 66vw, 100vw"
              fill
            />
          </figure>
        </Hero.Content>

        <div className="mx-auto my-auto max-w-5xl mt-0">
          <p className="font-bold text-xl md:text-2xl text-center">
            <span className="flex flex-wrap items-center justify-center">
              <span className="flex items-center gap-1">
                Find the perfect tools{"  "}
                <WrenchScrewdriverIcon className="h-5 md:h-6 ml-1" />
              </span>
              <span className="flex items-center gap-1">
                <span className="hidden md:block">,</span> streamline your
                workflow <RocketLaunchIcon className="h-5 md:h-6 ml-1" />
              </span>
              <span className="flex items-center gap-1">
                <span className="hidden md:block">, </span> and keep coding.
              </span>
            </span>
          </p>
        </div>
      </Hero>
      <Grid>
        {["C", "O", "D", "E"].map((l, idx) => (
          <CodeLetter key={idx} letter={l} />
        ))}

        {services.map((service, idx) => (
          <div
            key={service.label}
            className="w-full h-full col-span-4 md:col-span-1 font-bold flex flex-col items-center justify-center mx-auto"
            style={{
              border: "0.3px solid rgba(161, 161, 161, 0.3)",
            }}
          >
            {idx % 2 === 0 ? (
              <div className="flex flex-col gap-1 text-sm m-3">
                <p>{service.label}</p>
                <p className="text-gray-base font-normal">
                  {service.description}
                </p>
              </div>
            ) : null}
          </div>
        ))}

        {services.map((service, idx) => (
          <div
            key={service.label}
            className="w-full h-full col-span-4 md:col-span-1 font-bold flex flex-col items-center justify-center mx-auto"
            style={{
              border: "0.3px solid rgba(161, 161, 161, 0.3)",
            }}
          >
            {idx % 2 !== 0 ? (
              <div className="flex flex-col gap-1 text-sm m-3">
                <p>{service.label}</p>
                <p className="text-gray-base font-normal">
                  {service.description}
                </p>
              </div>
            ) : null}
          </div>
        ))}
      </Grid>

      <TeamBasedSection />

      <Hero className="mt-7 md:max-w-[65.5rem] md:h-full w-full">
        <Hero.Content>
          <div className="flex flex-col md:flex-row h-full md:h-96 bg-black items-center md:justify-center md:my-auto md:mx-10 z-20 bg-clip-content p-5">
            <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between basis-auto mt-12 md:px-3">
              <h2 className="font-semibold text-2xl md:text-4xl w-full md:max-w-lg leading-normal">
                Empowering teams of all sizes with intelligent tool
                recommendations.
              </h2>
            </div>

            <div className="flex flex-col gap-5 justify-center md:basis-2/5 my-auto mt-5 md:mt-24">
              <p className="text-gray-base">
                Whether you're an individual developer looking to streamline
                your workflow, a small team seeking to optimize collaboration,
                or an enterprise in need of tailored solutions, Zenith provides
                personalized guidance to help you choose the right tools for
                your projects.
              </p>
              <Button secondary className="w-52">
                <Button.Text className="font-semibold">
                  Schedule a demo
                </Button.Text>
              </Button>
            </div>
          </div>
        </Hero.Content>

        <div
          className={cn(
            "mx-auto my-auto mt-0 w-full h-full md:h-1/2",
            "grid grid-cols-2 md:grid-cols-4 bg-black-secondary z-[30]",
          )}
        >
          {benefits.map((b) => (
            <div
              className="w-full h-full flex justify-center items-center mx-auto p-3"
              key={b.label}
              style={{
                border: "0.3px solid rgba(161, 161, 161, 0.3)",
              }}
            >
              <p className="font-bold w-52 mx-auto md:text-xl">
                {b.label}
                <span className="font-normal text-gray-base">
                  {" "}
                  {b.description}
                </span>
              </p>
            </div>
          ))}
        </div>
      </Hero>

      <section className="w-full mx-auto flex flex-col gap-10 justify-center items-center max-w-7xl mt-24">
        <h3 className="text-3xl md:text-4xl font-bold text-wrap max-w-[25rem] text-center">
          Find a plan to power your workflow
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planList.map((p, idx) => (
            <PricingContent
              plan={p}
              key={`${p.label}-${idx}`}
              isRecommended={p.label === "Starter"}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
