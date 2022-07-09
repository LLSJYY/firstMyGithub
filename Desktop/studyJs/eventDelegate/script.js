let table = document.getElementById('bagua-table');

    let selectedTd;

    table.onclick = function(event) {
      let target = event.target;
        console.log(target)
      while (target != this) {
        if (target.tagName == 'TD') {
          highlight(target);
          return;
        }
        target = target.parentNode;
      }
    }

    function highlight(node) {
      if (selectedTd) {
        selectedTd.classList.remove('highlight');
      }
      selectedTd = node;
      selectedTd.classList.add('highlight');
    }
 /*
    table.onclick = function(event) {
        let target = event.target; // 클릭이 어디서 발생했을까요?
      
        if (target.tagName != 'TD') return; // TD에서 발생한 게 아니라면 아무 작업도 하지 않습니다,
      
        highlight(target); // 강조 함
      };
      
      function highlight(td) {
        if (selectedTd) { // 이미 강조되어있는 칸이 있다면 원상태로 바꿔줌
          selectedTd.classList.remove('highlight');
        }
        selectedTd = td;
        selectedTd.classList.add('highlight'); // 새로운 td를 강조 함
      }
      */