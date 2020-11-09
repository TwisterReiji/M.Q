
let n=Number(prompt('Nhap gia tri n:'))
let i=Number(prompt('Nhap gia tri i:'))
let m;
function opposite(n,i) {
    m=n-1;
    if (i=0) {
        return 5;
    }
    else if (i=1){
        return 6;
    }
    else if (i=2){
        return 7;
    }
    else if (i=3){
        return 8;
    }
    else if (i=4){
        return 9;
    }
    else if (i=5){
        return 0;
    }
    else if (i=6){
        return 1;
    }
    else if (i=7){
        return 2;
    }
    else if (i=8){
        return 3;
    }
    else{
        return 4;
    }
    return m;    
}
let a=opposite(n,i)
alert(a)







