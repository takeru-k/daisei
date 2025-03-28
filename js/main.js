$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.l-header__nav, .c-hamburger__line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })

   // フェードイン
  $('.js-fade-in').fadeIn(2000);

  	$('.c-toggle__header').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});

    // タブ切り替え
  $(".c-tab__item").on("click", function () {
    const index = $(".c-tab__item").index(this);
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".c-tab__content").removeClass("c-tab__content--show").eq(index).addClass("c-tab__content--show");
  });

  $('.p-top-service__slider').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 6000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 4, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1.5, // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
});


$(function(){
$(window).on('load scroll', function (){
 
  var box = $('.js-fade-in');
  var animated = 'animated';
  
  box.each(function(){
  
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();
 
    if(scrollPos > boxOffset - wh + 100 ){
      $(this).addClass(animated);
    }
  });
});
})

$(function () {
  const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 100; // どのぐらい要素を動かすか(px)
  const fade_time = 800; // フェードの時間(ms)
  const animatedClass = 'animated';

  // フェード前のCSSを定義
  $(".scroll-fade-side").css({
    opacity: 0,
    transform: "translateX(" + fade_move + "px)",
    transition: fade_time + "ms",
  });

  // スクロール時のフェードイン処理
  $(window).on('load scroll', function () {
    const scroll_bottom = $(window).scrollTop() + $(window).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".scroll-fade-side").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateX(0)",
        });
      }
    });

    // js-fade-in要素のフェードイン処理
    $('.js-fade-in').each(function () {
      const boxOffset = $(this).offset().top;
      const scrollPos = $(window).scrollTop();
      const wh = $(window).height();
      if (scrollPos > boxOffset - wh + 100) {
        $(this).addClass(animatedClass);
      }
    });
  });

  $(function() {
	setTimeout(function(){
		$('.js-time-out').fadeIn(1600);
	},500); 
});

  // ウィンドウスクロール時のフェードイン処理
  const fadeIn = function () {
    const target = document.getElementsByClassName('js-fade-in');
    const position = Math.floor(window.innerHeight * .75);
    for (let i = 0; i < target.length; i++) {
      let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
      let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom);
      if (offsetTop < position) {
        target[i].classList.add('scroll-in');
      }
      if (offsetBottom < 0) {
        target[i].classList.remove('scroll-in');
      }
    }
  };
  window.addEventListener('scroll', fadeIn, false);

  // fadeInDown関数の定義
  const fadeInDown = function () {
    const target = document.getElementsByClassName('fade-in-down');
    const position = Math.floor(window.innerHeight * .75);
    for (let i = 0; i < target.length; i++) {
      let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
      let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom);
      if (offsetTop < position) {
        target[i].classList.add('scroll-in');
      }
      if (offsetBottom < 0) {
        target[i].classList.remove('scroll-in');
      }
    }
  };
  window.addEventListener('scroll', fadeInDown, false);
});