//document.body.addEventListener("load", initQ);

var itms;
function initQ(){
  itms = document.getElementsByClassName("question")[0].cloneNode(true);
  document.getElementsByClassName("question")[0].remove();
}

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
  var main_cont = document.getElementById("questions");
  main_cont.append(itms.cloneNode(true));
}
