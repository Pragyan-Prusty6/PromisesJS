const starTumbling = [
    { transform: "rotate(360deg)" },
    { transform: "rotate(0)" },
  ];
  
  const starTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const star1 = document.querySelector("#img1");
  const star2 = document.querySelector("#img2");
  const star3 = document.querySelector("#img3");
  
  
//   star1.animate(starTumbling, starTiming).finished
//   .then(() => {
//     const star2Animation = star2.animate(starTumbling, starTiming).finished;
//     star2Animation.then(() => {
//       star3.animate(starTumbling, starTiming);
//     });
//   });

  star1.animate(starTumbling, starTiming).finished
  .then(() => star2.animate(starTumbling, starTiming).finished)
  .then(() => star3.animate(starTumbling, starTiming).finished)
  .catch(error => console.error(`Error animating Stars: ${error}`));
  
//   async function animateStars() {
//     try {
//       await star1.animate(starTumbling, starTiming).finished;
//       await star2.animate(starTumbling, starTiming).finished;
//       await star3.animate(starTumbling, starTiming).finished;
      
//     }
//     catch (error) {
//       console.error(`Error animating Stars: ${error}`);
//     }
//   }
//   animateStars();
  
//   animateAlices();