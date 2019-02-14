function addQuestion() {
  var itms = document.getElementsByClassName("question");
  var itm = itms[itms.length-1];
  console.log(itm);
  var cln = itm.cloneNode(true);
  var element = document.getElementById("questions");
  var child = document.getElementById("addQ");
  element.insertBefore(cln, child);
}
