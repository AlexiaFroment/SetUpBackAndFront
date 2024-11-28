import express, { Request, Response } from "express"
import cors from "cors"

//INITIALISATION DE L'API
const app = express()

//MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//IMPORT DES ROUTES
app.get("/", (req: Request, res: Response) => {
  res.send("I'm oneline, weldone")
})

app.get("/api/message", (req: Request, res: Response) => {
  res.json({ message: "Hello from backend API 🚀" })
})

// START SERVEUR
app.listen(process.env.SERVER_PORT, () =>
  console.log(
    `Serveur en cours d'execution sur le port ${process.env.SERVER_PORT}`
  )
)
