const admin  = {
    initializeApp() {
        console.log('initializeApp')
        console.log(Date.now())
        return {q:1, w:2}
    }
}


module.exports = admin.initializeApp()