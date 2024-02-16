

const api_Key = "e188b0dc-f96c-404c-b07d-02187699d73e";


// // https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=fcd7625b-d264-4d99-a235-8cf6b1fa3b0&comment="hello"
class BandSiteApi {
    constructor(api_Key) {
        this.apiKey = api_Key;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
        this.comment = "comments";
        this.show = "showdates";
    }

    async postComment(commentObject) { //this function gets the comment data from the API
        const newComment = await axios.post( //in this case, were trying to add data to this API. it should hold some data within this function but lets get to that later
            `${this.baseUrl}/${this.comment}?api_key=${this.apiKey}`, // https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=fcd7625b-d264-4d99-a235-8cf6b1fa3b0&comment="hello"
            commentObject //this is what were actually posting...
        );
        // console.log(this.comment);
        return newComment.data; //returns the info that we posted?? why?        
    }
    
    async getComments() {
        const postedComment = await axios.get(
            `${this.baseUrl}/${this.comment}?api_key=${this.apiKey}`
        );
        return postedComment.data;


    } //afterwards, make sure this sorts the array in order 

    async getShows() {
        const show = await axios.get(
            `${this.baseUrl}/${this.show}?api_key=${this.apiKey}`
        );
        return show.data;
    }
}; // still need to make these into try catch statements

const apiClient = new BandSiteApi("api_Key");
// console.log(apiClient);



const comment1 = await apiClient.getComments();

    showAllComments(apiClient.getComments());
    displayPostInfo(comment1);




// const renderComments = async () => { 
//     const comment1 = await apiClient.getComments();
//     console.log(comment1); //this prints the entire array

//     comment1.forEach(comment2 => { //for each object/comment in the array, the display
//                                 // comments function is runnning 
//                                 // this function is trying to change the inner text of 
//                                 // each .posts__info name to the names in the array...
//                                 // but whos to say that itll go in order 
//                                 // the for each is supposed to loop through the 
//                                 //.posts--info class!! bruh
//         displayComments(comment2);
//     });


// };
// renderComments(); //this takes the new instance of the bandisiteapi + getComments function and returns comments to console



// function displayComments (comment2) {
//     // console.log(comment2);
//     const parentNode = document.querySelectorAll(".posts__info--name"); //target box that contains name
//     // const data = await apiClient.getComments(); // data now contains comment info    

//     // parentNode.forEach(comment2 => {
//     //     displayComments(comment2.name);
//     // }) //here im trying to loop thorugh the parentnode 

//     // parentNode.innerText = comment2.name;
//     console.log(comment2.name);
// }
// displayComments();

// // // function displayComments(comment2) {
// // //     if (comment2 && comment2.name) {
// // //         const parentNode = document.querySelector(".posts__info--name");
// // //         if (parentNode) {
// // //             parentNode.innerText = comment2.name;
// // //             console.log("Name appended to DOM:", comment2.name);
// // //         } else {
// // //             console.error("Parent node not found. Unable to append name to DOM.");
// // //         }
// // //     } else {
// // //         console.error("Invalid comment object or name:", comment2);
// // //     }
// // // }

// // function showAllComments(postsList) {
// //     // Clear existing comments
// //     commentsPosted.innerHTML = "";

// //     // Loop through the postsList array
// //     for (let i = 0; i < postsList.length; i++) {
// //         const postList = postsList[i];
    
// //         // Create a new container for the comment
// //         const commentContainer = document.createElement("div");
// //         commentContainer.classList.add("comment-container");

// //         // Display the post information inside the container
// //         displayPostInfo(postList, commentContainer);

// //         // Append the comment container to the main container
// //         commentsPosted.appendChild(commentContainer);
// //     }    
// // }









// // const attachCommentsName = async () => { //here i think youre actually doing the getcomments 
// //     const parentNode = document.querySelectorAll(".posts__info--name");
// //     const data = await apiClient.getComments();
// //     parentNode.innerText = data.name;
// // }
// // attachCommentsName(); //so this changed the first name to undefined but if i change to queryselectorall
// // then it seems like nothing happens.....
// // ya if i delete the name from the array in index-page-js and do query selector all for this 
// // itll be undefined either way 
// //seems like i have to loop over it with foreach 

// //so getcomments is defined within that function up there
// // so think we need to put this all within that.........
// //no actually we need to put it in an INSTANCE of bandapi!


// //inside of getcomments you get an array that includes  
//     // {
//     //     "name": "Victor Pinto",
//     //     "comment": "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//     //     "id": "2aaeedb9-d24c-4b05-a4ef-eccfeb4ff4c1",
//     //     "likes": 0,
//     //     "timestamp": 1613538000000
//     // },
// // soooo..... you can target the name with data.name
// // target the comment with data.comment
// // the reason why you can use data."" is because you did 
//     //const data = await getComments(); i think 

















// //this is what they did in demo to append the dom 
// // const container = document.createElement("div"); // use query selector to target comment__post or maybe comment--posted but prob not

// // users.forEach((user) => { //for each one we will be 
// //   const userElement = document.createElement("p"); //  
// //   userElement.textContent = `Name: ${user.name}, Email: ${user.email}`;
// //   container.appendChild(userElement);
// // });
// // // Append the container to the body of the document
// // document.body.appendChild(container);
