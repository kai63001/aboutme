import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  //skills 
  const skills: any = useRef(null)
  const skillsScroll = () => skills?.current.scrollIntoView({ behavior: "smooth" })

  //about
  const about: any = useRef(null)
  const aboutScroll: any = () => about?.current.scrollIntoView({ behavior: "smooth" })

  library.add(fab, fas)





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
              <ul className="flex space-x-5">
                <li>
                  <button className="hover:bg-purple-800 rounded-md px-4 py-2" onClick={aboutScroll}>About</button>
                </li>
                <li>
                  <button className="hover:bg-purple-800 rounded-md px-4 py-2" onClick={skillsScroll}>Skills</button>
                </li>
                <li>
                  <button className="hover:bg-purple-800 rounded-md px-4 py-2" onClick={skillsScroll}>Open source</button>
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
                <div className="text-center flex space-x-5 space-y-5 justify-center mt-3 flex-wrap">
                  <span></span>
                  <span className="hover:text-orange-300 text-gray-300">
                    <FontAwesomeIcon size="3x" icon={['fab', 'html5']} />
                    <p className="mt-2 text-smm">HTML5</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300">
                    <FontAwesomeIcon size="3x" icon={['fab', 'css3']} />
                    <p className="mt-2 text-smm">CSS3</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300">
                    <FontAwesomeIcon size="3x" icon={['fab', 'sass']} />
                    <p className="mt-2 text-smm">SASS</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300">
                    <FontAwesomeIcon size="3x" icon={['fab', 'js-square']} />
                    <p className="mt-2 text-smm">JAVASCRIPT</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300 fill-gray-300 hover:fill-orange-300">
                    <svg width="55px" height="55px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>TypeScript icon</title><path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" /></svg>
                    <p className="mt-2 text-smm">TYPESCRIPT</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300">
                    <FontAwesomeIcon size="3x" icon={['fab', 'react']} />
                    <p className="mt-2 text-smm">REACT JS</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300">
                    <FontAwesomeIcon size="3x" icon={['fab', 'node']} />
                    <p className="mt-2 text-smm">NODE JS</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300">
                    <FontAwesomeIcon size="3x" icon={['fab', 'python']} />
                    <p className="mt-2 text-smm">PYTHON</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300">
                    <FontAwesomeIcon size="3x" icon={['fab', 'docker']} />
                    <p className="mt-2 text-smm">DOCKER</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300">
                    <FontAwesomeIcon size="3x" icon={['fas', 'fire']} />
                    <p className="mt-2 text-smm">FIREBASE</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300">
                    <FontAwesomeIcon size="3x" icon={['fas', 'database']} />
                    <p className="mt-2 text-smm">SQL DATABASE</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300 fill-gray-300 hover:fill-orange-300">
                    <svg width="55px" height="55px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>MongoDB icon</title><path d="M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z" /></svg>
                    <p className="mt-2 text-smm">MONGODB</p>
                  </span>
                  <span className="hover:text-orange-200 text-gray-300">
                    <FontAwesomeIcon size="3x" icon={['fab', 'vuejs']} />
                    <p className="mt-2 text-smm">VUE JS</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300 fill-gray-300 hover:fill-orange-300">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                      width="55px" height="55px" viewBox="0 0 225.000000 225.000000"
                      preserveAspectRatio="xMidYMid meet">

                      <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                        stroke="none">
                        <path d="M782 1687 l-562 -562 173 -173 172 -172 735 735 735 735 -345 0 -345
0 -563 -563z"/>
                        <path d="M1042 907 l-302 -302 303 -303 302 -302 345 0 345 0 -303 302 -302
303 302 302 303 303 -345 0 -345 0 -303 -303z"/>
                      </g>
                    </svg>
                    <p className="mt-2 text-smm">FLUTTER</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300">
                    <FontAwesomeIcon size="3x" icon={['fab', 'unity']} />
                    <p className="mt-2 text-smm">UNITY</p>
                  </span>
                  <span className="hover:text-orange-300 text-gray-300">
                    <FontAwesomeIcon size="3x" icon={['fab', 'php']} />
                    <p className="mt-2 text-smm">PHP</p>
                  </span>
                </div>
                <div className="text-center mt-5">
                  <button className="bg-orange-600 px-5 py-2 rounded-lg "><FontAwesomeIcon className='mr-2 down-animation' size="lg" icon={['fas', 'arrow-down']} /> Show more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
