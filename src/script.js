let range1 = document.getElementById('range1');
let range2 = document.getElementById('range2');
let monthSum = document.querySelector('.main_calculate__total');

const periodResultTotal = () => {

    let sum1 = document.querySelector('.main_calc__sum1');
    let sum2 = document.querySelector('.main_calc__sum2');

    console.log(range1);
    sum1.textContent = range1.value;
    sum2.textContent = range2.value;
    monthSum.textContent = range1.value*10;
};

range1.addEventListener('input', periodResultTotal);
range2.addEventListener('input', periodResultTotal);

$(function(){
    var r1 = $('#range1');
    console.log(r1);
    r1.on('mouseenter',function(){
        let p = r1.val();
        r1.on('click',function(){
            p = r1.val();
            bg(p);
        });
        r1.on('mousemove',function(){
            p = r1.val();
            bg(p);
        });
    });
    function bg(n){
        r1.css({
            'background-image':'-webkit-linear-gradient(left ,#FEE600 0%,#FEE600 '+n+'%,#fff '+n+'%, #fff 100%)'
        });
    }
});

$(function(){
    var r2 = $('#range2');
    console.log(r2);
    r2.on('mouseenter',function(){
        let q = r2.val();
        r2.on('click',function(){
            q = r2.val();
            bg(q);
        });
        r2.on('mousemove',function(){
            q = r2.val();
            bg(q);
        });
    });
    function bg(d){
        r2.css({
            'background-image':'-webkit-linear-gradient(left ,#FEE600 0%,#FEE600 '+d+'%,#fff '+d+'%, #fff 100%)'
        });
    }
});