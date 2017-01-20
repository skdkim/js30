$(function(){
  $(window).keydown((e) => {
    playSound(e);
  });
});

function playSound(e) {
  let audio = $(`audio[data-key="${e.keyCode}"]`)[0];

  audio.currentTime = 0;
  audio.play();
}

$(function() {
  $('div .key').click(function(e) {
    e.keyCode = $(this).attr('data-key');

    playSound(e);
  });
});
