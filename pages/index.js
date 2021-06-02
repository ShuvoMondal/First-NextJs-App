import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae obcaecati beatae doloribus. Amet ipsam ex quae ad aspernatur, eum laboriosam a in quam iusto?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae obcaecati beatae doloribus. Amet ipsam ex quae ad aspernatur, eum laboriosam a in quam iusto?</p>
      <Footer/>
    </div>
  )
}
