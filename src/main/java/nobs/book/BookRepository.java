package nobs.book;

public class BookRepository {

    public Book getBook(BookID id) {
        switch (id.getValue()) {
            case 1:
                return new Book("John Steinbeck", "Of Mice and Men", "Novella");
            case 2:
                return new Book("Isaac Asimov", "The Last Question", "Science fiction");
            case 3:
                return new Book("Moby Dick", "Herman Melville", "Adventure");
            case 4:
                return new Book("Sult", "Knut Hamsun", "Novel");
            default:
                return new Book();
        }
    }

    public Book saveBook(Book book) {
        return book;
    }
}
