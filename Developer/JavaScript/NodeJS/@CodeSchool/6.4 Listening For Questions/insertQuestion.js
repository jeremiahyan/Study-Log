var insertQuestion = function(question){
  var newQuestion = document.createElement('li');
  newQuestion.innerHTML = question;

  var questions = document.getElementsByTagName('ul')[0];
  return questions.appendChild(newQuestion);
}
