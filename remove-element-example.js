const header = {
    'X-b':'a',
    'X-environment':'1',
}
delete header['X-environment']; // or use => delete test['blue'];

const test = {...header,'red':'#FF0000', 'blue':'#0000FF','green':'verde','X-environment':'2'};

console.log(test);

/*
{
  'X-b': 'a',
  red: '#FF0000',
  blue: '#0000FF',
  green: 'verde',
  'X-environment': '2'
}


 */
