import express, { type Express , type Request , type Response} from 'express'; 
import {gameState} from './game.js';

const app : Express = express();
const PORT : number = 3000;

function server_started(){
    console.log("ESCAPE.EXE running on port 3000");
}

app.get("/api/status", (req: Request , res: Response) => {
    res.json({
        "status": "running",
        "game": "ESCAPE.EXE"
    })
});

app.post("/api/start",(req: Request, res: Response) => {
    gameState.room = "Laboratory 07";
    gameState.inventory = [];
    gameState.progress = 0;
    gameState.status = "playing";
    res.json({
        "message": "You wake up in Laboratory 07. The door is locked.",
        "room": gameState.room,
        "inventory": gameState.inventory,
        "progress": gameState.progress,
        "status": gameState.status
    })
});
app.get("/api/room",(req:Request,res:Response) => {
    const roomObjects: string[] = ["door", "desk", "computer"];
    res.json({
        "room" : gameState.room,
        "description" : "You see a locked door, a desk, and a computer.",
        "objects": roomObjects
    })
})
app.use(express.json())
app.post("/api/inspect",(req:Request,res:Response) => {
    type RoomObject = "computer" | "desk" | "door"
    const object: RoomObject = req.body.object;
    if (object == "computer"){
        res.json({
            "message": "The computer is asking for an access code."
        })
    }
    else if (object == "desk"){
        res.json({
            "message": "You notice a locked drawer."
        })
    }
    else if (object == "door"){
        res.json({
            "message": "The door requires a keycard."
        })
    }
    else {
        return res.status(400).json({message: "Invalid object"});
    }
})
app.listen(PORT , server_started);