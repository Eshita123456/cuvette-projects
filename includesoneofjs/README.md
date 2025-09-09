# Array.prototype.includesOneof

This utility adds a method `includesOneof` to the JavaScript Array prototype.  
It checks if the array includes **one or more elements** from a given array using **deep equality** comparison.

### Features:
- Deep comparison of primitives, objects, and arrays
- Works with numbers, strings, objects, nested arrays
- Returns false for empty input array
- Handles edge cases like different key orders or extra keys

### How to Run:

```bash
node test.js
```

### Example:

```js
const arr = [1, 2, 3, 4];
arr.includesOneof([2, 5]); // true
arr.includesOneof([]);     // false
```
