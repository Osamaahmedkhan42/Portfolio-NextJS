import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Natours API",
    description:
      "Natours API is project created for learning purpose based on NodeJS,Express,MongoDB and ejs templeting engine .",
    image: "/natours.png",
    github: "https://github.com/Osamaahmedkhan42/Natours-API",
    credits: "Jonas Schmedtmann",
    link: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/#instructor-1",
  },
  {
    name: "Messenger Clone",
    description: "A messenger clone created with NextJS.",
    image: "/messenger.png",
    github: "https://github.com/Osamaahmedkhan42/Messenger-Clone",
    credits: "Antonio Erdeljac",
    link: "https://messenger-clone-sepia.vercel.app/",
  },
  {
    name: "Inventry Management App",
    description: "An inventry management app created with NextJS.",
    image: "/Inventry.png",
    github: "https://github.com/Osamaahmedkhan42/inventryManagement",
    credits: "Harry",
    link: "https://inventry-management.vercel.app/",
  },

]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28  text-center md:text-left ">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>

              <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 ">
                <div className=" md:w-1/2">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt=""
                      width={200}
                      height={200}
                      className="rounded-xl shadow-xl hover:opacity-70 mx-20 lg:mx-52"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <p className="text-xl leading-7 mb-4 text-neutral-900 dark:text-neutral-400">
                    Credits: {project.credits}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4 justify-center md:justify-start">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer "
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          )
        })}

      </div>
      <div className="md:text-6xl text-center mt-20">More Coming Soon...</div>
    </section>
  )
}

export default ProjectsSection
