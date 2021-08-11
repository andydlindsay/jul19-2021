// $(document).ready(() => {});
$(() => {

  const fetchPosts = () => {
    $.ajax({
      url: '/api/posts',
      method: 'GET',
      dataType: 'json',
      success: (posts) => {
        console.log(posts);
        createPosts(posts);
      },
      error: (err) => {
        console.err(err);
      }
    });
  };

  fetchPosts();

  // IIFE immediately invoked function expression
  // $('#fetch-posts').on('click', (() => {
  //   fetchPosts('Alice');
  // })());

  // (() => {})()

  // $('#fetch-posts').on('click', fetchPosts);

  // <div class="post">
  //   <h2>Title</h2>
  //   <h2>Body</h2>
  //   <h3>Author (userId)</h3>
  // </div>

  const createPost = (post) => {
    const $title = $('<h2>').text(`Title: ${post.title}`);
    // const $title = $(`<h2 class="post">${post.title}</h2>`);
    const $body = $('<h2>').text(`Body: ${post.body}`);
    const $author = $('<h3>').text(`Author: ${post.userId}`);

    const $post = $('<div>').addClass('post');

    // $post.append($title);
    // $post.append($body);
    // $post.append($author);

    // $post.append($title).append($body).append($author);

    $post.append($title, $body, $author);

    return $post;
  };

  const createPosts = (posts) => {
    const $postsContainer = $('#posts-container');
    $postsContainer.empty();

    for (const post of posts) {
      const $post = createPost(post);
      $postsContainer.prepend($post);
    }
  };

  const $form = $('#new-post-form');
  $form.on('submit', function (event) {
    event.preventDefault();
    
    console.log('the form has submitted');

    const serializedData = $(this).serialize();
    console.log(serializedData);

    $.post('/api/posts', serializedData).then(fetchPosts)
    // $.post('/api/posts', serializedData).then(() => {})
    // $.post('/api/posts', serializedData, (response) => {
    //   console.log(response);
    //   fetchPosts();
    // });
  });

});
