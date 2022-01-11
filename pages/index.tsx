import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import LessSkills from '@/components/skils/less'

export default function Home() {
  const [scrollY ,setScrollY] = useState(0);

  //skills 
  const skills: any = useRef(null)
  const skillsScroll = () => skills?.current.scrollIntoView({ behavior: "smooth" })

  //about
  const about: any = useRef(null)
  const aboutScroll: any = () => about?.current.scrollIntoView({ behavior: "smooth" })

  library.add(fab, fas)
  const handleScroll = (e:any) => {
    setScrollY(window.scrollY - window.screen.height + 286)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      console.log(scrollY)
      console.log( about.current.offsetTop )
    }
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <div>
      <div className="parallax">
        <div className="parallax_layer parallax_layer_4 text-center mt-40">
          <h1 className="text-7xl font-mochiy">Hy! I am Supanat <span className="wave-emoji"><img alt="👋" draggable="false" src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"></img></span></h1>
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
        <div className="parallax_cover">
          <nav id="navbar" className="psitck text-white bg-main pb-6 pt-4 z-100">
            <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0 flex justify-between">
              <h2 onClick={()=>{
                console.log(about.current.offsetTop)
                console.log(window.scrollY - window.screen.height + 286)
                console.log(skills.current.offsetTop)
              }}>HELLO</h2>
              <ul className="flex space-x-5">
                <li>
                  <button className={`hover:bg-purple-800 ${scrollY >= about?.current?.offsetTop && scrollY < skills.current?.offsetTop ? 'bg-purple-800':''} rounded-md px-4 py-2`} onClick={aboutScroll}>About</button>
                </li>
                <li>
                  <button className={`hover:bg-purple-800 ${scrollY >= skills.current?.offsetTop ? 'bg-purple-800':''} rounded-md px-4 py-2`} onClick={skillsScroll}>Skills</button>
                </li>
                <li>
                  <button className={`hover:bg-purple-800 rounded-md px-4 py-2`} onClick={skillsScroll}>Open source</button>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0 text-white text-lg">
            <div className="text-center">
              <h2 id="about" ref={about} className="text-3xl">Hi, I’m Supanat Konprom. Nice to meet you.</h2>
              <p className="mt-3 text-gray-400 w-3/4 m-auto">Student Software Engineer 🚀 Experience building web, mobile applications and games with other cool libraries and frameworks.</p>
            </div>
            <div className="grid sm:grid-cols-7 grid-cols-1 gap-4 mt-10">
              <div className="col-span-3 sm:order-1 order-2"><img src="/images/whatido.png" alt="" /></div>
              <div className="sm:order-2 col-span-4 order-1">
                <h2 id="skills" className="text-3xl" ref={skills}>What i do</h2>
                <LessSkills />
                <div className="text-center mt-5">
                  <button className="bg-orange-600 px-5 py-2 rounded-lg focus:outline outline-offset-1 outline-orange-900"><FontAwesomeIcon className='mr-2 down-animation' size="lg" icon={['fas', 'arrow-down']} /> Show more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
