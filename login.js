//hien thi thog bao
function hienThiThongBao(noiDung) {
  let ThongBao = document.getElementById(`thongbao`);
  ThongBao.innerHTML = noiDung;
}

//ham dang ky
function MINH() {
  //lay du lieu trong form dang ky
  let username = document.getElementById(`user`).value;
  let password = document.getElementById(`pass`).value;
  let confirmPassword = document.getElementById(`confirmpass`).value;

  //kiem tra basic
  if (!username || !password || !confirmPassword) {
    hienThiThongBao(`Please put on the details!`);
    return;
  }

  if (password !== confirmPassword) {
    hienThiThongBao(`Password not indentical!`);
    return;
  }

  //lay danh sach ng dung (don gain nhat)
  let users = JSON.parse(localStorage.getItem(`users`) || `[]`);

  //kiem tra ten da ton tai
  let daTonTai = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      daTonTai = true;
      break;
    }
  }
  if (daTonTai) {
    hienThiThongBao(`User already exist!`);
    return;
  }
  //them ng dung moi
  users.push(username, password);
  localStorage.setItem(`users`, JSON.stringify(users));

  hienThiThongBao(`Sign up succesful!`);
}
