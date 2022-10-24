if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("mobile device");
  var heade = document.getElementById('head');
  heade.innerHTML = "<link rel='stylesheet' href='../../../style/index.css'><link rel='stylesheet' href='../../../style/header.css'><link rel='stylesheet' href='../../../style/chimiechap/chapter2.css'><title>Chimie - Chapitre 1</title>"
}else{
  // false for not mobile device
  console.log("not mobile device");
}
