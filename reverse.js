var num=prompt('enter number');
// for(i=num;i>0;i--){
//     console.log(i);
// }
let  remaining;
while(num>0){
    remaining=num%10;
    switch(remaining){
        case 0:
            console.log('zero');
            break;
            case 1:
            console.log('one');
            break;
            case 2:
            console.log('two');
            break;
            case 3:
            console.log('three');
            break;
            case 4:
            console.log('four');
            break;
            case 5:
            console.log('five');
            break;
            case 6:
            console.log('six');
            break;
            case 7:
            console.log('seven');
            break;
            case 8:
            console.log('eight');
            break;
            case 9:
            console.log('nine');
            break;
    }
    num=(num-remaining)/10;
}