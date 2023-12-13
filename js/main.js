
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const ball = document.querySelector(".ball");
  const moveButton = document.getElementById("moveButton");

  moveButton.addEventListener("click", function () {
    const containerWidth = container.offsetWidth;
    const ballWidth = ball.offsetWidth;
    console.log("ballWidth", ballWidth)
    console.log("containerWidth" , containerWidth)

    // Topun sağa hərəkət etməsi üçün məsafəni dəyişdirin
    ball.style.transform = `translateX(${(containerWidth - ballWidth)-250}px)`;
    
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const ball = document.querySelector(".ball");
  const prevButton = document.getElementById("prevButton");

  prevButton.addEventListener("click", function () {
    const containerWidth = container.offsetWidth;
    const ballWidth = ball.offsetWidth;
    console.log("ballWidth", ballWidth)
    console.log("containerWidth" , containerWidth)
    // Topun sola hərəkət etməsi üçün məsafəni dəyişdirin
    ball.style.transform = `translateX(${ballWidth - containerWidth }px)`;
    
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const ball = document.querySelector(".ball");
  const downButton = document.getElementById("downButton");

  downButton.addEventListener("click", function () {
    const containerHeight = container.offsetHeight;
    const ballHeight = ball.offsetHeight;
    console.log("ballWidth", ballHeight)
    console.log("containerWidth" , containerHeight)
    // Topun sola hərəkət etməsi üçün məsafəni dəyişdirin
    ball.style.transform = `translateY(${ containerHeight - ballHeight}px)`;
    
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const ball = document.querySelector(".ball");
  const uppButton = document.getElementById("uppButton");

  uppButton.addEventListener("click", function () {
    const containerHeight = container.offsetHeight;
    const ballHeight = ball.offsetHeight;
    const containerWidth = container.offsetWidth;
    const ballWidth = ball.offsetWidth;
    console.log("ballWidth", ballHeight)
    console.log("containerWidth" , containerHeight)
    // Topun sola hərəkət etməsi üçün məsafəni dəyişdirin
    //ball.style.transform = `translateY(${( containerHeight - ballHeight)*1}px)`;
    ball.style.transform = `translate(${-250}px, ${150}px)`;
  });
});



///////button task


const hoverBtn = document.querySelector(".hoverBtn");

hoverBtn.addEventListener("mouseover" , function(){

  this.style.transform = 'scale(2.2)'
});

hoverBtn.addEventListener("mouseout" , function(){

  this.style.transform = 'scale(1)'
});





/////gradient div taski



const colorChangeDiv = document.querySelector(".colorChangeDiv");

colorChangeDiv.addEventListener("click", function() {
  // Rəng dəyişimi üçün 2 saniyəlik animasiya üçün transition effekti əlavə edirik
  this.style.transition = "background-color 2s ease";
  
  // Rəngi dəyişdiririk
  this.style.backgroundColor = getRandomColor(); // getRandomColor funksiyası aşağıda təyin edilmişdir
});

// Təsadüfi rəng alma funksiyası
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}