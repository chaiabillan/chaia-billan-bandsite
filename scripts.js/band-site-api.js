const api_Key = "e188b0dc-f96c-404c-b07d-02187699d73e";

class BandSiteApi {
    constructor(api_Key) {
        this.apiKey = api_Key;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
        this.comment = "comments";
        this.show = "showdates";
    }

    async postComment(commentObject) { 
        try {
            const newComment = await axios.post( 
                `${this.baseUrl}/${this.comment}?api_key=${this.apiKey}`,
                commentObject 
            );
            return newComment.data;    
        } catch(errors) {
            console.error(errors)
        }
    }
    
    async getComments() {
        try {
            const postedComment = await axios.get(
                `${this.baseUrl}/${this.comment}?api_key=${this.apiKey}`
            );
    
            const sortedComments = postedComment.data.sort((a, b) => {
                const dateA = new Date(a.timestamp); 
                const dateB = new Date(b.timestamp);
                return dateB - dateA; 
            });
            
            const formattedComments = sortedComments.map(comment => ({
                ...comment,
                formattedDate: this.formatDate(comment.timestamp)
                
            }));
            console.log(formattedComments);
            return formattedComments;
        } catch (errors) {
            console.error(errors);
        }

    }

    formatDate(timestamp) {
        const date = new Date(timestamp);
        const month = date.getMonth() + 1; 
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }

    async getShows() {
        try {
            const show = await axios.get(
                `${this.baseUrl}/${this.show}?api_key=${this.apiKey}`
            );
            return show.data;
        } catch(errors) {
            console.log(errors);
        }
        
    }
}; 

const apiClient = new BandSiteApi(api_Key);