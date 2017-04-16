$(document).ready(function(){
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
        $("#quote").append(a[0].content + "<p>— " + a[0].title + "</p>")
    });
    $(".title").delay(200).animate({"opacity" : "1" }, 1000);
    $(".quote-wrapper").delay(500).animate({"opacity" : "1" }, 1000);
    $(".button-wrapper").delay(700).animate({"opacity" : "1" }, 1000);

    $(document).on("click", "button", function(e){
        e.preventDefault();
        $.ajax({
            url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20",
            success: function (a) {
                function getRandomArbitrary(min, max) {
                    return Math.floor(Math.random() * (max - min)) + min;
                }
                var num = getRandomArbitrary(0, 20);
                $("#quote").css("opacity" , 0).html('').append(a[num].content + "<p>— "
                    + a[num].title + "</p>").delay(200).animate({"opacity" : "1" }, 2000);
            }
        });
    });
});
