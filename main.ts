input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # . .
        # # # # .
        . # # . .
        # . . # .
        . . . . .
        `)
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # .
        . . # # .
        . # # # #
        . . # # .
        . # . . #
        `)
    music.playMelody("D E F E E F E D ", 120)
})
basic.showLeds(`
    . # # # .
    . # . # .
    # # # # #
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        # # # # #
        . # . # .
        # . . . #
        `)
})
