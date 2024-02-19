

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
        // console.log(commentObject);
        const newComment = await axios.post( //in this case, were trying to add data to this API. it should hold some data within this function but lets get to that later
            `${this.baseUrl}/${this.comment}?api_key=${this.apiKey}`, // https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=fcd7625b-d264-4d99-a235-8cf6b1fa3b0&comment="hello"
            commentObject //this is what were actually posting...
        );
        // console.log(newComment);
        return newComment.data; //returns the info that we posted?? why?        
    }
    
    async getComments() {
        const postedComment = await axios.get(
            `${this.baseUrl}/${this.comment}?api_key=${this.apiKey}`
        );
        // postedComment.data sort function 

        

        const sortedComments = postedComment.data.sort((a, b) => {
            const dateA = new Date(a.timestamp); // Convert date strings to Date objects
            const dateB = new Date(b.timestamp);
            return dateB - dateA; // Sort in descending order (most recent first)
        });
        
        const formattedComments = sortedComments.map(comment => ({
            ...comment,
            formattedDate: this.formatDate(comment.timestamp)
            
        }));
        console.log(formattedComments);
        // return this.formatDate
        return formattedComments;

        // return postedComment.data;


    } //afterwards, make sure this sorts the array in order 

    formatDate(timestamp) {
        const date = new Date(timestamp);
        const month = date.getMonth() + 1; // Month is zero-based, so add 1
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }

    async getShows() {
        const show = await axios.get(
            `${this.baseUrl}/${this.show}?api_key=${this.apiKey}`
        );
        return show.data;
    }
}; // still need to make these into try catch statements

const apiClient = new BandSiteApi(api_Key);










