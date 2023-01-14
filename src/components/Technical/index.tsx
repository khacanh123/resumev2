import { Modal, Table } from "@mantine/core";
import firebase from "@/components/firebase";
import { useEffect, useState } from "react";

function TechnicalComponent() {
  const [opened, setOpened] = useState({
    opened: false,
    id: "",
  });
  const [todoList, setTodoList] = useState<any>([]);
  const [dataById, setDataById] = useState<any>({});
  useEffect(() => {
    const todoRef = firebase.database().ref("workexp");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      reveals[i].classList.add("active");
    }
  }

  if (typeof window !== "undefined") window.addEventListener("load", reveal);

  useEffect(() => {
    if (opened.id !== "") {
      const todoRef = firebase.database().ref("workexp").child(opened.id);
      //   console.log(todoRef);
      todoRef.on("value", (snapshot) => {
        const todos = snapshot.val();
        setDataById(todos);
      });
    }
  }, [opened.id]);

  return (
    <>
      <div className="w-full px-4">
        <div className="w-full my-12 lg:my-20">
          <p className="font-bold text-[34px] lg:text-[50px] text-center gradient-text">
            Technology is transient.
            <br />
            Thinking is forever
          </p>
          <p className="text-xl text-center mt-5 px-5">
            Technology changes every day. Update and development.
            <br />
            The technology I know. Let see
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center reveal fade-left">
          <div
            data-aos="slide-up"
            data-aos-delay={0}
            data-aos-offset={200}
            className="w-fit m-4 flex flex-wrap justify-center cursor-pointer transition-all aos-init aos-animate"
            style={{ transition: "all 0.5s ease-in-out 0s" }}
          >
            <div
              className="relative cate-knowedge overflow-hidden project p-6 flex flex-col justify-between items-center hover:text-white w-[250px] h-[300px] bg-ct-neutral-100 dark:bg-ct-dark-secondary-400 dark:hover:bg-ct-primary-500"
              style={{ transition: "all 0.5s ease-in-out 0s" }}
              onClick={() =>
                setOpened(() => {
                  return {
                    opened: true,
                    id: "",
                  };
                })
              }
            >
              <div className="bg-shutdown z-0 transition-all absolute top-[-99%] w-[250px] h-[300px] bg-ct-primary-500" />
              <h1 className="uppercase z-10 font-bold text-center text-4xl mb-5">
                Frontend
              </h1>
              <div className="grow z-10">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="mx-10 iconify iconify--fluent"
                  width={80}
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 20 20"
                  style={{ verticalAlign: "-0.125em" }}
                >
                  <path
                    fill="currentColor"
                    d="M3 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm2-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5Zm-3 9.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Z"
                  />
                </svg>
              </div>
              <svg
                className="self-start z-10"
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm2.79 10.53l-3.53 3.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l3-3-3-3a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.53 3.53c.3.29.3.77 0 1.06z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Modal
        opened={opened.opened}
        onClose={() =>
          setOpened(() => {
            return {
              opened: false,
              id: "",
            };
          })
        }
        size="100%"
        // className="bg-[none]"
        styles={{
          root: {
            background: "#1c1c1c",
          },
          modal: {
            background: "none",
          },
          close: {
            display: "none",
          },
        }}
      >
        <div
          onClick={() =>
            setOpened(() => {
              return {
                opened: false,
                id: "",
              };
            })
          }
          className="px-3 w-12 h-12 bg-white flex justify-center items-center fixed z-50 right-7 transition hover:bg-ct-primary-400 hover:text-white"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.11) 0px 0px 15px",
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            viewBox="0 0 24 24"
            fill="none"
            style={{ transform: "rotate(45deg)" }}
          >
            <path
              d="M6 12h12M12 18V6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="project p-4 px-6 w-fit mx-auto flex flex-col justify-center items-center text-white">
          <h1 className="uppercase font-bold text-center text-4xl mb-5 gradient-text-auto">
            Frontend
          </h1>
          <p className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="mx-10 iconify iconify--fluent"
              width={80}
              height={80}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 20 20"
              style={{ verticalAlign: "-0.125em" }}
            >
              <path
                fill="currentColor"
                d="M3 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm2-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5Zm-3 9.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Z"
              />
            </svg>
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap px-10 text-white">
          <div
            style={{ opacity: 1, transform: "none" }}
            className="reveal fade-show"
          >
            <div
              className="flex flex-col items-center border-t-2 border-ct-primary-500 justify-center p-4 py-6 m-2 hover:bg-ct-primary-400 transition-all"
              style={{ transition: "all 0.5s ease-in-out 0s" }}
            >
              <h1 className="uppercase font-bold text-xl mb-5">SASS/SCSS</h1>
              <div className="grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="mx-10 iconify iconify--cib"
                  width={80}
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                  style={{ verticalAlign: "-0.125em" }}
                >
                  <path
                    fill="currentColor"
                    d="M15.092 22.146c-.015.03-.03.054 0 0zm12.456-4.35c-1.006 0-1.998.23-2.9.675c-.295-.595-.6-1.115-.65-1.505c-.06-.455-.125-.725-.055-1.265s.385-1.305.38-1.36c-.005-.055-.07-.33-.715-.335s-1.2.125-1.265.295a6.09 6.09 0 0 0-.265.955c-.115.585-1.289 2.675-1.954 3.765c-.22-.425-.405-.8-.445-1.1c-.06-.455-.125-.725-.055-1.265s.385-1.305.38-1.36c-.005-.055-.07-.33-.714-.335s-1.2.125-1.265.295c-.065.17-.135.57-.265.955s-1.695 3.865-2.104 4.77c-.21.46-.39.83-.52 1.08c-.02.04-.035.065-.045.085c.015-.025.025-.05.025-.04c-.11.215-.175.335-.175.335v.005c-.085.16-.18.305-.225.305c-.03 0-.095-.42.015-.995c.235-1.21.79-3.09.785-3.155c-.005-.035.105-.36-.365-.535c-.455-.165-.62.11-.66.11s-.07.1-.07.1s.505-2.12-.97-2.12c-.92 0-2.2 1.01-2.829 1.925c-.395.215-1.25.68-2.15 1.175l-1.035.57c-.025-.025-.045-.05-.07-.075c-1.79-1.91-5.094-3.26-4.954-5.825c.05-.935.375-3.39 6.354-6.37c4.9-2.44 8.817-1.77 9.492-.28c.97 2.125-2.095 6.08-7.183 6.65c-1.94.215-2.959-.535-3.214-.815c-.265-.295-.305-.31-.405-.255c-.165.09-.06.35 0 .505c.15.395.775 1.095 1.84 1.445c.935.305 3.209.475 5.958-.59c3.089-1.19 5.494-4.505 4.788-7.28c-.718-2.82-5.394-3.745-9.815-2.175c-2.635.935-5.484 2.405-7.533 4.32C.26 11.361-.129 13.346.031 14.176c.57 2.945 4.629 4.865 6.253 6.285l-.225.125c-.815.405-3.909 2.025-4.684 3.735c-.875 1.94.145 3.33.814 3.52c2.09.58 4.229-.465 5.379-2.18s1.01-3.955.48-4.975c-.005-.015-.015-.025-.02-.04a72.558 72.558 0 0 1 1.815-1.04c-.2.54-.345 1.19-.42 2.13c-.09 1.1.365 2.525.955 3.085c.26.245.574.25.77.25c.69 0 1-.57 1.345-1.25c.425-.83.8-1.795.8-1.795s-.47 2.61.815 2.61c.47 0 .94-.605 1.15-.915v.005s.01-.02.035-.06c.05-.075.075-.12.075-.12v-.015c.19-.325.605-1.07 1.23-2.3c.81-1.59 1.584-3.575 1.584-3.575c.075.436.179.867.31 1.29c.14.475.435.995.67 1.5c-.19.26-.305.41-.305.41c0 .004.002.007.005.01c-.15.2-.32.415-.495.625c-.639.76-1.4 1.63-1.5 1.88c-.12.295-.09.515.14.685c.17.13.47.15.785.125c.575-.04.98-.18 1.175-.27a4.11 4.11 0 0 0 1.01-.53c.625-.46 1.005-1.12.97-1.99c-.02-.48-.175-.96-.365-1.41c.055-.08.115-.165.17-.25a26.716 26.716 0 0 0 1.755-3.031c.075.436.178.867.31 1.29c.12.405.355.85.57 1.285c-.93.755-1.505 1.63-1.704 2.205c-.37 1.065-.08 1.545.465 1.655c.245.05.595-.065.855-.175c.386-.129.75-.316 1.079-.555c.625-.46 1.23-1.105 1.189-1.98c-.015-.395-.125-.79-.27-1.17c.785-.33 1.805-.51 3.105-.36c2.784.325 3.329 2.065 3.224 2.79s-.69 1.13-.885 1.25c-.195.12-.255.165-.24.255c.025.13.115.125.28.095c.23-.04 1.46-.59 1.515-1.935c.08-1.7-1.555-3.57-4.45-3.555zM6.089 25.031c-.92 1.005-2.209 1.385-2.764 1.065c-.595-.346-.36-1.825.774-2.896c.69-.65 1.58-1.25 2.17-1.62c.135-.08.33-.2.57-.345a.828.828 0 0 1 .06-.035c.045-.03.095-.055.145-.085c.414 1.52.015 2.86-.955 3.915zm6.718-4.57c-.32.785-.994 2.785-1.405 2.68c-.35-.09-.565-1.615-.07-3.115c.25-.755.78-1.655 1.095-2.005c.505-.565 1.06-.745 1.19-.52c.175.295-.61 2.47-.81 2.96zm5.55 2.65c-.135.07-.26.115-.32.08c-.045-.025.055-.12.055-.12s.695-.745.97-1.085c.16-.2.345-.435.545-.695c0 .025.005.05.005.08c-.006.895-.866 1.5-1.256 1.74zm4.28-.975c-.1-.07-.085-.305.25-1.035c.13-.285.43-.765.95-1.225c.059.174.091.356.095.54c-.005 1.125-.81 1.545-1.295 1.72z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{ opacity: 1, transform: "none" }}
            className="reveal fade-show"
          >
            <div
              className="flex flex-col items-center border-t-2 border-ct-primary-500 justify-center p-4 py-6 m-2 hover:bg-ct-primary-400 transition-all"
              style={{ transition: "all 0.5s ease-in-out 0s" }}
            >
              <h1 className="uppercase font-bold text-xl mb-5">
                Styled Component
              </h1>
              <div className="grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="mx-10 iconify iconify--simple-icons"
                  width={80}
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  style={{ verticalAlign: "-0.125em" }}
                >
                  <path
                    fill="currentColor"
                    d="m16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254l-.318 1.418c-.19.846-.423 1.555-.571 1.788c-.127.201-.275.497-.307.656c-.053.19-.233.381-.508.55c-.243.138-.72.508-1.058.805c-.27.243-.456.392-.557.456l-.33.261a1.4 1.4 0 0 0-.189.411c-.023.107-.01.178.024.23c.033.05.09.085.168.107a.954.954 0 0 0 .282.023a3 3 0 0 0 .632-.112c.07-.019.125-.037.173-.053c.074-.091.245-.263.548-.562c.804-.793 1.111-1.227.794-1.11c-.117.042-.064-.064.137-.276c.424-.413.667-1.037 1.175-2.994c.402-1.545.402-1.567.698-1.567c.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202c-.116.19.021.306 1.767 1.396c1.037.657 1.873 1.217 1.852 1.26c-.021.031-.868.582-1.883 1.217c-1.842 1.142-1.852 1.153-1.683 1.386c.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217c.042 0 .127-.096.212-.212c.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111c1.979-1.217 1.873-1.133 1.714-1.387c-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978c-.081.193-.088.326-.051.412c.024.059.068.1.129.13c.06.03.138.048.224.055c.171.015.373-.012.536-.044l.11-.025a.386.386 0 0 1 .144-.118c.116-.064.603-.508 1.09-.984c.857-.868 1.058-1.26.709-1.387a.24.24 0 0 0-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938c-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 0 0 .138.134a.644.644 0 0 0 .24.045a2.18 2.18 0 0 0 .58-.085a3.466 3.466 0 0 0 .291-.092l.029-.012l.053-.028c.1-.129.33-.372.618-.652c.91-.878 1.375-1.502 1.28-1.735c-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398c-.432.382-.903.602-1.066.504a3.97 3.97 0 0 1-.114.024c-.166.033-.373.06-.558.045a.708.708 0 0 1-.252-.063a.337.337 0 0 1-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534l-1.471 1.217v1.973l4.82-3.797a.41.41 0 0 1 .016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31c-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 0 1-.11.042c-.06.02-.138.044-.228.068c-.18.049-.404.094-.604.089a.732.732 0 0 1-.275-.054a.344.344 0 0 1-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465c.56-.519.687-.698.687-.963c0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02l-.003.005l-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 0 1-.282.093a3.058 3.058 0 0 1-.65.115a1.035 1.035 0 0 1-.31-.027a.364.364 0 0 1-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 0 1 .095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{ opacity: 1, transform: "none" }}
            className="reveal fade-show"
          >
            <div
              className="flex flex-col items-center border-t-2 border-ct-primary-500 justify-center p-4 py-6 m-2 hover:bg-ct-primary-400 transition-all"
              style={{ transition: "all 0.5s ease-in-out 0s" }}
            >
              <h1 className="uppercase font-bold text-xl mb-5">NextJS</h1>
              <div className="grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="mx-10 iconify iconify--teenyicons"
                  width={80}
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 15 15"
                  style={{ verticalAlign: "-0.125em" }}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M0 7.5a7.5 7.5 0 1 1 11.697 6.216L4.907 4.21A.5.5 0 0 0 4 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 0 1 0 7.5ZM10 10V4h1v6h-1Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{ opacity: 1, transform: "none" }}
            className="reveal fade-show"
          >
            <div
              className="flex flex-col items-center border-t-2 border-ct-primary-500 justify-center p-4 py-6 m-2 hover:bg-ct-primary-400 transition-all"
              style={{ transition: "all 0.5s ease-in-out 0s" }}
            >
              <h1 className="uppercase font-bold text-xl mb-5">ReactJS</h1>
              <div className="grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="mx-10 iconify iconify--fa6-brands"
                  width={80}
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 512 512"
                  style={{ verticalAlign: "-0.125em" }}
                >
                  <path
                    fill="currentColor"
                    d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1c.9-3.7 1.7-7.4 2.5-11.1c12.3-59.6 4.2-107.5-23.1-123.3c-26.3-15.1-69.2.6-112.6 38.4c-4.3 3.7-8.5 7.6-12.5 11.5c-2.7-2.6-5.5-5.2-8.3-7.7c-45.5-40.4-91.1-57.4-118.4-41.5c-26.2 15.2-34 60.3-23 116.7c1.1 5.6 2.3 11.1 3.7 16.7c-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5c4.5 1.5 9 3 13.6 4.3c-1.5 6-2.8 11.9-4 18c-10.5 55.5-2.3 99.5 23.9 114.6c27 15.6 72.4-.4 116.6-39.1c3.5-3.1 7-6.3 10.5-9.7c4.4 4.3 9 8.4 13.6 12.4c42.8 36.8 85.1 51.7 111.2 36.6c27-15.6 35.8-62.9 24.4-120.5c-.9-4.4-1.9-8.9-3-13.5c3.2-.9 6.3-1.9 9.4-2.9c57.7-19.1 99.5-50 99.5-81.7c0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36c16.9 9.7 23.4 48.9 12.8 100.4c-.7 3.4-1.4 6.7-2.3 10c-22.2-5-44.7-8.6-67.3-10.6c-13-18.6-27.2-36.4-42.6-53.1c3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9c-15.6-1.7-31.1-4.2-46.4-7.5c4.4-14.4 9.9-29.3 16.3-44.5c4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8c-5.3 8.3-10.5 16.8-15.4 25.4c-4.9 8.5-9.7 17.2-14.2 26c-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8c-7.6 13.3-15.7 26.2-24.2 39c-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7c6.4 14.5 12 29.2 16.9 44.3c-15.5 3.5-31.2 6.2-47 8c5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2c-4.9-8.5-10-16.9-15.3-25.2c16.1 2 31.5 4.7 45.9 8c-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8c-19.8-.9-39.7-.9-59.5 0c9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39c2.5 2.2 5 4.6 7.6 7c-15.5 16.7-29.8 34.5-42.9 53.1c-22.6 2-45 5.5-67.2 10.4c-1.3-5.1-2.4-10.3-3.5-15.5c-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9c-21.3-6.7-45.5-17.3-63-31.2c-10.1-7-16.9-17.8-18.8-29.9c0-18.3 31.6-41.7 77.2-57.6c5.7-2 11.5-3.8 17.3-5.5c6.8 21.7 15 43 24.5 63.6c-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3c-11.1 5.3-23.9 5.8-35.3 1.3c-15.9-9.2-22.5-44.5-13.5-92c1.1-5.6 2.3-11.2 3.7-16.7c22.4 4.8 45 8.1 67.9 9.8c13.2 18.7 27.7 36.6 43.2 53.4c-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3c9.6.4 19.5.6 29.5.6c10.3 0 20.4-.2 30.4-.7c-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3c-15.9 9.2-49.8-2.8-86.4-34.2c-4.2-3.6-8.4-7.5-12.7-11.5c15.3-16.9 29.4-34.8 42.2-53.6c22.9-1.9 45.7-5.4 68.2-10.5c1 4.1 1.9 8.2 2.7 12.2c4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6c-7-21.8-15.6-43.1-25.5-63.8c9.6-20.4 17.7-41.4 24.5-62.9c5.2 1.5 10.2 3.1 15 4.7c46.6 16 79.3 39.8 79.3 58c0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{ opacity: 1, transform: "none" }}
            className="reveal fade-show"
          >
            <div
              className="flex flex-col items-center border-t-2 border-ct-primary-500 justify-center p-4 py-6 m-2 hover:bg-ct-primary-400 transition-all"
              style={{ transition: "all 0.5s ease-in-out 0s" }}
            >
              <h1 className="uppercase font-bold text-xl mb-5">
                Redux / Redux-Toolkit
              </h1>
              <div className="grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="mx-10 iconify iconify--file-icons"
                  width={80}
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 512 512"
                  style={{ verticalAlign: "-0.125em" }}
                >
                  <path
                    fill="currentColor"
                    d="M290.583 477.715c9.087-6.49 22.07-16.877 29.21-23.368c124.456 49.444 165.06-47.194 161.818-84.077c-3.59-40.84-54.299-157.39-226.728-157.393c-8.108 19.003-31.817 28.536-51.427 17.177c-24.066-13.94-24.066-48.977 0-62.916c18.695-10.83 41.111-2.668 50.188 14.581c104.685-.532 222.046 43.93 254.864 167.65c23.67 89.225-75.634 193.24-217.925 128.346zm64.406-126.193c17.32-2.041 32.333-16.497 32.333-36.085c0-27.879-30.405-45.398-54.598-31.458c-21.223 12.228-23.823 40.69-7.81 56.904C267.471 447.981 139.18 489.856 71.48 449.208c-37.49-22.51-76.15-103.092 13.982-177.262c-2.597-8.438-6.492-22.719-8.439-33.105c-162.047 122.116-45.399 316.424 137.312 240.755c49.398-20.458 102.958-56.213 140.653-128.074zm-197.604 41.46c24.227 13.94 54.675-3.58 54.675-31.458c0-23.266-21.205-39.3-42.303-35.873C35.742 75.325 317.897-73.33 354.196 163.544l32.456 9.737C363.052-17.261 220.585.174 174.945 38.765C140.74 67.688 49.3 169.46 143.772 343.792c-9.103 16.39-4.566 38.73 13.613 49.19z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{ opacity: 1, transform: "none" }}
            className="reveal fade-show"
          >
            <div
              className="flex flex-col items-center border-t-2 border-ct-primary-500 justify-center p-4 py-6 m-2 hover:bg-ct-primary-400 transition-all"
              style={{ transition: "all 0.5s ease-in-out 0s" }}
            >
              <h1 className="uppercase font-bold text-xl mb-5">Redux-Saga</h1>
              <div className="grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="mx-10 iconify iconify--simple-icons"
                  width={80}
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  style={{ verticalAlign: "-0.125em" }}
                >
                  <path
                    fill="currentColor"
                    d="M7.871 4.678a3.315 3.315 0 0 0-1.953.631C4.455 6.35 3.724 8.235 3.534 10.007c-.204 1.938.23 4.166 1.398 5.638c-.194.57.193 1.202.793 1.268a.975.975 0 0 0 1.06-.713c.197-.66-.425-1.342-1.13-1.189c-.982-1.321-1.29-3.038-1.186-4.653c.125-1.576.683-3.255 1.985-4.245c.81-.602 1.828-.622 2.65-.075c1.107.742 1.763 2.132 1.97 3.43l.51.199l.551.288c-.198-1.888-1.097-3.866-2.576-4.774a3.149 3.149 0 0 0-1.688-.503zm9.515 3.946a8.752 8.752 0 0 0-3.056.526a.968.968 0 0 0-1.246.27c-.394.505-.162 1.297.475 1.495c.615.211 1.29-.284 1.265-.918a7.778 7.778 0 0 1 2.839-.403c1.575.07 3.665.654 4.626 2.148c.076.119.165.404.521.4a.484.484 0 0 0 .422-.7c-.526-.99-1.522-1.725-2.636-2.194c-.984-.412-2.095-.62-3.21-.624zm-11.06.717c-.455-.003-.93.296-.979.933c.012 1.233 1.657 1.33 1.912.24c1.887-.271 3.894.584 5.3 1.717c.973.77 1.852 1.993 2.072 3.083c.162.071.61.265 1.002.306c-.146-1.638-1.215-3.101-2.452-4.127c-1.568-1.33-4.123-2.328-6.218-1.903a.912.912 0 0 0-.636-.249zm-3.418 1.86c-.866.609-1.65 1.36-2.185 2.282C.008 14.668-.312 16.24.4 17.499c.66 1.218 2.082 1.78 3.41 1.812a7.263 7.263 0 0 0 2.265-.297c2.104-.59 4.373-2.222 5.274-4.362a.964.964 0 0 0 .79-.705c.2-.72-.463-1.372-1.169-1.191c-.686.175-.966 1.012-.522 1.54c-.607 1.389-1.8 2.449-3.112 3.161c-1.493.804-3.306 1.188-4.758.659c-.93-.304-1.642-1.13-1.618-2.215c0-1.297.924-2.677 2.062-3.573c-.118-.538-.107-.74-.114-1.128zm20.103 1.53a.938.938 0 0 0-.672.292c-.344.327-.364.902-.092 1.248c-.546.823-1.508 1.384-2.455 1.706c-1.855.613-4.111.503-5.798-.38a4.48 4.48 0 0 1-.99-.674c-.141-.128-.183-.157-.296-.188c-.5-.105-.783.486-.457.808c1.269 1.189 3.037 1.706 4.744 1.777c.664.024 1.33-.02 1.983-.14c1.622-.302 3.318-1.107 4.168-2.521c.639-.072 1.038-.775.769-1.344a.958.958 0 0 0-.904-.584zm-8.746 4.514c-.83 1.12-2.646 1.45-4.75.723c-.19.13-.302.214-.433.3c-.13.087-.29.17-.607.366c2.558 1.032 5.444 1.076 6.739-1.082a3.39 3.39 0 0 1-.949-.307z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{ opacity: 1, transform: "none" }}
            className="reveal fade-show"
          >
            <div
              className="flex flex-col items-center border-t-2 border-ct-primary-500 justify-center p-4 py-6 m-2 hover:bg-ct-primary-400 transition-all"
              style={{ transition: "all 0.5s ease-in-out 0s" }}
            >
              <h1 className="uppercase font-bold text-xl mb-5">React-Router</h1>
              <div className="grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="mx-10 iconify iconify--simple-icons"
                  width={80}
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  style={{ verticalAlign: "-0.125em" }}
                >
                  <path
                    fill="currentColor"
                    d="M12.118 5.466a2.306 2.306 0 0 0-.623.08c-.278.067-.702.332-.953.583c-.41.423-.49.609-.662 1.469c-.08.423.41 1.43.847 1.734c.45.317 1.085.502 2.065.608c1.429.16 1.84.636 1.84 2.197c0 1.377-.385 1.747-1.96 1.906c-1.707.172-2.58.834-2.765 2.117c-.106.781.41 1.76 1.125 2.091c1.627.768 3.15-.198 3.467-2.196c.211-1.284.622-1.642 1.998-1.747c1.588-.133 2.409-.675 2.713-1.787c.278-1.02-.304-2.157-1.297-2.554c-.264-.106-.873-.238-1.35-.291c-1.495-.16-1.879-.424-2.038-1.39c-.225-1.337-.317-1.562-.794-2.09a2.174 2.174 0 0 0-1.613-.73zm-4.785 4.36a2.145 2.145 0 0 0-.497.048c-1.469.318-2.17 2.051-1.35 3.295c1.178 1.774 3.944.953 3.97-1.177c.012-1.193-.98-2.143-2.123-2.166zM2.089 14.19a2.22 2.22 0 0 0-.427.052c-2.158.476-2.237 3.626-.106 4.182c.53.145.582.145 1.111.013c1.191-.318 1.866-1.456 1.549-2.607c-.278-1.02-1.144-1.664-2.127-1.64zm19.824.008c-.233.002-.477.058-.784.162c-1.39.477-1.866 2.092-.98 3.336c.557.794 1.96 1.058 2.82.516c1.416-.874 1.363-3.057-.093-3.746c-.38-.186-.663-.271-.963-.268z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{ opacity: 1, transform: "none" }}
            className="reveal fade-show"
          >
            <div
              className="flex flex-col items-center border-t-2 border-ct-primary-500 justify-center p-4 py-6 m-2 hover:bg-ct-primary-400 transition-all"
              style={{ transition: "all 0.5s ease-in-out 0s" }}
            >
              <h1 className="uppercase font-bold text-xl mb-5">ElectronJS</h1>
              <div className="grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="mx-10 iconify iconify--simple-icons"
                  width={80}
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  style={{ verticalAlign: "-0.125em" }}
                >
                  <path
                    fill="currentColor"
                    d="M12.011 0a1.54 1.54 0 1 0 1.366 2.247c2.221 1.267 3.847 5.472 3.847 10.362c0 2.071-.289 4.056-.825 5.768a.322.322 0 0 0 .211.403a.322.322 0 0 0 .403-.21c.556-1.777.855-3.826.855-5.961c0-5.193-1.772-9.686-4.321-11.003c0-.022.003-.044.003-.067A1.54 1.54 0 0 0 12.011 0zm0 .643a.896.896 0 1 1 0 1.792a.896.896 0 1 1 0-1.792zM6.525 4.948c-2.067.008-3.647.665-4.388 1.949c-.738 1.277-.527 2.97.51 4.781a.322.322 0 0 0 .559-.32c-.935-1.63-1.117-3.092-.512-4.14c.82-1.422 3.033-1.955 5.932-1.427a.322.322 0 0 0 .115-.633a12.182 12.182 0 0 0-2.216-.21zm11.052.018a.322.322 0 0 0-.008.643c1.834.024 3.156.596 3.75 1.626c.82 1.419.18 3.594-1.718 5.837a.322.322 0 0 0 .038.453a.322.322 0 0 0 .453-.037c2.053-2.426 2.77-4.866 1.784-6.575c-.725-1.257-2.26-1.92-4.299-1.947zm-2.698.292a.323.323 0 0 0-.065.008c-1.857.398-3.833 1.175-5.731 2.271c-4.57 2.638-7.593 6.495-7.36 9.372a1.538 1.538 0 0 0 .746 2.884a1.54 1.54 0 0 0 0-3.078c-.038 0-.075.003-.113.006c-.1-2.56 2.744-6.142 7.048-8.627c1.842-1.063 3.756-1.816 5.545-2.2a.322.322 0 0 0-.07-.636zM12 11.495a1.12 1.12 0 0 0-.224.025a1.114 1.114 0 1 0 .224-.025zM4.532 13.34a.321.321 0 0 0-.232.084a.321.321 0 0 0-.021.454c1.268 1.393 2.916 2.7 4.794 3.785c4.415 2.55 9.106 3.285 11.561 1.84a1.53 1.53 0 0 0 .897.29a1.54 1.54 0 1 0-1.338-.781c-2.245 1.214-6.631.5-10.798-1.906c-1.823-1.052-3.418-2.318-4.64-3.661a.32.32 0 0 0-.223-.105zm-2.063 4.017a.896.896 0 1 1 0 1.792a.896.896 0 1 1 0-1.792zm19.062 0a.896.896 0 1 1 0 1.792a.891.891 0 0 1-.587-.22l-.006-.011a.32.32 0 0 0-.096-.092a.896.896 0 0 1 .689-1.469zM7.526 18.726a.322.322 0 0 0-.32.43C8.279 22.154 10.036 24 12.01 24c1.44 0 2.774-.982 3.813-2.711a.322.322 0 0 0-.11-.441a.322.322 0 0 0-.442.11c-.934 1.553-2.08 2.399-3.26 2.399c-1.642 0-3.208-1.647-4.2-4.418a.322.322 0 0 0-.286-.213z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{ opacity: 1, transform: "none" }}
            className="reveal fade-show"
          >
            <div
              className="flex flex-col items-center border-t-2 border-ct-primary-500 justify-center p-4 py-6 m-2 hover:bg-ct-primary-400 transition-all"
              style={{ transition: "all 0.5s ease-in-out 0s" }}
            >
              <h1 className="uppercase font-bold text-xl mb-5">TailwindCSS</h1>
              <div className="grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="mx-10 iconify iconify--file-icons"
                  width={80}
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 512 512"
                  style={{ verticalAlign: "-0.125em" }}
                >
                  <path
                    fill="currentColor"
                    d="M128 204.667C145.062 136.227 187.738 102 256 102c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C494.938 221.773 452.262 256 384 256c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5zm-128 154C17.062 290.227 59.738 256 128 256c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C366.938 375.773 324.262 410 256 410c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{ opacity: 1, transform: "none" }}
            className="reveal fade-show"
          >
            <div
              className="flex flex-col items-center border-t-2 border-ct-primary-500 justify-center p-4 py-6 m-2 hover:bg-ct-primary-400 transition-all"
              style={{ transition: "all 0.5s ease-in-out 0s" }}
            >
              <h1 className="uppercase font-bold text-xl mb-5">Ant Design</h1>
              <div className="grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="mx-10 iconify iconify--ant-design"
                  width={80}
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024"
                  style={{ verticalAlign: "-0.125em" }}
                >
                  <path
                    fill="currentColor"
                    d="M716.3 313.8c19-18.9 19-49.7 0-68.6l-69.9-69.9l.1.1c-18.5-18.5-50.3-50.3-95.3-95.2c-21.2-20.7-55.5-20.5-76.5.5L80.9 474.2a53.84 53.84 0 0 0 0 76.4L474.6 944a54.14 54.14 0 0 0 76.5 0l165.1-165c19-18.9 19-49.7 0-68.6a48.7 48.7 0 0 0-68.7 0l-125 125.2c-5.2 5.2-13.3 5.2-18.5 0L189.5 521.4c-5.2-5.2-5.2-13.3 0-18.5l314.4-314.2c.4-.4.9-.7 1.3-1.1c5.2-4.1 12.4-3.7 17.2 1.1l125.2 125.1c19 19 49.8 19 68.7 0zM408.6 514.4a106.3 106.2 0 1 0 212.6 0a106.3 106.2 0 1 0-212.6 0zm536.2-38.6L821.9 353.5c-19-18.9-49.8-18.9-68.7.1a48.4 48.4 0 0 0 0 68.6l83 82.9c5.2 5.2 5.2 13.3 0 18.5l-81.8 81.7a48.4 48.4 0 0 0 0 68.6a48.7 48.7 0 0 0 68.7 0l121.8-121.7a53.93 53.93 0 0 0-.1-76.4z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{ opacity: 1, transform: "none" }}
            className="reveal fade-show"
          >
            <div
              className="flex flex-col items-center border-t-2 border-ct-primary-500 justify-center p-4 py-6 m-2 hover:bg-ct-primary-400 transition-all"
              style={{ transition: "all 0.5s ease-in-out 0s" }}
            >
              <h1 className="uppercase font-bold text-xl mb-5">Mantine UI</h1>
              <div className="grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="mx-10 iconify iconify--carbon"
                  width={80}
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                  style={{ verticalAlign: "-0.125em" }}
                >
                  <path
                    fill="currentColor"
                    d="M22.49 23.71h-7.54a3.12 3.12 0 0 1-2.41-1A14.91 14.91 0 0 1 10 18.88c-1.3-2.6-2.54-5.22-3.82-7.82c-.39-.8-.82-1.56-1.28-2.32A7.84 7.84 0 0 0 2 5.6h3.57a45.63 45.63 0 0 1 7 .61a8.09 8.09 0 0 1 6.34 5.09a48.51 48.51 0 0 1 2.17 7.36a26 26 0 0 0 1.41 5.05zm5.61 2.67a2.93 2.93 0 0 1-2.74-2.64a42.08 42.08 0 0 1-.14-4.9a48 48 0 0 0-.61-7.58a3.75 3.75 0 0 0-.83-2h2.65c.54 0 .73.37.89.78a12.1 12.1 0 0 1 .68 3.24c.29 2.72.31 5.45.33 8.18a10.94 10.94 0 0 0 0 1.15c.09.78.4 1.1 1.17 1.08c.5 0 .5-.06.5-.06v2.69a8.62 8.62 0 0 1-1.9.06z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{ opacity: 1, transform: "none" }}
            className="reveal fade-show"
          >
            <div
              className="flex flex-col items-center border-t-2 border-ct-primary-500 justify-center p-4 py-6 m-2 hover:bg-ct-primary-400 transition-all"
              style={{ transition: "all 0.5s ease-in-out 0s" }}
            >
              <h1 className="uppercase font-bold text-xl mb-5">Charka UI</h1>
              <div className="grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="mx-10 iconify iconify--carbon"
                  width={80}
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                  style={{ verticalAlign: "-0.125em" }}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m9.09 15.246l4.67 2.277a1.07 1.07 0 0 1-.21 2.002l-5.04 1.257a1.073 1.073 0 0 1-1.324-.921a9.217 9.217 0 0 1 .42-3.997a1.07 1.07 0 0 1 1.485-.618zm1.87 9.614L14.436 21a1.07 1.07 0 0 1 1.866.753l-.181 5.194a1.072 1.072 0 0 1-1.25 1.02a9.301 9.301 0 0 1-3.722-1.507a1.071 1.071 0 0 1-.189-1.6zm8.242-5.138l4.942 1.606a1.071 1.071 0 0 1 .636 1.48a9.302 9.302 0 0 1-2.47 3.166a1.072 1.072 0 0 1-1.592-.258l-2.754-4.408a1.07 1.07 0 0 1 1.239-1.586zm5.025-3.152l-4.995 1.432a1.07 1.07 0 0 1-1.182-1.628l2.906-4.308a1.07 1.07 0 0 1 1.594-.206a9.217 9.217 0 0 1 2.363 3.25a1.073 1.073 0 0 1-.686 1.46zM12.557 4.45a14.954 14.954 0 0 0-2.568.946a1.07 1.07 0 0 0-.464 1.501l4.882 8.456a1.07 1.07 0 0 0 1.998-.535V5.053a1.07 1.07 0 0 0-1.152-1.068a14.958 14.958 0 0 0-2.697.465z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default TechnicalComponent;
