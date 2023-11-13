input.onButtonPressed(Button.A, function () {
    throttle += -5
    if (throttle < 0) {
        throttle = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    throttle = 0
    yaw = -90
    basic.pause(2000)
    yaw = 0
})
input.onButtonPressed(Button.B, function () {
    throttle += 5
    if (throttle > 100) {
        throttle = 100
    }
})
input.onGesture(Gesture.Shake, function () {
    throttle = 0
})
let sendTekst = ""
let yaw = 0
let throttle = 0
radio.setGroup(1)
radio.setTransmitPower(7)
let pitch = 0
let roll = 0
throttle = 0
yaw = 0
basic.forever(function () {
    basic.clearScreen()
    pitch = input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
    led.plot(Math.map(roll, -90, 90, 0, 4), Math.map(pitch, -90, 90, 0, 4))
    led.plot(0, Math.map(throttle, 0, 100, 4, 0))
    led.plot(2, 0)
    led.plot(4, 4)
    sendTekst = "P" + pitch + "R" + roll + "T" + throttle + "Y" + yaw
    radio.sendString(sendTekst)
})
