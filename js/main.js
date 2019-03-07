function addQuestion() {
  var itms = document.getElementsByClassName("question");
  var itm = itms[itms.length-1];
  console.log(itm);
  var cln = itm.cloneNode(true);
  var element = document.getElementById("questions");
  var child = document.getElementById("addQ");
  element.insertBefore(cln, child);
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