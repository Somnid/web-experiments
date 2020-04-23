const getPromise = () => 
	new Promise((res, rej) => {
		res("world!");
	});

let val;

(async () => {
	val = await getPromise();
})();

module.exports = val;