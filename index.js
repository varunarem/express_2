const a=require('express')
const b=a()
const port=process.env.PORT

// Importing a Middleware and the data given in json format
// b.use(middleware()) here 2 no's middleware is being used
// b.use(a.json())
b.use(a.urlencoded({extended:true}))

// Httpmethods: get,post,put,delete,patch

const p=require('path');
const publicPath=p.join(__dirname, "html_pages");
console.log(publicPath)


b.get('/', (req,res)=>{
    res.send('This is express app');
})


b.get('/home', (req,res)=>{
    console.log(req.body);
    // res.status('400');
    // res.send('This is home page');
    res.sendFile(`${publicPath}/home.html`)
})

b.get('/about', (req,res)=>{
    // console.log(req.body);
    // res.status('400');
    // res.send('This is home page');
    res.sendFile(`${publicPath}/about.html`)
})

// Test an API

b.post('/post', (req,res)=>{
    res.status('300');
    res.send('This is post method');
})

// b.delete('/del', (req,res)=>{
//     res.send('This is delete method');
// })

// b.put('/put', (req,res)=>{
//     res.send('This is put method');
// })

// b.patch('/patch', (req,res)=>{
//     res.send('This is patch method');
// })
.listen(4000,()=>{
    console.log('server started');
})
