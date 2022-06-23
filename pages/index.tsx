import type { NextPage } from 'next'
import Head from 'next/head'
import { Domino, RotationAmount } from '../components/Domino/Domino'
import styles from '../styles/Home.module.scss'
import { DominoId } from '../interfaces/Domino'
import { Board } from '../components/Board/Board'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Play Bones</title>
                <meta name="description" content="Play bones online for free" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Play Bones online for free</h1>

                <Board>
                    <Domino dominoId={DominoId.One_Two} />
                    <Domino dominoId={DominoId.Two_Three} initialRotation={RotationAmount.clockwise}/>
                    <Domino dominoId={DominoId.Three_Four} initialRotation={RotationAmount.flipped} />
                    <Domino dominoId={DominoId.Four_Five} initialRotation={RotationAmount.counterClockwise} />
                    <Domino dominoId={DominoId.Five_Six} initialRotation={RotationAmount.flipped} />
                </Board>
            </main>

            <footer className={styles.footer}>Erick Ruiz, 2022</footer>
        </div>
    )
}

export default Home
