// 1. Create a Promise that resolves after 2 seconds
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Promise resolved after 2 seconds!");
  }, 2000);
});

// 2. Handle with .then()
myPromise.then((message) => {
  console.log(message);
});

// 3. Async/Await to fetch API data
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("📦 API Data:", data);
  } catch (error) {
    console.error("❌ Error fetching data:", error);
  }
}

fetchData();
