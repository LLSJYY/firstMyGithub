//1.상품목록 카트버튼 이벤트 딜리게이트 걸어서, 쇼핑 카트버튼을 누르면 로컬스트리지 저장, 그후 장바구니탭에서
// 받아옴, 주문상세도 마찬가지
//2. 상품 상세 버튼 주문하기 , 로컬스트리지저장 이후 

/**listItem */



const productInfoCart = document.querySelectorAll(".flex.justify-between.w-280.p-5");

const storeLocalStorage = function () {
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
</div>
<hr class="divide-line-thin mt-10" />` // 상품이 달라지면 이런거는 어떻게 해야하나요 센세?  newItem 코드번호가 넘긴데 어떻게할까영.. documnet.qs로 잡고싶은데 <hr class="divide-line-thin mt-10" />`안잡힙니다.
  localStorage.setItem('cart', JSON.stringify(cartItem));
} 
const getStorage =function(){
  const newDiv = document.querySelector(".cart-left-section");
    const getLocalStorage = JSON.parse(localStorage.getItem('cart'));
    console.log(getLocalStorage)
    newDiv.innerHTML += `${getLocalStorage}`; 
    
    
    
  }
  
productInfoCart.forEach(function (el) {
  let count = 0 ;
  const cartSection = document.querySelector(".cart-left-section");
 
  el.addEventListener("click", function (e) {
    if (e.target.tagName == "IMG") { //선생님 이건 productInfoCart안의 이미지 파일만 선택되는걸까요 <- 해결.
      console.log("click to img")
      count++;
      storeLocalStorage(); //저장을 3번하고싶은데 안되네요 ..
     
      
    }
    if (e.target.classList.contains('product-info__name') || e.target.classList.contains('product-info__price')) {
      
      console.log("상품상세로 이동")
      //redirecting?
      window.location.href = '/Users/leesu/Desktop/studyJs/shopping-cart-css/orderDetail.html' 
  
     
    }
  })

  //상품상세로 이동시키고 싶은데 html 불러오는 방법이 뭔지 찾아봤는데 안나옵니다 선생님 뭐라고 검색해야할까요.  -> redirecting으로 일단 해결.. 
 
})


/** HTML INDEX SWITCH */
const clickedCartBtn = document.querySelectorAll(".global-nav-button").forEach(function(el,index){
  el.addEventListener('click',e=>{
    console.log(index)
    switch(index){
      case 0: //
      break;
  
      case 1:
      break;
      
      case 2:
      break;
      
      case 3:
      
      getStorage();
      
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
 

