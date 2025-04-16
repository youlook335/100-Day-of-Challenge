// //   +++++++++++++++++ DOM Manipulation - Query Selectors & Events +++++++++++

// document.getElementsByClassName



// const heading = document.getElementById('mainHeading');
// heading.innerText = "Hello DOM!";
// <h1 id="mainHeading">Original Text</h1>



// const boxes = document.getElementsByClassName('box');
// boxes[0].style.backgroundColor = 'lightblue';
// <div class="box">Box 1</div>
// <div class="box">Box 2</div>




// const paragraphs = document.getElementsByTagName('p');
// paragraphs[1].innerText = "Updated second paragraph!";
// <p>First para</p>
// <p>Second para</p>



// const title = document.querySelector('.title');
// title.style.color = 'red';
// <h2 class="title">This is title</h2>



// const allItems = document.querySelectorAll('.item');
// allItems.forEach(item => {
//     item.style.fontWeight = 'bold';
// });
// <li class="item">Item 1</li>
// <li class="item">Item 2</li>




// 1. getElementById
const heading = document.getElementById('mainHeading');

// 2. querySelector (selects the first .content)
const contentBox = document.querySelector('.content');

// 3. querySelectorAll (all items with class list-item)
const listItems = document.querySelectorAll('.list-item');

// 4. button click event
// document.getElementById('changeBtn').addEventListener('click', () => {
//   heading.style.color = 'Blue';
//   contentBox.innerText = "learn js DOM Text updated using DOM!";
  
//   listItems.forEach(item => {
//     item.style.fontWeight = 'bold';
//     item.style.color = 'green';
//   });
// });
