function toggle() {
  var login = document.getElementById("loginarea");

  if (login.style.display === "none") {
    login.style.display = "block";
  } else {
    login.style.display = "none";
  }
}

//birthday countdown

let countdown = new Date("Sep 12, 2022 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let difference = countdown - now;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if ((difference = 0)) {
    clearInterval();
  }
}, 1000);

//image slideshow

const slideshowImages = document.querySelectorAll(".avi .slideshow-img");

const nextImageDelay = 3000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.display = "none";

  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

  slideshowImages[currentImageCounter].style.display = "block";
}

//LOCAL STORAGE

var getSched = JSON.parse(localStorage.getItem("appSched"));
let calendar = document.getElementById("upcomapp");

if (getSched) {
  let div = document.createElement("div");
  let div2 = document.createElement("div");
  calendar.appendChild(div);
  calendar.appendChild(div2);
  div.setAttribute("class", "sched-appts");
  div2.setAttribute("class", "div2");
  let hTag = document.createElement("h2");
  div.appendChild(hTag);
  hTag.innerHTML = getSched.docName;

  let pAddress = document.createElement("p");
  pAddress.innerHTML = getSched.addressSt;
  div.appendChild(pAddress);

  let pCity = document.createElement("p");
  pCity.innerHTML = getSched.cty;
  div.appendChild(pCity);

  let pState = document.createElement("p");
  pState.innerHTML = getSched.stat;
  div.appendChild(pState);

  let pZip = document.createElement("p");
  pZip.innerHTML = getSched.zip;
  div.appendChild(pZip);

  let pPhone = document.createElement("p");
  pPhone.innerHTML = getSched.phn;
  div.appendChild(pPhone);

  let pDate = document.createElement("h4");
  let pDate2 = document.createElement("h4");
  pDate.innerHTML = moment(getSched.dte, "YYYY/MM/DD").format("dddd");
  div2.appendChild(pDate);
  pDate2.innerHTML = moment(getSched.dte, "YYYY/MM/DD").format(
    "  MMMM D" + "," + " " + "Y"
  );

  console.log(typeof getSched.tme);
  let slice = Number(getSched.tme.slice(0, -3));
  console.log(slice);

  div2.appendChild(pDate2);
  let pTime = document.createElement("h4");
  pTime.innerHTML = moment(getSched.dte, "YYYY/MM/DD").format("h:mm:ss a");
  div2.appendChild(pTime);

  let brk = document.createElement("br");
}
