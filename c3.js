localStorage.setItem('lucky',Number());
let a=Number(localStorage.getItem('lucky'))
function enterlogin(e,t) {
    if ( e.key === 'enter') kt();   
}
// Trả về giá trị gần nhất
function random() {
    return Math.round( Math.random()*10 );    
}

function kt() {
    let kt = document.getElementById('search')
    k = new Number(kt);
// TH trúng vs giá trị random
    if ( k === random() ) {
        alert('Chúc mừng bạn đã trúng giải đặc biệt.')
    }
// TH ko trúng với giá trị random 
    if ( k !== random() ) {
        a=a+1;
        if ( (3-a) > 0 ) { // TH còn lượt random
            alert(`Bạn đen quá. `+` Số trúng thưởng là ${random()}`);
            alert(`Bạn còn ${3-a} lượt.`);
            localStorage.setItem('lucky',Number(a));
        }
        if ( (3-a) === 0) { // TH hết lượt random sang người chơi khác
            a=0;
            localStorage.setItem('lucky',Number(a))
            alert(`Bạn đen quá. `+` Số trúng thưởng là ${random()}`)
            alert('Chúc bạn may mắn lần sau.')    
        }
    }
}
