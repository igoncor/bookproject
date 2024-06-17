const router = require('express').Router() // Creo una instancia de router de express para definir las posibles rutas a emplear

const userRouter = require ('./user.router')
const bookRouter = require ('./book.router')
const authorsRouter = require ('./authors.router')
const authRouter = require ('./auth.router')
const contactRouter = require('./contact.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/book', bookRouter)
router.use('/authors', authorsRouter)
router.use('/contact', contactRouter)


module.exports = router // Exporto la instancia de este router para poder importarlo en el index.js principal