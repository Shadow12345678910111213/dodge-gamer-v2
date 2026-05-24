// pohyb hráča
input.onButtonPressed(Button.A, function () {
    if (playerX > 0) {
        led.unplot(playerX, 4)
        playerX += 0 - 1
        led.plot(playerX, 4)
    }
})
// funkcia game over
function gameOver () {
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showString("KONIEC")
    basic.showString("SKORE:" + score)
    control.reset()
}
input.onButtonPressed(Button.B, function () {
    if (playerX < 4) {
        led.unplot(playerX, 4)
        playerX += 1
        led.plot(playerX, 4)
    }
})
let enemyY = 0
let enemyX = 0
let score = 0
let playerX = 0
playerX = 2
let speed = 600
let lives = 3
basic.clearScreen()
led.plot(playerX, 4)
// hlavná herná slučka
basic.forever(function () {
    enemyX = randint(0, 4)
    while (enemyY <= 4) {
        led.plot(enemyX, enemyY)
        basic.pause(speed)
        led.unplot(enemyX, enemyY)
        enemyY += 1
    }
    score += 1
    // kolízia
    if (enemyY == 4 && enemyX == playerX) {
        music.playTone(131, 100)
        lives += 0 - 1
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.clearScreen()
        led.plot(playerX, 4)
        if (lives <= 0) {
            gameOver()
        }
        // zrýchľovanie
        if (score % 5 == 0 && speed > 150) {
            speed += 0 - 50
            music.playTone(262, 50)
        }
    }
})
