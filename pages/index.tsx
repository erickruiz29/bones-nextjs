import type { NextPage } from 'next'
import Head from 'next/head'
import { Domino } from '../components/Domino/Domino'
import styles from '../styles/Home.module.scss'
import { DominoId } from '../interfaces/Domino'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Play Bones</title>
        <meta name="description" content="Play bones online for free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Play Bones online for free
        </h1>

        <div className={styles.board}>
        <Domino dominoId={DominoId.One_Two} />
        <Domino dominoId={DominoId.Two_Three} />
        <Domino dominoId={DominoId.Three_Four} />
        <Domino dominoId={DominoId.Four_Five} />
        <Domino dominoId={DominoId.Five_Six} />
        </div>
      </main>

      <footer className={styles.footer}>
        Erick Ruiz, 2022
      </footer>
    </div>
  )
}

export default Home
