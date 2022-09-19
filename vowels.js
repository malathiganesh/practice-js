
// function getvowels(){
//     inputvalue= String(document.findvowels.str.value);
//     // var a=prompt(document.str.value);
//     // console.log(a);
//     var vowelslist='aeiouAEIOU';
//     var vowelcount =0;
//     for(var x = 0; x < inputvalue.length ; x++)
//   {
//     if (vowelslist.indexOf(inputvalue[x]) !== -1)
//     {
//       vowelcount += 1;
//     }
  
//   }
//   return vowelcount;
//   console.log(vowelcount);
// }
// console.log(getvowels());
// getvowels()

function vowelscount()
{
    var strg=document.findvowels.str1.value;
  var vowelslist = 'aeiouAEIOU';
  var vcount = 0;
  console.log(strg);
  for(var x = 0; x < strg.length ; x++)
  {
    if (vowelslist.indexOf(strg[x]))
    {
      vcount += 1;
    }
  
  }
  console.log(vcount); 
document.findvowels.result.value=vcount;
  return vcount;
  
}
vowelscount();
// console.log(vowelscount("helloo"));