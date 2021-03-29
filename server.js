import express from "express"
import mongoose from "mongoose"
import Messages from "./dbmessages.js"
import Pusher from "pusher"
import Cors from "cors"
const app=express();

const port=process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1103430",
    key: "934ac63e23d186688985",
    secret: "2483fc26fb046141b69d",
    cluster: "eu",
    useTLS: true
  });

app.use(express.json())
app.use(Cors())


const connection_url='mongodb+srv://admin-Mani:12122000@cluster0.4vxdq.mongodb.net/whatsappDB?retryWrites=true&w=majority';
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db= mongoose.connection;

db.once('open',function(){
    console.log("DB connected");

    const msgCollection=db.collection('messagecontents')
const changeStream= msgCollection.watch();

changeStream.on("change", function(change){
    console.log("A Change occured",change);

    if(change.operationType === 'insert') {
        const messageDetails= change.fullDocument;
        pusher.trigger('messages','inserted', 
          {
           name:messageDetails.name,
           Message:messageDetails.message,
           timestamp:messageDetails.timestamp,
           received:messageDetails.received
          }
        ); 
      } else {
       console.log("Error in trigerring Pusher");
      }

  })
})






app.get("/",function(req,res){
    res.status(200).send("Hello world")
})

app.get("/message/sync",function(req,res){
   
    Messages.find(function(err,data){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.post("/message/new",function(req,res){
    const dbMessage=req.body

    Messages.create(dbMessage,function(err,data){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data)
        }
    })
})


app.listen(port,function(req,res){
    console.log("server is running in port " + port);
})