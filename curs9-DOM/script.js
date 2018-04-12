var commentsList= document.getElementById('comments-list');
console.log(commentsList);//null

window.addEventListener("load",onHtmlLoaded);

function onHtmlLoaded(){
  var commentsList= document.getElementById('comments-list');
  console.log(commentsList);   //elementul
  
  console.log("comments items",
             document.getElementsByClassName("comment-intem"));
  
  console.log("comments intems bu tag",
              document.getElementsByTagName("section"));
  
  var commentItems =document.getElementsByTagName("section");
  console.log("first comment item",commentItems[0]);
  console.log("second comment item",commentItems[1]);
  
  console.log("frist paragraph inside section",
             document.querySelector("section>p"));
  console.log("all paragraphs inside section",
             document.querySelectorAll("section>p"));
}
$(window).on("load",onHtmlLoaded);
function onHtmlLoaded(){
console.log("window loaded");
 var list =$ ("#comments-list");
 console.log(list);
} 









