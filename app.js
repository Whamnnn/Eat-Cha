const restaurant = [
    {name: "김밥천국", category: "한식, 분식", menu: "김밥, 라면, 제육덮밥 등", url: "http://naver.me/FWJnKzMj" },
    {name: "맥도날드", category: "패스트푸드", menu: "빅맥, 베이컨토마토디럭스 등", url: "http://naver.me/5OncP1sg" },
    {name: "마왕족발", category: "한식", menu: "족발, 보쌈, 막국수 등", url: "http://naver.me/xL1WLubj" },
    {name: "엽기떡볶이", category: "분식", menu: "떡볶이, 튀김 등", url : "http://naver.me/FjocUWKV" },
];

function randomMenu() {
 const randomNumber = Math.floor(Math.random() * restaurant.length)
 const restaurantName = document.getElementById("rest-name");   
 const restaurantCategory = document.getElementById("rest-category");   
 const restaurantMenu = document.getElementById("rest-menu");
 const restaurantUrl = document.getElementById("map-url");

 restaurantName.innerText = restaurant[randomNumber].name;
 restaurantCategory.innerText = restaurant[randomNumber].category;
 restaurantMenu.innerText = restaurant[randomNumber].menu;
 restaurantUrl.href = restaurant[randomNumber].url;

 restaurantUrl.classList.remove("hide");
}

const eatBtn = document.getElementById("eat-btn");

eatBtn.addEventListener("click", randomMenu);