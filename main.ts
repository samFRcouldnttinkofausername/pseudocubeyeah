input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        basic.showString("1",5)
basic.showString("2",5)
basic.showString("3",5)
basic.showString("4",5)
basic.showString("5", 5)
basic.showString("6", 5)
basic.showString("7", 5)
basic.showString("8", 5)
basic.showString("9", 5)
basic.showString("10", 5)
    }
    letter = randint(1, 10)
    if (letter == 1) {
        basic.showNumber(1)
    } else if (letter) {
        basic.showNumber(2)
    } else if (letter) {
        basic.showNumber(3)
    } else if (letter) {
        basic.showNumber(4)
    } else if (letter) {
        basic.showNumber(5)
    } else if (letter) {
        basic.showNumber(6)
    } else if (letter) {
        basic.showNumber(7)
    } else if (letter) {
        basic.showNumber(8)
    } else if (letter) {
        basic.showNumber(9)
    } else {
        basic.showNumber(10)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # . .
        . . . . .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    rps = randint(1, 3)
    if (rps == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (rps == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . . # . .
            . . . . .
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    while (input.logoIsPressed()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `,0)
    }
    basic.clearScreen()
})
let rps = 0
let letter = 0
music.setVolume(115)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
basic.showIcon(IconNames.Happy)
