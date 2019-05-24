(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    // Número de items que a linha da página de novidades terá
    var newsRowItemCount = 6;
    var news = $("#novidades .row").find(".news-item");

    // Esconde todos os items que não sejam da primeira linha
    for (var i = newsRowItemCount; i < news.length; i++) {
      $(news[i]).addClass("hidden");
    }

    $('.show-more a').click(function() {
      var news = $("#novidades .row").find(".news-item");
      var count = 0;
      for (var i = 0; i < news.length; i++) {
        if($(news[i]).hasClass("hidden")) {
          $(news[i]).removeClass("hidden");
          count++;
        }

        if (i === news.length - 1) {
          $('.show-more a').unbind('click');
          $('.show-more').addClass('hidden');
        }

        if (count === newsRowItemCount) break;
      }
    })

  }); // end of document ready
})(jQuery); // end of jQuery name space