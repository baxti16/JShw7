let result = +prompt("1 = uchburche ; 2 = kvadrat ; 3 = yonlamachasiga!!!");
switch (result) {
  case 1:
    let dup = document.getElementById("dup");
    let sup = +prompt("chislo stroka");

    for (let i = 0; i < sup; i++) {
      for (let j = 0; j < i; j++) {
        dup.innerHTML += "*";
      }
      dup.innerHTML += "<br>";
    }
    break;
  case 2:
    let output = document.getElementById("output");
    let input = +prompt("son yoz");

    for (let i = 0; i < input; i++) {
      for (let j = 0; j < input; j++) {
        output.innerHTML += " * ";
      }
      output.innerHTML += "<br>";
    }
    break;
  case 3:
    let put = document.getElementById("put");
    let uninput = +prompt("chislo stroka");

    for (let i = 0; i < uninput; i++) {
      for (let j = 0; j < i; j++) {
        put.innerHTML += "*";
      }
      put.innerHTML += "<br>";
    }
    break;
  default:
    break;
}
