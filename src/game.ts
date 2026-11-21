interface GameState {
    room : string
    inventory : string[]
    progress : number
    status : "playing" | "won" | "lost"
}

let gameState: GameState = {
    room : "Laboratory 07",
    inventory : [],
    progress : 0,
    status : "playing"
}