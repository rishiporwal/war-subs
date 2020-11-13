controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(APressed)) {
        APressed = true
        projectile = sprites.create(img`
            a a . a a a a a a a a a a . . . 
            a b a b a b a b a b a b a b a b 
            b b . b b b b b b b b b b . . . 
            `, SpriteKind.Projectile)
        projectile.z = 45
        projectile.setPosition(PlayerCannon.x, PlayerCannon.y + 2)
        projectile.setVelocity(50, 0)
        PlayerCannon.setVelocity(-5, 0)
        PlayerPropeller.setVelocity(-5, 0)
        PlayerBase.setVelocity(-5, 0)
        pause(1000)
        APressed = false
    }
})
let projectile: Sprite = null
let PlayerCannon: Sprite = null
let PlayerPropeller: Sprite = null
let PlayerBase: Sprite = null
let APressed = false
let Bases = [
img`
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    .............9.8........................
    .............9.8........................
    .............8.9........................
    .............8.9........77..............
    .............9.9......777777............
    .............9.9.....77777777...........
    ...........667676..76767676677..........
    ............6767..676787777797..........
    ............6767.7777788898997..........
    ........69896767676767877777977.........
    ...7777779897779797977767676767.88......
    ..67..766999676969697777676767676889....
    .67....6667666666666666666666666698999..
    666....66777666666666666666666666889999.
    676....679967699767996769976799779899899
    767....798896988979889698897988968899989
    676....698897988969889798897988979899999
    777....779977799777997779977799778899999
    .77....777777777777777777777777778899999
    ..77..7777777799777997779977799778899999
    ...7777777777988979889798897988978899999
    ........7777798897988979889798897889999.
    .........77777997779977799777997788999..
    .............77777777777777777777889....
    ......................7777777...........
    `,
img`
    ................9.......................
    ..............999.......................
    ...............9........................
    ...............9........................
    ...............8........................
    .............9.8........................
    .............9.8........................
    .............8.9........................
    .............8.9.....88898999...........
    .............9.9......8....9............
    .............9.9.....777777777abab......
    ...........667676..7676767667777ab......
    ............6767..676787777797..........
    ............6767.7777788898997..........
    ........69896767676767877777977.........
    ...7777779897779797977767676767.88......
    ..67....6999676969697777676767676889....
    .67....6667666666666666666666666698999..
    666....66777666666666666666666666889999.
    676....676799676997679967676767679899899
    767....767988969889798896767676768899989
    676....676988979889698897676767679899999
    777....777799777997779977777777778899999
    .77....777777777777777777777777778899999
    ..77....77777777777777777777777778899999
    ...7777777777777777777777777777778899999
    ........7777777777777777777777777889999.
    ...........777777777777777777777788999..
    ...............777777777777777777889....
    ......................7777777...........
    `,
img`
    ................9.......................
    ..............999.......................
    ...............9........................
    ...............9........................
    ...............8........................
    .............9.8........................
    .............9.8........................
    .............8.9........................
    .............8.9.....88898999...........
    .............9.9......8....9............
    .............9.9.....aaaaaaaababab......
    ...........999999..bababababababab......
    ............9889..aaaaaaaaaaaa..........
    ............9889.babababababab..........
    .7......66669999aaaaaaaaaaaaaaa.........
    .777777777779779a7a7a7a6a6a6a6a.88......
    ..67..76666697696a6a7a7a6a6a6a6a6889....
    .67....6969999999996969999969696698999..
    666....69777666666666696669666966889999.
    676....696999999999699997999969679899899
    767....797989888989798896988979768899989
    676....696989888989698897988969679899999
    777....797999999999799997999979778899999
    .77....797777797777779777777779778899999
    ..77..7797999797779977799999979778899999
    .777777777777777798897777777779778899999
    .7......7777779779889779999997977889999.
    ...........777777799777777777777788999..
    ...............777777779999977777889....
    ......................7777777...........
    `,
img`
    .................9......................
    .................8......................
    .................9......................
    .................8......................
    .................8......................
    .................8......................
    ...............9.8......................
    .....88898999..8.8......................
    ......8....9...9.8...88898999...........
    .....77777777..8.8....8....9............
    ....67676766777777777777777777abab......
    ....6787777797777666676767667777ab......
    ....77888989977667776787777797..........
    ....67877777977777777788898997..........
    ....777767676767676767877777977.........
    ...7777776767779797977767676767.88......
    ..67....6777676969697777676767676889....
    .67....6667666666666666666666666698999..
    666....66777666666666666666666666889999.
    696....696799676997679967699767679899899
    797....797988969889798896988976768899989
    696....696988979889698897988967679899999
    777....777799777997779977799777778899999
    .77....676767676767676767676767678899999
    ..77....67676767676767676767676768899999
    ...7777676767676767676767676777678899999
    ........6767676767676767777777676889999.
    ...........676767676777777767676788999..
    ...............767777777776767676889....
    ......................7676767...........
    `,
img`
    ........................................
    ........................................
    ........................................
    ........................................
    ..........6776776776776776766667........
    .........68868868868868868696877........
    .........68868868868868868696877........
    ..........6776776776776776766667........
    ............766..........766............
    ............776..........776............
    ............766.bbbbbb...766............
    ............776..bbbbbb..776............
    ............766..bbbbbb..766............
    .........b7b7b7b7b7b7b7b7b7b7b..........
    ........b7b7b7b7b7b7b7b7b7b7b7b.........
    ...b7b7b7b7b7b7979797b7b7b7b7b7.88......
    ..b7....b7b7b7b9b9b9b7b7b7b7b7b7b889....
    .a7....a6a7a6a6b6b6b6a6a6a6a6a6a698999..
    666....66777666666666666666666666889999.
    676....676799676997679967676767679899899
    767....767988969889798896767676768899989
    676....676988979889698897676767679899999
    777....777799777997779977777777778899999
    .77....777777777777777777777777778899999
    ..77....77777777777777777777777778899999
    ...7777779999999999977777777777778899999
    ........7777777777777777777777777889999.
    ...........777777999997777777777788999..
    ...............777777777777777777889....
    ......................7777777...........
    `,
img`
    ..........8.................8...........
    ..........9.................9...........
    ..........9.................9...........
    ..........9.................9...........
    ..........9.................9...........
    ..........9.................9...........
    ..........9.................9...........
    ..........9.................9...........
    ..........9.................9...........
    ..........9.776.776.776.776.9...........
    ..........9.766.766.766.766.9...........
    ..........9.776.776.776.776.9...........
    ..........9.766.766.766.766.9...........
    .........b7b7b7b7b7b7b7b7b7b7b..........
    ........b7b7b7b7b7b7b7b7b7b7b7b.........
    ...b7b7b7b7b7b7979797b7b7b7b7b7.88......
    ..b7....b7b7b7b9b9b9b7b7b7b7b7b7b889....
    .a7....a6a7a6a6b6b6b6a6a6a6a6a6a698999..
    666....66777666666666666666666666889999.
    676....676999999999999999999967679899899
    767....767989888988898889888976768899989
    676....676989888988898889888967679899999
    777....777999999999999999999977778899999
    .77....777777777777777777777777778899999
    ..77....77777777777777777777777778899999
    ...7777779999999999977777777777778899999
    ........7777777777777777777777777889999.
    ...........777777999997777777777788999..
    ...............777777777777777777889....
    ......................7777777...........
    `
]
let Propellers = [
img`
    . . . . 
    . . 8 . 
    . . 8 . 
    9 9 8 9 
    . . 8 . 
    . . 8 . 
    . . . . 
    `,
img`
    . . . . 
    . . 9 . 
    . 9 9 . 
    8 6 6 8 
    . 9 9 . 
    . . 9 . 
    . . . . 
    `,
img`
    . . . . 
    . 9 . . 
    . a 9 . 
    8 b b 8 
    . 9 a . 
    . . 9 . 
    . . . . 
    `,
img`
    . . . . 
    . . . . 
    . 9 9 . 
    9 . . 9 
    . 9 9 . 
    . . . . 
    . . . . 
    `,
img`
    . . . . 
    . 8 9 . 
    . 9 8 . 
    . 8 9 . 
    . 9 8 . 
    . 8 9 . 
    . . . . 
    `,
img`
    . 8 . . 
    . 8 8 . 
    . . 8 . 
    9 9 8 9 
    . . 8 . 
    . 8 8 . 
    . 8 . . 
    `,
img`
    . . . . 
    . 8 8 . 
    . . 8 . 
    9 9 8 9 
    . . 8 . 
    . 8 8 . 
    . . . . 
    `
]
let Cannons = [
img`
    . . . . . . . . . . b b b b b b . . . . . 
    . . . . . . . . . . b a a a a b . . . . . 
    . . . . . . . . . . b b b b b b . . . . . 
    . . . . . . . . . . . b a a b . . . . . b 
    7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b 
    7 b b b 7 b b b 7 b a a a a a a a a a a b 
    7 b a b b b a b 7 b b b b b b b b b b b b 
    . b b b . b b b . . . . . . . . . . . . b 
    `,
img`
    b b b . b b b . b b b b b b b b b . . . . 
    b a b . b a b . . . . . . . . . . . . . . 
    b a b . b a b . b b b b b b b b b . . . . 
    b a b . b a b . . . . . . . . . . . . . b 
    b a b 7 b a b 7 b b b b b b b b b b b b b 
    b a b 7 b a b 7 b a a a a a a a a a a a b 
    b a b 7 b a b 7 b b b b b b b b b b b b b 
    b b b . b b b . . . . . . . . . . . . . b 
    `,
img`
    . . . . . . . . . b . . . . . . . . . . . 
    b b b b b b b b b b . . . . . . . . . . . 
    b a a a a a a a a b . . . . . . . . . . . 
    b b b b b b b b b b . . . . . . . . . . b 
    7 7 7 7 7 7 7 7 7 b 7 b b b b b b b b b b 
    b b b b b b b b 7 7 7 b a a a a a a a a b 
    b a a a a a a b 7 7 7 b b b b b b b b b b 
    b b b b b b b b . . . . . . . . . . . . b 
    `,
img`
    b b b b b . b b b b b . b b b b b . . . . 
    . b a b . . . b a b . . . b a b . . . . . 
    . b a b . . . b a b . . . b a b . . . . . 
    . b a b . . . b a b . . . b a b . . . . b 
    b b b b b b b b b b b b b b b b b b b b b 
    b a a a a a a a a a a a a a a a a a a a b 
    b b b b b b b b b b b b b b b b b b b b b 
    . . . . . . . . . . . . . . . . . . . . b 
    `,
img`
    . . . . . . . . . b . b . b . . . . . . . 
    . . . . . . . . . b . b . b . . . . . . . 
    . . . . . . . . . b . b . b . . . . . . . 
    . . . . . . . . . b . b . b . . . . . . b 
    b b b b b b b b b b b b b b b b b b b b b 
    b a a a a a a a a a a a a a a a a a a a b 
    b b b b b b b b b b b b b b b b b b b b b 
    . . . . . . . . . . . . . . . . . . . . b 
    `,
img`
    . . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . . 9 . . . 9 . . . 9 . . . 9 . . 9 . . 
    . . 8 8 8 . 8 8 8 . 8 8 8 . 8 8 8 . 9 . . 
    . . 8 . 8 . 8 . 8 . 8 . 8 . 8 . 8 . 9 . b 
    b b b b b b b b b b b b b b b b b b b b b 
    b a a a a a a a a a a a a a a a a a a a b 
    b b b b b b b b b b b b b b b b b b b b b 
    . . . . . . . . . . . . . . . . . . . . b 
    `
]
APressed = false
scene.setBackgroundImage(img`
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555522222222222
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555522222222222222222
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555552222222222222222222
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555222222222222222222222222222222222222222
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222
    5555555555555555555555552225555555555555555555555555555555555555555555555555555555555555555555555555555555555555555222222222222222222222222222222222222222222222
    5555552222222225555555522222555555555555555555555555555555555555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222
    2222222222222222222552222222255555555555555555555555555555555555555555555555555555555555555555555555555555222222222222222222222222222222222222222222222222222222
    2222222222222222222222112222225555555555555555555555555555555555555555555555555555555555555555555555555551111222211111122222222222222222222222222222222222222222
    2222222222222222222222221112222555555555555555555555555555555555555555555555555555555555555555555555555551111111111221111111111111111122222222222222222222222222
    2222222222222222222222222211122555555555555555555555555555555555555555555555555555555555555555555555555551111111111112222221111111111111111122222222222222222222
    2222222222222222222222222222222255555555555555555555555555555555555555555555555555555555555555555555555555111111111112111122222222222111111111111222222222222222
    1222222222222222222222222222222222555555555555555555555555555555555555555555555555555555555555555555555555551111111112111111111111111111111111111111111111222211
    1111222222222222222222222222222222222555555555555555555555555555555555555555555555555555555555555555555555555555551112111111111111111111112222222222222111222111
    1112222222222222222222222222222222222225555555555555555555555555555555555555555555555555555555555555555555555555551111112211111111111111221111111111111111222111
    1122222222222222222222222222222222222225555555555555555555555555555555555555555555555555555555555555555555555555551111112211111111111111111111111111112112221111
    1222222222222222222222222222222222222225555555555555555555555555555555555555555555555555555555555555555555555555551111111222111111111111112222222211112112221111
    2222222222222222222222222222222222222225555555555555555555555555555555555555555555555555555555555555555555555555551111111111111111111111111111111111121122111111
    2222211111222222222222222222222222222225555555555555555555555555555555555555555555555555555555555555555555555555555111111112221111111111111111111112111121111111
    2222211111111122222222222222222222222222555555555555555555555555555555555555555555555555555555555555555555555555555111111211121111111111111111111111111111111111
    2221111111111111111112222222222222222222255555555555555555555555555555555555555555555555555555555555555555555555555111111111221111111111111111111111111111121111
    2122221112111111111111222222222222222222222255555555555555555555555555555555555555555555555555555555555555555555555111111111111111111111111111111111111111121111
    1121111121111121221111122222222222222222222255555555555555555555555555555555555555555555555555555555555555555555555555551111111111111111111111111111111222221111
    1111111221111111111211122222222222222222222255555555555555555555555555555555555555555555555555555555555555555555555555555511111111111111111111111112211111111111
    1111111111111111222111222222222222222222222255555555555555555555555555555555555555555555555555555555555555555555555555555551111111111111111111111121111111111111
    1111111111111111111112222222222111222222222255555555555555555555555555555555555555555555555555555555555555555555555555555555111111111111111111111111111111111111
    1111111111111111111122222222111111122222222555555555555555555555555555555555555555555555555555555555555555555555555555555555511111111111111111111111111112222222
    1111111111111111112222222211111111111111115555555555555555555555555555555555555555555555555555555555555555555555555555555555511111111111111111111111111222222222
    1111111111111111112222111111122221211111155555555555555555555555555555555555555555555555555555555555555555555555555555555555551111111111111112222222222222222222
    1111111111111111112211112222211111121111555555555555555555555555555555555555555555555555555555555555555555555555555555555555551111111111122222222222222222222222
    1111111111111111111111121111111221111115555555555555555555555555555555555555555555555555555555555555555555555555555555555555555111111122222222222222222222222222
    1111111111111111111111111111111111111155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555511111122222222222222222222222222
    1111111111111111111111111111111111111155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555511111222222222222222222222222222
    2211111111111111111111111111111115555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555112222222222222222222222222222
    2222221111111111111111111111111115555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555522222222222222222222222222222
    2222222111111111111111111111111555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555222222222222222222222222222222
    2222222222222222222211111111155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555222222222221111222222222222222
    2222222222222222222222111111155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555222222222111111222222222222222
    2222222222222222222222221111555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555552222222111111112222222222222222
    1111122222222222222222222215555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555552111111111111112222222222222211
    1111122222222222112222222222225555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555551111111111121111111111111112111
    1121111122221222112222212222225555555555555555555555555545554554555555555555555555555555555555555555555555555555555555555555555551111112222221111111111111111211
    1121121222211222112222211222222555555555555555555555555554454545555555555555555555555555555555555555555555555555555555555555555551111221111122222211111111111211
    1221121222211112112222211122222555555555555555555555555554545445555555555555555555555555555555535555555555555555555555555555555551111111111111111222221112221211
    1221121222212111112222211122222555555555555555555555555545555455545555555555555555555555555555355555555555555555555555555555555555111111111111111111111111111211
    1121121222212121212222212122222222255555555555555555555555554545455555555555555555555555555353555555555555555555555555555555555555511111111111112112211111111211
    1121111222212111212222212122222222225544555555555555555555444445455555555555555555555555533533555555555555555555555555555555555555551111111211111211121111111111
    1121121222211211211222112222222222222544555555555555555555455544555555555555555555555555555535553555555555555555555555555555555555555555111111111121111111111111
    1122111122111211111121111211112222222544554555555555555555545544555555555555555555555555555553535555555555555555555555555555555555555555555411111121111111111111
    1112111122111211211121111212112121211554544555555555555555544455555555555555555555555555533333535555355555555555555555555555555555555555555455111121121111111111
    1112111112111221211121111211112121111554545444555555555555545455445555555555555555555555555335355533555555555555555555555555555555555555554445511111111111111111
    1112111112111121211111111211112121111554445555555555555555455444555555555555555555555555555553355355555555555555555555555555555555555555554454551111111111111111
    1111111112111111111111111111111111111554445555555555555555545455555555555555555555555555555555353555555555555555555555555555555555555555555544555511111111111111
    1111111112111111111111111111111111114444555555555555555554554555445555555555555555555555455335535555555555555555555555555555555555555555555554545511111111111111
    1111111111111111111111111111111111145554555555555555555555454444555555555555555555555555545453335335555555555555555555555555555555555555555554455111111111111111
    1111111111111111111111111111111111144444444455555555555555454555555555555555555555555555554555533555555555555555555555555555555555555555554455455111111111111111
    2211111111111111111111111111111111144444444444455555555555444455555555555555555555555555554435355555555555555555555555555555555555335355555544455111111111111111
    1122222221111111111111111111111111444444444444444555555555554555555555555555555555555555554553355555555555555555555555555555555555535355555555455511111122122221
    1111122222222221111111111111111114444444444444444444444444444444444555555555555555555555554553355335555555555555555555555555555555533353555555455511111222222222
    1122212222222222222222222222222222222222222444444444444444444444444444555555445554545455544453333555555555555555555555555555555555555353555555444411122222222222
    2222122222222222222222222222222222222222222224444444444444444444444444455555545545455545445355355555555555555555555555555555555555555353555544444422222222221111
    2222222222222222222222222222222222222222222222244444444444444444444444445555554454555545545535353355555555555555555555555555555555555353555444442222222222211121
    2222222222222222222222222222222222222222222222244444444444444444443434444555554445555555545453335555555555555555555555555555444444355335554422111211111121212121
    2222222211111111122222222222222222222222222222224444444444444443444334444445554445555555453453355555555555555555555555444444444444333355544111111111111121212121
    2222222111111111111111111122222222222222222222224444444444444444334334444444554444555555455353533355555555555555555544444444444444433334444411111112221121212121
    1111111111222222221111111222222222222222222222244444444444444444334344444444454454455555444353555555555555555555554444444444444444444334444444411111111122211121
    1122211112222222222222222222222222222111111122244444444444444444334334444444444455455555455335535555555555555444444444444444434434444334444444444411111122211121
    1111111112222222222222222222222222111122222221144444444444444444333344444444444444444444444335355555555555544444444444444444443434444333444444444444111112211111
    1111111111122222222222222222222211111211111111144444444444444444343444444444444444444444444433444444444444444444444444444444443443434333444444444444411112111111
    1112222211111122222222222222222111112111111111444444444444433343434444444444444444444443344343444444444444444444444444444444444333333343444444444444441111111111
    1111111111111111122222222222221111111111111114444444444444433433334444444444444444444444433334444444444444444444444444444443333333333433444444444444433111111111
    1111111111111111111222211111111111111111111444444444444444443433434444444444444444444443344344334444444444444443333333333333333333333343344444444433333111111111
    1111111112222111111111121111111111111111333333333333444444444434434444444444444444444444433343444433333333333333333333333333333333333333333333333333333111111111
    1111111111112221111112211111111111111333333333333333333344444344434444444444444444444444443343333333333333333333333333333333333333333333333333333333333111111111
    1111111111111122111112111111111111113333333333333333333333333333333344444444444444444444443333333333333333333333333333333333333333333333333333333333333111111111
    1111111111111111111111111111111111133333333333333333333333333333333333333333444444444443333333333333333333333333333333333333333333333333333333333333333111111111
    1111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111
    1111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111
    1111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111
    1111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111
    1111111111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333311111111111
    1111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333311111111111
    1111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111
    1111111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111111
    1111111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111111
    1111111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111111
    1111111111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111111
    1111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111111111
    1111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333311111111111111111
    1111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111111111111
    1111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111111111111
    1111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111111111111
    `)
PlayerBase = sprites.create(Bases[randint(0, Bases.length - 1)], SpriteKind.Player)
PlayerPropeller = sprites.create(Propellers[randint(0, Propellers.length - 1)], SpriteKind.Player)
PlayerCannon = sprites.create(Cannons[randint(0, Cannons.length - 1)], SpriteKind.Player)
PlayerCannon.z = 50
PlayerPropeller.setPosition(PlayerBase.x - 15, PlayerBase.y + 6)
PlayerCannon.setPosition(PlayerBase.x + 6, PlayerBase.y + 8)
controller.moveSprite(PlayerCannon, 25, 50)
controller.moveSprite(PlayerPropeller, 25, 50)
controller.moveSprite(PlayerBase, 25, 50)
PlayerBase.fx = 2
PlayerCannon.fx = 2
PlayerPropeller.fx = 2
game.onUpdate(function () {
    PlayerPropeller.setPosition(PlayerBase.x - 15, PlayerBase.y + 6)
    PlayerCannon.setPosition(PlayerBase.x + 6, PlayerBase.y + 8)
})
