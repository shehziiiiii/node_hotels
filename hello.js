const express=require('express');
const app=express();
const db=require('./db')      // first read the db file then connection will be successful
const person=require('./models/person')  // export person module here



const bodyparser=require('body-parser');
app.use(bodyparser.json())


const personroutes=require('./Routes/personroute');
const menuitemroutes=require('./Routes/menuitemroutes')
app.use('/menu',menuitemroutes);
app.use('/person',personroutes);


app.listen(3000,()=>{
    console.log('succesfully Connected on port 3000');

})

app.get('/',(req,res)=>{
    res.send('welcome to our hotel')
     
})


   










// app.get('/about',(req,res)=>{
//     res.redirect('..')
// })

// app.get('/user',(req,res)=>{
//     res.render('user')
// })








// app.get('/',(req,res)=>{
//    res.jsonp({
//     name:'shahzad Ali', id:113
//    })
   

// })


// app.get('/error',(req,res)=>{
//    res.set('custom-head',"hello 1234")
//   console.log(  res.get('custom-head'))
//   res.send('status checked');
// })



 // if(req.accepts('html')){
    //     res.send('<h1>Hey its html really good</h1>')
    // }
    // else  if(req.accepts('json')){
    //     res.send('<h1>Hey its json good</h1>')
    // }
    // else if(req.accepts('xml')){
    //     res.send('xml is really Good')
    // }
    // else{
    //     res.send('content type is not supporting');
    // }




    // app.set('view engine','ejs')
// app.use(express.json())      // jo saara code hai kahii bhii express k code ko access kar sakta hai 
// app.use(express.urlencoded({extended:false}))











// {
//         name:"shahzad Ali",
//         id:114
//     }










// app.get('/about',(req,res)=>{
//     res.send('<h2>Welcome to the dream World</h2>')
// })

// app.get('/gallery',(req,res)=>{
//     res.send('Gallery Page');
// })
// // that is nested route
// app.get('/about/user',(req,res)=>{
//     res.send('welcome to User Page');
// })

// app.get('/random.page',(req,res)=>{
//     res.send('hey random page');
// })

// // pass value through Route parameters

// app.get('/about/:id',(req,res)=>{
//     res.send(req.params);
// })
// // if we want to chexk just userid
// app.get('/user/:userid/book/:bookid',(req,res)=>{
//     res.send("book id is:" + req.params.userid);
// })

// // for query parameter

// app.get('/search',(req,res)=>{
   
//     res.send(req.query);

  
// })

// app.get('/res',(req,res)=>{
//     res.send('<h1>Hey Shahzad what are u doing </h1>');
// })




// app.post('/about',(req,res)=>{
   
//     if(req.is('application/json')){
//         res.send('valid json data');
//     }
//     else if(req.is('text/html')){
//         res.send('hey its a html')

//     }
//     else{
//         res.status(200).send('unsupported data');
//     }

// })






// app.get('/',(req, res)=>{
//     res.send('<h1>hello hey !</h1>')
// })









// const math=require('./math')
// console.log("Math Value is",math);

