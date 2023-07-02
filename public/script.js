const getBtn = document.getElementById("get");
const postBtn = document.getElementById("post");
const input = document.getElementById("input");

const baseURL = "https://testbackend-jhqa.onrender.com/";

getBtn.addEventListener("click", getInfo);
postBtn.addEventListener("click", postInfo);

async function getInfo(e) {
  e.preventDefault();
  const res = await fetch(baseURL, {
    method: "GET",
  });
  console.log(res);
  const data = await res.json();
  input.value = data.info;
}
async function postInfo(e) {
  e.preventDefault();
  if (input.value == "") {
    return;
  }
  const res = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parcel: input.value,
    }),
  });
}
