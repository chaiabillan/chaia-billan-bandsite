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

function displayPostInfo(postList) {

    const comment = document.createElement("div");
    comment.classList.add("comment", "comment--posted");

    const commentPicture = document.createElement("div");
    commentPicture.classList.add("comment__picture");

    const commentPictureIcon = document.createElement("span");
    commentPictureIcon.classList.add("comment__picture--icon"); 

    const commentForm = document.createElement("div");
    commentForm.classList.add("comment__form", "posts");

    const postsInfo = document.createElement("div");
    postsInfo.classList.add("posts__info");

    const postInfoName = document.createElement("p");
    postInfoName.classList.add("posts__info--name", "demi");
    postInfoName.innerText = postList.name;

    const postInfoDate = document.createElement("p");
    postInfoDate.classList.add("posts__info--date", "normal");
    postInfoDate.innerText = postList.date;

    const postContent = document.createElement("div");
    postContent.classList.add("posts__content");

    const postContentInside = document.createElement("p");
    postContentInside.classList.add("posts__content--inside", "normal");
    postContentInside.innerText = postList.comment;

    commentsPosted.appendChild(comment);

    comment.appendChild(commentPicture);

    commentPicture.appendChild(commentPictureIcon);

    comment.appendChild(commentForm);

    commentForm.appendChild(postsInfo);

    postsInfo.appendChild(postInfoName);

    postsInfo.appendChild(postInfoDate);

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
} 

addCommentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formErrors.innerText = "";

    const name = event.target.name.value;
    const comment = event.target.comment.value;

    const currentDate = new Date();
    const formattedDate = formatDate(currentDate); 

    if (name === "") {
        formErrors.innerText = "Name can not be empty";
        return;
    }
    if (comment === "") {
        formErrors.innerText = "Comment can not be empty";
        return;
    }

    const newComment = {
        name: name, 
        date: formattedDate, 
        comment: comment
    }

    postsList.unshift(newComment);

    event.target.name.value = ""; 
    event.target.comment.value = ""; 

    showAllComments(postsList);
});