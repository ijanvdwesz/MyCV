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
  // lets the current index be the first
  $(document).ready(function () {
    let meImgs = [
      "../Img/me3.jpg",
    "../Img/me1.jpg",
    "../Img/me2.jpg",];
    let currentMeIndex = 0;
    
    // Attaches click event handler to all ".me" images
    $(".me").click(function () {
      // Updates the source of the clicked ".me" image
      $(this).attr("src", meImgs[currentMeIndex]);
      
      // Increment the index for the next image
      currentMeIndex = (currentMeIndex + 1) % meImgs.length;
    });
  });

let aboutIntroDisplay=document.querySelector('.about-intro')

let currentDate = new Date();
        let currentYear = currentDate.getFullYear();

        // Date of birth
        let dob = new Date('1997-01-25');

        // Calculates age
        var age = currentYear - dob.getFullYear();

        // Display age
        aboutIntroDisplay.innerText =`I am a ${age} year old aspiring Web Developer from Thabazimbi, Limpopo, driven by a passion for coding and technology. Currently, I am on a journey of continuous learning, striving to expand my knowledge and skills in Web development & Software Engineering.

        I find immense satisfaction in tackling complex problems and transforming ideas into tangible solutions. Each challenge I encounter fuels my curiosity and drives me to push the boundaries of what I can achieve. I am relentless in my pursuit of mastery, always eager to learn new technologies and methodologies that empower me to create innovative and impactful projects.
        
        As I navigate through the dynamic world of Web development & Software engineering, I am committed to honing my craft and making meaningful contributions to the digital landscape. I thrive in collaborative environments where creativity flourishes, and diverse perspectives converge to shape groundbreaking solutions, I am excited about the endless possibilities that lie ahead in my journey as a Web developer.
      
        Let's connect and explore opportunities to collaborate and create something extraordinary together!
        `
        $(document).ready(function () {
        $(function () {
          $(".submenu").hover(
            //when hovered over
            function () {
              //find the sibling element containing this class and slide it up
              $(this).siblings().find(".submenu-body").slideUp();
              $(this).find(".submenu-body").slideToggle(); //hides&shows by sliding
            }
          );
        });
      });
      let jsExp = document.querySelector('.javascript-experience');
      let jsExperienceText = `
          Experience includes but is not limited to:
          - Variables and Data types.
          - Control Structures- If, Else-if and Else Statements, For and While Loops.
          - Logical Programming - Operators and Switch Statement.
          - Defensive Programming - Error Handling.
          - Data Structures - Arrays and Maps.
          - Programming with Built-in and User-defined Functions.
          - DOM Manipulation.
          - Event Handling.
          - JSON.
          - jQuery.
          -<a href="https://www.hyperiondev.com/portfolio/IV24020013291/">HyperionDev</a>
          Also did a short course at:
          <a href="https://supersimple.dev/">Supersimple.dev</a>
          You can Find examples on my:
          <a href="https://github.com/ijanvdwesz">Github</a>
      `;
      jsExperienceText = jsExperienceText.replace(/\n/g, '<br>');
      
      jsExp.innerHTML = jsExperienceText;
      htmlExp=document.querySelector('.html-experience')
      let htmlExperienceText=`
      Experience includes but is not limited to:
      -HTML Structures
      -Effective use of Elements & Tags
      -Effective Utilisation of classes,IDs alts.
      for css and js purposes
      -Rendering of images 
      -Inserting Links,tables,lists,pargraphs ect
      -Effective linking of external files (favicon,css,javascript and jquery)
      -Adjusting the viewport to fit user screen
      -Dynamically generating HTML with JS to alter display based on user interactions
      *some examples on*
      <a href="https://www.hyperiondev.com/portfolio/IV24020013291/">HyperionDev</a>
      <a href="https://github.com/ijanvdwesz"> Github</a>

      `;
      htmlExperienceText = htmlExperienceText.replace(/\n/g, '<br>');
      
      htmlExp.innerHTML = htmlExperienceText;
      let cssExp=document.querySelector('.css-experience')
      let cssExperienceText=`
      Experience includes but not limited to
      -Design and implementation of a responsive website layout using CSS and SCSS.
      - Utilizing CSS Flexbox and Grid for efficient layout structures.
      - Employing SCSS features such as variables, mixins, and nesting for code organization and maintainability.
      - Developed custom stylesheets for web applications using CSS and SCSS.
      - Implemented CSS animations and transitions to enhance user interactions.
      - Applied CSS best practices for cross-browser compatibility and performance optimization.
      Examples on:
      <a href="https://github.com/ijanvdwesz"> Github</a>
      courses:
      <a href="https://www.hyperiondev.com/portfolio/IV24020013291/">HyperionDev</a>
      aswell as some self taught knowledge mostly from youtube guides
      `;cssExperienceText = cssExperienceText.replace(/\n/g, '<br>');
      
      cssExp.innerHTML = cssExperienceText;
      let pythonExp=document.querySelector('.python-experience')
      let pythonExpText = `
          Experience includes but is not limited to:
          - Basics of Python e.g., easy & pretty print, input & concatenation.
          - Control structures: Nesting (if-else and elif), for loops, while loops.
          - Basic math principles and type casting.
          - Error handling: Debugging bugged code from Replit.
          - Using predetermined & self-defined algorithms to write programs.
          - Basic lists.
          - Importing Libraries.
          - Creating sub-routines with multiple parameters.
          - Formatting.
          - Dynamic 2D lists (tables).
          Examples on :
          <a href="https://replit.com/@IjanVan">Replit</a>
          <a href="https://www.hyperiondev.com/portfolio/IV24020013291/">HyperionDev</a>
      `;
      
      pythonExpText = pythonExpText.replace(/\n/g, '<br>');
      
      pythonExp.innerHTML = pythonExpText;
      // got some tips for the searcbar from the following sites and eventually figured it out.....https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
//https://stackoverflow.com/questions/65112815/how-to-make-a-search-bar-on-javascript-with-for-loop
