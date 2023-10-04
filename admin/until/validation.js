function KiemTraRong(value, idError, message) {
  if (value.trim() === "") {
    document.querySelector(idError).innerHTML = message;
    return false;
  } else {
    document.querySelector(idError).innerHTML = "";
    return true;
  }
}

function kiemTraDoDai(value, min, max, idErr, message) {
  var length = value.length;
  if (length >= min && length <= max) {
    document.querySelector(idErr).innerHTML = "";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    return false;
  }
}

function kiemTraTrung(id, dsnv, idErr, message) {
  var viTri = dsnv.findIndex(function (nv) {
    return nv.taikhoan == id;
  });
  if (viTri != -1) {
    document.querySelector(idErr).innerHTML = message;
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}

function kiemTraSo(value, idErr, message) {
  const re = /^[0-9]+$/;

  var isString = re.test(value);
  console.log("isString: ", isString);
  if (isString) {
    document.querySelector(idErr).innerHTML = "";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    return false;
  }
}

function kiemTraChu(value, idErr, message) {
  const re = /^[0-9]+$/;

  var isString = re.test(value);
  console.log("isString: ", isString);
  if (isString) {
    document.querySelector(idErr).innerHTML = message;
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}

function KiemtraMinmax(value, min, max, idErr, message) {
  if (value < min || value > max) {
    document.querySelector(idErr).innerHTML = message;
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}
