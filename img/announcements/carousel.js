console.log('trying to move folders');

$.ajax({
    url: "./",
    success: function(data) {
       $(data).find("a:contains(.jpg)").each(function(response) {
            // console.log($(this).attr("href"));
            // console.log(response);
            if (response === 0) {
                console.log({ifresponse: response});
                // $('.carousel-indicators').prepend(`
                // <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                // `)
                $('.carousel-inner').prepend(`
                <div class="carousel-item active">
                    <img class="d-block w-100" src=".${$(this).attr("href")}">
                </div>`)
            } else {                
                // $('.carousel-indicators').prepend(`
                // <li data-target="#carouselExampleIndicators" data-slide-to="${response}"></li>
                // `)
                $('.carousel-inner').prepend(`
                <div class="carousel-item">
                    <img class="d-block w-100" src=".${$(this).attr("href")}">
                </div>`)
            }   
       });
    }
  });