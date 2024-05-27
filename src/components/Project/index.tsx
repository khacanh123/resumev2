import { Modal, Table } from "@mantine/core";
import firebase from "@/components/firebase";
import { useEffect, useState } from "react";

function WorkExpComponent() {
  const [opened, setOpened] = useState({
    opened: false,
    id: "",
  });
  const [todoList, setTodoList] = useState<any>([
    {
      id: "1",
      name: "IKIGROUP",
      time: "12/2023 - 05/2024",
      link_img: "https://ikigroup.vn/templates/default/images/logo.png",
      Domain: "Education",
      access: 3,
      position: 'Frontend Developer',
      technologies: 'ReactJS, Wordpress',
      task: "<li>Implement the UI/UX follow the design. Build the web application according to the design and customer requirements.</li> <li>Perform the tasks based on the Agile Scrum model and has fully reported to the Scrum Team.</li><li>Clean code & fix bug</li>",
      company: "IKIGROUP",
      link: "https://ikigroup.vn"
    }, 
    {
      id: "2",
      name: "HE THONG GIAO DUC HOCMAI",
      time: "01/2022 - 11/2023",
      link_img: "https://huongnghiep.hocmai.vn/wp-content/uploads/2021/11/Logo-hocmai-1-1.png",
      Domain: "Education",
      access: 2,
      position: 'Frontend Developer',
      technologies: 'ReactJS, Wordpress',
      task: "<li>Implement the UI/UX follow the design. Build the web application according to the design and customer requirements.</li> <li>Perform the tasks based on the Agile Scrum model and has fully reported to the Scrum Team.</li><li>Clean code & fix bug</li>",
      company: "IKIGROUP",
      link: "https://hocmai.vn"
    }, 
     
  ]);
  const [dataById, setDataById] = useState<any>({});
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
  // useEffect(() => {
  //   if (opened.id !== "") {
  //     setDataById(todoList.filter((item: any) => item.id == opened.id))
  //   }
  // }, [opened.id]);
  return (
    <>
      <div className="w-full px-4" id="project">
        <div className="w-full my-12 lg:my-20">
          <p className="font-bold text-[34px] lg:text-[50px] text-white text-center gradient-text">
          Time and tide waits for no man. <br /> {`
My personal project below`}
          </p>
          <p className="text-xl text-center mt-5 px-5 !text-white">
          {`Don't let time be wasted. I'm always up to date with new technology and find cool stuff that you might like`}
           </p>
        </div>
        <div className="w-full flex flex-wrap justify-center reveal">
          {todoList &&
            todoList.map((key: any, index: number) => (
              <>
                <div
                  onClick={() => {

                    setOpened((pre) => {
                      return {
                        ...pre,
                        opened: true,
                        id: key.id,
                      };
                    })
                    setDataById(key)
                  }
                  }
                >
                  <div className="w-full flex flex-wrap justify-center cursor-pointer" key={index}>
                    <div className="project h-[300px] w-[250px] p-6 m-4 border-t-2 border-ct-primary-500 text-white hover:text-white hover:bg-ct-primary-500 dark:bg-ct-dark-secondary-400 dark:hover:bg-ct-primary-500 bg-ct-neutral-100 flex flex-wrap justify-between transition-all">
                      <h1 className="uppercase font-bold text-xl">
                        {key.name}
                      </h1>
                      <div className="flex justify-center items-center w-full">

                     <img src={key.link_img} className="h-16"/>
                      </div>
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
        withCloseButton
        size="xl"
      >
        <div className="md:p-10">
          <h1 className="uppercase font-bold text-xl">{dataById?.name}</h1>
          <p className="pb-4">({dataById?.time})</p>
          <Table>
            <tbody>
              <tr>
                <td className="font-bold whitespace-nowrap">Domain</td>
                <td>
                  <div>{dataById?.domain}</div>
                </td>
              </tr>
              <tr>
                <td className="font-bold whitespace-nowrap">Time</td>
                <td>
                  <div>({dataById?.time})</div>
                </td>
              </tr>
              <tr>
                <td className="font-bold whitespace-nowrap">Project</td>
                <td>
                  <div>{dataById?.access}</div>
                </td>
              </tr>
              <tr>
                <td className="font-bold whitespace-nowrap">My position</td>
                <td>
                  <div>{dataById?.position}</div>
                </td>
              </tr>
              <tr>
                <td className="font-bold whitespace-nowrap">
                  My responsibilities
                </td>
                <td>
                  <div
                    dangerouslySetInnerHTML={{ __html: dataById?.task }}
                  ></div>
                </td>
              </tr>
             {
              dataById?.hasOwnProperty('link') && (
                <tr>
                <td className="font-bold whitespace-nowrap">Website</td>
                <td>
                  <a href={dataById?.link} className="text-ct-primary-500">{dataById?.link}</a>
                </td>
              </tr>
              )
             }
            </tbody>
          </Table>
        </div>
      </Modal>
    </>
  );
}

export default WorkExpComponent;
