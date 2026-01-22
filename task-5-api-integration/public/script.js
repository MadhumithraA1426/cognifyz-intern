function addUser() {
  const input = document.getElementById("usernameInput");
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter a name");
    return;
  }

  const li = document.createElement("li");
  li.className = "user-item";

  li.innerHTML = `
    <span>${name}</span>
    <button class="btn-delete" onclick="this.parentElement.remove()">✕</button>
  `;

  document.getElementById("userList").appendChild(li);
  input.value = "";
}
