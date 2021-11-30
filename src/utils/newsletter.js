const mailchimp = require('@mailchimp/mailchimp_marketing')

app.use(express.static('public'))

app.use(express.urlencoded())

mailchimp.setConfig({
    apiKey: '6e7c2a1715e71be06a076f0329b8b920-us20',
    server: 'us20'
})

const formData = function (fname, lname, callback) {
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
        res.send("Success")
        console.log(
            `Successfully added contact as an audience member. The contact's id is ${response.id
            }.`
        );
    }
    //Running the function and catching the errors (if any)
    // ************************THIS IS THE CODE THAT NEEDS TO BE ADDED FOR THE NEXT LECTURE*************************
    // So the catch statement is executed when there is an error so if anything goes wrong the code in the catch code is executed. In the catch block we're sending back the failure page. This means if anything goes wrong send the faliure page
    run().catch(e => res.send("Failure"));
}

//unique id = 9ed7fcdc86
//api key = 6e7c2a1715e71be06a076f0329b8b920-us20