import Head from 'next/head'
import axios, { AxiosResponse } from "axios"
import { useEffect } from "react"
import styles from "/styles/Main.module.css"

import Banner from "../components/Banner"
import Timeline from "../components/Timeline"
import SocialBar from "../components/SocialBar"

export default function Home() {

    useEffect(() => {
      axios.get('/api/getItch').then(function(res): void{
        handleResponse(res);
        axios.get('/api/getLD').then(function(res): void{
          handleResponse(res);
        });
      });
    },[])

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
          <title>LD Showcase</title>
          <meta name="description" content="Our Ludum Dare game jam entries" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.uppercontainer}>
          <Banner />
        </div>

        <div className={styles.midcontainer}>
          <Timeline />
        </div>

        <div className={styles.lowercontainer}>
          <SocialBar />
        </div>

      </div>
    )
}

// <button onClick={() => handleClick()}>FETCH</button>
