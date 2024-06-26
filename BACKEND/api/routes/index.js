const router = require('express').Router() // Creo una instancia de router de express para definir las posibles rutas a emplear

const userRouter = require ('./user.router')
const bookRouter = require ('./book.router')
const authorsRouter = require ('./authors.router')
const authRouter = require ('./auth.router')
const contactRouter = require('./contact.router')
const reviewRouter = require('./review.router')
const favorites = require('./favorites.router')
const pendings = require('./pendings.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/book', bookRouter)
router.use('/authors', authorsRouter)
router.use('/contact', contactRouter)
router.use('/review', reviewRouter)
router.use('/favorites', favorites)
router.use('/pendings', pendings)


module.exports = router // Exporto la instancia de este router para poder importarlo en el index.js principal
