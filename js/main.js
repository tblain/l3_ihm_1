
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

function addA(id) {
  var parentNode = id.parentNode;
  var answer = parentNode.children[0];
  console.log(answer);
  var cln = answer.cloneNode(true);
  parentNode.insertBefore(cln, answer);
}

function delQ(id) {
  var test = id.parentNode.parentNode.parentNode;
  test.remove();
}

function delA(id) {
  var test = id.parentNode;
  test.remove();
}

function addQuestion(id) {
  var itms = document.getElementsByClassName("question");
  var itm = itms[itms.length-1];
  var cln = itm.cloneNode(true);
  var main_cont = document.getElementById("questions");
  main_cont.append(cln);
}
