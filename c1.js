let n = Number(prompt('Nhập giá trị n thỏa mãn 4<=n<=20 và n chẵn:'));
let i = Number(prompt('Nhập giá trị i thỏa mãn 0<= i <=(n-1):'));
function findOppositeNumber(n,i) {
    if ( n%2==0 & i>n & n>=4 & n<=20 ) {
        return i-n/2;
    }
    else if ( n%2==0 & i<=n & n>=4 & n<=20 ) {
        return i+n/2;
    }
    else {
        alert('Nhập lại giá trị thỏa mãn điều kiện đề bài.');
    }
}
alert(findOppositeNumber(n,i));



