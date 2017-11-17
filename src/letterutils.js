
export const isHole = (letter, gridX, gridY) => {
    switch (letter) {
        case "a":
            return isHoleForA(gridX, gridY);
        case "b":
            return isHoleForB(gridX, gridY);
        case "c":
            return isHoleForC(gridX, gridY);
        case "d":
            return isHoleForD(gridX, gridY);
        case "e":
            return isHoleForE(gridX, gridY);
        case "f":
            return isHoleForF(gridX, gridY);
        case "g":
            return isHoleForG(gridX, gridY);
        case "h":
            return isHoleForH(gridX, gridY);
        case "i":
            return isHoleForI(gridX, gridY);
        case "j":
            return isHoleForJ(gridX, gridY);
        case "k":
            return isHoleForK(gridX, gridY);
        case "l":
            return isHoleForL(gridX, gridY);
        case "m":
            return isHoleForM(gridX, gridY);
        case "n":
            return isHoleForN(gridX, gridY);
        case "o":
            return isHoleForO(gridX, gridY);
        case "p":
            return isHoleForP(gridX, gridY);
        case "q":
            return isHoleForQ(gridX, gridY);
        case "r":
            return isHoleForR(gridX, gridY);
        case "s":
            return isHoleForS(gridX, gridY);
        case "t":
            return isHoleForT(gridX, gridY);
        case "u":
            return isHoleForU(gridX, gridY);
        case "v":
            return isHoleForV(gridX, gridY);
        case "w":
            return isHoleForW(gridX, gridY);
        case "x":
            return isHoleForX(gridX, gridY);
        case "y":
            return isHoleForY(gridX, gridY);
        case "z":
            return isHoleForZ(gridX, gridY);
        default:
            return false;
    }
}

const isGridTopLeft = (gridX, gridY) => gridX === 0 && gridY === 0;
const isGridTopRight = (gridX, gridY) => gridX === 1 && gridY === 0;
const isGridMiddleLeft = (gridX, gridY) => gridX === 0 && gridY === 1;
const isGridMiddleRight = (gridX, gridY) => gridX === 1 && gridY === 1;
const isGridBottomLeft = (gridX, gridY) => gridX === 0 && gridY === 2;
const isGridBottomRight = (gridX, gridY) => gridX === 1 && gridY === 2;


const isHoleForA = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY);
}

const isHoleForB = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridMiddleLeft(gridX, gridY);
}

const isHoleForC = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridTopRight(gridX, gridY);
}

const isHoleForD = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridTopRight(gridX, gridY) || isGridMiddleRight(gridX, gridY);
}

const isHoleForE = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridMiddleRight(gridX, gridY);
}

const isHoleForF = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridMiddleLeft(gridX, gridY) || isGridTopRight(gridX, gridY);
}

const isHoleForG = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridTopRight(gridX, gridY) ||
           isGridMiddleRight(gridX, gridY) || isGridMiddleLeft(gridX, gridY);
}

const isHoleForH = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridMiddleRight(gridX, gridY) || isGridMiddleLeft(gridX, gridY);
}

const isHoleForI = (gridX, gridY) => {
    return isGridTopRight(gridX, gridY) || isGridMiddleLeft(gridX, gridY);
}

const isHoleForJ = (gridX, gridY) => {
    return isGridTopRight(gridX, gridY) || isGridMiddleRight(gridX, gridY) || isGridMiddleLeft(gridX, gridY);
}

const isHoleForK = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridBottomLeft(gridX, gridY);
}

const isHoleForL = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridMiddleLeft(gridX, gridY) || isGridBottomLeft(gridX, gridY);
}

const isHoleForM = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridTopRight(gridX, gridY) || isGridBottomLeft(gridX, gridY);
}

const isHoleForN = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridTopRight(gridX, gridY) ||
           isGridMiddleRight(gridX, gridY) || isGridBottomLeft(gridX, gridY);
}

const isHoleForO = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridMiddleRight(gridX, gridY) || isGridBottomLeft(gridX, gridY);
}

const isHoleForP = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridMiddleLeft(gridX, gridY) || 
           isGridBottomLeft(gridX, gridY) || isGridTopRight(gridX, gridY);
}

const isHoleForQ = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridMiddleLeft(gridX, gridY) || 
           isGridBottomLeft(gridX, gridY) || isGridTopRight(gridX, gridY) ||
           isGridMiddleRight(gridX, gridY);
}

const isHoleForR = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridMiddleLeft(gridX, gridY) || 
           isGridBottomLeft(gridX, gridY) || isGridMiddleRight(gridX, gridY);
}

const isHoleForS = (gridX, gridY) => {
    return isGridMiddleLeft(gridX, gridY) || isGridBottomLeft(gridX, gridY) || isGridTopRight(gridX, gridY);
}

const isHoleForT = (gridX, gridY) => {
    return isGridMiddleLeft(gridX, gridY) || isGridBottomLeft(gridX, gridY) || 
           isGridTopRight(gridX, gridY) || isGridMiddleRight(gridX, gridY);
}

const isHoleForU = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridBottomLeft(gridX, gridY) || isGridBottomRight(gridX, gridY);
}

const isHoleForV = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridMiddleLeft(gridX, gridY) ||
           isGridBottomLeft(gridX, gridY) || isGridBottomRight(gridX, gridY);
}

const isHoleForW = (gridX, gridY) => {
    return isGridMiddleLeft(gridX, gridY) || isGridTopRight(gridX, gridY) || 
           isGridMiddleRight(gridX, gridY) || isGridBottomRight(gridX, gridY);
}

const isHoleForX = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridTopRight(gridX, gridY) ||
           isGridBottomLeft(gridX, gridY) || isGridBottomRight(gridX, gridY);
}

const isHoleForY = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridTopRight(gridX, gridY) ||
           isGridBottomLeft(gridX, gridY) || isGridBottomRight(gridX, gridY) ||
           isGridMiddleRight(gridX, gridY);
}

const isHoleForZ = (gridX, gridY) => {
    return isGridTopLeft(gridX, gridY) || isGridBottomLeft(gridX, gridY) || 
           isGridBottomRight(gridX, gridY) || isGridMiddleRight(gridX, gridY);
}
