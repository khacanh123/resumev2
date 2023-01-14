function HeaderMobile() {
  const openMenu = () => {
    let burger: any = null;
    let nav: any = null;
    let slowmo: any = null;

    if (typeof window !== "undefined") {
      (burger = window?.document?.getElementById("burger")),
        (nav = window?.document?.getElementById("main-nav")),
        (slowmo = window?.document?.getElementById("slowmo"));
    }

    burger.classList.toggle("is-open");
    nav?.classList.toggle("is-open");
  };

  /* Onload demo - dirty timeout */
  let clickEvent = new Event("click");

  return (
    <div className="">
      <button
        id="burger"
        className="open-main-nav lg:top-[35px] top-[25px]"
        onClick={openMenu}
      >
        <span className="burger"></span>
      </button>
      <nav className="main-nav" id="main-nav">
        <ul>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Speaker &amp; Writer</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderMobile;
