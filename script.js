

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokebtn');

// const generateJokes = () => {

//     const setHeader = {
//         Headers: {
//             Accept : "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com' , setHeader)
//     .then((res) =>  res.json())
//     .then((data) => {
//         jokes.innerHTML = data.joke;
//     }).catch((error) => {
//         console.log(error);
//     })
// }

// const generateJokes = async () => {

//    try {
//     const setHeader = {
//         Headers: {
//             Accept : "application/json"
//         }
//     }

//     const res = await fetch('https://icanhazdadjoke.com/slack', setHeader)
//     const data = await res.json();
//     console.log(data);
//     jokes.innerHTML = data.attachments.fallback;
//    }catch(err) {
//     console.log(`the error is ${err}`);
//    }

// }

// jokeBtn.addEventListener('click', generateJokes);
// generateJokes();

const generateJokes = async () => {
    try {
       const setHeader = {
          headers: {
             Accept: "application/json"
          }
       };
 
       const res = await fetch('https://icanhazdadjoke.com/slack', setHeader);
       const data = await res.json();
       console.log(data);
       jokes.innerHTML = data.attachments[0].fallback; 
    } catch (err) {
       console.log(`the error is ${err}`);
    }
 };
 
 const jokeBtn1 = document.getElementById('joke'); 
 const jokes2 = document.getElementById('jokebtn'); 
 
 jokeBtn.addEventListener('click', generateJokes);
 generateJokes();
 