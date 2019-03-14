
$(document).ready(function() {
  $('.component-container').sortable({
    cursor: 'move',
    placeholder: 'ui-state-highlight',
    start: function(e, ui) {
      ui.placeholder.width(ui.item.find('.panel').width());
      ui.placeholder.height(ui.item.find('.panel').height());
      ui.placeholder.addClass(ui.item.attr("class"));
    }
  });
});

var i = 0;

function addA(id) {
  var parentNode = id.parentNode;
  var answer = parentNode.children[0];
  console.log(answer);
  var cln = answer.cloneNode(true);
  parentNode.insertBefore(cln, answer);
}

function delQ(id) {
  var question = id.parentNode.parentNode;
  question.remove();
}

function delA(id) {
  var answer = id.parentNode;
  answer.remove();
}

function addQuestion(id) {
  var itms = document.getElementsByClassName("question");
  var itm = itms[itms.length-1];
  var cln = itm.cloneNode(true);
  var radio1 = cln.children[4];
  var radio2 = cln.children[5];
  i = i + 1
  radio1.name = "answer-type" + i;
  radio2.name = "answer-type" + i;
  console.log(radio1);
  
  var main_cont = document.getElementById("questions");
  main_cont.append(cln);
}
