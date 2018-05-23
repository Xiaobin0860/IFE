var postfixList = ['@163.com', '@gmail.com', '@126.com', '@qq.com', '@263.net'];
function on_input(input) {
  console.log(input.value);
  var li = "";
  if (input.value.length) {
    for (var i in postfixList) {
      li += "<li>" + input.value + postfixList[i] + "</li>";
    }
  }
  $("email-sug-wrapper").innerHTML = li;
}