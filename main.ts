input.onButtonPressed(Button.A, function () {
    omgang = 0
    for (let index = 0; index < 10; index++) {
        omgang += 1
        if (omgang == 2) {
            basic.showString("to")
        } else if (omgang == 1) {
            basic.showString("en")
        } else if (omgang == 3) {
            basic.showString("tre")
        } else {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
    }
    basic.showString("finito")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    while (terning != 6) {
        terning = randint(1, 6)
        basic.showNumber(terning)
        basic.pause(500)
    }
    basic.showString("godt gået")
})
let terning = 0
let omgang = 0
basic.showLeds(`
    # # # # .
    # . . . .
    # # # . .
    # . . . .
    # # # # .
    `)
basic.forever(function () {
	
})
