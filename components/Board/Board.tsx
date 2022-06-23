import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './Board.module.scss'

interface PlaceableLocation {
    row: number
    col: number
}

interface Placeables {
    top?: PlaceableLocation
    bottom?: PlaceableLocation
    left?: PlaceableLocation
    right: PlaceableLocation
}

interface BoardState {
    placeables: Placeables
}

const initPlaceables = (): Placeables => {
    return {
        right: {
            row: 1,
            col: 1,
        },
    } as Placeables
}

export interface BoardProps {
    backgroundColor?: string
}

export const Board: FunctionComponent<PropsWithChildren<BoardProps>> = ({ backgroundColor = '', children }) => {
    return (
        <div className={styles.board}>
            <div className={styles.board__surface}>{children}</div>
        </div>
    )
}
