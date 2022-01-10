import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className="parallax">
        <div className="parallax__layer parallax__layer__3">
          <img src="/images/layer4.png" />
        </div>
        <div className="parallax__layer parallax__layer__2">
          <img src="/images/layer3.png" />
        </div>
        <div className="parallax__layer parallax__layer__1">
          <img src="/images/layer2.png" />
        </div>
        <div className="parallax__layer parallax__layer__0">
          <img src="/images/layer1.png" />
        </div>
        <div className="parallax__cover">
          asdasdasd
        </div>
      </div>
    </div>
  )
}
