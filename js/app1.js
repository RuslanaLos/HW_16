function cacheFunction(sumFunction, maxCacheLength) {
    return function (...args) {
        const key = args.join(',');
        const cachedResult = cache.find(item => item.key === key);

        if (cachedResult) {
            return cachedResult.result;
        }
        if (cache.length >= maxCacheLength) {
            cache.shift();
        }

        const result = sumFunction(...args);
        cache.push({key, result});
        return result;
    };
}

const sumFunction = (a, b) => {
    return a + b;
};

const cache = [];
const maxCacheLength = 10;
const cachedSum = cacheFunction(sumFunction, maxCacheLength);

cachedSum(1, 2);
cachedSum(2, 2);
cachedSum(3, 2);
cachedSum(4, 2);
cachedSum(5, 2);
cachedSum(6, 2);
cachedSum(7, 2);
cachedSum(8, 2);
cachedSum(9, 2);
cachedSum(10, 2);
cachedSum(11, 2);

console.log(cache);

