$(function(){
  // $("kbd").click(()=>{
  //   $(`audio[data-key="${65}"]`).addClass("playing sound");
  //   console.log($(`audio[data-key="${65}"]`).element);
  // });
  $(window).keydown((e) => {
    console.log("keydown!");
    playSound(e);
  });
});

function playSound(e) {
  const audio = $(`audio[data-key="${e.keyCode}"]`)[0];
  const key = $(`div[data-key="${e.keyCode}"]`);
  // if (!audio) return;
  console.log(audio);
  audio.currentTime = 0;
  audio.play();
}
