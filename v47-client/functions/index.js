/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

/*Made a temporary form to use stripe with firebase. And sorry My bad.-Skylar */
/*You can use this service after put secret key in the code and if you want to deploy*/ 
/*firebase deploy --only functions*/
/*I sincerely hope this code going to work*/   

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const admin = required('firebase=-admin');
const stripe = require('stripe')('your stripe secret-key');

admin.initializeApp();
const firestore = admin.firestore();

exports.createStripeCharge = functions.firestore.document('payments/{paymentId}')
.onCreate(async(snapshot, context)=>{
    const payment = snapshot.data();

    return firestore.collection('payments').docdoc(context.params.paymentId).update({ stripeChargeId: 'generated_stripe_charge_id' });
})

/*use a functions as you need */

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
