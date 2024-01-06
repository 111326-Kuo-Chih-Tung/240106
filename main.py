def on_button_pressed_a():
    global ＱＷＱ, ＯＵＯ, ＴＡＴ
    basic.clear_screen()
    ＱＷＱ = []
    for index in range(25):
        ＱＷＱ.append(0)
    ＯＵＯ = 0
    while ＯＵＯ < Ｗ:
        ＴＡＴ = randint(0, 24)
        if ＱＷＱ[ＴＡＴ] == 0:
            ＱＷＱ[ＴＡＴ] = 1
            ＯＵＯ += 1
            燈(ＴＡＴ + 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def 燈(Ｌ: number):
    if Ｌ % 5 == 0:
        led.toggle(4, Ｌ / 5 - 1)
    else:
        led.toggle(Ｌ % 5 - 1, Math.floor(Ｌ / 5))

def on_button_pressed_b():
    global Ｗ
    Ｗ += 1
    if Ｗ > 25:
        basic.show_string("error")
        music.play(music.create_sound_expression(WaveShape.SINE,
                1879,
                1879,
                255,
                0,
                500,
                SoundExpressionEffect.NONE,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.UNTIL_DONE)
    else:
        basic.show_number(Ｗ)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
input.on_button_pressed(Button.B, on_button_pressed_b)

ＴＡＴ = 0
ＯＵＯ = 0
ＱＷＱ: List[number] = []
Ｗ = 0
basic.clear_screen()
Ｗ = 0

def on_forever():
    pass
basic.forever(on_forever)
