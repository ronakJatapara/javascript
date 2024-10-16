

document.querySelector("#btn1").addEventListener("click",()=>{
  
   let search=document.querySelector("#movie").value;

   fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1c4d76c8&s=${search}`)
   .then((res)=>res.json())
   .then((res)=>{
    document.querySelector(".box").innerHTML=view(res.Search)
    
   })
   .catch((Err)=>{
    console.log(Err);
    
   })

})


function view(arr)
{
    return`
    <img src="${arr[0].Poster}">
    `;
}


// document.querySelector("#btn1").addEventListener("click", () => {
  
//     let search = document.querySelector("#movie").value;

//     fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1c4d76c8&s=${search}`)
//     .then((res) => res.json())
//     .then((res) => {
//         // Pass the res.Search array to the view function
//         document.querySelector(".box").innerHTML = view(res.Search);
//     })
//     .catch((Err) => {
//         console.log(Err);
//     });

// });


// function view(arr) {
//     // Check if arr is not undefined (in case no search results are returned)
//     // if (arr && arr.length > 0) {
//         return `
//             <img src="${arr[0].Poster}" alt="Movie Poster">
//         `;
//     // } else {
//     //     return "No results found.";
//     // }
// }
