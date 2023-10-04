function renderProducts(productList) {
  var content = "";
  for (var i = 0; i < productList.length; i++) {
    var product = productList[i];
    var contenTr = `<tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.screen}</td>
        <td>${product.backCamera}</td>
        <td>${product.frontCamera}</td>
        <td>
            <img src="${product.img}" alt=""
            width="200px" height="200px"/>
        </td>
        <td>${product.desc}</td>
        <td>${product.type}</td>
        <td>
          <button class="btn btn-warning" onclick="EditProducts(${product.id})">Edit</button>
          <button class="btn btn-danger" onclick="DeleteProducts(${product.id})">Delete</button>
        </td>
    </tr>`;
    content += contenTr;
    document.querySelector("#productlist").innerHTML = content;
  }
}


function GetInfor(){
    var ID = document.querySelector("#idSP").value;
    var NAME = document.querySelector("#idnameSP").value;
    var PRICE = document.querySelector("#idpriceSP").value;
    var SCREEN = document.querySelector("#idscreenSP").value;
    var BC = document.querySelector("#idBCSP").value;
    var FC = document.querySelector("#idFCSP").value;
    var IMG = document.querySelector("#idimgSP").value;
    var DESC = document.querySelector("#iddescSP").value;
    var TYPE = document.querySelector("#idtypeSP").value;

    return new Product( ID, NAME, PRICE, SCREEN, BC, FC, IMG, DESC, TYPE);
}

function onLoading(){
  document.querySelector("#spinner").style.display = "flex";
}

function offLoading(){
  document.querySelector("#spinner").style.display = "none";
}

function sapXepTheoGiaTangDan(sp) {
  const n = sp.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sp[j].price > sp[j + 1].price) {
        const temp = sp[j];
        sp[j] = sp[j + 1];
        sp[j + 1] = temp;
      }
    }
  }
}
