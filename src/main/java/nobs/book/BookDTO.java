package nobs.book;

public class BookDTO {

    private String author;
    private String title;
    private String genre;

    @SuppressWarnings("unused")
    public BookDTO() {}

    public BookDTO(Book book) {
        author = book.getAuthor();
        title = book.getTitle();
        genre = book.getGenre();
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Book transfer() {
        return new Book(this.author, this.title, this.genre);
    }
}
