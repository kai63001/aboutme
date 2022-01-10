import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
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
          <nav id="navbar" className=" psitck text-white py-3 bg-main">
            <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0 flex justify-between">
              <h2>HELLO</h2>
              <ul className="flex space-x-10">
                <li>
                  <a href="#">asdasd</a>
                </li>
                <li>
                  <a href="#">asdasd</a>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0 text-white text-lg">
            asdasdasdasdasdasdasdadasdasdas
          </div>
        </div>
      </div>
    </div>
  )
}
