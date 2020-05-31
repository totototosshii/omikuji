'use strict'

  /***** index.html/result.html共通 *****/
  // <img src="" alt="おみくじのイラスト" id="img-wrapper">の定義
  let img_wrapper = document.getElementById('img-wrapper')
  // <div id="overlay" class="hidden">の定義
  let overlay = document.getElementById('overlay');
  //<id="fade-in">を定義
  let img = document.getElementById('fade-in');


  /***** index.html *****/
  // <button id="draw-btn" type=“button”>の定義
  let draw_btn = document.getElementById('draw-btn');


  /***** result.html *****/
  //<span id="result-txt">を定義
  let result_txt = document.getElementById('result-txt');
  //<button id="once-again-draw_btn">を定義
  let once_again_draw_btn = document.getElementById('once-again-draw_btn');

  // 結果を出力する関数
  function result() {
    //変数nに1~100までのランダムの数値を代入
    let n = 1 + Math.floor(Math.random() * 100);// 1~100%
    // if文で確率を指定
    if (n <= 20) {
      result_txt.textContent = '大吉';// 20%
      img.innerHTML = '<img src="img/daikichi.png" style="height:280px;"/>';
    } else if (n >= 21 && n <= 36) {
      result_txt.textContent = '中吉';// 16%
      img.innerHTML = '<img src="img/chukichi.png" style="height:280px;"/>';
    } else if (n >= 37 && n <= 53) {
      result_txt.textContent = '小吉';// 17%
      img.innerHTML = '<img src="img/shokichi.png" style="height:280px;"/>';
    } else if (n >= 54 && n <= 72) {
      result_txt.textContent = '吉';// 19%
      img.innerHTML = '<img src="img/kichi.png" style="height:280px;"/>';
    } else if (n >= 73 && n <= 93) {
      result_txt.textContent = '末吉';//21%
      img.innerHTML = '<img src="img/suekichi.png" style="height:280px;"/>';
    } else if (n >= 94 && n <= 100) {
      result_txt.textContent = '凶';//7%
      img.innerHTML = '<img src="img/kyo.png" style="height:280px;"/>';
    }

    // ラッキースポット
    let spot = document.getElementById('result-block_spot');
    let spots = new Array('海', '映画館', '思い出の場所', 'カフェ', 'カラオケ', 'ゲーセン', '書店', '自宅', '神社仏閣', '近場のパワスポ', '山', 'よく趣味で行く所');
    let randomspots = Math.floor(Math.random() * spots.length);
    spot.innerHTML = spots[randomspots]

    //ラッキーカラー
    let color = document.getElementById('result-block_color');
    let colors = new Array('赤', '青', '黄', '黒', '白', '橙', '茶', 'ピンク', '緑', '紫');
    let randomcolors = Math.floor(Math.random() * colors.length);
    color.innerHTML = colors[randomcolors]

  };
