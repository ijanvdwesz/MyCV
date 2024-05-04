//gets searchbar into my js then adds an event listener and prevents default from loading
document.querySelector(".searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  //saves the input of the searbar into variable in lowercase
  let searchedFor = document.querySelector(".searchInput").value.toLowerCase();
  //brings all the elements i tagged with class=searchable to my js and saves them in a variable
  let searchingTrhu = document.querySelectorAll(".searchable");
  //then loops through each element using .forEach
  searchingTrhu.forEach((element) => {
    let pageContent = element.innerText.toLowerCase();
    //so if its there it gets displayed
    if (pageContent.includes(searchedFor)) {
      element.style.display = "block";
    } else {
      //if its not... well nothing gets displayed
      element.style.display = "none";
    }
  });
});

let aboutIntroDisplay=document.querySelector('.about-intro')
// got some tips for the searcbar from the following sites and eventually figured it out.....https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
//https://stackoverflow.com/questions/65112815/how-to-make-a-search-bar-on-javascript-with-for-loop

let currentDate = new Date();
        let currentYear = currentDate.getFullYear();

        // Date of birth
        let dob = new Date('1997-01-25');

        // Calculates age
        var age = currentYear - dob.getFullYear();

        // Display age
        aboutIntroDisplay.innerText =`Hi im Ijan , I am a ${age} year old aspiring Web-developer from Thabazimbi Limpopo.
        
        Currently im doing my best to learn as much as humanly possible about
        coding starting with what i deem most usefull
        
        I am motivated by solving problems and creating something that was not
        but Is now,I can say that I like a challenge`
