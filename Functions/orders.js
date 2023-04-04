function orders(type, num){
let res;
switch(type){
    case 'coffee': res = num * 1.50;console.log(res.toFixed(2)); break;
    case 'water': res = num * 1.00;console.log(res.toFixed(2)); break;
    case 'coke': res = num * 1.40;console.log(res.toFixed(2)); break;
    case 'snacks': res = num * 2.00;console.log(res.toFixed(2)); break;
}

}
orders("coffee", 2)