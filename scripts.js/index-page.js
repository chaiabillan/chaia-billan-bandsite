const postsList = [
    {
        name: "Victor Pinto",
        date: "11/02/2023",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Christina Cabrera",
        date: "10/28/2023",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Isaac Tadesse",
        date: "10/20/2023",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]


const joinConvo = document.querySelector(".join-convo");

const commentsPosted = document.createElement("div");
commentsPosted.classList.add("comment__posted");
joinConvo.appendChild(commentsPosted);


function showAllComments(postsList) {

    commentsPosted.innerHTML = "";

    for (let i = 0; i < postsList.length; i++) {
        const postList = postsList[i];
    
        displayPostInfo(postList);
    }    
}

showAllComments(postsList);

//do this afterwards

// for (let i = 0; i < postsList.length; i++) {
//     const postList = postsList[i];

//     displayPostInfo(postList);
// }



function displayPostInfo(postList) {

    //so now i think make a div that will contain all the comments.. 
    // but this shouldnt be looped over, 
    // so make a div called commentsposted 
    // commentsPosted.appendChild(comment)
    //and this should probably be done outside of this function because then all these
    //new comments will be added inside when for loop runs 
    //actually first you have to add it to join convo section 

    //creating a div with class called comment 
    //note that theres already a div with class = comment above this one
    const comment = document.createElement("div");
    comment.classList.add("comment", "comment--posted");

    //creating a div within comment, with the class comment__picture  
    const commentPicture = document.createElement("div");
    commentPicture.classList.add("comment__picture");

    // created a span that is the profile picture within comment__picture
    // class name is comment__picture--icon
    const commentPictureIcon = document.createElement("span");
    commentPictureIcon.classList.add("comment__picture--icon");

    // created a div with classes comment__form and posts, added inside of comment
    // alongside commentpicture
    //note that comment__form is being reused for styling from 1st "comment" section
    // which is where you actually submit a comment 
    const commentForm = document.createElement("div");
    commentForm.classList.add("comment__form", "posts");

    //created a div that is contains name and date, added inside of commentform 
    const postsInfo = document.createElement("div");
    postsInfo.classList.add("posts__info");

    //created p inside of postsinfo with posts__info--name class that has user-name
    const postInfoName = document.createElement("p");
    postInfoName.classList.add("posts__info--name", "demi");
    postInfoName.innerText = postList.name;

    ////created another p inside of postsinfo with posts__info--name class that has 
    //the date of post
    const postInfoDate = document.createElement("p");
    postInfoDate.classList.add("posts__info--date", "normal");
    postInfoDate.innerText = postList.date;

    //div inside of commentform that contains p which contains the actual comment  
    const postContent = document.createElement("div");
    postContent.classList.add("posts__content");

    const postContentInside = document.createElement("p");
    postContentInside.classList.add("posts__content--inside", "normal");
    postContentInside.innerText = postList.comment;

    //the div created on line 34 to the joinconvo sectino 
    commentsPosted.appendChild(comment);

    //adding commentpicture (div cr. on line 38) as a child of comment 
    comment.appendChild(commentPicture);

    // added the span (cr. ln43) for the profile pic as a child inside of commentpicture
    commentPicture.appendChild(commentPictureIcon);

    //comentform added as child to comment 
    comment.appendChild(commentForm);

    //postsinfo added as child to commentform
    commentForm.appendChild(postsInfo);

    //postinfoname added as child to postsinfo 
    postsInfo.appendChild(postInfoName);

    //postinfodate added as another child to postsinfo 
    postsInfo.appendChild(postInfoDate);

    //post content added as yet another child into commentform 
    commentForm.appendChild(postContent);
    postContent.appendChild(postContentInside);
}

const addCommentForm = document.getElementById("add-comment-form");
const formErrors = document.getElementById("add-comment-form-errors");

function formatDate(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
} //set the date

addCommentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // formErrors.innerText = "";

    const name = event.target.name.value;
    // const date = event.target.date.value;
    const comment = event.target.comment.value;

    const currentDate = new Date();
    const formattedDate = formatDate(currentDate); //these two set the date

    //validation add after 

    const newComment = {
        name: name, 
        date: formattedDate, //sets the date
        comment: comment
    }

    postsList.unshift(newComment);

    event.target.name.value = ""; 
    event.target.comment.value = ""; 

    showAllComments(postsList);
});