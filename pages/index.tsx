import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import LessSkills from "@/components/skils/less";
import useOnScreen from "@/lib/useOnScreen";
import MoreSkills from "@/components/skils/more";
import Layout from "@/components/Layout";
import Link from "next/link";
import Close from "@/components/project/close";
import OpenSource from "@/components/project/open";
import dataTest from "@/lib/project/openSource.json";

export default function Home() {
  //* set show more skills
  const [showMore, setShowMore] = useState(true);

  const setShowLessSkill = () => {
    if (showMore == true) {
      setShowMore(false);
    } else {
      setShowMore(true);
      skillsScroll();
    }
  };

  //? skills
  const skills: any = useRef(null);
  const skillsScroll = () =>
    skills?.current.scrollIntoView({ behavior: "smooth" });
  const skillisVisible = useOnScreen(skills);

  //? about
  const about: any = useRef(null);
  const aboutScroll: any = () =>
    about?.current.scrollIntoView({ behavior: "smooth" });
  const aboutisVisible = useOnScreen(about);

  //? project
  const project: any = useRef(null);
  const projectScroll: any = () =>
    project?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const projectisVisible = useOnScreen(project);

  library.add(fab, fas);

  return (
    <Layout>
      <div className="parallax_layer parallax_layer_4 text-center mt-40">
        <h1 className="text-7xl font-mochiy">
          Hy! I am Supanat{" "}
          <span className="wave-emoji">
            <img
              alt="👋"
              draggable="false"
              src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"
            ></img>
          </span>
        </h1>
        <div className="mt-5 text-center font-mochiy">
          I code and love doing what I can't. and I like what I do.
        </div>
      </div>
      <div className="parallax_layer parallax_layer_3">
        <img className="img" src="/images/layer4.png" />
      </div>
      <div className="parallax_layer parallax_layer_2">
        <img className="img" src="/images/layer3.png" />
      </div>
      <div className="parallax_layer parallax_layer_1">
        <img className="img" src="/images/layer2.png" />
      </div>
      <div className="parallax_layer parallax_layer_0">
        <img className="img" src="/images/layer1.png" />
      </div>
      <div className="parallax_cover z-100 overflow-x-visible">
        <nav id="navbar" className="psitck text-white bg-main pb-6 pt-1 z-100">
          <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0 flex justify-between">
            <h2 className="rounded-md py-2" onClick={() => console.log("")}>
              HELLO
            </h2>
            <ul className="flex space-x-5">
              <li>
                <button
                  className={`hover:bg-purple-800 ${
                    aboutisVisible && "bg-purple-800"
                  } rounded-md px-4 py-2`}
                  onClick={aboutScroll}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className={`hover:bg-purple-800 ${
                    !aboutisVisible && skillisVisible && "bg-purple-800"
                  } rounded-md px-4 py-2`}
                  onClick={skillsScroll}
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  className={`hover:bg-purple-800 ${
                    !aboutisVisible &&
                    !skillisVisible &&
                    projectisVisible &&
                    "bg-purple-800"
                  } rounded-md px-4 py-2`}
                  onClick={projectScroll}
                >
                  Project
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0 text-white text-lg">
          <div className="text-center">
            <h2 id="about" ref={about} className="text-3xl">
              Hi, I’m Supanat Konprom. Nice to meet you.
            </h2>
            <p className="mt-3 text-gray-400 w-3/4 m-auto">
              Student Software Engineer 🚀 Experience building web, mobile
              applications and games with other cool libraries and frameworks.
            </p>
          </div>
          <br />
          <div
            ref={skills}
            id="skills"
            className="grid sm:grid-cols-7 grid-cols-1 gap-4 mt-10"
          >
            <div className="col-span-3 sm:order-1 order-2">
              <img src="/images/whatido.png" alt="" />
            </div>
            <div className="sm:order-2 col-span-4 order-1">
              <h2 className="text-3xl">What i do</h2>
              {showMore ? <LessSkills /> : <MoreSkills />}
              <div className="text-center mt-5">
                <button
                  onClick={setShowLessSkill}
                  className="bg-orange-600 px-5 py-2 rounded-lg focus:outline outline-offset-1 outline-orange-900"
                >
                  {showMore ? (
                    <FontAwesomeIcon
                      className="mr-2 down-animation"
                      size="lg"
                      icon={["fas", "arrow-down"]}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="mr-2 down-animation"
                      size="lg"
                      icon={["fas", "arrow-up"]}
                    />
                  )}{" "}
                  {showMore ? "Show more" : "Show less"}
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div ref={project} id="project">
            <h2 className="text-3xl">Project</h2>
            <h2 className="text-2xl mt-5 border-b-2 pb-2 border-purple-500 w-14 whitespace-nowrap">
              Closed Source
            </h2>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-4">
              <Close
                link="https://play.google.com/store/apps/developer?id=Laybiks"
                image="https://www.xda-developers.com/files/2019/09/play-store-dark-mode.jpg"
              >
                <h3>Google Play Store</h3>
                <p className="text-sm">Simple project on google play store</p>
              </Close>
              <Close
                link="https://chrome.google.com/webstore/detail/restore-youtube-dislikes/joiiagfkaacgdjdaenodonjbpmbhpckg?hl=th"
                image="https://www.caveconsulting.com/wp-content/uploads/2018/02/chrome-extension.png"
              >
                <h3>Chrome Extension</h3>
                <p className="text-sm">
                  Simple project on chrome extension for learning
                </p>
              </Close>
              <div className="bg-gray-900 rounded-md overflow-hidden flex cursor-pointer group h-64">
                <div className="m-auto text-center">
                  <div className="group-hover:top-0 text-2xl">Others</div>
                  <div className="group-hover:h-9 h-0 duration-500 overflow-hidden">
                    <FontAwesomeIcon
                      className="mr-2"
                      size="lg"
                      icon={["fas", "arrow-up"]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl mt-5 border-b-2 pb-2 border-purple-500 w-14 whitespace-nowrap">
              Open Source
            </h2>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-4">
              {dataTest.map((data: any, i: any) => (
                <OpenSource
                  key={i}
                  color={data.color}
                  detail={data.detail}
                  name={data.name}
                  lang={data.lang}
                  link={data.link}
                />
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="https://github.com/kai63001">
                <a
                  target={"_blank"}
                  className="bg-purple-600 px-5 py-3 rounded-lg focus:outline outline-offset-1 outline-purple-900"
                >
                  More Porjects
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
