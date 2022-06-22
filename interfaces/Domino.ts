export interface DominoProps {
    extraClass?: string
    dominoId: DominoId
    rotation?: RotationAmount
}

export const enum RotationAmount {
    none = 0,
    rotRight = 90,
    flip = 180,
    rotLeft = 270,
}

export const enum DominoId {
    Zero_Zero = '0.0',
    Zero_One = '0.1',
    Zero_Two = '0.2',
    Zero_Three = '0.3',
    Zero_Four = '0.4',
    Zero_Five = '0.5',
    Zero_Six = '0.6',
    One_One = '1.1',
    One_Two = '1.2',
    One_Three = '1.3',
    One_Four = '1.4',
    One_Five = '1.5',
    One_Six = '1.6',
    Two_Two = '2.2',
    Two_Three = '2.3',
    Two_Four = '2.4',
    Two_Five = '2.5',
    Two_Six = '2.6',
    Three_Three = '3.3',
    Three_Four = '3.4',
    Three_Five = '3.5',
    Three_Six = '3.6',
    Four_Four = '4.4',
    Four_Five = '4.5',
    Four_Six = '4.6',
    Five_Five = '5.5',
    Five_Six = '5.6',
    Six_Six = '6.6',
}
