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
    basic.showString(cmd)
    if (cmd == "F") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 140)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 140)
    }
    if (cmd == "B") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 140)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 140)
    }
    if (cmd == "L") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 140)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 140)
    }
    if (cmd == "R") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 140)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 140)
    }
    if (cmd == "S") {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
	
})
