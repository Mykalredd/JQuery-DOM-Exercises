$(document).ready(function() {
  const addMovie = (title, rating) => {
    let $movie = $('<div class="movie">').text(title + ' - ' + rating);

    const $removeButton = $('<button class="removeButton">').text('Remove');
    $removeButton.click(function() {
      $movie.remove();
    });

    $movie.append($removeButton);
    $('#moviesList').append($movie);
  };

  $('#movieForm').submit(function(event) {
    event.preventDefault();

    const title = $('#titleInput').val();
    const rating = $('#ratingInput').val();

    if (title.length < 2) {
      alert('Title must have at least 2 characters.');
      return;
    }

    if (rating < 0 || rating > 10) {
      alert('Rating must be between 0 and 10.');
      return;
    }

    addMovie(title, rating);

    $('#titleInput').val('');
    $('#ratingInput').val('');
  });

  $('#sortTitleAsc').click(function() {
    const movies = $('#moviesList .movie').get();
    movies.sort(function(a, b) {
      const titleA = $(a).text().toUpperCase();
      const titleB = $(b).text().toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
    $('#moviesList').empty().append(movies);
  });

  $('#sortTitleDesc').click(function() {
    const movies = $('#moviesList .movie').get();
    movies.sort(function(a, b) {
      const titleA = $(a).text().toUpperCase();
      const titleB = $(b).text().toUpperCase();
      if (titleA < titleB) {
        return 1;
      }
      if (titleA > titleB) {
        return -1;
      }
      return 0;
    });
    $('#moviesList').empty().append(movies);
  });

  $('#sortRatingAsc').click(function() {
    const movies = $('#moviesList .movie').get();
    movies.sort(function(a, b) {
      const ratingA = parseInt($(a).text().split('-')[1]);
      const ratingB = parseInt($(b).text().split('-')[1]);
      return ratingA - ratingB;
    });
    $('#moviesList').empty().append(movies);
  });

  $('#sortRatingDesc').click(function() {
    const movies = $('#moviesList .movie').get();
    movies.sort(function(a, b) {
      const ratingA = parseInt($(a).text().split('-')[1]);
      const ratingB = parseInt($(b).text().split('-')[1]);
      return ratingB - ratingA;
    });
    $('#moviesList').empty().append(movies);
  });
});