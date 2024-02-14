

const apiKey = "fcd7625b-d264-4d99-a235-8cf6b1fa3b0c";


// // https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=fcd7625b-d264-4d99-a235-8cf6b1fa3b0&comment="hello"
class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
        this.comment = "comments";
        this.show = "showdates";
    }

    async postComment() {
        const newComment = await axios.post(
            `${this.baseUrl}/${this.comment}?apiKey=${this.apiKey}`
        );
        console.log(this.comment);
        return newComment.data;
        // console.log(commentObject.data);
        
    }
    
    async getComments() {
        const postedComment = await axios.get(
            `${this.baseUrl}/${this.comment}?apiKey=${this.apiKey}`
        )
        console.log(this.comment);
        return postedComment.data;
    }

    async getShows() {
        const show = await axios.get(
            `${this.baseUrl}/${this.show}?apiKey=${this.apiKey}`
        )
        return show.data;
    }
}

const apiClient = new BandSiteApi(apiKey);
console.log(apiClient);





// // const getComment = async () => {
// //     const retrieveComment = await apiClient.getComments();
// //     console.log(retrieveComment);
// // }
// (async () => {
//     try {
//         // Retrieve comments
//         const retrieveComment = await apiClient.getComments();
//         console.log("Retrieved Comments:", retrieveComment);

//         // Post a new comment
//         const newCommentObject = {
//             name: "chaia",
//             comment: "hello"
//         };
//         const postedComment = await apiClient.postComment(newCommentObject);
//         console.log("Posted Comment:", postedComment);

//         // Retrieve shows
//         const retrieveShows = await apiClient.getShows();
//         console.log("Retrieved Shows:", retrieveShows);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// });

// console.log(apiClient.postComment());

// const apiKey = "fcd7625b-d264-4d99-a235-8cf6b1fa3b0c";

// class BandSiteApi {
//     constructor(apiKey) {
//         this.apiKey = apiKey;
//         this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
//         this.comment = "comments";
//         this.show = "showdates";
//     }

//     async postComment(commentObject) {
//         try {
//             const newComment = await axios.post(
//                 `${this.baseUrl}/${this.comment}?apiKey=${this.apiKey}`,
//                 commentObject
//             );
//             return newComment.data;
//         } catch (error) {
//             console.error("Error posting comment:", error);
//         }
//     }
    
//     async getComments() {
//         try {
//             const postedComment = await axios.get(
//                 `${this.baseUrl}/${this.comment}?apiKey=${this.apiKey}`
//             );
//             return postedComment.data;
//         } catch (error) {
//             console.error("Error retrieving comments:", error);
//         }
//     }

//     async getShows() {
//         try {
//             const show = await axios.get(
//                 `${this.baseUrl}/${this.show}?apiKey=${this.apiKey}`
//             );
//             return show.data;
//         } catch (error) {
//             console.error("Error retrieving shows:", error);
//         }
//     }
// }

// const apiClient = new BandSiteApi(apiKey);

// // Example usage
// (async () => {
//     try {
//         // Retrieve comments
//         const retrieveComment = await apiClient.getComments();
//         console.log("Retrieved Comments:", retrieveComment);

//         // Post a new comment
//         const newCommentObject = {
//             name: "chaia",
//             comment: "hello"
//         };
//         const postedComment = await apiClient.postComment(newCommentObject);
//         console.log("Posted Comment:", postedComment);

//         // Retrieve shows
//         const retrieveShows = await apiClient.getShows();
//         console.log("Retrieved Shows:", retrieveShows);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// });

