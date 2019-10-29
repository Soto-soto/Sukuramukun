//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

//= require jquery3
//= require popper
//= require bootstrap-sprockets

// // select要素の取得
// var selectMinute = document.querySelector("#minute");
// var selectSecond = document.querySelector("#second");

// //option要素の取得（配列）
// var optionMinutes = document.querySelectorAll("#minute option");
// var optionSeconds = document.querySelectorAll("#second option");

// var indexMinute =  selectMinute.selectedIndex;
// var minuteData = optionMinutes[ indexMinute ].innerHTML;

// var indexSecond =  selectSecond.selectedIndex;
// var secondData = optionSeconds[ indexSecond ].innerHTML;

// var minuteData = 0;
// var secondData = 0;

// //select要素のchangeイベントの登録
// selectMinute.addEventListener('change', function(){

//         //選択されたoption番号を取得
//         indexMinute =  this.selectedIndex;
//         minuteData = optionMinutes[ indexMinute ].innerHTML;

// });

// selectSecond.addEventListener('change', function(){

//         //選択されたoption番号を取得
//         indexSecond =  this.selectedIndex;
//         secondData = optionSeconds[ indexSecond ].innerHTML;

// });

// var timer1; //タイマーを格納する変数（タイマーID）の宣言


// //カウントダウン関数を1000ミリ秒毎に呼び出す関数
// function cntStart()
// {
//     document.timer.elements[0].disabled=true;
//     document.timer.elements[1].disabled=true;
//     document.timer.elements[2].disabled=true;
//     document.timer.elements[4].disabled=true;
//     timer1=setInterval("countDown()",1000);
// }

// //タイマー停止関数
// function cntStop()
// {
//     document.timer.elements[2].disabled=false;
//     document.timer.elements[4].disabled=false;
//     clearInterval(timer1);
// }

// //カウントダウン関数
// function countDown()
// {
//     var min=minuteData;
//     var sec=secondData;

//     if( (min==0) && (sec==0) )
//     {
//         alert("時刻を設定してください！");
//         reSet();
//     }
//     else
//     {
//         if (min=="") min=0;
//         min=parseInt(min);

//         if (sec=="") sec=0;
//         sec=parseInt(sec);

//         tmWrite(min*60+sec-1);
//     }
// }

// //残り時間を書き出す関数
// function tmWrite(int)
// {
//     int=parseInt(int);

//     if (int<=0)
//     {
//         reSet();
//         alert("時間です！");
//     }
//     else
//     {
//         //残り分数はintを60で割って切り捨てる
//         minuteData=Math.floor(int/60);
//         //残り秒数はintを60で割った余り
//         secondData=int % 60;

//         if (minuteData < 10 && secondData < 10) {
//             document.getElementById('timeDisplay').innerHTML = "0" + String(minuteData) + ":" + "0" + String(secondData);
//         }else if (minuteData < 10) {
//             document.getElementById('timeDisplay').innerHTML = "0" + String(minuteData) + ":" + String(secondData);
//         }else if (secondData < 10) {
//             document.getElementById('timeDisplay').innerHTML = String(minuteData) + ":" + "0" + String(secondData);
//         }else{
//             document.getElementById('timeDisplay').innerHTML = String(minuteData) + ":" + String(secondData);
//         }
//     }
// }

// //フォームを初期状態に戻す（リセット）関数
// function reSet()
// {
//     document.timer.elements[0].disabled=false;
//     document.timer.elements[1].disabled=false;
//     document.timer.elements[2].disabled=false;
//     document.timer.elements[4].disabled=false;
//     document.getElementById('timeDisplay').innerHTML = "00:00" ;
//     indexMinute =  selectMinute.selectedIndex;
//     minuteData = optionMinutes[ indexMinute ].innerHTML;
//     indexSecond =  selectSecond.selectedIndex;
//     secondData = optionSeconds[ indexSecond ].innerHTML;
//     clearInterval(timer1);
// }