import app from 'firebase/app'
require('firebase/firestore')

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.RREACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APPID
}

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.db = app.firestore()
    }

    notes = () =>  this.db.collection('notes')
}

export default Firebase