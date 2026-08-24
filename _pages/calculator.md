---
title: "精油濃度計算機"
layout: page
permalink: /calculator/
---

輸入你的容器總容量與想要的濃度，就能直接得到需要滴入的精油滴數，不用登入、不用留資料。

計算採用常見換算標準：**1 ml ≈ 20 滴精油**。實際滴數會因精油黏稠度、滴頭孔徑略有差異，僅供參考，正式調配前建議再次確認。

<div class="calc-box">
  <div class="calc-field">
    <label for="calc-volume">容器總容量（ml）</label>
    <input type="number" id="calc-volume" min="0" step="0.1" placeholder="例如 30">
  </div>
  <div class="calc-field">
    <label for="calc-percent">目標濃度（%）</label>
    <input type="number" id="calc-percent" min="0" step="0.1" placeholder="例如 3">
  </div>
  <button id="calc-btn" type="button">計算滴數</button>
  <div id="calc-result" class="calc-result" style="display:none;"></div>
</div>

<script>
(function(){
  var btn = document.getElementById('calc-btn');
  var resultBox = document.getElementById('calc-result');
  function calc(){
    var volume = parseFloat(document.getElementById('calc-volume').value);
    var percent = parseFloat(document.getElementById('calc-percent').value);
    resultBox.style.display = 'block';
    if (isNaN(volume) || isNaN(percent) || volume <= 0 || percent < 0){
      resultBox.innerHTML = '請輸入有效的容量與濃度數字。';
      return;
    }
    var oilMl = volume * (percent / 100);
    var drops = oilMl * 20;
    resultBox.innerHTML =
      '<div class="calc-result-main">約需 <strong>' + drops.toFixed(1) + ' 滴</strong>精油</div>' +
      '<div class="calc-result-sub">（精油體積約 ' + oilMl.toFixed(2) + ' ml，其餘以基底油／其他基劑補足至 ' + volume + ' ml）</div>';
  }
  btn.addEventListener('click', calc);
  document.getElementById('calc-percent').addEventListener('keydown', function(e){
    if (e.key === 'Enter') calc();
  });
})();
</script>

<style>
.calc-box{
  background:var(--surface);
  border:1px solid var(--linen);
  border-radius:12px;
  padding:28px 24px;
  margin:32px 0;
  max-width:420px;
}
.calc-field{margin-bottom:18px;}
.calc-field label{
  display:block;
  font-size:14px;
  color:var(--bark);
  margin-bottom:6px;
}
.calc-field input{
  width:100%;
  box-sizing:border-box;
  padding:10px 12px;
  font-size:16px;
  border:1px solid var(--chip-border);
  border-radius:8px;
  background:var(--white);
  color:var(--bark);
}
.calc-field input:focus{
  outline:none;
  border-color:var(--indigo);
}
#calc-btn{
  width:100%;
  padding:12px;
  font-size:15px;
  font-weight:700;
  letter-spacing:0.05em;
  color:#fff;
  background:var(--indigo);
  border:none;
  border-radius:8px;
  cursor:pointer;
}
#calc-btn:hover{background:var(--indigo-deep);}
.calc-result{
  margin-top:18px;
  padding-top:18px;
  border-top:1px solid var(--linen);
}
.calc-result-main{
  font-size:18px;
  font-weight:700;
  color:var(--indigo);
  margin-bottom:6px;
}
.calc-result-sub{
  font-size:13px;
  color:var(--mist);
}
</style>

---

如果你還不確定不同使用情境該抓多少濃度、哪些精油刺激度較高、部位跟族群怎麼調整，可以參考[《精油濃度安心使用大全》](/eo-dilution-ebook/)，或直接看[精油安全與使用](/archive/?cat=精油安全與使用)分類裡的文章。
