$(function() {
    $( ".news_box" ).accordion({
      heightStyle: "content"
    });

    let newstt = $('.news_tt');

    newstt.click(function(){
      $(this).toggleClass('active');
      $(this).next().find('.news_content').slideUp();
  })
});
