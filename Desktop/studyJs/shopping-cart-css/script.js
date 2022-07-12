





let count = 0;
const storedImg =[]; // 이름이 맘에 안듭니다.
const productInfoCart = document.querySelectorAll(".flex.justify-between.w-280.p-5");
/** CART IMG  */
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
/** LOCAL STORAGE */
const storeLocalStorage = function () {
  localStorage.setItem('newCartItem', JSON.stringify(storedImg));
} 

const getStorage = function () {
  const cartSection = document.querySelector(".cart-left-section");
  const getLocalStorage = JSON.parse(localStorage.getItem('newCartItem'));
  getLocalStorage.forEach(e=>{
    newCartItem(e);
  })
 
productInfoCart.forEach(function (el) {

  const cartSection = document.querySelector(".cart-left-section");

  el.addEventListener("click", function (e) {
    if (e.target.tagName == "IMG") { //선생님 이건 productInfoCart안의 이미지 파일만 선택되는걸까요 <- 해결.
      const getImg = e.target.closest(".flex").parentElement.children[0]
      const getImgName = getImg.getAttribute("alt");
      const getImgPrice = e.target.closest(".flex").querySelector(".product-info__price").innerText;
      count++;
      storedImg.push({
        getImg,
        getImgName,
        getImgPrice,
        count,
      })

      console.log(storedImg)
      storeLocalStorage(); //저장을 3번하고싶은데 안되네요 ..
      console.log(storeLocalStorage())
      
    }
    if (e.target.classList.contains('product-info__name') || e.target.classList.contains('product-info__price')) {
      console.log("상품상세로 이동")
      //redirecting?
      window.location.href = '/Users/leesu/Desktop/studyJs/shopping-cart-css/detail.html'


    }
  })

  //상품상세로 이동시키고 싶은데 html 불러오는 방법이 뭔지 찾아봤는데 안나옵니다 선생님 뭐라고 검색해야할까요.  -> redirecting으로 일단 해결.. 

})


/** HTML INDEX SWITCH */
const clickedCartBtn = document.querySelectorAll(".global-nav-button").forEach(function (el, index) {
  el.addEventListener('click', e => {
    console.log(index)
    switch (index) {
      case 0: //
        break;

      case 1:
        break;

      case 2:
        break;

      case 3:
        getStorage();
        console.log(count)
        //   for(let i =0;i<count;i++){

        // }
        break;

      case 4:
        break;

      case 5:
        break;

      case 6:
        break;
    }

    ; //왜이렇게하면 콘솔에 디버거 걸면 뜨는데 이후에는 사라질까요 ..?


  })

})


