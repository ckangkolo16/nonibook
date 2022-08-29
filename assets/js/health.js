let schedule = document.getElementById("schedule");

let form = document.querySelector("form");
let drName = document.getElementById("docname");
let address = document.getElementById("address");
let city = document.getElementById("city");
let state = document.getElementById("state");
let zipcode = document.getElementById("zipcode");
let phone = document.getElementById("phone");
let date = document.getElementById("date");
let time = document.getElementById("time");
let reason = document.getElementById("reason");
let appointment = document.getElementById("apptdisp");

let mainapptDis = document.getElementById("mainapptdisp");
let appDisplay = document.getElementById("apptdisp");
var getSched = JSON.parse(localStorage.getItem("appSched"));

let allAppts = [];

schedule.addEventListener("click", function () {
  if (drName.value === "" || date.value === "") {
    return;
  } else {
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    div3.setAttribute("class", "div3");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");

    div3.appendChild(div4);
    div3.appendChild(div5);

    div4.appendChild(hTag);
    div4.appendChild(pPhone);

    div5.appendChild(pTime);
    div5.appendChild(pDate);
    div5.appendChild(pDate2);

    mainapptDis.appendChild(div3);
    appDisplay.appendChild(div);
    appDisplay.appendChild(div2);
    div.setAttribute("class", "sched-appts");
    div2.setAttribute("class", "div2");
    let hTag = document.createElement("h2");
    appDisplay.appendChild(hTag);
    hTag.innerHTML = drName.value;

    let pAddress = document.createElement("p");
    pAddress.innerHTML = address.value;
    appDisplay.appendChild(pAddress);

    let pCity = document.createElement("p");
    pCity.innerHTML = city.value;
    appDisplay.appendChild(pCity);

    let pState = document.createElement("p");
    pState.innerHTML = state.value;
    appDisplay.appendChild(pState);

    let pZip = document.createElement("p");
    pZip.innerHTML = zipcode.value;
    appDisplay.appendChild(pZip);

    let pPhone = document.createElement("p");
    pPhone.innerHTML = phone.value;
    appDisplay.appendChild(pPhone);

    let pDate = document.createElement("h4");
    let pDate2 = document.createElement("h4");
    pDate.innerHTML = moment(getSched.dte, "YYYY/MM/DD").format("dddd");
    div2.appendChild(pDate);
    pDate2.innerHTML = moment(getSched.dte, "YYYY/MM/DD").format(
      "  MMMM D" + "," + " " + "Y"
    );

    let pTime = document.createElement("h4");
    pTime.innerHTML = moment(getSched.dte, "YYYY/MM/DD").format("h:mm:ss a");

    let docName = drName.value.trim();
    let addressSt = address.value.trim();
    let cty = city.value.trim();
    let stat = state.value.trim();
    let zip = zipcode.value.trim();
    let phn = phone.value.trim();
    let dte = date.value.trim();
    let tme = time.value.trim();
    let rsn = reason.value.trim();

    var appSched = {
      docName: docName,
      addressSt: addressSt,
      cty: cty,
      stat: stat,
      zip: zip,
      phn: phn,
      dte: dte,
      tme: tme,
      rsn: rsn,
    };

    localStorage.setItem("appSched", JSON.stringify(appSched));

    console.log(allAppts);
  }
});

if (getSched) {
  let div = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  div3.setAttribute("class", "div3");
  let div4 = document.createElement("div");
  let div5 = document.createElement("div");
  div4.setAttribute("class", "div4");
  div5.setAttribute("class", "div5");
  mainapptDis.appendChild(div3);
  appDisplay.appendChild(div);
  appDisplay.appendChild(div2);
  div.setAttribute("class", "sched-appts");
  div2.setAttribute("class", "div2");
  let hTag = document.createElement("h2");
  appDisplay.appendChild(hTag);
  hTag.innerHTML = drName.value;

  let pAddress = document.createElement("p");
  pAddress.innerHTML = address.value;
  appDisplay.appendChild(pAddress);

  let pCity = document.createElement("p");
  pCity.innerHTML = city.value;
  appDisplay.appendChild(pCity);

  let pState = document.createElement("p");
  pState.innerHTML = state.value;
  appDisplay.appendChild(pState);

  let pZip = document.createElement("p");
  pZip.innerHTML = zipcode.value;
  appDisplay.appendChild(pZip);

  let pPhone = document.createElement("p");
  pPhone.innerHTML = phone.value;
  appDisplay.appendChild(pPhone);

  let pDate = document.createElement("h4");
  let pDate2 = document.createElement("h4");
  pDate.innerHTML = moment(getSched.dte, "YYYY/MM/DD").format("dddd");
  div2.appendChild(pDate);
  pDate2.innerHTML = moment(getSched.dte, "YYYY/MM/DD").format(
    "  MMMM D" + "," + " " + "Y"
  );

  let pTime = document.createElement("h4");
  pTime.innerHTML = moment(getSched.dte, "YYYY/MM/DD").format("h:mm:ss a");

  div3.appendChild(div4);
  div3.appendChild(div5);

  div4.appendChild(hTag);
  div4.appendChild(pPhone);

  div5.appendChild(pTime);
  div5.appendChild(pDate);
  div5.appendChild(pDate2);
}

let profileBtn = document.getElementById("profilebtn");
let profile = document.getElementById("profile");
let exitprofile = document.getElementById("exitprofbtn");
let apptBtn = document.getElementById("apptbtn");
let apptCard = document.getElementById("appointments");
let exitAppt = document.getElementById("exitappt");
let medBtn = document.getElementById("medbtn");
let medCard = document.getElementById("medications");
let exitMed = document.getElementById("exitmedbtn");

medBtn.addEventListener("click", function () {
  if (medCard.style.display === "block") {
    medCard.style.display = "none";
  } else {
    apptCard.style.display = "none";
    profile.style.display = "none";
    medCard.style.display = "block";
  }
});

profileBtn.addEventListener("click", function () {
  if (profile.style.display === "block") {
    profile.style.display = "none";
  } else {
    medCard.style.display = "none";
    apptCard.style.display = "none";
    profile.style.display = "block";
  }
});

apptBtn.addEventListener("click", function () {
  if (apptCard.style.display === "block") {
    apptCard.style.display = "none";
  } else {
    medCard.style.display = "none";
    profile.style.display = "none";
    apptCard.style.display = "block";
  }
});

exitprofile.addEventListener("click", function () {
  if (profile.style.display != "none") {
    profile.style.display = "none";
  }
});

exitAppt.addEventListener("click", function () {
  if (apptCard.style.display != "none") {
    apptCard.style.display = "none";
  }
});

exitMed.addEventListener("click", function () {
  if (medCard.style.display != "none") {
    medCard.style.display = "none";
  }
});
