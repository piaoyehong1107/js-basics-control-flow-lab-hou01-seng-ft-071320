function scuberGreetingForFeet(sample){
  if (sample <= 400) {
  return "This one is on me!"
}else if (sample >2000 && sample <= 2500){
  return "I will gladly take your thirty bucks."
}
else if (sample > 2500){
  return 'No can do.'
}
}

function ternaryCheckCity( city ){
 return city==='NYC'? 'Ok, sounds good.':"No go."
}

function switchOnCharmFromTip(tip){
<<<<<<< HEAD
  switch(tip){
  case 'generous':
    return "Thank you so much.";
  case 'not as generous':
    return "Thank you.";
  default:
    return "Bye."
  }
=======
  case 'generous':
    return "Thank you so much.";
    break;
  case 'not as generous':
    return "Thank you.";
    break;
  default:
    return "Bye."
    break;
>>>>>>> ebdf2a345fb143ca9b8753e5dea1cc47dec682aa
}