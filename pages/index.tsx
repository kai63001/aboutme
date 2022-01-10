import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className="parallax">
        <div className="parallax_layer parallax_layer_4 text-center mt-40">
          <h1 className="text-7xl font-mochiy">Hy! I am Supanat</h1>
          <p className="mt-5 w-3/5">
            asdas
          </p>
        </div>
        <div className="parallax_layer parallax_layer_3">
          <img src="/images/layer4.png" />
        </div>
        <div className="parallax_layer parallax_layer_2">
          <img src="/images/layer3.png" />
        </div>
        <div className="parallax_layer parallax_layer_1">
          <img src="/images/layer2.png" />
        </div>
        <div className="parallax_layer parallax_layer_0">
          <img src="/images/layer1.png" />
        </div>
        <div className="parallax_cover">
          <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0">
            asdasd
          </div>
        </div>
      </div>
    </div>
  )
}
