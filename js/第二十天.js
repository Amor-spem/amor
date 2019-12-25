function myMove() {
    var 动画 = document.getElementById('animate');
    var id = setInterval(frame, 5);
    // 设定计时器
    var max = 0;
    function frame(){
        if (max == 300){
            clearInterval(id);
            // 动画计时器解除
        }else{
            max++;
            动画.style.left=max + 'px';
            动画.style.top=max + 'px';
        }
    }
}
function myEvent() {
    document.getElementById('event').innerHTML='你好!';
}
function yiChu() {
    document.getElementById('event').innerHTML='搞定';
}
function myDown(md) {
    md.innerHTML = '跳转动画';
    md.style.backgroundColor='#123456';
    md.style.borderRadius = '0px';
}
function myUp(md) {
    md.innerHTML = '动画结束';
    md.style.backgroundColor='#d94a38';
    md.style.borderRadius='80px';
}