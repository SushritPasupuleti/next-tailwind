import Head from 'next/head'
import Image from 'next/image'
import DarkDiv from '../components/DarkDiv'
import Skus from '../components/skus'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Skus></Skus>
      <DarkDiv></DarkDiv>
    </div>
  )
}
