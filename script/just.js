$(function(){
    gnb();
});
function gnb(){
    // 메인메뉴 마우스 오버하면 서브메뉴를 부드럽게 등장
    // 마우스 오버한 메인메뉴는 하이라이트 적용
    // $("#gnb > li").mouseover(function(){
    //     $(this).addClass("on");
    //     $(".lnb").show();
    // });
    // $("#gnb > li").mouseout(function(){
    //     $(this).removeClass("on");
    //     $(".lnb").hide();
    // });

    $("#gnb > li").on({
        mouseover:function(){
            $(this).addClass("on");
            $(".lnb").show(1000);
        },
        mouseout:function(){
            $(this).removeClass("on");
            $(".lnb").hide();
        }
    });
}
