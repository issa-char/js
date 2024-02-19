/*
const fetchP = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

console.log(fetchP);
fetchP.then((response) => {
	const jsonP = response.json();
	jsonP.then((data) => {
		console.log(data);
	})
	console.log(`Receive response: ${response.status}`);
});
console.log("started request...");
*/

// an elegant implementation of the above, just to avoid the callback hell

/*
const fetch_p = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

console.log(fetch_p);

fetch_p
	.then((response) => response.json())
	.then((data) => {
	console.log(data);
});

console.log("Started request...");
*/

// catching errors

const fetchP = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.jso");

fetchP
	.then((response) => {
		if (!response.ok){
			throw new Error(`HTTP error: ${response.status}`);
		}
		return response.json();
	})
	.then((data) => {
		console.log(data[0].name);
	})
	.catch((error) => {
		console.log(`Could not get products: ${error}`);
	});

