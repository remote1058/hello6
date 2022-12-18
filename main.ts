let cmd = ""
bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
    bluetooth.startUartService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    if (cmd == "F") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 14)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 14)
    }
    if (cmd == "B") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 14)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 14)
    }
    if (cmd == "L") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 14)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 14)
    }
    if (cmd == "R") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 14)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 14)
    }
    if (cmd == "S") {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
loops.everyInterval(500, function () {
    bluetooth.uartWriteNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
basic.forever(function () {
	
})
