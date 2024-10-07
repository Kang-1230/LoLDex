import Image from "next/image";
import jhin from "../public/images/jhin.jpeg";
import ezreal from "../public/images/ezreal.jpeg";
import items from "../public/images/items.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="lg:w-full mx-auto">
            <Link
              href="/champions"
              className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 h-96 flex items-center justify-center"
            >
              <Image
                className="w-full object-cover h-full object-center block absolute inset-0"
                src={jhin}
                alt="Champions List"
                width={820}
                height={340}
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-2xl text-white-1400 font-Bold title-font mb-2">
                  Champions
                </h2>
              </div>
            </Link>
            <div className="flex flex-wrap -mx-2">
              <Link href="/rotation" className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative h-76">
                  <Image
                    src={ezreal}
                    alt="Champion rotation"
                    className="w-full object-cover h-full object-center block absolute inset-0"
                    width={542}
                    height={460}
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                      Rotation Champions
                    </h2>
                  </div>
                </div>
              </Link>
              <Link href="/items" className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <Image
                    src={items}
                    alt="items List"
                    className="w-full object-cover h-full object-center block absolute inset-0"
                    width={542}
                    height={460}
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                      Item
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
