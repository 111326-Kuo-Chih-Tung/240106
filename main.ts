input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    ＱＷＱ = []
    for (let index = 0; index < 25; index++) {
        ＱＷＱ.push(0)
    }
    ＯＵＯ = 0
    while (ＯＵＯ < Ｗ) {
        ＴＡＴ = randint(0, 24)
        if (ＱＷＱ[ＴＡＴ] == 0) {
            ＱＷＱ[ＴＡＴ] = 1
            ＯＵＯ += 1
            燈(ＴＡＴ + 1)
        }
    }
})
function 燈 (Ｌ: number) {
    if (Ｌ % 5 == 0) {
        led.toggle(4, Ｌ / 5 - 1)
    } else {
        led.toggle(Ｌ % 5 - 1, Math.floor(Ｌ / 5))
    }
}
input.onButtonPressed(Button.B, function () {
    Ｗ += 1
    if (Ｗ > 25) {
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(831, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else {
        basic.showNumber(Ｗ)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let ＱＷＱ: number[] = []
let ＴＡＴ = 0
let ＯＵＯ = 0
let Ｗ = 0
basic.clearScreen()
Ｗ = 0
ＯＵＯ = 0
ＴＡＴ = 0
basic.forever(function () {
	
})
