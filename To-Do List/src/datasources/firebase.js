import firebase from 'firebase/app'
import 'firebase/firebase-database';

const oDB = firebase.initializeApp({
    databaseURL: "https://to-do-f0ae3-default-rtdb.firebaseio.com/",
}).database();

export const oTodosinDB = oDB.ref('todos');