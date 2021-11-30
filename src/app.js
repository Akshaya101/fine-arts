require('dotenv').config()
const path = require('path')
const express = require('express')
const mailchimp = require('@mailchimp/mailchimp_marketing')
const hbs = require('hbs')
const port = process.env.PORT || 3000

const app = express()

//define paths for express configuration
//console.log(__dirname)
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup ejs engine and the templates/views(the individual templates) location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.use(express.urlencoded())

mailchimp.setConfig({
    apiKey: '6e7c2a1715e71be06a076f0329b8b920-us20',
    server: 'us20'
})

app.get('/', (req, res) => {
    res.render('index')
    console.log()
})

app.post('/', function (req, res) {
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    const listId = '9ed7fcdc86'
    //creating an object with the users data
    const subscribingUser = {
        firstName: fname,
        lastName: lname,
        email: email
    }
    //Uploading the data to the server
    async function run() {
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: subscribingUser.email,
            status: "subscribed",
            merge_fields: {
                FNAME: subscribingUser.firstName,
                LNAME: subscribingUser.lastName
            }
        });
        //If all goes well logging the contact's id
        res.render('success')
        console.log(
            `Successfully added contact as an audience member. The contact's id is ${response.id
            }.`
        );
    }
    //Running the function and catching the errors (if any)
    // ************************THIS IS THE CODE THAT NEEDS TO BE ADDED FOR THE NEXT LECTURE*************************
    // So the catch statement is executed when there is an error so if anything goes wrong the code in the catch code is executed. In the catch block we're sending back the failure page. This means if anything goes wrong send the faliure page
    run().catch(e => {
        console.log(e)
        res.render('failure')
    });
});


app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/artform', (req, res) => {
    res.render('artform')
})

//app.listen()
app.listen(port, function () {
    console.log(`Port ${port} is up for it`)
})