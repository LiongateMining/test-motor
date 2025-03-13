function ถอยหลัง () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
}
input.onButtonPressed(Button.A, function () {
    เดินหน้า()
})
function เดินหน้า () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
input.onButtonPressed(Button.B, function () {
    ถอยหลัง()
})
pins.digitalWritePin(DigitalPin.P12, 1)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 1)
basic.forever(function () {
	
})
