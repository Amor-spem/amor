$("#menu-1 b").click(function(){
    $("#menu-1 ul").slideToggle();
});
$("li li").click(function(){
    // alert("nihao"+$(this).html());
    var address=$(this).attr("date-src");
    $("#kuangjia").attr("src",address);
    // alert("nihao"+address)
});
$("li li").click(menu);

$("#menuButton").click(menu);
function menu(){
    $("nav").animate({width:"toggle"},350);
}