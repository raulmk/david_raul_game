namespace SpriteKind {
    export const Button = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`meta`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lava`, function (sprite, location) {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite, otherSprite) {
    if (otherSprite == Play && controller.A.isPressed()) {
        level = 1
        Level_Control()
    }
    if (otherSprite == Help && controller.A.isPressed()) {
        level = 2
        Level_Control()
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
        tiles.setCurrentTilemap(tilemap`level2`)
        mySprite = sprites.create(assets.image`user`, SpriteKind.Player)
        controller.moveSprite(mySprite, 150, 0)
        mySprite.ay = 800
        scene.cameraFollowSprite(mySprite)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
        saltos = 2
        lava_level = 0
    } else {
    	
    }
}
let lava_level = 0
let saltos = 0
let mySprite: Sprite = null
let Cursor: Sprite = null
let Help: Sprite = null
let Play: Sprite = null
let level = 0
level = 0
Level_Control()
game.onUpdateInterval(2000, function () {
	
})
forever(function () {
	
})
