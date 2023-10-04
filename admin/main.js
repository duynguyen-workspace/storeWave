function FetchProducts() {
  onLoading();
  getProductslist()
    .then(function (res) {
      console.log("res", res.data);
      renderProducts(res.data);
      offLoading();
    })
    .catch(function (err) {
      offLoading();
      console.log("err", err);
    });
}

FetchProducts();

//Xoá sản phẩm
function DeleteProducts(id) {
  delProductslist(id)
    .then(function (res) {
      FetchProducts();
      console.log("Sản phẩm bị xoá", res.data);
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

//Thêm sản phẩm
function AddProducts() {
  var sp = GetInfor();
  var valid = true;

  valid &= KiemTraRong(sp.name, "#tbname", "Tên sản phẩm không được để trống");
  valid &=
    KiemTraRong(sp.price, "#tbprice", "Giá sản phẩm không được để trống") &&
    KiemtraMinmax(
      sp.price,
      1000,
      10000,
      "#tbprice",
      "Giá sản phẩm phải từ 1000 - 10000"
    );
  valid &= KiemTraRong(sp.screen, "#tbscreenn", "Screen không được để trống");
  valid &= KiemTraRong(
    sp.backCamera,
    "#tbBC",
    "Back camera không được để trống"
  );
  valid &= KiemTraRong(
    sp.frontCamera,
    "#tbFC",
    "Front camera không được để trống"
  );
  valid &= KiemTraRong(sp.img, "#tbimg", "Phải thêm hình ảnh cho sản phẩm");
  valid &= KiemTraRong(sp.desc, "#tbdesc", "Thêm desc cho sản phẩm");
  valid &= KiemTraRong(sp.type, "#idtype", "Xin hãy chọn loại cho sản phẩm");

  console.log("sp: ", sp);
  axios({
    url: BASE_URL,
    method: "POST",
    data: sp,
  })
    .then(function (res) {
      if (valid) {
        console.log("res", res);
        FetchProducts();
        $("#myModal").modal("hide");
      }
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

function EditProducts(id) {
  getProductID(id)
    .then(function (res) {
      console.log("res", res.data);
      var sp = res.data;

      document.querySelector("#idSP").value = sp.id;
      document.querySelector("#idnameSP").value = sp.name;
      document.querySelector("#idpriceSP").value = sp.price;
      document.querySelector("#idscreenSP").value = sp.screen;
      document.querySelector("#idBCSP").value = sp.backCamera;
      document.querySelector("#idFCSP").value = sp.frontCamera;
      document.querySelector("#idimgSP").value = sp.img;
      document.querySelector("#iddescSP").value = sp.desc;
      document.querySelector("#idtypeSP").value = sp.type;
      //mở modal
      $("#myModal").modal("show");
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

function UpdateProducts() {
  var sp = GetInfor();
  console.log("sp: ", sp);

  UpdateProductslist(sp.id, sp)
    .then(function (res) {
      console.log("res: ", res);
      FetchProducts();
      $("#myModal").modal("hide");
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

function findProducts() {
  var name = document.querySelector("#searchName").value.trim()?.toLowerCase();
  getProductslist()
    .then(function (res) {
      console.log("res", res);
      var products = res.data;
      var result = products.filter(function (sp) {
        return sp.name.toLowerCase().includes(name);
      });
      renderProducts(result);
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

function SapXepNhoDenLon(){
    getProductslist().then(function(res){
        var sp = res.data;
        sp.sort((a, b) => a.price - b.price);
        console.log("res", sp);
        renderProducts(sp);
    }).catch(function(err){
        console.log("err", err);
    });
}
  
function SapXepLonDenNho(){
  getProductslist().then(function(res){
      var sp = res.data;
      sp.sort((a, b) => b.price - a.price);
      console.log("res", sp);
      renderProducts(sp);
  }).catch(function(err){
      console.log("err", err);
  });
}


  
  
  