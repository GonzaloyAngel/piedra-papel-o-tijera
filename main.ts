radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (tool == 1) {
            basic.showString("Empate")
        } else if (tool == 2) {
            basic.showString("Derrota ")
        } else {
            basic.showString("victoria")
        }
    } else if (receivedNumber == 2) {
        if (tool == 1) {
            basic.showString("victoria")
        } else if (tool == 2) {
            basic.showString("empate")
        } else {
            basic.showString("derrota")
        }
    } else {
        if (tool == 1) {
            basic.showString("derrota")
        } else if (tool == 2) {
            basic.showString("victoria")
        } else {
            basic.showString("empate")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    tool = 1
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    tool = 3
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    tool = 2
    basic.showIcon(IconNames.Square)
})
let tool = 0
radio.setGroup(56)
basic.forever(function () {
	
})
