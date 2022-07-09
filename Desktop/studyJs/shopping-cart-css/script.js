//1.상품목록 카트버튼 이벤트 딜리게이트 걸어서, 쇼핑 카트버튼을 누르면 로컬스트리지 저장, 그후 장바구니탭에서
// 받아옴, 주문상세도 마찬가지
//2. 상품 상세 버튼 주문하기 , 로컬스트리지저장 이후 

/**listItem */
            


const productInfoCart = document.querySelector(".flex.justify-between.w-280.p-5");

productInfoCart.addEventListener("click",function(e){
  if(e.target.tagName =="IMG"){ //선생님 이건 productInfoCart안의 이미지 파일만 선택되는걸까요
      console.log("click to img")
  }


  if(e.target.classList.contains('product-info__name')|| e.target.classList.contains('product-info__price')){
    //debugger
    console.log("상품상세로 이동")
    //상품상세로 이동

  }
})
