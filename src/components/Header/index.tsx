import Link from "next/link";
import HeaderMobile from "./HeaderMobile";

function HeaderComponent() {
  return (
    <div className="flex justify-between items-center w-full p-5 sm:px-5 md:px-20 bg-[#1c2b50] transition-all bg-[ư">
      <div style={{ opacity: 1, transform: "none" }}>
        <Link href={"/"} className="text-ct-primary-500 font-bold text-2xl">
          Anh Nguyen K.
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="md:flex justify-between items-center hidden">
          <a
            href="#work-experience"
            className="p-5 text-sm rounded-xl text-white slide-down"
          >
            <div style={{ opacity: 1, transform: "none" }}>
              <p className="transition-all target">PROJECTS</p>
            </div>
          </a>
          <a
            href="#project"
            className="p-5 text-sm rounded-xl text-white slide-down"
          >
            <div style={{ opacity: 1, transform: "none" }}>
              <p className="transition-all target">WORK EXPERIENCE</p>
            </div>
          </a>
          <a
            href="#contact"
            className="p-5 text-sm rounded-xl text-white slide-down"
          >
            <div style={{ opacity: 1, transform: "none" }}>
              <p className="transition-all target">CONTACT</p>
            </div>
          </a>
        </div>

        <HeaderMobile />
      </div>
    </div>
  );
}

export default HeaderComponent;
