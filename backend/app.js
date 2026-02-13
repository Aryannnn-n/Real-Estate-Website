import express from 'express';

const app = express();

app.get("/hi" , (req,res)=>{
    res.send("Test")
})

// Export Only
export default app;
