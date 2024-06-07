function minPlanes(array) {
    const n = array.length;
    if (n === 0 || array[0] === 0) return -1; // If starting airport has 0 fuel, return -1

    let planesNeeded = 0;
    let maxReachable = 0;
    let nextMaxReachable = 0;

    for (let i = 0; i < n - 1; i++) {
        // Update the farthest airport we can reach
        nextMaxReachable = Math.max(nextMaxReachable, i + array[i]);

        // If we have reached the current max reachable point, we need to hire another plane
        if (i == maxReachable) {
            if (i == nextMaxReachable) return -1; // If we can't move further, return -1
            maxReachable = nextMaxReachable;
            planesNeeded++;
        }
    }

    return planesNeeded;
}

// Test cases
console.log(minPlanes([2,1,2,3,1])); // Output: 2
console.log(minPlanes([1,6,3,4,5,0,0,0,6])); // Output: 3
console.log(minPlanes([1, 1, 0, 1, 1])); // Output: -1
