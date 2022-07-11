//1.상품목록 카트버튼 이벤트 딜리게이트 걸어서, 쇼핑 카트버튼을 누르면 로컬스트리지 저장, 그후 장바구니탭에서
// 받아옴, 주문상세도 마찬가지
//2. 상품 상세 버튼 주문하기 , 로컬스트리지저장 이후 

/**listItem */



const productInfoCart = document.querySelectorAll(".flex.justify-between.w-280.p-5");
const cartItem = `<div class="cart-container">
<div class="flex gap-15 mt-10">
  <input class="checkbox" name="checkbox" type="checkbox" checked="true">
  <img class="w-144 h-144" src="./assets/images/product.png" alt="PET보틀-정사각(420ml)">
  <span class="cart-name">PET보틀-정사각(420ml)</span>
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
  <span class="cart-price">123,456원</span>
</div>
</div>` // 상품이 달라지면 이런거는 어떻게 해야하나요 센세?

const storage = function (item) {
  localStorage.setItem('cart', JSON.stringify(item));
} 


productInfoCart.forEach(function (el) {
  el.addEventListener("click", function (e) {
    if (e.target.tagName == "IMG") { //선생님 이건 productInfoCart안의 이미지 파일만 선택되는걸까요
      console.log("click to img")
      storage(cartItem); // storage 추가

    }
    if (e.target.classList.contains('product-info__name') || e.target.classList.contains('product-info__price')) {
      const moveHtml = document.querySelectorAll(".global-nav-button")[2];
      //debugger
      console.log("상품상세로 이동")

     
    }
  })

  //상품상세로 이동시키고 싶은데 html 불러오는 방법이 뭔지 찾아봤는데 안나옵니다 선생님 뭐라고 검색해야할까요. 

})

  

