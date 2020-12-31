import { bg1 } from "@assets/svgBackgrounds";
import GalleryItem from "@components/DataView/GalleryItem";
import CenteredSection from "@components/Layouts/CenteredSection";
import Navbar from "@components/Navbar";
import InfoText from "@components/UI/InfoText";
import useScroll from "@hooks/useScroll";
import Image from "next/image";
import { defaultItem } from "src/contexts/ItemContext";

function Components() {
  const { scrollY } = useScroll();
  return (
    <div className="min-h-screen bg-beige-10" style={{ backgroundImage: bg1 }}>
      <Navbar borderShown={scrollY > 35} />
      <main className="max-w-screen-lg px-4 mx-auto mt-10 sm:px-24 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <h1 className="mt-5 text-4xl font-bold leading-none tracking-tight sm:text-4xl sm:leading-none md:text-4xl text-dark-1000">
              Free <br className="sm:hidden" /> Components 😝
            </h1>
            <p className="max-w-md mx-auto mt-4 rounded-md text-md font-base text-dark-800 sm:text-md md:mt-4 md:text-lg md:max-w-3xl">
              I get to design a lot of components during my everyday work. Grab
              them as copy/paste ready JSX code for free.
            </p>
            {/* <div className="grid w-full max-w-lg gap-4 mt-4 md:grid-cols-2 rounded-2xl bg-toast-200">
              <button
                type="button"
                className="rounded-lg font-semibold gap-4 flex bg-gradient-to-b from-white to-beige-50 shadow-button text-center py-4 px-6 active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform focus:outline-none focus:ring-4"
              >
                <div>🛎 </div>
                <span className="flex-1 mr-2">Make me a toast</span>
              </button>
              <a
                className="rounded-lg flex font-bold bg-beige-100 py-4 px-6 text-toast-800 active:translate-y-0.5 transform"
                data-splitbee-event="Open Link"
                data-splitbee-event-target="GitHub"
                href="https://github.com/timolins/react-hot-toast"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="opacity-100"
                >
                  <path
                    d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                    fill="currentColor"
                  />
                </svg>
                <span className="flex-1 text-center text-toast-800">
                  GitHub
                </span>
              </a>
            </div> */}
          </div>

          {/* <div className="p-8 border border-gray-200 rounded-md bg-beige-50 sm:min-w-400">
            <InfoText />
          </div> */}

          {/* <div className="relative w-32 h-32 row-start-1 rounded-full sm:col-start-2 sm:w-40 sm:h-40 ring-4 ring-beige-100 ring-offset-2 sm:place-self-center">
            <Image
              src="/img/alex.JPG"
              className="object-cover object-top rounded-full"
              width={200}
              height={200}
              priority
            />
          </div> */}
        </div>
      </main>

      {/* <InfoText /> */}

      <CenteredSection className="mt-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <GalleryItem
            item={{
              ...defaultItem,
              img: "/img/infotext.png",
              title: "InfoText",
              description: "Informational text component",
            }}
          >
            <GalleryItem.Image />
            <GalleryItem.Description />
          </GalleryItem>

          <GalleryItem
            item={{
              ...defaultItem,
              img: "/img/heroheading.png",
              title: "HeroHeading",
              description: "A heading for personal webpages",
            }}
          >
            <GalleryItem.Image />
            <GalleryItem.Description />
          </GalleryItem>

          <GalleryItem
            item={{
              ...defaultItem,
              img: "/img/infotext.png",
              title: "Accordion",
              description: "Accordion powered with context",
            }}
          >
            <GalleryItem.Image />
            <GalleryItem.Description />
          </GalleryItem>
        </div>
      </CenteredSection>
    </div>
  );
}

export default Components;
