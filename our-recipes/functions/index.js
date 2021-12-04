"use strict";

const {firestore} = require("firebase-admin");
const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp();

exports.createRecipe = functions.https.onRequest(async (req, res) => {
  const url = req.query.text;
  // eslint-disable-next-line no-unused-vars
  const writeResult = await admin.firestore().collection("recipes")
      .add({url: url});
  res.json({result: "Created recipe successfuly. ID: ${writeResult.id}"});
});

exports.scrapeRecipe = functions.firestore.document("/recipes/{documentId}")
    .onCreate((snap, context) => {
      const url = snap.data().url;
      functions.logger.log("Crawling", url);

      return snap.ref.set({creation_time: firestore.Timestamp.now()});
    });
