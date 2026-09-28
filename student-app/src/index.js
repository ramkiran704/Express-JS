import express from 'express';

const app=express();
const PORT=process.env.PORT || 3000;
app.get("/",(request,response)=>{
    response.status(201).send({msg:"Hello World"});
});
app.get("/api/users",(request,response)=>{
    response.send([
        {id:1,username:"Anson",displayname:"Anson"},
        {id:2,username:"Athul",displayname:"Athul"},
        {id:3,username:"Anetta",displayname:"Anetta"},
        {id:4,username:"Anna",displayname:"Anna"},
    ]);
});
app.get("/api/users/:id",(request,response)=>{
    console.log(request.params);
    
});
app.get("/api/products",(request,response)=>{
    response.send([
        {id:1,username:"new",displayname:"Anson"},
        {id:2,username:"new",displayname:"Athul"},
        {id:3,username:"new",displayname:"Anetta"},
        {id:4,username:"new",displayname:"Anna"},
    ]);
});

app.listen(PORT,()=>{
    console.log(`Running on Port ${PORT}`);
});
