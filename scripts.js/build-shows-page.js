const showsList = [
    {
        DATE: "Mon Sept 09 2024",
        VENUE: "Ronald Lane",
        LOCATION: "San Francisco, CA"
    },
    {
        DATE: "Tue Sept 17 2024",
        VENUE: "Pier 3 East",
        LOCATION: "San Francisco, CA"
    },
    {
        DATE: "Sat Oct 12 2024",
        VENUE: "View Lounge",
        LOCATION: "San Francisco, CA"
    },
    {
        DATE: "Sat Nov 16 2024",
        VENUE: "Hyatt Agency",
        LOCATION: "San Francisco, CA"
    },
    {
        DATE: "Fri Nov 29 2024",
        VENUE: "Moscow Centre",
        LOCATION: "San Francisco, CA"
    },
    {
        DATE: "Wed Dec 18 2024",
        VENUE: "Press Club",
        LOCATION: "San Francisco, CA"
    }
]


for (let i = 0; i < showsList.length; i++) {
    const showList = showsList[i];
    
    displayShowInfo(showList);
}

function displayShowInfo(showList) {

    const mainSection = document.querySelector("main");

    const showsSection = document.createElement("section");
    showsSection.classList.add("shows-section__contents");
    // showsSection.innerText = "hi";
    
    const showLabelBigscreen = document.createElement("div");
    showLabelBigscreen.classList.add("show__label--bigscreen", "normal")
    
    const showLabelBigscreenEach = document.createElement("p");
    showLabelBigscreenEach.classList.add("show__label--bigscreen--each");
    showLabelBigscreenEach.innerText = "DATE";
    const showLabelBigscreenEach2 = document.createElement("p");
    showLabelBigscreenEach2.classList.add("show__label--bigscreen--each");
    showLabelBigscreenEach2.innerText = "VENUE";
    const showLabelBigscreenEach3 = document.createElement("p");
    showLabelBigscreenEach3.classList.add("show__label--bigscreen--each");
    showLabelBigscreenEach3.innerText = "LOCATION";
    
    const show = document.createElement("div");
    show.classList.add("show");
    
    const showDate = document.createElement("div");
    showDate.classList.add("show__date");
    
    const showLabel1 = document.createElement("p");
    showLabel1.classList.add("show__label", "normal");
    showLabel1.innerText = "DATE";
    
    const showInfo1 = document.createElement("p");
    showInfo1.classList.add("show__info", "demi");
    showInfo1.innerText = showList.DATE;


    const showVenue = document.createElement("div");
    showVenue.classList.add("show__venue");

    const showLabel2 = document.createElement("p");
    showLabel2.classList.add("show__label", "normal");
    showLabel2.innerText = "VENUE";
    
    const showInfo2 = document.createElement("p");
    showInfo2.classList.add("show__info", "normal");
    showInfo2.innerText = showList.VENUE;


    const showLocation = document.createElement("div");
    showLocation.classList.add("show__location");

    const showLabel3 = document.createElement("p");
    showLabel3.classList.add("show__label", "normal");
    showLabel3.innerText = "LOCATION";

    const showInfo3 = document.createElement("p");
    showInfo3.classList.add("show__info", "normal");
    showInfo3.innerText = showList.LOCATION;
    
    
    mainSection.appendChild(showsSection);
    showsSection.appendChild(showLabelBigscreen);
    showLabelBigscreen.appendChild(showLabelBigscreenEach);
    showLabelBigscreen.appendChild(showLabelBigscreenEach2);
    showLabelBigscreen.appendChild(showLabelBigscreenEach3);
    showsSection.appendChild(show);
    show.appendChild(showDate);
    showDate.appendChild(showLabel1);
    showDate.appendChild(showInfo1);
    show.appendChild(showVenue);
    showVenue.appendChild(showLabel2);
    showVenue.appendChild(showInfo2);
    show.appendChild(showLocation);
    showLocation.appendChild(showLabel3);
    showLocation.appendChild(showInfo3);




}
