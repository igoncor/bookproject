//requerimos los modelos de las tablas
const Author = require('../api/models/authors.model')
const Book = require('../api/models/book.model')
const User = require('../api/models/user.model')
const ContactInfo = require('../api/models/contact.model')
const Favorites = require('../api/models/favorites.model')
const Reviews = require('../api/models/review.model')
const CategoryBook = require('../api/models/categories_book.model'); 
const UserBook = require('../api/models/user_books.model'); 
const BookWanted = require('../api/models/books_wanted.model');

const defineRelations = () => {
   
    //RELACIONES ONE TO MANY

//un autor puede tener muchos libros y cada registro en Book pertenece a un único autor en la tabla Author
    Author.hasMany(Book);
    Book.belongsTo(Author);


//un usuario puede tener muchas reviews y cada registro en la tabla review pertenece a un único usuario
    User.hasMany(Reviews);
    Reviews.belongsTo(User);

//Una categoría puede tener muchos libros
    CategoryBook.hasMany(Book); //varios libros pueden pertenecer a la misma categoria
    Book.belongsTo(CategoryBook); // cada libro pertenece a una categoría especifica

<<<<<<< HEAD
   //RELACIONES MANY TO MANY

//un usuario puede tener muchos libros favoritos y un libro puede ser el favorito de muchos usuarios. Relación many to many usando Favorites como intermedia que almacena info sobre qué usuarios tienen libros como favoritos
User.hasMany(Favorites); //un usuario puede tener muchos libros favoritos
Favorites.belongsTo(User); //cada registro en favoritos pertenece a un usuario

Book.hasMany(Favorites); // muchos usuarios pueden tener el mismo libro como favrorito
Favorites.belongsTo(Book); //cada regstro en favoritos pertenece a un libro especifico

//libros leídos por cada usuario. Es una relacion many to many usando laa tabla intermedia UserBook, que almacena la info sobre qué usuarios han leído qué libros
User.hasMany(UserBook); //un usuario puede tener muchos ligros registrados
UserBook.belongsTo(User); //cada registro en UserBook pertenece a un usuario concreto

Book.hasMany(UserBook); //muchos usuarios pueden haber leído el mismo libro
UserBook.belongsTo(Book); //cada registro en UserBook pertenece a un libro concreto

//libros deseados por cada usuario. Es una combinación de dos relaciones one to many, que juntas crean una many to many usando una tabla intermedia BookWanted
User.hasMany(BookWanted); //un usuario puede querer muchos libros
BookWanted.belongsTo(User); //cada registro en BookWanted pertenece a un usuario concreto

Book.hasMany(BookWanted); //muchos usuarios pueden querer el mismo libro
BookWanted.belongsTo(Book); //cada registro en BookWanted pertenece a un libro concreto
=======
    //RELACIONES MANY TO MANY

//un usuario puede tener muchos libros favoritos y un libro puede ser el favorito de muchos usuarios. Relación many to many usando Favorites como intermedia que almacena info sobre qué usuarios tienen libros como favoritos
    User.hasMany(Favorites); //un usuario puede tener muchos libros favoritos
    Favorites.belongsTo(User); //cada registro en favoritos pertenece a un usuario

    Book.hasMany(Favorites); // muchos usuarios pueden tener el mismo libro como favrorito
    Favorites.belongsTo(Book); //cada regstro en favoritos pertenece a un libro especifico

//libros leídos por cada usuario. Es una relacion many to many usando laa tabla intermedia UserBook, que almacena la info sobre qué usuarios han leído qué libros
    User.hasMany(UserBook); //un usuario puede tener muchos ligros registrados
    UserBook.belongsTo(User); //cada registro en UserBook pertenece a un usuario concreto

    Book.hasMany(UserBook, { foreignKey: 'book_id' }); //muchos usuarios pueden haber leído el mismo libro
    UserBook.belongsTo(Book); //cada registro en UserBook pertenece a un libro concreto

//libros deseados por cada usuario. Es una combinación de dos relaciones one to many, que juntas crean una many to many usando una tabla intermedia BookWanted
    User.hasMany(BookWanted, { foreignKey: 'user_id' }); //un usuario puede querer muchos libros
    BookWanted.belongsTo(User, { foreignKey: 'user_id' }); //cada registro en BookWanted pertenece a un usuario concreto

    Book.hasMany(BookWanted); //muchos usuarios pueden querer el mismo libro
    BookWanted.belongsTo(Book); //cada registro en BookWanted pertenece a un libro concreto
>>>>>>> 930c53260bd3c1dff87dad1a787b816f492a3006
}



module.exports = defineRelations