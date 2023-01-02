module.exports = function toReadable (number) {
  let a, result;
  a = number;
  if(number==0)return 'zero';
  if(number<20)return numberToString(a);
  result = '';
  if( number / 10 >= 2 && number < 100 ) {
    result = numberToString10((a-a%10)/10,number) + numberToString(a%10);
  }
  if(number >= 100){
    result = numberToString100((a-a%100)/100,number) + numberToString10((a%100-a%10)/10,number) + (number%100<20?numberToString(a%100):numberToString(a%10));
  }
  
  return result;
}

function numberToString(a){
    let arr = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    return a==0?'':arr[a-1];
}

function numberToString10(a,space){
    let arr=['','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    if(a<2)return arr[0]
    return space%10 != 0 ? arr[a - 1] + ' ' : arr[a - 1];
}

function numberToString100(a,space){
    let arr = ['one','two','three','four','five','six','seven','eight','nine'];
    return space%100 ? arr[a-1] + ' hundred ' : arr[a-1] + ' hundred';
}

