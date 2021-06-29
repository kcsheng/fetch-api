const getTextBtn = $("#get-text");
const getUserBtn = $("#get-users");
const getApiBtn = $("#get-api");
const container1 = $("#container1");
const container2 = $("#container2");
const container3 = $("#container3");
getTextBtn.on("click", getText);
getUserBtn.on("click", getUsers);
getApiBtn.on("click", getApi);

function getText() {
  fetch("file.txt")
    .then((res) => res.text())
    .then((data) => container1.text(data))
    .catch((err) => console.log(err));
}

function getUsers() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Users</h2>";
      data.forEach((user) => {
        output += `
          <ul>
            <li> ID: ${user.id} </li>
            <li> Name: ${user.name} </li>
            <li> Email: ${user.email} </li>
          </ul>
        `;
      });
      container2.html(output);
    });
}

function getApi() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Posts</h2>";
      data.forEach((post) => {
        output += `
          <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
      });
      container3.html(output);
    });
}
