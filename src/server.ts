import express, { type Express , type Request , type Response} from 'express'; 

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
    res.json({
        "message": "You wake up in Laboratory 07. The door is locked.",
        "room": "Laboratory 07",
        "inventory": [],
        "progress": 0,
        "status": "playing"
    })
});
app.listen(PORT , server_started);