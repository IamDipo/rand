const profileURL = "http://172.20.10.3:8000/profile.html";

// Generate the QR Code automatically
new QRCode(document.getElementById("qrcode"), {
  text: profileURL,
  width: 200,
  height: 200,
});
