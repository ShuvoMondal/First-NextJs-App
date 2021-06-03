import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="content">
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae obcaecati beatae doloribus. Amet ipsam ex quae ad aspernatur, eum laboriosam a in quam iusto?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae obcaecati beatae doloribus. Amet ipsam ex quae ad aspernatur, eum laboriosam a in quam iusto?</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See ninja list</a>
      </Link>
    </div>
  )
}
