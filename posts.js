const loadPost = ()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
        // console.log(data);
        displayPosts(data);
    });
};


// {
//     "userId": 10,
//     "id": 96,
//     "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
//     "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
// }


const displayPosts = (posts)=>{
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    posts.forEach((post)=>{
        const postCard = document.createElement('div');
        postCard.innerHTML =`
          <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `
        postContainer.append(postCard);
    });
};
loadPost();








































// const displayPosts = (posts)=>{

//     // 1. get the container
//     const postContainer = document.getElementById('post-container');
//     postContainer.innerHTML = '';
//     // console.log(postContainer);

//     // for loop

//     for (let i = 0; i < posts.length; i++){
//         console.log(posts[i]);
//     }

//     // for of loop

//     for (const post of posts){
//         console.log(post);
//     }

//     // forEach loop

//     posts.forEach((post)=>{
//         console.log(post.title);
//         //2. create HTML element
//         const li = document.createElement('li');
//         li.innerText = post.title;
//         console.log(li);

//         //3. add li into container
//         postContainer.appendChild(li);
//     })

// }