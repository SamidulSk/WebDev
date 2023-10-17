async function fetchDataFromEndpoints() {
    try {
      const [todoResponse, postResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1"),
        fetch("https://jsonplaceholder.typicode.com/posts/1"),
      ]);
  
      // Check if the responses are successful
      if (!todoResponse.ok || !postResponse.ok) {
        throw new Error("Failed to fetch data from one or more endpoints");
      }
  
      // Parse the JSON data from the responses
      const todoData = await todoResponse.json();
      const postData = await postResponse.json();

      const combinedData = {
        todo: todoData,
        post: postData,
      };
  
      // Log the combined data
      console.log(combinedData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  fetchDataFromEndpoints();
  