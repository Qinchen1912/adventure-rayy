// Buat jenis sprite baru
namespace SpriteKind {
    export const Treasure = SpriteKind.create()
    }

    // Buat pemain
    let player = sprites.create(img`
        . . . f f f f . . . 
            . f f e e e e f f . 
                f e e e e e e e e f 
                    f e e f e e f e e f 
                        f e e e e e e e e f 
                            . f e e e e e e f . 
                                . . f f e e f f . . 
                                    . . . f f f f . . . 
                                    `, SpriteKind.Player)

                                    controller.moveSprite(player)
                                    scene.cameraFollowSprite(player)
                                    player.setStayInScreen(true)

                                    // Skor & nyawa
                                    info.setLife(3)
                                    info.setScore(0)

                                    // Munculkan musuh secara berkala
                                    game.onUpdateInterval(2000, function () {
                                        let enemy = sprites.create(img`
                                                . . c c c c . . 
                                                        . c d d d d c . 
                                                                c d d d d d d c 
                                                                        c d d f d f d c 
                                                                                c d d d d d d c 
                                                                                        . c d d d d c . 
                                                                                                . . c c c c . . 
                                                                                                    `, SpriteKind.Enemy)
                                                                                                        enemy.setPosition(randint(0, 160), 0)
                                                                                                            enemy.vy = 30 + info.score() // makin tinggi skor, makin cepat
                                                                                                            })

                                                                                                            // Munculkan treasure secara berkala
                                                                                                            game.onUpdateInterval(5000, function () {
                                                                                                                let treasure = sprites.create(img`
                                                                                                                        . . . b b b b . . . 
                                                                                                                                . b b 5 5 5 5 b b . 
                                                                                                                                        b 5 5 5 5 5 5 5 5 b 
                                                                                                                                                b 5 5 d 5 5 d 5 5 b 
                                                                                                                                                        b 5 5 5 5 5 5 5 5 b 
                                                                                                                                                                . b 5 5 5 5 5 5 b . 
                                                                                                                                                                        . . b b 5 5 b b . . 
                                                                                                                                                                                . . . b b b b . . . 
                                                                                                                                                                                    `, SpriteKind.Treasure)
                                                                                                                                                                                        treasure.setPosition(randint(0, 160), randint(0, 120))
                                                                                                                                                                                        })

                                                                                                                                                                                        // Jika pemain menyentuh musuh
                                                                                                                                                                                        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player, enemy) {
                                                                                                                                                                                            enemy.destroy()
                                                                                                                                                                                                music.zapped.play()
                                                                                                                                                                                                    info.changeLifeBy(-1)
                                                                                                                                                                                                    })

                                                                                                                                                                                                    // Jika pemain mengambil treasure
                                                                                                                                                                                                    sprites.onOverlap(SpriteKind.Player, SpriteKind.Treasure, function (player, treasure) {
                                                                                                                                                                                                        treasure.destroy()
                                                                                                                                                                                                            music.baDing.play()
                                                                                                                                                                                                                info.changeScoreBy(1)
                                                                                                                                                                                                                })

                                                                                                                                                                                                                // Musik background
                                                                                                                                                                                                                music.playMelody("C5 B A G A B C5 -", 120)
                                                                                                                                                                                                                music.setVolume(50)
                                                                                                                                                                                                                
