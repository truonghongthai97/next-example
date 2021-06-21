import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import styles from '../styles/Home.module.css'

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/hello'),
  { loading: () => <p>...</p> }
)

export default function Home() {
  const [counter, setCounter] = useState(0)

  return (
    <div className={styles.container}>
      <Link href="/about">
        About
      </Link>
      <Image
        src='/images/profile.jpg'
        alt="Picture of the author"
        width="64" height="64"
      />
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <DynamicComponentWithCustomLoading />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      a: 1
    }
  }
}
