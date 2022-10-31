import endpoint from "./endpoints";

async function postData(url = "", data = {}) {
  const response = await fetch(endpoint + url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

async function getData(url = "") {
  const response = fetch(endpoint + url);
  return response;
}

export { postData, getData };
