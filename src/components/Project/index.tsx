import { Modal, Table } from "@mantine/core";
import firebase from "@/components/firebase";
import { useEffect, useState } from "react";
import Link from "next/link";

function ProjectComponent() {
  const [opened, setOpened] = useState({
    opened: false,
    id: "",
  });
  const [todoList, setTodoList] = useState<any>([]);
  const [dataById, setDataById] = useState<any>({});
  useEffect(() => {
    const todoRef = firebase.database().ref("project");
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
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  if (typeof window !== "undefined") window.addEventListener("scroll", reveal);
  useEffect(() => {
    if (opened.id !== "") {
      const todoRef = firebase.database().ref("project").child(opened.id);
      //   console.log(todoRef);
      todoRef.on("value", (snapshot) => {
        const todos = snapshot.val();
        setDataById(todos);
      });
    }
  }, [opened.id]);
  return (
    <>
      <div className="w-full px-4" id="project">
        <div className="w-full my-12 lg:my-20">
          <p className="font-bold text-[34px] lg:text-[50px] text-center gradient-text">
            Time and tide waits for no man.
            <br />
            My personal project below
          </p>
          <p className="text-xl text-center mt-5 px-5">
            {`Don't let time be wasted. I'm always up to date with new technology and find cool stuff that you might like`}
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center reveal fade-right">
          {todoList &&
            todoList.map((key: any, index: number) => (
              <>
                <div
                  onClick={() =>
                    setOpened((pre) => {
                      return {
                        ...pre,
                        opened: true,
                        id: key.id,
                      };
                    })
                  }
                >
                  <div className="w-full flex flex-wrap justify-center cursor-pointer">
                    <div className="project h-[300px] w-[250px] p-6 m-4 border-t-2 border-ct-primary-500 hover:text-white hover:bg-ct-primary-500 dark:bg-ct-dark-secondary-400 dark:hover:bg-ct-primary-500 bg-ct-neutral-100 flex flex-wrap justify-between transition-all">
                      <h1 className="uppercase font-bold text-xl">
                        {key.name}
                      </h1>
                      <div
                        dangerouslySetInnerHTML={{ __html: key.description }}
                        className="line-clamp-3 whitespace-pre-wrap h-fit"
                      ></div>
                      <svg
                        className="self-end"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm2.79 10.53l-3.53 3.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l3-3-3-3a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.53 3.53c.3.29.3.77 0 1.06z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
      <Modal
        opened={opened.opened}
        onClose={() =>
          setOpened((pre) => {
            return {
              ...pre,
              opened: false,
              id: "",
            };
          })
        }
        size="xl"
      >
        <div className="md:p-10">
          <h1 className="uppercase font-bold text-xl">{dataById.name}</h1>
          <Table>
            <tbody>
              <tr>
                <td className="font-bold whitespace-nowrap">Project name</td>
                <td>
                  {" "}
                  <div>{dataById.name}</div>
                </td>
              </tr>
              <tr>
                <td className="font-bold whitespace-nowrap">Description</td>
                <td>
                  <div
                    dangerouslySetInnerHTML={{ __html: dataById.description }}
                    className="line-clamp-3 whitespace-pre-wrap h-fit"
                  ></div>
                </td>
              </tr>
              <tr>
                <td className="font-bold whitespace-nowrap">Source code</td>
                <td>
                  {" "}
                  <div>
                    <Link
                      className="text-ct-primary-500"
                      href={dataById.position}
                      target="_blank"
                    >
                      {dataById.position}
                    </Link>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="font-bold whitespace-nowrap">Technologies</td>
                <td>
                  {" "}
                  <div>{dataById.technologies}</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Modal>
    </>
  );
}

export default ProjectComponent;
