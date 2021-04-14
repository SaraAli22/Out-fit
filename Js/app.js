console.log('Welcome to Edmond');
alert('Welcometo Edmond');
var username=prompt('Please type your name');
var usergender=prompt('Please type your gender (Male or Female?)');
console.log('user name'+ username);
console.log('user gender' + usergender);
if(usergender =='Female')
{
  var image = '<img src="https://i.pinimg.com/236x/b5/80/57/b5805790468975b1e3c866e7105a0ec0.jpg" alt= "Female"/>';
  
  document.write(image);

}else if(usergender =='Male'){
  var image1 = '<img src="https://i.pinimg.com/236x/71/9e/08/719e080193c0130459f50dbe1e48233c.jpg" alt= "Male"/>';
  
  document.write(image1);}
