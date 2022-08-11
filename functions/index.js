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

exports.newQuestion = functions.firestore
    .document('questions/{questionsId}')
    .onCreate(async (snap, context) => {

        const auth = new google.auth.GoogleAuth({
            keyFile: "functions/sheets-questions.json",
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
                values: [[
                    snap.data().email,
                    snap.data().question,
                ]],
            },
        });

        console.log(snap.data());

        var emailBody = "";
        if (snap.data().question != "undefined") {
            emailBody = emailBody.concat("<p><b>Your Question: </b>" + snap.data().question + "<br></p>");
        }

        emailBody = emailBody.concat("if anything is incorrect please replay to this email if not you will here from use soon!");




        const mailOptions = {
            from: `info@savvytenant.ca`,
            to: snap.data().email,
            subject: 'Confiramtion from savvy tenant!',
            html: emailBody
        };


        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
    });

exports.newEntrie = functions.firestore
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
            range: "Sheet1!A:M",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [[
                    snap.data().email,
                    snap.data().firstName,
                    snap.data().lastName,
                    snap.data().maxRent,
                    snap.data().bedrooms,
                    snap.data().phoneNumber,
                    snap.data().pets,
                    snap.data().areas.etobicoke,
                    snap.data().areas.westEnd,
                    snap.data().areas.midwest,
                    snap.data().areas.york,
                    snap.data().areas.northYork,
                    snap.data().areas.scarborough,
                ]],
            },
        });

        console.log(snap.data());

        var emailBody = "";
        if (snap.data().fist != "undefined") {
            emailBody = emailBody.concat("<p><b>first name: </b>" + snap.data().firstName + "<br></p>");
        }

        if (snap.data().last != "undefined") {
            emailBody = emailBody.concat("<p><b>last name: </b>" + snap.data().lastName + "<br></p>");
        }

        if (snap.data().maxRent != "undefined") {
            emailBody = emailBody.concat("<p><b>Maximum month rent: </b>" + snap.data().maxRent + "<br></p>");
        }

        if (snap.data().bedrooms != "undefined") {
            emailBody = emailBody.concat("<p><b>Number of bedrooms: </b>" + snap.data().bedrooms + "<br></p>");
        }

        if (snap.data().phoneNumber != "undefined") {
            emailBody = emailBody.concat("<p><b>phone number: </b>" + snap.data().phoneNumber + "<br></p>");
        }


        emailBody = emailBody.concat("<p><b>Moving with pets: </b>" + snap.data().pets == true ? "yes" : "no" + "<br></p>");


        if (snap.data().anyAreasSelected) {
            emailBody = emailBody.concat("Areas of interaste");
        }

        if (snap.data().areas.etobicoke) {
            emailBody = emailBody.concat("<p>Etobicoke</p>");
        }
        if (snap.data().areas.westEnd) {
            emailBody = emailBody.concat("<p>West End</p>");
        }
        if (snap.data().areas.midwest) {
            emailBody = emailBody.concat("<p>Mid End</p>");
        }
        if (snap.data().areas.york) {
            emailBody = emailBody.concat("<p>York</p>");
        }

        if (snap.data().areas.northYork) {
            emailBody = emailBody.concat("<p>north York</p>");
        }

        if (snap.data().areas.scarborough) {
            emailBody = emailBody.concat("<p>Scarborough</p>");
        }

        emailBody = emailBody.concat("if anything is incorrect please replay to this email if not you will here from use soon!");




        const mailOptions = {
            from: `info@savvytenant.ca`,
            to: snap.data().email,
            subject: 'Confiramtion from savvy tenant!',
            html: emailBody
        };


        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
    });