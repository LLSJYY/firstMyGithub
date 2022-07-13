


const newCartItem = function (e) {
  const section = document.querySelector(".cart-left-section");
  section.innerHTML += `<div class="cart-container">
  <div class="flex gap-15 mt-10">
    <input class="checkbox" name="checkbox" type="checkbox" checked="true">
    <img class="w-144 h-144" src="./assets/images/product.png" alt="${e.getImgName}">
    <span class="cart-name">${e.getImgName}</span>
  </div>
  <div class="flex-col-center justify-end gap-15">
    <img class="cart-trash-svg" src="./assets/svgs/trash.svg" alt="삭제">
    <div class="number-input-container">
      <input type="number" class="number-input" value="1">
      <div>
        <button class="number-input-button">▲</button>
        <button class="number-input-button">▼</button>
      </div>
    </div>
    <span class="cart-price">${e.getImgPrice}</span>
  </div>
  </div>
  <hr class="divide-line-thin mt-10" />`
}

const getStorage = function(){
  const cartSection = document.querySelector(".cart-left-section");
  const getLocalStorage = JSON.parse(localStorage.getItem('newCartItem'));
  getLocalStorage.forEach(el => {
    newCartItem(el)
  });
}

getStorage();