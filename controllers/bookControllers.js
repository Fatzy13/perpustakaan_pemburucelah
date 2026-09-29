exports.index = (req, res) => {
    const bookList = [];

    res.render('books/index', {
        pageTitle: 'Daftar Buku Perpustakaan',
        bookList: bookList
    });
};