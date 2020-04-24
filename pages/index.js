import Head from 'next/head'
import PfComponents from '../components/pf-components'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PfComponents />
      </main>
      </div>
  )
}
