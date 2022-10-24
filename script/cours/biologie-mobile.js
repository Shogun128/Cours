if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("mobile device");
  var heade = document.getElementById('head');
  heade.innerHTML = "<link rel='stylesheet' href='../style/index-mobile.css'><link rel='stylesheet' href='../style/header-mobile.css'><link rel='stylesheet' href='../style/incours-mobile.css'><title>Biologie</title>"
}else{
  // false for not mobile device
  console.log("not mobile device");
}
