const tripListLink = "https://spreadsheets.google.com/feeds/list/1K1X4rkHQ8kxk9nD2r0hj55DpZzOWXhpuCaZs_zj13kk/od6/public/values?alt=json ";

function loadJSON(link) {
    fetch(tripListLink).then(e=>e.json()).then(data=>data.feed.entry.forEach(displayTrips));
}

const template = document.querySelector("template").content;

function displayTrips(trips) {
  
    const clone = template.cloneNode("true");
    clone.querySelector("img").setAttribute("src",`img/${trips.gsx$picture.$t}`)
    clone.querySelector("#trip").textContent = trips.gsx$trips.$t;
    clone.querySelector("#length").textContent = trips.gsx$length.$t;
    clone.querySelector("#price").textContent = trips.gsx$price.$t;
    clone.querySelector("#shortIntro").textContent = trips.gsx$description.$t;
    
    if (trips.gsx$location.$t === "Oslo") {
        document.querySelector("#oslo").appendChild(clone);
    }
    
}

loadJSON(tripListLink);

