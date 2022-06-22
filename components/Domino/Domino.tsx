import { CSSProperties, PropsWithChildren, useState } from 'react'
import { DominoProps, RotationAmount } from '../../interfaces/Domino'
import styles from './Domino.module.scss'

export const numToClass = [styles.zero, styles.one, styles.two, styles.three, styles.four, styles.five, styles.six]

export const Domino = (props: PropsWithChildren<DominoProps>) => {
    const { dominoId, rotation = RotationAmount.none } = props
    const [left, right] = dominoId.split('.')
    const [rotAmt, setRotAmt] = useState(RotationAmount.none)

    return (
        <div className={styles.domino} data-domino-id={dominoId} style={{ transform: `${rotAmt}deg` }}>
            <div className={[styles.left, numToClass[+left]].join(' ')}>
                {Array.from(Array(+left), (_, n) => {
                    return <div className={styles.dot} key={`left-${n}`} />
                })}
            </div>
            <div className={styles.separator} />
            <div className={[styles.right, numToClass[+right]].join(' ')}>
                {Array.from(Array(+right), (_, n) => {
                    return <div className={styles.dot} key={`right-${n}`} />
                })}
            </div>
        </div>
    )
}
