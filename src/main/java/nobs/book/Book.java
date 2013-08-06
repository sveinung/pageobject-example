package nobs.book;

public class Book {
    private final String author;
    private final String title;
    private final String genre;

    public Book() {
        this.author = null;
        this.title = null;
        this.genre = null;
    }

    public Book(String author, String title, String genre) {
        this.author = author;
        this.title = title;
        this.genre = genre;
    }

    public String getAuthor() {
        return author;
    }

    public String getTitle() {
        return title;
    }

    public String getGenre() {
        return genre;
    }
}
