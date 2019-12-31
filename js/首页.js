// $(function(){
//     $("#liebiao li").on("click",function(){
//         var address =$(this).attr("data-src");
//         $("#kuanjia").attr("src",address);
//     });
// });

// $(document).ready(function () {
//     $("#lianjie li").on("click",function(){
//         var address=$(this).attr("date-src");
//         $("#kuangjia").attr("src",address);
//     }); 
// });
$("#liebiao li").click(function(){
    // alert("nihao"+$(this).html());
    var address=$(this).attr("date-src");
    $("#kuangjia").attr("src",address);
    // alert("nihao"+address)
});
