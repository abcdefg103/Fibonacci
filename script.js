
function random(number) {
  return Math.floor(Math.random() * (number+1));
}
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
function doForm () {
  // (B1) FORM DATA OBJECT

  let firstbdayyunwoo = parseInt(document.getElementById("user_name").value);
  var output = '';
  var numbfstartfib = 0;
  var startfib = 1;
  var numero;
  if (firstbdayyunwoo > 1476) {
    document.getElementById("p1").innerHTML = "Number is too big!!"
  }
  // (B3) WHATEVER YOU WANT TO DO NEXT
  else {
  for (var i=0; i<firstbdayyunwoo && startfib != Infinity; i++) {
    output += startfib.toString();
    output += "\n";
    numero = startfib;
    startfib += numbfstartfib;
    numbfstartfib = numero;
                           }
  if (startfib == Infinity) {
    output += startfib;
    alert("You reached Infinity!");
  }
  document.getElementById("p1").innerHTML = output;
  }
}
  function notthing () {
  // (B1) FORM DATA OBJECT
  let no = parseInt(document.getElementById("input").value);
  var hey = '';
  var numbfstartfi = 0;
  var startfi = 1;
  var numer;
  // (B3) WHATEVER YOU WANT TO DO NEXT
  for (var i=0; i<no && hey != Infinity; i++) {
    hey = startfi.toString();
    numer = startfi;
    startfi += numbfstartfi;
    numbfstartfi = numer;
                           }

  document.getElementById("p2").innerHTML = hey;
  
}
