music.setVolume(115)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
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
