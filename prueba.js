const myHeaders = new Headers();
myHeaders.append("Authorization", "Basic Ymx1ZW9yYW5nZWludGVncmF0aW9udGVjaC1BRDlGMFQuOTI0RFFYOmE4NzkzZjNkLTNkMjYtNGU5Ny05NmJlLWY0MmM2ZTg1YTU5Yg==");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://c02-usa-east.integrate-test.boomi.com/ws/rest/logistics/v1/orders/", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));