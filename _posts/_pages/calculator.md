---
title: "精油濃度計算機"
layout: page
permalink: /calculator/
---

請輸入調配的成品總容量，與你想調配的精油濃度，就能即時得到本次需要加入的精油總滴數，不用登入、不用留資料。

<div class="calc-box">
  <div class="calc-field">
    <label for="calc-volume">調配成品總容量（mL）</label>
    <input type="number" id="calc-volume" min="0" step="0.1" placeholder="例如：10">
  </div>

  <div class="calc-field">
    <label for="calc-dpm">1 mL 以多少滴計算，預設為 20，可手動修改</label>
    <input type="number" id="calc-dpm" min="1" step="0.1" value="20">
    <p class="calc-hint">20 滴為最常見數字，法系芳療書中 1 mL 可能會是 30 滴或 40 滴，請留意書籍說明。每家廠商的精油滴孔大小可能不一樣，可以再跟店家確認。</p>
  </div>

  <div class="calc-field">
    <label for="calc-percent">目標精油濃度（%）</label>
    <input type="number" id="calc-percent" min="0" step="0.1" placeholder="例如：3">
  </div>

  <div id="calc-result" class="calc-result-box">
    <div class="calc-result-label">需要的精油總滴數</div>
    <div id="calc-result-value" class="calc-result-value">請先輸入容量與濃度</div>
  </div>
  <p class="calc-hint">因容量、滴數、濃度不同，實際計算結果可能非整數。此顯示數字為小數點後一位四捨五入之結果。</p>
</div>

<script>
(function(){
  var volumeInput = document.getElementById('calc-volume');
  var dpmInput = document.getElementById('calc-dpm');
  var percentInput = document.getElementById('calc-percent');
  var resultValue = document.getElementById('calc-result-value');

  function calc(){
    var volume = parseFloat(volumeInput.value);
    var dpm = parseFloat(dpmInput.value);
    var percent = parseFloat(percentInput.value);

    if (isNaN(volume) || isNaN(dpm) || isNaN(percent) || volume <= 0 || dpm <= 0 || percent < 0){
      resultValue.textContent = '請先輸入容量與濃度';
      return;
    }
    var oilMl = volume * (percent / 100);
    var drops = oilMl * dpm;
    resultValue.textContent = drops.toFixed(1) + ' 滴';
  }

  [volumeInput, dpmInput, percentInput].forEach(function(el){
    el.addEventListener('input', calc);
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
  max-width:460px;
}
.calc-field{margin-bottom:20px;}
.calc-field label{
  display:block;
  font-size:14px;
  font-weight:700;
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
.calc-hint{
  font-size:12.5px;
  color:var(--mist);
  line-height:1.7;
  margin:8px 0 0;
}
.calc-result-box{
  margin-top:24px;
  padding:18px;
  text-align:center;
  background:var(--white);
  border:1px dashed var(--chip-border);
  border-radius:10px;
}
.calc-result-label{
  font-size:13px;
  color:var(--mist);
  margin-bottom:6px;
}
.calc-result-value{
  font-size:24px;
  font-weight:700;
  color:var(--indigo);
}
</style>

## 建議濃度

- 臉部肌膚：1~3%
- 身體四肢：1~5%
- 第一次使用的精油、配方，或刺激性精油，從 1% 以下的低濃度用起
{: .list-tight}

如果你還不確定不同使用情境該抓多少濃度、哪些精油刺激度較高、部位跟族群怎麼調整，可以參考[《精油濃度安心使用大全》](/eo-dilution-ebook/)，或直接看[精油安全與使用](/archive/?cat=精油安全與使用)分類裡的文章。
