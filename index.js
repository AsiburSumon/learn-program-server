const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./Data/courses.json');
const course = require('./Data/course.json')

app.get('/', (req, res) =>{
    res.send('API is running');
});

app.get ('/courses', (req, res)=>{
    res.send(courses)
})

app.get('/allcourses',(req, res)=>{
    res.send(course);
})

app.get('/allcourses/:id', (req, res)=>{
    const id = req.params.id;
    const selectedCourse = course.find(n => n.id === id);
    res.send(selectedCourse);
})

app.listen(port, ()=> {
    console.log('server is running for assignment on', port);
})