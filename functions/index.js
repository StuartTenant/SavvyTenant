const functions = require("firebase-functions");
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
require('googleapis')
require('dotenv').config();

admin.initializeApp()

//google account credentials used to send email
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});


exports.sendEmail = functions.firestore
    .document('entries/{entriesId}')
    .onCreate(async (snap, context) => {

        const auth = new google.auth.GoogleAuth({
            keyFile: "sheets-credentails.json",
            scopes: "https://www.googleapis.com/auth/spreadsheets",
        })

        const client = await auth.getClient();

        const googleSheets = google.sheets({ version: "v4", auth: client });

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId: process.env.SPREADSHEETID,
            range: "Sheet1!A:B",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [[snap.data().email]],
            },
        });



        // const mailOptions = {
        //     from: `info@savvytenant.ca`,
        //     to: snap.data().email,
        //     subject: 'contact form message',
        //     html: `<h1>Order Confirmation</h1>
        //                         <p>
        //                            <b>Email: </b>${snap.data().email}<br>
        //                         </p>`
        // };


        // return transporter.sendMail(mailOptions, (error, data) => {
        //     if (error) {
        //         console.log(error)
        //         return
        //     }
        //     console.log("Sent!")
        // });
    });