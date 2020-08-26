$(document).ready(function() {
    //何かしらの処理
    console.log("okok");
});

// $(function(){
//   // #で始まるa要素をクリックした場合に処理
//   $('a[href^=#]').click(function(){
//     // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
//     var adjust = 0;
//     // スクロールの速度（ミリ秒）
//     var speed = 400;
//     // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
//     var href= $(this).attr("href");
//     // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
//     var position = target.offset().top + adjust;
//     // スムーススクロール linear（等速） or swing（変速）
//     $('body,html').animate({scrollTop:position}, speed, 'swing');
//     return false;
//   });
// });

$(function() {
    $('a[href^="#"]').click(function() {

        $('.hamburger').toggleClass('active');
        //$('.globalMenuSp').removeClass('active');

        if ($('.hamburger').hasClass('active')) {
            $('.globalMenuSp').addClass('active');
            $('.globalMenuSp_list').css('visibility', 'visible');
        } else {
            $('.globalMenuSp').removeClass('active');
            $('.globalMenuSp_list').css('visibility', 'hidden');
        }

        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});


$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        //$('.globalMenuSp_list').css('visibility', 'visible');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
            $('.globalMenuSp_list').css('visibility', 'visible');
        } else {
            $('.globalMenuSp').removeClass('active');
            $('.globalMenuSp_list').css('visibility', 'hidden');
        }
    });
});