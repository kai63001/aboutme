import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const about:any = useRef(null)
  const executeScroll:any = () => about?.current.scrollIntoView({behavior:"smooth"})    

  return (
    <div>
      <div className="parallax">
        <div className="parallax_layer parallax_layer_4 text-center mt-40">
          <h1 className="text-7xl font-mochiy">Hy! I am Supanat</h1>
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
                  <a href="#">Home</a>
                </li>
                <li>
                  <button onClick={executeScroll}>About</button>
                </li>
                <li>
                  <button onClick={executeScroll}>Skills</button>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0 text-white text-lg">
            <div className="text-center">
              <h2 id="about" ref={about} className="text-3xl">Hi, I’m Supanat Konprom. Nice to meet you.</h2>
              <p className="mt-3 text-gray-400">Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
