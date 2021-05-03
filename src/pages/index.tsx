import Head from 'next/head'
import axios, { AxiosResponse } from "axios"

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
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={() => handleClick()}>FETCH</button>

    </div>
  )
}
