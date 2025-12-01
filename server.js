import express from "express"
import authRoutes from './app/auth/auth.rotes.js'

const app = express();

async function main(){
    const port = 5000;
    app.use(express.json())
    app.use('/login',authRoutes)


    app.listen(port,()=>{
        console.log(`Server run in ${port}`)
    })



}

main()
