namespace SpriteKind {
    export const Button = SpriteKind.create()
}
function create_sprites () {
    sprite2 = sprites.create(assets.image`fondo`, SpriteKind.Player)
    // sprite2.set_position(76, 81)
    return sprite2
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite2, location2) {
    if (level == 1 && controller.up.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`subiranimacion`,
        200,
        false
        )
        mySprite.x += -30
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`meta`, function (sprite, location) {
    level_game = level_game + 1
    level_game_cntrl()
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 1) {
        if (saltos == 2) {
            mySprite.x += -250
            mySprite.sayText(saltos)
            saltos = 1
        } else if (saltos == 1) {
            mySprite.x += -200
            mySprite.sayText(saltos)
            saltos = 0
        } else {
            mySprite.sayText(saltos)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lava`, function (sprite22, location22) {
    game.gameOver(false)
})
function Level_Control () {
    let sprite: Sprite;
if (level == 0) {
        sprite = create_sprites()
        sprite.setPosition(81, 60)
        Play = sprites.create(assets.image`play_button`, SpriteKind.Button)
        Help = sprites.create(assets.image`help_button`, SpriteKind.Button)
        Cursor = sprites.create(assets.image`cursor`, SpriteKind.Player)
        Play.setPosition(76, 25)
        Help.setPosition(76, 82)
        controller.moveSprite(Cursor)
    } else if (level == 1) {
        level_game = 1
        sprites.destroy(Play)
        sprites.destroy(Help)
        sprites.destroy(Cursor)
        info.setLife(3)
        level_game_cntrl()
    } else {
    	
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
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
function level_game_cntrl () {
    if (level_game == 1) {
        sprites.destroy(mySprite)
        tiles.setCurrentTilemap(tilemap`level0`)
        mySprite = sprites.create(assets.image`user`, SpriteKind.Player)
        controller.moveSprite(mySprite, 150, 0)
        mySprite.ay = 800
        scene.cameraFollowSprite(mySprite)
        tiles.placeOnRandomTile(mySprite, assets.tile`trueinicio1`)
        lava_level = 0
    } else if (level_game == 2) {
        sprites.destroy(mySprite)
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
let two = false
let one = false
let lava_level = 0
let Cursor: Sprite = null
let Help: Sprite = null
let Play: Sprite = null
let saltos = 0
let level_game = 0
let mySprite: Sprite = null
let sprite2: Sprite = null
let level = 0
level = 0
Level_Control()
game.onUpdateInterval(2000, function () {
    if (level == 1) {
        lava_level += 1
        for (let index = 0; index <= 100; index++) {
            tiles.setTileAt(tiles.getTileLocation(index, lava_level * -1 + 102), assets.tile`lava`)
            tiles.setWallAt(tiles.getTileLocation(index, lava_level * -1 + 102), false)
        }
    }
})
forever(function () {
    if (level == 1) {
        mySprite.ay = 1000
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            saltos = 2
            one = false
            two = false
        }
        if (info.life() == 0) {
            game.gameOver(false)
        }
    }
})
