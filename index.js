const profileURL = "https://rand-alpha.vercel.app/profile.html";

// Generate the QR Code automatically
new QRCode(document.getElementById("qrcode"), {
  text: profileURL,
  width: 200,
  height: 200,
});
