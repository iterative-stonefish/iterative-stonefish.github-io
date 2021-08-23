//DATABASE
function writeData(s) {
  var d = new Date();
  var t = d.getTime();
  firebase.database().ref(JSON.stringify(t)).set({
    response: s,
  });
}

function repy() {
  writeData("Y");
}

function repn() {
  writeData("N");
}
