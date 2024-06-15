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
    //ONE TO ONE: un autor puede tener muchos libros
    Author.hasMany(Book, { foreignKey: 'author_id' });
    Book.belongsTo(Author, { foreignKey: 'author_id' });


    //ONE TO MANY 
    //1. un user puede tener muchas review
    User.hasMany(Review, { foreignKey: 'user_id' });
    Review.belongsTo(User, { foreignKey: 'user_id' });

    //2. Tabla categoría de libros
    CategoryBook.hasMany(Book, { foreignKey: 'category_id' });
    Book.belongsTo(CategoryBook, { foreignKey: 'category_id' });

    //MANY TO MANY
    //1. Favorites (relación de muchos a muchos entre users)
    User.hasMany(Favorite, { foreignKey: 'user_id' });
    Favorite.belongsTo(User, { foreignKey: 'user_id' });

    Book.hasMany(Favorite, { foreignKey: 'book_id' });
    Favorite.belongsTo(Book, { foreignKey: 'book_id' });

    //2. libros leídos por users (tabla user_books)
    User.hasMany(UserBook, { foreignKey: 'user_id' });
    UserBook.belongsTo(User, { foreignKey: 'user_id' });

    Book.hasMany(UserBook, { foreignKey: 'book_id' });
    UserBook.belongsTo(Book, { foreignKey: 'book_id' });

    //3. libros wanted (tabla books_wanted)
    User.hasMany(BookWanted, { foreignKey: 'user_id' });
    BookWanted.belongsTo(User, { foreignKey: 'user_id' });

    Book.hasMany(BookWanted, { foreignKey: 'book_id' });
    BookWanted.belongsTo(Book, { foreignKey: 'book_id' });



}






module.exports = defineRelations