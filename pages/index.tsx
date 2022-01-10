import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  //skills 
  const skills: any = useRef(null)
  const skillsScroll = () => skills?.current.scrollIntoView({ behavior: "smooth" })

  //about
  const about: any = useRef(null)
  const aboutScroll: any = () => about?.current.scrollIntoView({ behavior: "smooth" })

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
          <nav id="navbar" className="psitck text-white bg-main pb-6 pt-4">
            <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0 flex justify-between">
              <h2>HELLO</h2>
              <ul className="flex space-x-10">
                <li>
                  <button onClick={aboutScroll}>About</button>
                </li>
                <li>
                  <button onClick={skillsScroll}>Skills</button>
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
            <div className="grid grid-cols-7 gap-4 mt-10">
              <div className="col-span-3"><img src="/images/whatido.png" alt="" /></div>
              <div className="">
                <h2 id="skills" className="text-3xl" ref={skills}>What i do</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
