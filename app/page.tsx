import { Hero } from "@/components/layout/header";
import { Button } from "@/components/reusable/button";
import { CodeLetter } from "@/components/reusable/code-letter";
import { Grid } from "@/components/services/layout";
import { services } from "@/constants";
import { cn } from "@/utils/cn";
import {
  BeakerIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const gridRowServices = [services[0], services[2]];

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

                <Button style={{ background: "black" }}>
                  <Button.Text className="font-semibold text-white">
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

      <section
        className={cn(
          "mx-auto max-w-[65.5rem] w-full h-full md:h-[70vh] mt-7 flex md:flex-row flex-col",
        )}
        style={{
          border: "0.3px solid rgba(161, 161, 161, 0.3)",
        }}
      >
        <article
          className={cn(
            "flex flex-col justify-between md:justify-center items-center mx-auto w-full p-5",
            "backdrop-blur-[2px] bg-gradient-to-bl from-[#EF3E31] from-0% to-black-secondary to-20%",
          )}
          style={{
            borderRight: "0.3px solid rgba(161, 161, 161, 0.3)",
          }}
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1 md:mt-24">
              <BeakerIcon className="h-4 text-gray-base" />
              <p className="text-gray-base">Team-based Recommendations</p>
            </div>
            <p className="md:w-[25rem]">
              Allows users to describe their team composition, including the
              number of frontend developers, backend developers, designers,
              project managers, and other team members.
            </p>
            <figure className="aspect-square w-full relative">
              <Image
                src="/illustrations.svg"
                fill
                alt="Illustration"
                className="object-contain"
              />
            </figure>
          </div>
        </article>
        <figure className="md:relative aspect-video hidden w-full">
          <Image
            src="/bg-teams.svg"
            alt="Team Recommendation"
            fill
            className="object-cover"
          />
        </figure>
      </section>
    </main>
  );
}
