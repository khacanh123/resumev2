import { Blockquote } from "@mantine/core";
import avt from "assets/avt.jpg";
import Image from "next/image";
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    reveals[i].classList.add("active");
  }
}

if (typeof window !== "undefined") window.addEventListener("load", reveal);
function IntroComponent() {
  const sologan =
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.";

  return (
    <>
      <div
        className="w-screen h-[130vh] lg:h-screen bg-ct-secondary-400 lg:flex"
        style={{ clipPath: "ellipse(100% 54% at 50% 36%)" }}
      >
        <div className="w-full lg:w-1/2 lg:pl-20 lg:pt-10 aos-init reveal fade-left">
          <Blockquote
            cite="– Forrest Gump"
            className="mantine-1nksqbd sm:text-md md:text-[32px] xl:text-[40px] text-ct-primary-500 font-bold mantine-Blockquote-body"
          >
            {sologan}
          </Blockquote>
          <div className="flex mt-5 ml-5 lg:ml-0 justify-around text-sm lg:text-lg text-ct-primary-500">
            <div className="flex items-center font-bold mr-5 slide-right">
              <svg
                className="target transition-all"
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m9.05 11.87 1.61 1.61 4.3-4.3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-2 target transition-all">
                Webflow websites
              </span>
            </div>
            <div className="flex items-center font-bold mr-5 slide-right">
              <svg
                className="target transition-all"
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m9.05 11.87 1.61 1.61 4.3-4.3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-2 target transition-all">
                Web Development
              </span>
            </div>
            <div className="flex items-center font-bold mr-5 slide-right">
              <svg
                className="target transition-all"
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m9.05 11.87 1.61 1.61 4.3-4.3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-2 target transition-all">Easy to manage</span>
            </div>
          </div>
          <div className="mt-20 lg:ml-8 flex justify-center lg:justify-start items-center">
            <a
              href="#work-experience"
              className="block px-10 py-5 font-bold border-2 border-ct-primary-500 text-ct-primary-500 rounded-2xl hover:bg-ct-primary-500 hover:text-white transition-all"
            >
              More about me
            </a>
            <a href="#contact" className="flex cursor-pointer slide-right">
              <p className="font-bold px-5 target transition-all">
                Get in touch
              </p>
              <svg
                className="target transition-all"
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  strokeWidth="1.5"
                  d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-down-left"
          data-aos-offset={200}
          className="w-full md:w-1/2 aos-init reveal fade-right"
        >
          <div
            className="mx-auto lg:mx-0 border-2 rounded-[50px] border-ct-primary-500 p-4 mt-20 w-3/5 relative"
            style={{ transform: "rotate(4deg)" }}
          >
            <div className="w-full h-[250px] lg:h-[450px] m-0" />{" "}
            <img
              className="rotateInfinite absolute top-[-20%] right-[-30%]"
              src="https://hungnmdev.vercel.app/assets/rotate.6d4e912d.png"
              alt=""
            />
            <img
              className="absolute top-[40%] right-[-40%]"
              src="/assets/hero__text-icon.c9dc4275.svg"
              alt=""
            />
            <Image
              className="avatarMe w-full lg:min-w-[350px] rounded-[50px] border-2 border-ct-primary-500 absolute -top-10 dark:shadow-[0px_0px_30px_0px] dark:shadow-ct-primary-500"
              src={avt}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroComponent;
