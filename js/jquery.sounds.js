let timeout = null;

$(function(){
  $(window).keydown((e) => {
    playSound(e);
  });
});

function playSound(e) {
  let audio = $(`audio[data-key="${e.keyCode}"]`)[0];
  // console.log(e);
  let div = $(`div[data-key="${e.keyCode}"]`)[0];
  // console.log(div);
  $(div).addClass('playing');

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    $(div).removeClass('playing');
  }, 100);

  audio.currentTime = 0;
  audio.play();
}

// $(function() {
//   $('div .key').click(function(e) {
//     e.keyCode = $(this).attr('data-key');
//
//     playSound(e);
//   });
// });

$(function() {
  $('div .key').click(function(e) {
    e.keyCode = $(this).attr('data-key');
    // $(this).addClass('playing');
    playSound(e);
  });
});

// $(function() {
//   $('div .key').mouseup(function(e) {
//     e.keyCode = $(this).attr('data-key');
//     $(this).removeClass('playing');
//     // playSound(e);
//   });
// });
