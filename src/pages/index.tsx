import Head from 'next/head'
import axios, { AxiosResponse } from "axios"
import styles from "/styles/Main.module.css"

import Banner from "../components/Banner"
import Timeline from "../components/Timeline"

export default function Home() {

  function handleClick(): void {
    axios.get('/api/get').then(function(res): void{
      handleResponse(res);
    });
  }

  function handleResponse(res: AxiosResponse):void {
    console.log(res);
    console.log(res.data.data.games)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.uppercontainer}>
        <Banner />
      </div>

      <div className={styles.midcontainer}>
        <Timeline />
      </div>

      <div className={styles.lowercontainer}></div>

    </div>
  )
}

// <button onClick={() => handleClick()}>FETCH</button>
