controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Moving_Left = true
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Moving_Left = false
})
let projectile: Sprite = null
let Moving_Left = false
Moving_Left = false
game.onUpdateInterval(500, function () {
    if (Moving_Left) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e . . . . . . . 
. . . . . e d d e . . . . . . . 
. . . . . . d d . . . . . . . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
`, Math.randomRange(0, 100), Math.randomRange(0, 100))
    } else {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e . . . . . . . 
. . . . . e d d e . . . . . . . 
. . . . . . d d . . . . . . . . 
. . . 8 8 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(50, -100), Math.randomRange(0, 100))
    }
})
