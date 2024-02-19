const MAX_PRIME = 1000000;

// checks if n is prime
function isPrime(n){
	for (let i = 2; i <= Math.sqrt(n); i++){
		if (n % i === 0){
			return false;
		}
	}
	return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

// generate a prime number
function generatePrimes(quota){
	const primes = [];
	while (prime.length < quota){
		const candidate = random(MAX_PRIME);
		if (isPrime(candidate)){
			primes.push(candidate);
		}
	}
	return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventlistener("click", () => {
	const primes = generatePrimes(quota.value);
	output.textcontent = `Finished generating ${quota.value} primes!`;
});
