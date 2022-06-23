import { FunctionComponent, useState } from 'react'
import { DominoId } from '../../interfaces/Domino'
import styles from './Domino.module.scss'

export interface DominoProps {
    extraClass?: string
    dominoId: DominoId
    initialRotation?: string
}

export const numToClass = [styles.zero, styles.one, styles.two, styles.three, styles.four, styles.five, styles.six]

export let RotationAmount = {
    none: '',
    clockwise: styles.clockwise,
    flipped: styles.flipped,
    counterClockwise: styles.counterClockwise,
}

export const Domino: FunctionComponent<DominoProps> = ({ initialRotation = RotationAmount.none, dominoId }) => {
    const [left, right] = dominoId.split('.')
    const [curRotation, setCurRotation] = useState(initialRotation)

    return (
        <div
            className={[styles.domino, curRotation].join(' ')}
            data-domino-id={dominoId}
            onClick={() => {
                const vals = Object.values(RotationAmount)
                const nextRot = vals[(vals.indexOf(curRotation) + 1) % vals.length]
                setCurRotation(nextRot)
            }}
        >
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
