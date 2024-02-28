function showGenre(genre) {
    var books = document.querySelectorAll('.book');
    books.forEach(function(book) {
      if (book.classList.contains(genre)) {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  }