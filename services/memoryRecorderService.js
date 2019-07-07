const firebase = require("firebase-admin");

const serviceAccount = require("../memoryrecorder-eidciy-firebase-adminsdk-1v8gc-df0265de0a.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://memoryrecorder-eidciy.firebaseio.com"
});

const MemoryRecorderService = () => {
  return firebase
    .database()
    .ref("MemoryRecord")
    .once("value");
};

module.exports = MemoryRecorderService;
