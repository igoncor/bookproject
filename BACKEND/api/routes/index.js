const router = require('express').Router() // Creo una instancia de router de express para definir las posibles rutas a emplear

const userRouter = require ('./user.router')
const bookRouter = require ('./book.router')


router.use('/user', userRouter)
router.use('/book', bookRouter)




module.exports = router // Exporto la instancia de este router para poder importarlo en el index.js principal