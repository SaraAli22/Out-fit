console.log('Welcome to Edmond');
alert('Hello');

var username=prompt('Please type your name');
alert('Welcome to Edmond' + username );
var usergender=prompt('Please type your gender (Male or Female?)');

console.log('user name'+ username);
console.log('user gender' + usergender);


while (usergender != "Female" && usergender != "Male"){
  usergender=prompt('Retype you gender (Male or Female?)');
}

var clothesnumber=prompt('How many Items do you need ?');


for (var i = 1; i <= clothesnumber; i++ ) 
{

if(usergender =='Female') {

  var image = '<img src="https://i.pinimg.com/236x/b5/80/57/b5805790468975b1e3c866e7105a0ec0.jpg" alt= "Female"/>';
  
  document.write(image);

}else if(usergender =='Male'){
  var image1 = '<img src="https://i.pinimg.com/236x/71/9e/08/719e080193c0130459f50dbe1e48233c.jpg" alt= "Male"/>';
  
  document.write(image1);}}

  function askuser()
  {
    var age =15;
    var userage = Number(prompt('What is your Age ?'));

    if (userage >= age)
    {
      alert('Recommond you to choose adult outfits');

    } else if(userage< age)
    {
      alert('Recommond you to choose Kids outfits'); 
      }
    
  }
  askuser();