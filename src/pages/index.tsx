import styles from './home.module.scss'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home Ignews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, welcome</span>
          <h1>Newes about the <span>React</span> Word</h1>
          <p>
            Get acess to all publications <br />
            <span>for $9.90 mouth</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girls Coding" />
      </main>
    </>
  )
}
