$(function(){
  // $("kbd").click(()=>{
  //   $(`audio[data-key="${65}"]`).addClass("playing sound");
  //   console.log($(`audio[data-key="${65}"]`).element);
  // });
  $(window).keydown((e) => {
    console.log(e);
    playSound(e);
  });
});

function playSound(e) {
  // console.log(e);
  let audio = $(`audio[data-key="${e.keyCode}"]`)[0];
  // if (e.type !== "keydown"){
  //   audio = $(`audio[data-key="${e}"]`)[0];
  // }
  // console.log(audio);
  // const key = $(`div[data-key="${e.keyCode}"]`);
  // if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

$(function() {
  $('div .key').click(function(e) {
    e.keyCode = $(this).attr('data-key');
    console.log(e);
    // console.log($(this).attr('data-key'));
    playSound(e);
    // playSound($('div .key').attr('data-key'));
    // console.log($('div .key').attr('data-key'));

  });
});
