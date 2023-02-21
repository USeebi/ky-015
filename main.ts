let temp = 0
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P2,
    true,
    false,
    true
    )
    temp = dht11_dht22.readData(dataType.temperature)
    basic.showIcon(IconNames.Happy)
    if (temp > 24) {
        basic.showIcon(IconNames.Sad)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(5000)
    }
})
