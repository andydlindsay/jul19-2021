// keypress, keydown, keyup, change

// document.ready
$(document).ready(() => {
  console.log(`hello! there ${username}`);

  // sayHello();

  // const $newLi = $('<li>');
  // const li = document.createElement("li");                 // Create a <li> node
  // const textnode = document.createTextNode("Dragons");         // Create a text node
  // li.appendChild(textnode);                              // Append the text to <li>

  // document.getElementById("main-list").appendChild(li);     // Append <li> to <ul> with id="myList"

  // console.log('query results', document.getElementById("main-list"));


  console.log($ === jQuery);


  // select an element from the DOM
  const $mainList = $('#main-list');
  $mainList.addClass('danger');

  setTimeout(() => {
    $mainList.removeClass('danger');
  }, 3000);

  console.log($mainList);

  // add event handling
  const $h1 = $('h1');
  $h1.on('click', () => {
    console.log('hey the h1 got clicked on');
  });

  // $mainList.on('mousemove', (event) => {
  //   console.log(event);
  // });

  const $newItemInput = $('#input-field');
  const $button = $('#add-new-item');

  $button.on('click', () => {
    // get the value from the input field
    const newVal = $newItemInput.val();
    console.log(newVal);

    // const $newLi = $('<li>');
    // $newLi.text(newVal);

    const $newLi = $('<li>').text(newVal);
    // const $newLi = $(`<li class="error">${newVal}</li>`);

    $mainList.append($newLi);

    // clear the input field
    $newItemInput.val('').focus();
    // $newItemInput.focus();
  });
});

// const $funStuff = $(`
//   <div>
//     <form action="/" method="GET">
//       <label>Hello there</label>
//       <input />
//     </form>
//   </div>
// `);

// $('body').append($funStuff);
