// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

// const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDAFriiT_BLjX8UYNgsXU82uTCkdIPnvAg",
	authDomain: "novabazzar-12345.firebaseapp.com",
	projectId: "novabazzar-12345",
	storageBucket: "novabazzar-12345.appspot.com",
	messagingSenderId: "331235270432",
	appId: "1:331235270432:web:f89324cc642a239fc78145",
	measurementId: "G-Q5ECZG63M2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

module.exports = getStorage(app);