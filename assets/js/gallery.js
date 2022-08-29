//upload gallery
let main = document.getElementById("main");

//appends vid gallery to the top
let vidbtn = document.getElementById("allvids");
let vidsGallery = document.getElementById("videos");

vidbtn.addEventListener("click", function (event) {
  event.preventDefault();
  main.insertBefore(vidsGallery, main.children[0]);
});

//appends bday gallery to the top
let bdaybtn = document.getElementById("bday");
let birthdayGallery = document.getElementById("birth");

bdaybtn.addEventListener("click", function (event) {
  event.preventDefault();
  main.insertBefore(birthdayGallery, main.children[0]);
});

//appends first year gallery to the top
let firstyrbtn = document.getElementById("firstyr");
let firstyearGallery = document.getElementById("firstyear");

firstyrbtn.addEventListener("click", function (event) {
  event.preventDefault();
  main.insertBefore(firstyearGallery, main.children[0]);
});

//appends photos gallery to the top
let photobtn = document.getElementById("allpics");
let photoGallery = document.getElementById("photos");

photobtn.addEventListener("click", function (event) {
  event.preventDefault();
  main.insertBefore(photoGallery, main.children[0]);
});

//appends Labor & Delivery gallery to the top
let labndelbtn = document.getElementById("labndel");
let labornDelGallery = document.getElementById("labor");

labndelbtn.addEventListener("click", function (event) {
  event.preventDefault();
  main.insertBefore(labornDelGallery, main.children[0]);
});

//appends Trips gallery to the top
let tripsbtn = document.getElementById("tripsbtn");
let tripsGallery = document.getElementById("tripsgallery");

tripsbtn.addEventListener("click", function (event) {
  event.preventDefault();
  main.insertBefore(tripsGallery, main.children[0]);
});

//appends CHRISTMAS/HOLIDAYS gallery to the top
let christmasbtn = document.getElementById("christmasbtn");
let holidayGallery = document.getElementById("holidaysgallery");

christmasbtn.addEventListener("click", function (event) {
  event.preventDefault();
  main.insertBefore(holidayGallery, main.children[0]);
});

//appends CHRISTMAS/HOLIDAYS gallery to the top
let holidaybtn = document.getElementById("holidaybtn");

holidaybtn.addEventListener("click", function (event) {
  event.preventDefault();
  main.insertBefore(holidayGallery, main.children[0]);
});

//appends Lessons gallery to the top
let lessonsbtn = document.getElementById("lessonsbtn");
let lessonsGallery = document.getElementById("lessonsgallery");

lessonsbtn.addEventListener("click", function (event) {
  event.preventDefault();
  main.insertBefore(lessonsGallery, main.children[0]);
});

//appends Family gallery to the top
let familybtn = document.getElementById("familybtn");
let familyGallery = document.getElementById("familygallery");

familybtn.addEventListener("click", function (event) {
  event.preventDefault();
  main.insertBefore(familyGallery, main.children[0]);
});

let albums = document.getElementById("albums");
let displayName = document.getElementById("displayname");
let displayTitle = document.getElementById("displaytitle");

albums.addEventListener("change", function () {
  displayName.innerText = albums.options[albums.selectedIndex].text;

  //   console.log(displayName.innerHTML);
});

/******************************************************* */
document.querySelector("#files").addEventListener("change", (e) => {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      if (!files[i].type.match("image")) continue;
      const picReader = new FileReader();
      picReader.addEventListener("load", function (event) {
        // localStorage.setItem("recent-image", picReader.result);

        const picFile = event.target;
        // console.log(picReader);
        let del = document.createElement("input");
        del.type = "checkbox";
        del.setAttribute("class", "delete");
        del.setAttribute("id", "del");
        del.name = "deletepic";
        del.value = "deletepic";

        const div = document.createElement("div");
        div.setAttribute("class", "pic-holder");
        div.innerHTML = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;

        console.log(displayName.innerHTML);

        switch (displayName.innerHTML) {
          case "Birthdays":
            birthdayGallery.appendChild(div);

            main.insertBefore(birthdayGallery, main.children[0]);
            break;
          case "Photos":
            photoGallery.appendChild(div);
            main.insertBefore(photoGallery, main.children[0]);
            break;
          case "First Year":
            firstyearGallery.appendChild(div);
            main.insertBefore(firstyearGallery, main.children[0]);
            break;
          case "LaborNDelivery":
            labornDelGallery.appendChild(div);
            main.insertBefore(labornDelGallery, main.children[0]);
            break;
          case "Trips":
            tripsGallery.appendChild(div);
            main.insertBefore(tripsGallery, main.children[0]);
            break;
          case "Lessons":
            lessonsGallery.appendChild(div);
            main.insertBefore(lessonsGallery, main.children[0]);
            break;
          case "Holidays":
            holidayGallery.appendChild(div);
            main.insertBefore(holidayGallery, main.children[0]);
            break;
          case "Family":
            familyGallery.appendChild(div);
            main.insertBefore(familyGallery, main.children[0]);
            break;
          default:
            photoGallery.appendChild(div);
        }

        div.appendChild(del);
      });
      picReader.readAsDataURL(files[i]);
    }
  } else {
    alert("Your browser doesn't support the File API");
  }
});

