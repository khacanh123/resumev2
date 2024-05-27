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
      name: "Ikigai coach - Landing page",
      time: "04/2024",
      description: "The Ikigai Coach App is a revolutionary tool designed to help users discover and align with their true purpose in life, based on the Japanese concept of. This app provides a structured approach to finding a balanced and fulfilling life by identifying what you love, what you are good at, what the world needs, and what you can be paid for.",
      customer: "IKI User",
      access: 1,
      position: 'Frontend Developer',
      technologies: 'ReactJS, style components, tailwindCSS',
      task: "<li>Implement the UI/UX follow the design.</li> <li>Deploy project to vercel and add domain website.</li>",
      company: "IKIGROUP",
      link: "https://ikigai-coach.vercel.app"
    }, 
    {
      id: "2",
      name: "Iki Edu - Landing page",
      time: "04/2024",
      description: "Iki Edu is a comprehensive educational app designed specifically for children, offering a wide range of enriching activities. Our platform combines fun with effective teaching methods to create an engaging learning experience. Through interactive lessons and games, children can develop essential skills in a stimulating environment.",
      customer: "IKI User",
      access: 1,
      position: 'Frontend Developer',
      technologies: 'Wordpress',
      task: "<li>Implement the UI/UX follow the design.</li> <li>Edit theme wordpress</li>",
      company: "IKIGROUP",
      link: "https://iki.edu.vn"
    },
    {
      id: "3",
      name: "IELTS HUNTER",
      time: "12/2023 - 04/2024",
      description: `Developed an IELTS learning app that connects teachers and students via a community
      platform. Features include course viewing and enrollment functionalities, allowing users to
      access and register for relevant courses.`,
      customer: "IKI User",
      access: 1,
      position: 'Frontend Developer',
      technologies: 'ReactJS Typescript, redux-toolkit, TailwindCSS, MantineUI, axios ...',
      task: "<li>Implement the UI/UX follow the design.</li> <li>Edit theme wordpress</li>",
      company: "IKIGROUP",
      // link: "https://iki.edu.vn"
    },
    {
      id: "4",
      name: "HOCMAI EMS",
      time: "03/2022 - 11/2023",
      description: `A project which was to build a content management tool for Hoc Mai products including
HSA, TSA and IELTS exam sites. The project helps administrators manage questions, assignments, set up contests and
some other tasks.
      `,
      customer: "Admin HOCMAI",
      access: 1,
      position: 'Frontend Developer',
      technologies: 'ReactJS Typescript, redux-toolkit, TailwindCSS, MantineUI, axios ...',
      task: "<li>Implement the UI/UX follow the design.</li> <li>Perform the tasks based on the Agile Scrum model and has fully reported to the Scrum Team.</li>",
      company: "He thong giao duc HOCMAI",
      // link: "https://iki.edu.vn"
    },
    {
      id: "5",
      name: "HOCMAI Career",
      time: "01/2022 - 03/2022",
      description: `A project which was to develop the feature of multiple-choice question of career
      experiences.
      `,
      customer: "HOCMAI User",
      access: 1,
      position: 'Frontend Developer',
      technologies: 'NextJS Typescript, redux-toolkit, TailwindCSS, MantineUI, axios ...',
      task: "<li>Implement the UI/UX follow the design.</li> <li>build the web application according to the design and customer requirements.</li>",
      company: "He thong giao duc HOCMAI",
      link: "https://huongnghiep.hocmai.vn/trac-nghiem-nghe-nghiep"
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
      <div className="w-full px-4" id="work-experience">
        <div className="w-full my-12 lg:my-20">
          <p className="font-bold text-[34px] lg:text-[50px] text-white text-center gradient-text">
          Less is the new more. <br /> {`Explore my products.`}
          </p>
          <p className="text-xl text-center mt-5 px-5 !text-white">
          Because I believe we can achieve more with less. Fewer complex problems, more simple and <br /> human solutions. Websites can be faster, easier, and simpler to edit.
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
                      <div
                        dangerouslySetInnerHTML={{ __html: key.description.substring(0,60)+ '...' }}
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
        withCloseButton
        size="xl"
      >
        <div className="md:p-10">
          <h1 className="uppercase font-bold text-xl">{dataById?.name}</h1>
          <p className="pb-4">({dataById?.time})</p>
          <Table>
            <tbody>
              <tr>
                <td className="font-bold whitespace-nowrap">Project Name</td>
                <td>
                  <div>{dataById?.name}</div>
                </td>
              </tr>
              <tr>
                <td className="font-bold whitespace-nowrap">Time</td>
                <td>
                  <div>({dataById?.time})</div>
                </td>
              </tr>
              <tr>
                <td className="font-bold whitespace-nowrap">Description</td>
                <td>
                  <div
                    dangerouslySetInnerHTML={{ __html: dataById?.description }}
                  ></div>
                </td>
              </tr>
              <tr>
                <td className="font-bold whitespace-nowrap">Customer</td>
                <td>
                  <div>{dataById?.customer}</div>
                </td>
              </tr>
              <tr>
                <td className="font-bold whitespace-nowrap">Team size</td>
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
              <tr>
                <td className="font-bold whitespace-nowrap">Company</td>
                <td>
                  <div className="uppercase">{dataById?.company}</div>
                </td>
              </tr>
             {
              dataById?.hasOwnProperty('link') && (
                <tr>
                <td className="font-bold whitespace-nowrap">Link project</td>
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
