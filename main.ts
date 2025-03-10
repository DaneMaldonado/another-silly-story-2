info.onCountdownEnd(function () {
    game.gameOver(true)
})
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.LoopingInBackground)
info.startCountdown(20)
let name = game.askForString("Give a name")
let place = game.askForString("Give a place")
let output = "" + name + " is exploring  and stumbles across a " + place + " in order to reach his final destination. If the explorer hits a wall during his time in the maze while on his adventure, he is eliminated. The explorer must beat the maze in order to reach civilization. There may be traps set in the maze in which the explorer needs to surpass."
game.splash(output)