// //using localstorage to save uploaded pics (!!!!nstorage to small to use)
// document.addEventListener("DOMContentLoaded", function () {
//   const recentImage = localStorage.getItem("recent-image");
//   const photoGallery = document.getElementById("photos");
//   const div = document.createElement("div");

//   if (recentImage) {
//     div.innerHTML = `<img class="thumbnail" src="${recentImage}" />`;
//     photoGallery.appendChild(div);
//   }
// });

let inputbox = document.getElementsByClassName("delete");
let delbtn = document.getElementById("delbtn");
//displays/hides delete button and input(checkbox ) on same function
function showhide() {
  if (delbtn.style.display === "block") {
    delbtn.style.display = "none";

    for (let i = 0; i < inputbox.length; i++) {
      inputbox[i].style.display = "none";
    }
  } else {
    delbtn.style.display = "block";

    for (let i = 0; i < inputbox.length; i++) {
      inputbox[i].style.display = "block";
    }
  }
}

//DISPLAY BOX BUTTONS
let blknwhtBtn = document.getElementById("blknwht");
let colorBtn = document.getElementById("color");
let settingBtn = document.getElementById("gal-cog");
let lightbulb = document.getElementById("lightbulb");

let allImages = document.getElementsByClassName("thumbnail");

let header = document.getElementById("header");
let bottomNav = document.getElementById("bottomnav");
let leftNav = document.getElementById("navigation");
let uploadBox = document.getElementById("uploadbox");
let displayBox = document.getElementById("displaybox");

let picHolder = document.getElementsByClassName("pic-holder");
let childDivs = main.children;
let list = document.getElementsByTagName("ul");

lightbulb.addEventListener("click", function () {
  if (lightbulb.style.color === "gray") {
    console.log(leftNav);
    //reverts all elements back to original color
    lightbulb.style.color = "yellow";
    header.style.backgroundColor = "#2980b9";
    bottomNav.style.backgroundColor = "skyblue";
    leftNav.style.backgroundColor = "#34db95";
    uploadBox.style.backgroundColor = "#2980b9";
    displayBox.style.backgroundColor = "#2980b9";
    document.body.style.backgroundColor = "#DFF4FB";
    settingBtn.style.color = "black";
    displayName.style.color = "black";
    displayTitle.style.color = "black";

    //changes each pic border color back to original color
    for (let i = 0; i < picHolder.length; i++) {
      picHolder[i].style.backgroundColor = "skyblue";
    }
    //loops through all divs (albums) and reverts to original color
    for (let i = 0; i < childDivs.length; i++) {
      childDivs[i].style.backgroundColor = "lightblue";
    }
    //
    for (let i = 0; i < allImages.length; i++) {
      if ((allImages[i].style.filter = "grayscale(100%)")) {
        allImages[i].style.filter = "grayscale(0)";
      }
    }
  } else {
    for (let i = 0; i < picHolder.length; i++) {
      picHolder[i].style.backgroundColor = "black";
    }

    lightbulb.style.color = "gray";

    for (let i = 0; i < childDivs.length; i++) {
      childDivs[i].style.backgroundColor = "gray";
    }
    header.style.backgroundColor = "black";
    bottomNav.style.backgroundColor = "gray";
    leftNav.style.backgroundColor = "black";
    uploadBox.style.backgroundColor = "black";
    displayBox.style.backgroundColor = "black";
    settingBtn.style.color = "gray";
    displayName.style.color = "white";
    displayTitle.style.color = "white";
    document.body.style.backgroundColor = "#B3B2B2";

    for (let i = 0; i < allImages.length; i++) {
      if ((allImages[i].style.filter = "grayscale(0)")) {
        allImages[i].style.filter = "grayscale(100%)";
      }
    }
  }
});

//hides the blknwht button and color button functions
settingBtn.addEventListener("click", function () {
  if (
    blknwhtBtn.style.display === "block" ||
    colorBtn.style.display === "block"
  ) {
    blknwhtBtn.style.display = "none";
    colorBtn.style.display = "none";
  } else {
    blknwhtBtn.style.display = "block";
    colorBtn.style.display = "block";
  }
});

//changes all pictures to black and white
blknwhtBtn.addEventListener("click", function () {
  for (let i = 0; i < allImages.length; i++) {
    if ((allImages[i].style.filter = "grayscale(0)")) {
      allImages[i].style.filter = "grayscale(100%)";
      // blknwhtBtn.style.display = "none";
      // colorBtn.style.display = "block";
    }
  }
});

//changes all pictures back to color
colorBtn.addEventListener("click", function () {
  for (let i = 0; i < allImages.length; i++) {
    if ((allImages[i].style.filter = "grayscale(100%)")) {
      allImages[i].style.filter = "grayscale(0)";
      // colorBtn.style.display = "none";
      // blknwhtBtn.style.display = "block";
    }
  }
});

delbtn.addEventListener("click", function () {
  for (let i = 0; i < inputbox.length; i++) {
    if (inputbox[i].checked) {
      let parentdiv = inputbox[i].parentElement;
      let grandparent = inputbox[i].parentElement.parentElement;

      if (inputbox[i]) {
        parentdiv.remove();
      }

      // grandparent.removeChild(parentdiv);

      // console.log(parentdiv);
      // console.log(grandparent);
    }
  }
});
