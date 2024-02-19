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

