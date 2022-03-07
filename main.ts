basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        servos.P0.run(50)
    }
    while (input.buttonIsPressed(Button.B)) {
        servos.P0.run(-50)
    }
    servos.P0.run(0)
})
