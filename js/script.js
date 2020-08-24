

$(()=>{

    function refreshInfo(){
        $(".product-name").text( $(".slick-center").data("name"));
        let productPrice = parseFloat( $(".slick-center").data("price")).toLocaleString("pt-br", {style:"currency", currency:"BRL", minimumFractionalDigits: 2});
        $(".product-price").text( productPrice );
    }

    $(".slider").on("init",()=>{
        refreshInfo();
    });


    $(".slider").slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        centerMode:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $(".slider").on("afterChange",()=>{
        refreshInfo();
    });

    });




    


        
        