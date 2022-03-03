$(function() {
    $(window).on('load', function() {
        sliderVisual();
        sliderStore();
        sliderPremium();
        sliderBanner();
    });

    // 메인 : 비주얼
    var sliderVisual = new Swiper('.slider_visual', {
        effect: "fade",
        allowTouchMove : true,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.slider_visual .swiper-pagination',
            type: 'fraction',
            clickable : true,
        },
    });

    // 메인 : 최근본매장 
    var sliderStore = new Swiper('.slider_store', {
		slidesPerView: 2.5,
        spaceBetween: 12,
        nested :true,
    }); 

    // 메인 : 프리미엄샵 
    var sliderPremium = new Swiper('.slider_premium', {
        slidesPerView: 1.8,
        spaceBetween: 24,
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides: 24,
        speed: 800,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.slider_premium .swiper-pagination',
            type: 'fraction',
            clickable : true,
        },
    }); 

    // 메인 : 롤링배너 
    var sliderBanner = new Swiper('.slider_banner', {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.slider_banner .swiper-pagination',
            clickable : true,
        },
    }); 
});


$(function() {
    // 상단검색
    $('.search').on('click', function() {
        //$(this).hide();
        $(".search_btn_close").show();
        $(".search_wrap").fadeIn(300);
        $("body").css({'height':$(window).height(), 'overflow':'hidden'});
    });
    $('.search_btn_close').on('click', function() {
        $(".search").show();
        $(".search_wrap").fadeOut(300);
        $("body").css({'height':'auto', 'overflow':'auto'});
    });

    // 메인 : 내주변 매장 포트폴리오 탭메뉴
    $(".portfolio_wrap .portfolio_tab li").click(function() {
        $(".portfolio_wrap .portfolio_tab li").removeClass('on');
        $(".portfolio_wrap .content").removeClass('on');
        $(this).addClass('on');
        $("#" + $(this).data('id')).addClass('on');
        //$($(this).attr("href")).addClass('on');
    });

    // 하단 정보 출력
    $('.ft_info .info_text').on('click',function(e) {
        e.preventDefault();
        if ($(this).parent().hasClass('on')) {
            $(this).parent().removeClass('on').find('.info_con').slideUp(400);
        } else {
            $(this).parent().addClass('on').find('.info_con').slideDown(400);
        }
    });

    // 삭제 레이어팝업
    $('.btn_del').on('click',function(e) {
        e.preventDefault();
        $('.pop_wrap').addClass('active');
        $("body").css({'height':$(window).height(), 'overflow':'hidden'});
    });
    $('.pop_wrap .btn_confirm').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.pop_wrap').removeClass('active');
        $("body").css({'height':'auto', 'overflow':'auto'});
    });

	// sns 레이어팝업
    $('.btn_sns').on('click',function(e) {
        e.preventDefault();
        $('.pop_wrap').addClass('active');
        $("body").css({'height':$(window).height(), 'overflow':'hidden'});
    });
    $('.pop_wrap .btn_confirm').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.pop_wrap').removeClass('active');
        $("body").css({'height':'auto', 'overflow':'auto'});
    });

    var lastScrollTop = 0;
    
    $(window).on('load scroll', function() {
        scrollCon();
	});




    function scrollCon() {
        var scrollTop = $(window).scrollTop();

        //상단, 메인퀵메뉴 fixed
        if (scrollTop >= 250) {
            $('.main_header').addClass("fixed");
            $('.header_quickmenu').addClass("fixed");
        } else {
            $('.main_header').removeClass("fixed");
            $('.header_quickmenu').removeClass("fixed");
        }

        //top 버튼 스크롤
        if (scrollTop >= 200) {
            $('.btn_top').fadeIn(200).css({"display":"block"});
        } else {
            $('.btn_top').fadeOut(200);
        }
        if(scrollTop + $(window).height() == $(document).height()) {
            $('.btn_top').addClass("bg");
        } else {
            $('.btn_top').removeClass("bg");
        }

        $('.btn_top_wrap a').on("click", function (e) {
            e.preventDefault();
            $("html, body").stop().animate({ scrollTop: 0 }, 400);
        });
        
        // 하단툴바 스크롤
        if (scrollTop >= 0) { 
            if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
                $('.toolbar').addClass('down');
            } else {
                $('.toolbar').removeClass('down');
            }
            lastScrollTop = scrollTop;
        } 
    }
});