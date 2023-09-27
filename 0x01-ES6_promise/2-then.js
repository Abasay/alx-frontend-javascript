export default function handleResponseFromAPI(promise) {
    return promise
	.then(() => {
	    return {
                status : 200,
                body : 'success'
            };
        })
        .catch((err) => new Error())
        .then(() => {
            console.log('Got a response from the API');
	})
}
