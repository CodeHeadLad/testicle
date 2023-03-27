input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P15, 1)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 80)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P15, 0)
    Kitronik_Robotics_Board.allOff()
    basic.showIcon(IconNames.No)
})
basic.forever(function () {
	
})
