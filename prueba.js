const FetchAllOrders=()=>{
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic dHJhaW5pbmd3YWx0ZXJzYW50aXpvLVlFUjJEWi5VUExOMDQ6YTVmNDA1NzUtOTIyOC00YWEyLWIwMGQtMGIyMGFlZjVjZTQ2");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch("https://c03-usa-east.integrate-test.boomi.com/ws/rest/orders/boomi_user=trainingwaltersantizo-YER2DZ.UPLN04", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}


