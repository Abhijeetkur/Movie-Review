package dev.abhijeet.movies.Services;

import dev.abhijeet.movies.Entity.Movie;
import dev.abhijeet.movies.Entity.Review;
import dev.abhijeet.movies.Repository.MovieRepository;
import dev.abhijeet.movies.Repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    @Autowired
    private ReviewRepository reviewRepository;

    public List<Movie> findAllMovies() {
        return repository.findAll();
    }
    public Optional<Movie> findMovieByImdbId(String imdbId) {
        return repository.findMovieByImdbId(imdbId);
    }

}
