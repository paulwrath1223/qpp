console.log("bergiin");

setInterval(function() {
  console.log("call unfuck");
  unfuck_quizlet();
}, 200);


function unfuck_quizlet(){
  const paywall = document.getElementsByClassName('wugyavo');
  console.log("paywall: ");
  console.log(paywall)
  if(paywall.length !== 0){

    paywall[0].remove();
    document.getElementsByClassName('ExplanationSolutionsContainer hnqbbas s1oluvjw')[0].style.overflow="visible";
    let newHeight = document.getElementsByClassName('ExplanationsSolutionCard c5ngj6s')[0].offsetHeight;
    document.getElementsByClassName('mv7e89c')[0].style.minHeight=newHeight+"px";
  }
}