namespace SpriteKind {
    export const Button = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 1) {
        if (saltos == 2) {
            mySprite.vy += -300
            saltos = 1
        } else if (saltos == 1) {
            mySprite.vy += -300
            saltos = 0
        } else {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lava`, function (sprite2, location2) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`meta`, function (sprite, location) {
    game.gameOver(true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`camina_izquierda`,
        200,
        false
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`camina_derecha`,
        200,
        false
        )
    }
})
function Level_Control () {
    if (level == 0) {
        scene.setBackgroundImage(assets.image`myImage`)
        Play = sprites.create(assets.image`play_button`, SpriteKind.Button)
        Help = sprites.create(assets.image`help_button`, SpriteKind.Button)
        Cursor = sprites.create(assets.image`cursor`, SpriteKind.Player)
        Play.setPosition(76, 25)
        Help.setPosition(76, 82)
        controller.moveSprite(Cursor)
    } else if (level == 1) {
        sprites.destroy(Play)
        sprites.destroy(Help)
        sprites.destroy(Cursor)
        tiles.setCurrentTilemap(tilemap`level2`)
        mySprite = sprites.create(assets.image`user`, SpriteKind.Player)
        controller.moveSprite(mySprite, 150, 0)
        mySprite.ay = 800
        scene.cameraFollowSprite(mySprite)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
        lava_level = 0
    } else {
    	
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite3, otherSprite) {
    if (otherSprite == Play && controller.A.isPressed()) {
        level = 1
        Level_Control()
    }
    if (otherSprite == Help && controller.A.isPressed()) {
        level = 2
        Level_Control()
    }
})
let lava_level = 0
let Cursor: Sprite = null
let Help: Sprite = null
let Play: Sprite = null
let mySprite: Sprite = null
let saltos = 0
let level = 0
level = 0
Level_Control()
game.onUpdateInterval(2000, function () {
    lava_level += 1
    for (let index = 0; index <= 100; index++) {
        tiles.setTileAt(tiles.getTileLocation(index, lava_level * -1 + 102), assets.tile`lava`)
        tiles.setWallAt(tiles.getTileLocation(index, lava_level * -1 + 102), false)
    }
})
forever(function () {
    if (level == 1) {
        mySprite.ay = 1000
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            saltos = 2
        }
    }
})
