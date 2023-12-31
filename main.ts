namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const Cursor = SpriteKind.create()
    export const Fondo = SpriteKind.create()
    export const Bola = SpriteKind.create()
    export const Paloma = SpriteKind.create()
    export const Rayo = SpriteKind.create()
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Rayo, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    sprites.destroy(otherSprite, effects.starField, 100)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 200)
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.Button, function on_on_overlap2(sprite32: Sprite, otherSprite3: Sprite) {
    
    if (otherSprite3 == Play && controller.A.isPressed()) {
        level = 1
        Level_Control()
    }
    
    if (otherSprite3 == Help && controller.A.isPressed()) {
        help2()
        sprites.destroyAllSpritesOfKind(SpriteKind.Fondo)
        Level_Control()
    }
    
    if (otherSprite3 == lore && controller.A.isPressed()) {
        cinematica()
        sprites.destroyAllSpritesOfKind(SpriteKind.Fondo)
        Level_Control()
    }
    
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function on_overlap_tile(sprite2: Sprite, location2: tiles.Location) {
    if (level == 1 && controller.up.isPressed()) {
        music.play(music.stringPlayable("C E C - - - - - ", 1200), music.PlaybackMode.InBackground)
        animation.runImageAnimation(Raimon, assets.animation`
                subiranimacion
            `, 200, false)
        Raimon.vy += -30
    }
    
})
function create_sprite_raimon(): Sprite {
    
    sprite36 = sprites.create(img`
            ddddddbbbbbbbbcccccccbbbbbbbbbcffccbddbccfffffffcbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccc
                    ddddddddbbbbbbbbcccccbbbbbbbbbcffccbddbccffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccc
                    dddddddddddbbbbbbcccccbbbbbbbccffcbdddbcfffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
                    dddddddddddbbcbbbccccccbbbbbbccffcbdddbcfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
                    dddddddddddbbccbbcccccccccbbbcfffcbdddbcfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
                    dddddddddddbbccccccccccccccbcffffcbdddbcfffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
                    ddddddddddbbccfffffccccccccccffffcbdddbcfffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
                    ddddddddddbbcffffffccccccccccfffcbbdddbcfffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
                    dddddddddddbcffffffcccbbccffffffcbddddbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
                    ddddddddddbbcffffffccbbbccffffffcbddddbcffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
                    ddddddddddbccffffffccbbbccffffffcbddddbcffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
                    ddddddddddbccfffffcccbbbccffffffcbddddbfffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccc
                    ddddddddddbccfffffcccbbbccffccffcbdddbcfffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccc
                    ddddddddddbcccffffcccbbbccffccffcbdddbcfffffffffffffffffffffffcccccccfffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccc
                    bbbdddddddbccccccfccbbbbcfffcccfcbdddbcffffffffffffffffffffffffccccccfffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccc
                    cbbbbbbbbbbbccccccccbbbbcfffcccccbdddbcfffffcfffffffffffffffffffcccccfffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccc
                    cccccccbbbbbbbbcccccbddbcfffcccccddddbcffffccffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccc
                    cfffcccccccbbbcccccbbddbcfffcccccddddbcffffccfffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
                    cccccffccccccccccccbbddbcffffccccdddbccffffffffcffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
                    bbcccccccccccccccccbbdbccffffccccbdbbccfffffffccfffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
                    bbbbbbbbbccccccccccbddbcfffccccccbbbccccfffffcccccfffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
                    dddddbbbbbcccccccccbddbcfffcccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
                    ddddbbbbbbcccccccccbddbcffffcccccccccccccccccffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
                    dddbbbbbbbcccccfcccbddbcfffcccccccccccccfccccffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccc
                    ddbbbbbbbbcccccfccbbddbcffccccccccccccccfccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccc
                    ddbbbbbbbbcccccfccbdddbcfcccccccccccccccfccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccc
                    ddddddbbbbccccccccbbddbcccccccccccccfcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccc
                    ddbdddbbbbcccccccccbddbccccccffccccffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccc
                    bbbbbbbbbcccfccccccbbbbccccccffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccc
                    bbbbbbbbbcccffcccccbbbbccccccfffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccbbbccccccccccbbbcccffccffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccbbccccccccccbbcccfffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccc
                    bbbbbbcbccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccc
                    bbbbbbbbcccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccc
                    dddddbbbbccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccc
                    ddddddbbbcccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
                    ddddddbbbcccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
                    dddddddbbcccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
                    1111dddbbccccccccccfffcccccccccffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccc
                    11111ddbbccccccccccffffcccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccc
                    11111ddbbccccccccccffffcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
                    11111ddbbcccccccccccfffcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
                    11111ddbbcccccccccccffffcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
                    11111ddbbcccccccccccccffffcccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
                    11111dbbbccccccccccccccfffcccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
                    11111dbbbccccccccccccccffffcccccffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
                    11111dbbccccccccccccccfffffcccfffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
                    1111ddbbccccccccccccccffffccccffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
                    1111ddbbcccccccccccccccffcccffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccc
                    1111ddbbcccccccccccccccffccfffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccc
                    1111ddbccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
                    111dddbccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
                    111dddbcccccccccccccccccccfffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
                    111dddbccccccccccccccccccfffffffffccccccfffffffccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccc
                    111dddbcccccccccfcccccfffffffffffcccccccccfffffccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccc
                    111dddbcccccccccffcccfffffffffffcccccccccccffffcccccccccccccfffffffffffffffffffffffffffffffffffffffffffccccffffffffffffcccbcccccccccccccccccccccccccccccccccccc
                    111dddbcccccccccffffffffffffccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffceeeeeeeecffffffffcccbbbbbbccccccccccccccccccccccccccccccc
                    111dddbccccccccccccffffffffcccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffcebbbeeeeeeffffffffccbbbbbbbbbbbbbccccccccccccccccccccccccc
                    111dddbcccccccccccccccccffccccccccccceeeeecccccccccccccccceeeeecccccfffffffffffffffffffffffffffffffcebbeeeeeeeeecffffffccbbbbbbbbbbbbbbbbbccccccccccccccccccccc
                    111dddbcfccccccccccccccccccceeeeeeeeeeeeeeeeccccccceeeeeeeeeeeeeccccccffffffffffffffffffffffffffffcebbbeeeeeeeeeeffffffccbbbbbbbbbbbbbbbbbbcccccccccccccccccccc
                    111dddbcffffccccbcccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccffffffffffffffffffffffffcebbeeeeeeeebbbecfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
                    111dddbcffffcccbbbccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccffffffffffffffffffffffffeebbeeeeebbbbbbecfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
                    111dddbcffcccccbbbbccccccccbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccfffffffffffffffffffffffcebeeeeebbbeeebbeecfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
                    111ddbbcffffcccbbbbbcccccccbbeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccfffffffffffffffffffffceebeeeebbbbeeeebbecfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
                    111ddbccffffcccbbbbbcccccccbbbebbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeecccffffffffffffffffffceeeeeeebbbbeeeebbecfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    11ddbbcffffffcbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeecccfffffffffffffffceeeeeeebbbbbbeeebbeefffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    11ddbbcffffffcbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeccfffffffffffffceeebeeebbbbbbbeeebbeeffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    11ddbbcffffffcbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeccfffffffffffceeebbeeebbbbbbbbeebbeeffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    11ddbbcffffffcbbbdbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeecfffffffffceeebbeeeeeeeebbbbeeeeeeffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    11ddbbcffffffcbbbdbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeccffffffffceebbbeeeeeeeebbbbbeeeeefffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    11ddbbcffffffcbbbdbcfccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeecffffffffeeebbbbeeeeeeebbbbbbeeeefffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    11ddbbccfffffcbbbdbccccfffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeecfffffffceeebbbbeeeeeebbbbbbbeeecfffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    1dddbccffffffbbbbbbccccfffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeecfffffffceeebbbbeeeeebbbbbbbbbeecfffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    1dddbccfffffcbbbbbbbccccffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeccfcccccceeebbbbeeeeeebbbbbbbbeeffffffcbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    1dddbccfffffcbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeccccccccceeeebbbeeeeeebbbbbbbbeeffffffcbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    1dddbcffffffcbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbeeecccccccceeeebbbbeeeeeebbbbbbbecffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    1dddbcffffffcbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbeeeeeccccceeeeebbbbbeeeeebbbbbbbecfffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    1dddbcfffffccbbbbbbbbbbdddddddbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbeeeeeeeeceeeeeebbbbeeeeebbbbbbbecfffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    dddbbcfffffccbbbbbbbbbbbbbbddbbbbbbbbbbbbbeeeeecceeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeebbeeeebbbbbbbbecfffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    ddbbccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbeecfccceeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeebeeebbbbbbbbbecffffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeceeeeebbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeebbebbbbbbbbbeecffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
                    bbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeebbbbbbbbbbbeecfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
                    cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbeeeeebbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeebbbbbbbbbbeeeeffffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb
                    cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeecfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccb
                    ccccccccccccccbbbbccccbbbbbbbbbbebbbbbbbbbeeeeeeebbbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeecfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
                    cccccccccccccccccccccccbbbbbbbbeeeebbbbbbbbbeeeeeebbbeeeeeeebbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeecfffffccbbbbbbccccbbbcccbbbbbbbbbbbcccccccccc
                    fffffffffffffccccffffccbbbbbbbbeeeeeebbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeecfffffccbbbbbcccccccccccccbbbcccbcccccccccccc
                    fffffffffffffffccfffffcbbbbbbbbceeeeebbbbbbbbbebeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeebbbbbeeeeeeeeecfffffccbbbbbcccccccccccccccccccccccccccccccc
                    fffffffffffffffccfffffcbbbbbbbbbceeeeebbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeecceeeeeebeeebbeeeeeeeeeecfffffcbbbbccccccccccccccccccccccccccccccccc
                    fffffffffffffffccffffffbbbbbbbbbccceeebbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeceecceeeeeeeeeeeeeeeeeeeeeecfffffcbbbcccccccccccccccccccccccccccccccccc
                    fffffffffffffffffffffffcbbbbbbbbcccccebbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeccccceeeeeeeeeeeeeeeeeeeeeecfffffcccccccccccccccccccccccccccccccccccccc
                    fffffffffffffffffffffffcbbbbbbbccccffcebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeccccceeeeeeeeeeeeeeeeeeeeeecfffffcccccccccccccccccccccccccccccccccccccc
                    fffffffffffffffffffffffcbbbbbbbccccfffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeccccceeeeeeeeeeeeeeeeeeeeeeccfffccccccccccccccccccccccccccccccccccccccc
                    fffffffffffffffffffffffcbbbbbbbccccfffcbbbbbbbbbbbbb33bbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeecccceeeeeeeeeeeeeeeeeeeeeeeecfffccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccffffccbbbbbbbccccfffcbbbbbbbbbbbb33333333333bbbbbbbbbbbbbbbbbbeeeeeeeeccccecceeeeeeeeeeeeeeeeeeeeecfffccccccccccccccccccccccccccccccccccccccc
                    eeeeeeecccccccccccccffccbbbbbbcccccfffcbdbbbbbbbbbb333333333bbbbbbbbbbbbbbbbbbbbeeeeeeeeccceeccceeeeeeeeeeeeeeeeeeeecffcccccccccccccccccccccccccccccccccccccccc
                    eeeeeeeeeeecceccccccffccbbbbbbcccccfffcbdbbbbbbbbbbb33333333bbbbbbbbbbbbbbbbbbbeeeeeeeeeecceecccceeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccc
                    eeeeeeeeeeeecccccccfffcccbbbbbcccccfffcbdbbbbbbbbbbbbb333333bbbbbbbbbbbbbbbbbbeeeeeeeeeeeccceccccceeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccc
                    eeeeeeeeeecccccccffffffccbbbbbccccccffcbdbbbbbb3bbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbeeeeeeeccccccccccceeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccc
                    eeecccccccccccccfffffffccbbbbcccccccffcbdbbbbbbbbbbbbbbb33bbbbbbbbbbbbbbbbbbbbbbbeeeeeeeccccccccccceeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccc
                    fffffffffffffffffffffffccbbbbcccccccffcbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeccccccccccceeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccc
                    fffffffffffffffffffffffccbbbbccccccfffcbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeecccccccccccceeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccc
                    ffffffffffffffffffffffffccbbcccccccffcebddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeecccccccccccceeeeeeeeeeeeeeeeeeeeeececccccccccccccccccccccccccccccccccccc
                    ffffffffffffffffffffffffccbbcccccccffcebddbbbbbbbbbbbeebbbbbbbbbbbbbbbbbbbeeeeeeeeeeecccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeebcccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccffffffcccccccccccffcebdddbbbbbbbbbbeebbbbbbbbbbbbbbbbbbeeeeeeeeeeeecccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccc
                    eeeeeeeeeeeecccccccffffffccccccccccffcbbdd3bbbbbbbbbeeebbbbbbbbbbbbbbbbbbeeeeeeeeeeeccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeecbbbcccccccccccccccccccccccccccccc
                    eeeeeeeeeeeeeccccccffffffccccccccccffcbbddbbbbbbbbbeeeebbbbbbbebbbbbbbbbbeeeeeeeeeeeccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeebbbccbbcccccccccccccccccccccccccc
                    eeeeeeeeeeeeeccccccffffffccccccccccffcbbdbbbbbbbbbeeeeeebbbbeeeeebbbbbbbbeeeeeeeeeeeccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeecbbccbbbcccbbbbcccccccccccccccccc
                    eeeeeeeeeeeeeccccccffffffccccccccccffcebbbbbbbbbeeeeeeeeebbeeeeeeeebbbbbeeeeeeeeeeeccccccccfffccccceeeeeeeeeeeeeeeeeeeeeeeeeeeecbbbbbbccccbccbbbccccccccccccccc
                    eeeeeeeeeeeeeccccccffffffccccccccccffccbbbbbbbbeeeeeeeeeeeeeeeeeeeeeebbbeeeeeeeeecccccccfffffffcccceeeeeeeeeeeeeeeeeeeeeeeeeeeeecbbbbbcccccccbbbbcccccccccccccc
                    eeeeeeeeeeeeeccccccffffffccccccccccfffcebbbbbeeeeeeeeeeeeeeeeeeeccceeebbeeeeeeeeeccccccffffffffccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbccccccccccccccccccccccccccc
                    eeeeeeeeeeeeeccccccfffffffcccccccccffffeebbbeeeeeeeeeeeeeeeeeeeecccceeebeeeeeeeeecccccffffffffccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebcccccccccccccccccccccccccccc
                    eeeeeeeeeeeeeccccccffffffffccccccccfffffcceeeeeeeeecccceeeeeeeeeeecceeeebeeeeecccccccfffffffffccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccc
                    eeeeeeeeeeeeeccccccfffffffffcccccccfffffffccccccccccccceeeeeeeeeeeeeeeeeeeeeeccccccccfffffffffccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccbbcbcccccbccccccccccccccc
                    eeeeeeeeeeeeeccccccfffffffffffcccccffffffffffffcccccccceeeeeeeeeeebeeeeeeeeeccccccccccfffffffccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecbbbbbcccbbbbcccccccccccccc
                    eeeeeeeeeeeccccccfffffffffffffcccccffffffffffffccccccceeeeeeeeeebbbbeeeeeeeccccccccccfffffffccceeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeecbbbbbbccbbbbcccccccccccccc
                    eeeeeeeeccccccffffffffffffffffcccccfffffffffffffccccceeeeeeeebbbbbbbbeeeeeccccccccccfffffffccccceeeeeeeebbbbbbeeeeeebbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbccccccccccc
                    eeeecccccccfffffffffffffffffffcccccfffffffffffffffccceeeeeebbbbbbbbbbeeeecccccccccccfffffffcccccceeeeeeebbbbbbbeeebbbbbbbbbbbbbbeebbbbbbbbbbbbbbbbbbbcccccccccc
                    ccfffffffffffffffffffffffffffffcccffffffffffffffffffcebbbbbbbbbbbbbbbeeecccccccffccccfffffccccccceeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbcccccccccccc
                    fffffffffffffffffffffffffffffffcccfffffffffffffffffffebbbbbbbbbbbbbbbeeccccccfffffcccfffffccccccceeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbddbbbbbbbbbbbccccccccccc
                    fffffffffffffffffffffffffffffffcccfffffffffffffffffffebbbbbbbbbbbbbbbeeccccfffffffcccfffffccccccceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbddddddbbbbbbbbbbcccccccc
                    fffffffffffffffccccccffffffffffccffffffffffffffffffffebbbbbbbbbbbbbbbeecfffffffffccccccccccccccceeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbbbbbbbbbbbbbbbccc
                    ccccccccccccccccccccfffffffffffccffffffffffffffffffffceebbeeeeebbbbbbeecfffffffffccccccccccccccceeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbdddbbbbbbbbbbbbbbbbcc
                    eeeeccccceeeeccccccffffffffffffccffffffffffffffffffffcceeeeeeeebbbbbeeccfffffffffcccccccccccccceeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbddbbbbbbbbbbbbbbbbbb
                    eeeeeeeeeeeecccccccffffffffffffccffffffffffffffffffffffcceeceeebbbbbeeccfffffffffcccccccccccccceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbddbbbbbbbbbbbbbbbbbb
                    eeeeeeeeeeeeccccccfffffffffffffccfffffffffffffffffffffffceeeeebbbbbbeecccffffffffccccccccccccceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbddbbbbbbbbbbbbbbbbbb
                    eeeeeeeeeeecccccccfffffffffffffccfffffffffffffffffffffffccbbbbbbbbbeeecccffffffffccccccccccccceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbddbbbbbbbbbbbbbbbbbb
                    eeeeeeeeeeecccccccfffffffffffffccffffffffffffffffffffffffcbbbbbbbbeeeccccffffffffcccccccccccceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbddbbbbbbbbddbbbbbbbb
                    eeeeeeeecccccccccccffffffffffffccfffffffffffffffffffffffcbbbbbbbeeeecccccffffffffccccccccccceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbdbbbbbbbbbbddbbbbbbb
                    eeeeeeeccccccccccccffffffffffffcffffffffffffffffffffffffcbbbbbbecccccccccffffffffcccccccccceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbdbbbbbbbbbbbddbbbbbbb
                    eeeeeecccccccccffcfffffffffffffcffffffffffffffffffffffffcbbbbbbccccccccccfffffffcccccccccceeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbb
                    eeeeeeccccccccffffffffffffffffffffffffffffffffffffffffffccbbbeecccccccccffffffffccccccccceeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbb
                    eeeeeccccccccfffffffffffffffffffffffffffffffffffffffffffccceeeccccccffffffffffffccccccccceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbddbbbbbbbbbbdddbbbbbbb
                    eeeeeccccccccfffffffffffffffffffffffffffffffffffffffffffccccccccccccfffffffffffccccccccceeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbddbbbbbbbbbbdddbbbbbbb
                    eeeeeccccccccfffffffffffffffffcfffffffffffffffffffffffffccccccccccccfffffffffffcccccccceeeeebbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbddbbbbbbbbbbbdddbbbbbbb
                    eeeeeccccccccffffffffffffffffccffffffffffffffffffffffffffccccccccfffffffffffffccccccceeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbddbbbbbbbbbbbdddbbbbbbb
                    eeeeecccccccffffffffffffffffffcfffffffffffffffffffffffffffccfffffffffffffcccccccceeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbdddbbbbbbbbbbbdddddbbbbb
                    eeeeeccccccffccffffffffffffffccfffffffffffffffffffffffffffffffffffffccccccccccccebbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbbbdddbbbbbbbbbbbddddddbbbb
                    eeeecccccccccccffffffffffffffccffffffffffffffffffffffffffffffffffffccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbddbbbbbbbbbbbdddddddbbbb
                    eeeccccccccccccffffffffffffffccffffffffffffffffffffffffffffffccccccccbbdddbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddbbbbbbbbbbbbbddbbbbbbbbbbddddddddbbbb
                    cccccccccccccccffffffffffffffccffffffffffffffffffffffffffffccbbcccbbbbddddbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddbbbbbbbbbbbbbbddbbbbbbbbdddddddddddbbb
                    cccccccccccccccffffffffffffffccfffffffffffffffffffffffffffcbbdbbbbbbdddddbbbdddbebbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbddbbbbbbbdddddddddddddbb
                    ccccccccccccccfffffffffffffffccffffffffffffffffffffffffffcbbdddddddddddddbbddddbebbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbddbbbbbbddddddbbddddddbb
                    ccccccccccccccfffffffffffffffccfffffffffffffffffffffffffcbdddddddddddddddbbddddbebbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbdbbbbbbddddddddddddddddd
                    ccccccccccccccfffffffffffffffccffffffffffffffffffffffffcbbdddddddddddddddbbddddbebbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddbbbbbbbdddddbbdddbbbbbdddddddddddddddddd
                    eeccccccccccccfffffffffffffffccfffffffffffffffffffffffcbdddddddddddddddddbbddddeebbbbbbbbbbbbbbbbbbbbbddddddddddddddddbbbbbbbddddddbbddbbbbbddddddddddddddddddd
                    eeccccccccccccfffffffffffffffccffffffffffffffffffffffcbbdddddddddddddddddbbddddeebbbbbbbbbbbbbbbbbbbddddddddddddddddddbbbbbbbdddddbbbddbbbbbddddddddddddddddddd
                    eeccccccccccccfffffffffffffffccfffffffffffffffffffffcbdddddddddddddddddddbbddddcebbbbbbbbbbbbbbbbddddddddddddddddddddbbbbbbbdddddbbbbddbbbbdddddddddddddddddddd
                    eeecccccccccccffffffffffffffcccffffffffffffffffffffcbbdddddddddddddddddddddddddbeeebbbbbbbbbbbbddddddddddddddddddddddbbbbbbddddddbbbdddbbbbdddddddddddddddddddd
                    eeecccccccccccffffffffffffffccffffffffffffffffffffcbbdddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddddddddddddbbbbbbddddddbbbdddbbbbdddddddddddddddddddd
                    eeecccccccccccffffffffffffffccfffffffffffffffffffccbdddddddddddddddddddddddddddddbbbbbddddddddddddddddddddddddddddddbbbbbbddddddbbbddddbbbbdddddddddddddddddddd
                    eeecccccccccccffffffffffffffccfffffffffffffffffffcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddbbbddddbbbbdddddddddddddddddddd
                    eeccccccccccccfffffffffffffcccffffffffffffffffffcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddbbbbdddddddddddddddddddd
                    cccccccccccccffffffffffffffccfffffffffffffffffffcbdddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddbbbbdddddddddddddddddddd
                    eccccccccccffffffffffffffffccffffffffffffffffffcbddddddd1ddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddbbbddddddddddddddddddddd
                    ccccccccfffffffffffffffffffccfffffffffffffffffcbddddddd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddbbbddddddddddddddddddddd
                    cccffffffffffffffffffffffffccffffffffffffffffccbdddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddddddddddddddddddd
                    fffffffffffffffffffffffffffccffffffffffffffffcbddddddd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddd
                    fffffffffffffffffffffffffffccfffffffffffffffcbdddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddbbbbbddddddddddddddddddddd
                    fffffffffffffffffffffffffffccfffffffffffffffcbdddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddbbbbbddddddddddddddddddddd
        `, SpriteKind.Fondo)
    //  sprite2.set_position(76, 81)
    return sprite36
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Bola, function on_on_overlap3(sprite4: Sprite, otherSprite2: Sprite) {
    sprites.destroy(otherSprite2, effects.fire, 100)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    scene.cameraShake(4, 200)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        lava
    `, function on_overlap_tile2(sprite222: Sprite, location222: tiles.Location) {
    if (level == 1) {
        game.setGameOverMessage(false, "!TE HAS QUEMADO!")
        game.gameOver(false)
    }
    
})
function cinematica() {
    
    scene.setBackgroundImage(assets.image`
        fondomyImage
    `)
    sprites.destroy(Play)
    sprites.destroy(Help)
    sprites.destroy(lore)
    sprites.destroy(Selector)
    sprites.destroy(sprite3322)
    game.showLongText("MAMÁ: Raimon... Raimon ! Despierta, llegas tarde al cole...RAIMOOOON !", DialogLayout.Bottom)
    game.showLongText("RAI: Mmmm...ya voy mamá. Eh? He dicho mamá? Vivo solo desde hace ya mucho, debe haber sido un sueño. Que hora será?", DialogLayout.Bottom)
    game.showLongText("LAS 12:15 !!!!", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
                9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
                9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
                9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
                9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
                9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
                9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
                9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
                9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
                9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
                9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
                9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
                9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
                9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
                9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
                9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
                9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
                9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
                1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
                1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
                1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
                11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
                11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
                11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
                1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
                111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
                11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
                11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
                11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
                11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
                d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
                dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
                dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
                dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
                dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
                ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
                ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
                ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
                ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
                dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
                dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
                dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
                dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
                dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
                dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
                dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
                dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
                dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
                dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
                bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
                bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
                bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
    game.showLongText("Raimon salió corriendo dirección al ITB, el instituto dónde impartía clase y dónde todo los alumnos lo adoraban por ser el mejor profesor que jamás podrían tener. Raimon al ser runner corrió hacía el colegio y llegó a tiempo para impartir clase a los alumnos de DAM. Pero uno de sus alumnos, Raúl, tenía una queja por bajarle medio punto en un trabajo... el día no podía empezar peor para nuestro protagonista.", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`
        myImage1
    `)
    game.showLongText("RAÚL: Raimon tenemos que hablar, me has bajado medio punto y a la...", DialogLayout.Bottom)
    game.showLongText("Raimon no escuchó al alumno, era muy común que los alumnos se quejasen y había aprendido a no dejarse afectar. Mientras, Raúl seguía...", DialogLayout.Bottom)
    game.showLongText("RAÚL: Pues eso, que me tienes que subir medio punto. No me puedes hacer esto...", DialogLayout.Bottom)
    game.showLongText("RAIMON: mmm lo siento Raúl pero no puedo hacer nada. Además, es medio punto no te afectará...", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`
        myImage2
    `)
    game.showLongText("RAÚL: QUEEEEEE??? LO NECESITO PARA ACCEDER A LA UNIVERSIDAD !! YA NO ERES EL MEJOR PROFE QUE HE TENIDO...", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`
        fondomyImage
    `)
    sprite_fondo = create_sprite_raimon()
    sprite_fondo.setPosition(81, 20)
    game.showLongText("Lo que más quería Raimon en la vida era al FCBarcelona y a sus alumnos. Esta frase le afectó y recapacitó sobre si mismo, si estaba haciendo lo correcto, si era el mejor profesor que podían tener... Esa misma noche, después de pensar horas y horas, exclamó al cielo...", DialogLayout.Bottom)
    game.showLongText("RAIMON: PORQUE DIOS?? QUE HE HECHO YO PARA MERECER ESTO?? DESEO VENDER MI ALMA A CAMBIO DE CONVERTIRME EN EL MEJOR PROFESOR QUE PUEDAN TENER !!", DialogLayout.Bottom)
    sprite_fondo = create_sprite_infierno()
    sprite_fondo.setPosition(81, 60)
    game.showLongText("RAIMON: Eh? Qué hago aquí? Es esto un sueño?", DialogLayout.Bottom)
    game.showLongText("DIABLO: JA JA JA ! Bienvenido a tu nuevo hogar, me has concedido tu alma a cambio de ser el mejor profesor que podían tener muajajaja", DialogLayout.Bottom)
    game.showLongText("RAIMON: Exacto! Pero por qué estoy aquí? Debería estar dando clase... ese era el trato!", DialogLayout.Bottom)
    game.showLongText("DIABLO: JAJAJA verás, querías ser el mejor profesor que puedan tener a cambio de tu alma. Pero hay un pequeño detalle, ya lo eres! Por lo tanto tu alma me pertenece...", DialogLayout.Bottom)
    game.showLongText("RAIMON: Ya lo soy? En serio?", DialogLayout.Bottom)
    game.showLongText("DIABLO: No me malinterpretes, ya sabes como va la Educación en catalunya. Hoy en día ponen a cualquiera MUAJAJAJA", DialogLayout.Bottom)
    game.showLongText("RAIMON: Serás cabrón... y nunca mejor dicho. Debo hacer algo, esto no puede quedar así...", DialogLayout.Bottom)
    sprite_fondo = create_sprite_raimon()
    sprite_fondo.setPosition(81, 20)
    game.showLongText("RAIMON: Tengo que salir de aquí, subir hasta lo más alto y rogar a DIOS por clemencia. Yo no soy así, que he hecho? Debo demostrar quien soy, lo que valgo y que soy el mejor profesor que pueden tener. LO HARÉ POR VOSOTROS ALUMNOS, VOY A DEMOSTRAROS QUE SOY EL MEJOR PROFE DEL MUNDOOO !!", DialogLayout.Bottom)
    sprite_fondo = eliminar_sprite()
    scene.cameraShake(4, 500)
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    if (level == 1) {
        if (saltos == 2) {
            Raimon.vy += Salto
            music.play(music.createSoundEffect(WaveShape.Sine, 308, 575, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            saltos = 1
        } else if (saltos == 1) {
            Raimon.vy += Salto
            music.play(music.createSoundEffect(WaveShape.Sine, 308, 575, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            saltos = 0
        }
        
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile7
    `, function on_overlap_tile3(sprite22: Sprite, location22: tiles.Location) {
    tiles.setTileAt(location22, assets.tile`
        cielo0
    `)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    info.changeLifeBy(1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    if (level == 1) {
        animation.runImageAnimation(Raimon, assets.animation`
                camina_izquierda
            `, 200, false)
    }
    
})
info.onCountdownEnd(function on_countdown_end() {
    
    power_up = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        meta
    `, function on_overlap_tile4(sprite33: Sprite, location5: tiles.Location) {
    if (level == 1) {
        timer.throttle("action", 5000, function on_throttle() {
            
            music.play(music.stringPlayable("C D E F G A B C5 ", 800), music.PlaybackMode.InBackground)
            level_game = 1 + level_game
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            level_game_cntrl()
        })
    }
    
})
function create_sprite_dios(): Sprite {
    
    sprite36 = sprites.create(img`
            ddddddddddddddddddddddddddddddddddddd44ddd4dddddddddddd1111dd11dddddddddddddddddd44ddddddddddddddddddd111111dddddddddddddddddddddddddddddddddddd111111111dddddd
                    dddddddddddddddddddddddddddddddddddddddddd43dddddddddd111dddddddddddddddddddddddd4bdddddddddddddddddddddd11111111ddddddddddddddddddddddddddddddddd111111ddddddd
                    dddddddddddddddddddddddddddddddddddd4444d443ddddddd11111ddddddddddddddd33ddddddd444ddddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddd11111111ddddddddddddddddd4e444d44d4dddddddddddddddddddddddddddddddddddd44ebddddddddddddddddddddddd111111dddddddddddddddddddddddddddddddddddddddddddddd
                    ddddd11111111111111111111dddd1dddee224444dddddd11dddddddddddddddddddddddd3dddd4effeee43ddddddddddddddddddddd11111111d11111ddddddddddddddddddddddddddddddddddddd
                    d1111111dddd111111111111111111dbeeee44444ddddddddddddddddddddddddddd44d44eee44ef444eee4ee4ddddddddddddddddddddd11111111111ddddddddddddd1ddddddddddddddddddddddd
                    11111ddddddddddd111111111111dd4e244e44444444ddddddddddddddddddddddd444effeeefffc444eeeee4eeee44dddddddddddddddddd1111111ddddddd4eee4ee4dd11111111111ddddddd1111
                    111dddd1ddddddddd1111111111dd4e44444444dd3444ddddddddddddddddddddd44efeeebfe22ee444ee22eeeeefe44ddddddddddddddddddddd1dddddddd34444444e4dd111111111111ddd111111
                    1d1dddd111ddddddd111ddd1d1d4e44ddd444dd111b34edddddddddddddddddddeeef222ee2222e4e4e4e222f4e22ee3eddddddddddddddddddddddddd3444d444444444443dd111111111dd1111111
                    111111111ddddddd111dddddd1d444dd3444444d111d4eddddddddddddddddddde4ee22e442222e44ee44e22e4e222f44ddddddddddddddddddddddddd4444e4444dd444444ddd1dddddddd1111dddd
                    111111111ddddddd11dddddd1dd4444ee444d334d11dd4ddddddddddddddddd44eefeeee44ee4eefeecfe4ee444e2eeeeddddddddddddddddddddddddd44d1dd4d4444444444ddddd1111111111ddd1
                    111111111dddddd11dddd111d44224ee444ddbee311d44dddddddddddddddddddeeefeffeeeeeeecf4eeeebeeeeeeefeeddddddddddddddddddddddddd4d111d4444444444e4dddd1111111111ddddd
                    1111111ddddddd111ddd1111444e44ee44dd1db444e4edddddddddddddddddddd4eefeefeeefeeeebeeee4eeeeefeefee4ddddddddddddddddddddddddddd11dd44444444eeeddd1111111111dddddd
                    1111111ddddddd111d11111d444444ee44dd11dddee44dddddddddddddddddddd34eeeeeeeebeeeefefee4e4eeeeeece44ddddddddddddddddddddddddd4ddddd444e44eeeeeddd1111111111dddddd
                    1111111ddddddd111111111d444444ee443dddddd3eeddddddddddddddddddddddbee44eeebfbee4fefe444c4eee4eee4dddddddddddddddddddddddddd4444dd4444eeeeeeeddd1111111111dddddd
                    1111111dddddddd11111111d444444ee44ddddd4dde4dddddddddddddddddddddddee4fefeefeeffee4ffeffe4fbebf44ddddddddddddddddddddddddddbd4e444444444eeeeedd111111111ddddddd
                    1111111dddddddd1111111d4444444e444ddd4444ee4ddddddddddddddddddddddd4efefe4e44ee4e4444eeee4fceef44dddddddddddddddddddddddddddd4ddd4444e44d44eedd111111111ddddddd
                    11111111dd1ddddd111111d44e44444444ddddd4e444ddddddddddddddddddddddd3eeeee44444444444eeee4e4eec44dddddddddddddddddddddddddddd4d111d444444444eedd111111111dddd111
                    11111111111dddddd11111d44dd1111dd44dddee444dddddddddddddddddddddddddbeeeeeee4444444444444eeeeee4dddddddddddddddddddddddddddddd11dd444444e44eeddd11111111dddd111
                    11111111dd1ddddddd1111dddd11111111d4ee444ddddddddddddddddddddddddddddfeeee444444444444444eefceedddddddddddddddddddddddddddd44dddd44444442e4ee4d11111111ddddd1dd
                    1111d1111dddddddddddddddddddd1d1111de444dddddddddddddddddddddddddddddbdeeee4e4444444444442eeefbdddddddddddddddddddddddddddddddddd44444422e4eeed11111111dddddd11
                    1111dd111dddddddd4ddddddddddddd111111ddddddddddddddddddddddddddddddd1dee444eeeeeeeeeeeee44eeddbdddddddddddddddddddddddddddddddddd4444444e4ee44d1111111ddddddd11
                    111d1111dd11dddddddddddddddddddd111111ddddddddddddddddddddddddddddd11dddd44ddddddddd4eeee4dddddddddddddddddddddddddddddddddddddd4444444444444d11111111ddddddd11
                    111dd111111ddddddddddddddddddddddd111111dddddddddddddddddddddddddddddddddbbdddddddddddb4e44d1111d344ddddddddddddddddddddddddddddd44444dd4444d1111111ddddddddd11
                    111dddddd1ddddddddddddddddddddddddd1111111dddddddddddddddddddd11dddddddddbbbdddbbbbdd1dbb443dddd1d44ddddddddddddddddddddddddddd1dddd111111ddd111111dddddddddd11
                    1111ddddddddddddddd444ddddddddddddd11111111ddddddddddddddddd1111dd444dddddbeddbbbdbbbddddb44dddddddd111d111ddddddddddddddddd11d1d1111111111dddddddddddddddd1ddd
                    11111ddddddddddddd4444ddddddddddddddddddd1111dddddddddd1111111111b444bbddbbeedbeebeebebdddb4444444dd111111111111dddddddddd1111111111111111dddddddddddddddd1d11d
                    111111dd11ddddddd4444ddddddddddddddddddddd111111111111111111dd111344dddddddbfeeeceeeeeeebbb44444444d111d1111111111111dd111dd11111111111dddddddd44ddddddddddd1dd
                    111111111ddddddd44444d44dddddddddddddddd11111111111111111111dd111d4bbbbbbebbecccfcfcfffeeeebddd4444d11dd111111111d11111111111111111dddddddddd4444dddddddddd11dd
                    11111111ddddddd4444444444ddddddd4dddddddd111111111ddd11ddddddd11dddddbeeecccccceeccfffccecebddd444d11dd111111111111111111111111ddddddddddddd44444dddddddd1d1ddd
                    111111111111dd444444444444444444444ddddddddd111ddddd11dddddd4d11d4dbbeccffccfffeeeeeecceeeeddddd4dd11dd11111111111111111111111111ddddddddddd44444ddddddd11ddddd
                    11111111111ddd444444444444d4444444443ddddddddddddddddddddddd4d1ddddbdbeeeeeeeee4444bbebbebddddddddd11dddd11ddd111ddd111111111d1111ddddddddd444444dddddddddddddd
                    1111111111ddd444444444444ddd44444444444ddddddd444dddddddd4dd4d1dddddbbcee44433333333333bbbbddbd1ddd1dddddd1dddd11dddd111111dddddddddddddddd444444ddddddddddd1dd
                    11111111ddddd4444444d444dddd44444444444444dd4444dddd4dd444d4d1ddddddbecbb4433dddddddd3444bebbbddddd1d4dddddddddd1dddddddd1ddddddd4ddd4444444444444ddddddddd1111
                    1111111ddddd4444444dd444ddddddd444444444444444ddddd444444dd4d1ddd1dbeee43334bddddddddbb44bbdddd1ddd1d4ddddddddddd1dddddddddddddd444444444444444444ddddddddd1111
                    111111dddddd444444dd444ddddddd1ddd444444444444dd44444444ddddddddd1dbbbbdbbddd11ddddddddb3eedddd1ddd1d444d4dddddddddddddddddddddd444444444444444444dddddddd11111
                    11111dddddd4444444d4444ddddddd144ddddd44444444444444444ddddddddddddddbbb3333bdddddddddbb3eeddbd11dddd44d444dddd43ddd444444554444444444444444544444d111111111111
                    111dd11dddd444444dd444ddddddddd444d111ddddd44444444ddddddddddddddddbbeebdd34e44bb3444eebdbeebbd11dddddddddddd4444ddd444444444444444444444444d444444d11111111111
                    11d111111dd44444dd444ddddd11d1d44d1111111dddddddddddddddddddddddddbeeebdddbb44eee4ee4bb333beebd111dddddddddddd44444444444444444444444d44444dd4d4444d11111111111
                    ddd1111111dd4444dd44dd1ddd11d1d4dd1111dddddddddddddddddddddddddd11beeb3beeeeccfcbecfcceeebbeeed11dddddddddddddddd444444444444444ddddd1d4444dddd4444ddd111111111
                    dddd111111dd444ddd4dd11dd111d1ddd1111ddddddddddddddddddddddddddd11deebbecccfffffebffffffcebbebdd1dddddddddddddddddddddddddddddddd11dd1d444dddddd444ddddd1111111
                    dddddd1111dd444ddddd11ddd11111ddddddddddd33dd333ddddddddddddd4dd1bdeebbfffcffffeddcfffffffebeddb1dd4ddddddddddddddddddddddddddddd11dd1d44ddd4ddd44dddddddddddd1
                    ddddddddddd4444dddd111dd111111ddd44ddddddddddddddddddddd4ddd44dd1e44bdbeeeeeccebddeeeeeeeebddbee1dd44dddddddddddddddddddddddddddd111d1144ddd4ddd4dddddddddddddd
                    ddddddddddd444d44ddd1d11111111d4444444dddddddddddddddddd4ddddddd1e4ebdddddbbbbbd1db4eebddddddebed1ddddddddddddddddddddddddddddddd111d11dd1dddddd4ddd11ddddddddd
                    dddddddddd444dd44444d1dddd111dd44d444ddd444dddddddddddd4dddddddd1b4ebbdddddddddd1dbb3dddddd3bfeedddddddddddddddddddd4dddddddddddd11111111dddd1dd4ddd1dddddddddd
                    ddd44dddd444ddd44dd44dd44dddddd4ddddddddd4ddddddddddddd4dddddddd1beebbbbdddddbdd1ddbbdddddbbbeeeddd4dddddddddddddddd4444ddddddddd11111111ddddddd444dddddddddddd
                    ddddddddd44dddd44dd4ddd44d1ddddddddddddddddddddd444dd444dddddddd1beebb4bbbddbbddddddbbdddbbbeebddd4443ddddddddddddddd4ddddddddddd1111ddd11111d4d4444ddddddd1111
                    dddddddd444ddd44dd44d1d4dd1ddddddddddddddddddd444444444ddddddddddb3dee4eebb4eefeeeffeebbbbeeeedbdd444344ddddddddddddddddddddddddd111dddddddddddd44d45dddddd1111
                    dddddddd44dddd44dd44d1ddd11dd4dddddddddddddddd44444dddddddddddddddddeeeeeeeeedbecfeedbeeeeeeeedddd4444dd44ddddddddddddd11111dddddd11d11ddd4ddddd44d54dddddd1111
                    ddddddd44dd4d44d1d44d1ddd11ddddddddddddddddddddd44dddddddddddddddddbeeeeebbbbbeefceebdbb4eeeebbdddddd4ddd4dddddddddd1111111111ddddddd11d1dddddd1445544ddddd1111
                    ddddd4444d44d44ddd44d1ddd11ddddddddddddddddddddddddddddddddddddd4decfeeeebddeeeeeeeeeeddbeeeebddddddd44dddddddddddd1111111ddddddddddd11d1dddddd1445444dddd11111
                    ddddd444444dd4d1d444d1ddd11ddddddddddddddddddddddddddddddddddddd4efffeeeebdbecccffcfceebbececbdd44ddd44ddddddddddd111111ddddddddddddd1dd1dddddd1d4d444dd11111dd
                    ddddd444d44d44dddd44d1dd111ddddddd1ddddddddddddddddddddddddddddbfffffeeeebdefeeeeffcffedeeeee4d444ddd44444ddddddd111111ddddddd11dddd111d1dddddd144dd444dddddd11
                    ddddd444d44d44dddd44d1dd111ddddddd11ddddddddddddddddddddddddddbfeeecceece4beebbdddbbbeebeceeee4444444444444dddddd1111111dddd1111dddd11d11d1dddd144dd444dddddd11
                    dddd444444dd4ddddd4dd1dd111ddddddd1111ddddddddddddddddddddddddeeefffecfeeeeeeeeebeb4eeeeecebcfb444444444444ddddd11111111ddd11111dddd11d11d1ddd1144dd444dd111111
                    dddd444d44d44ddddd4dd11d111ddddddddd1111ddddddddddddddddddddd4eefffecffbeeeceebeeeeeeeeecceeeff44444444444ddddd1111111111d1ddddddddd1111dd1ddd1d44dd4444dd11111
                    ddd444dd4dd4ddddddddd111111d4ddddddddd111ddddddddddddddddddd3bfcffcefffeeceecebbeeedeefcfcececee44444444dddddddddddddd1111dddddddddd11111d1ddd1d44dd44445d11ddd
                    ddd444d44dd4ddddddddd11111d44ddddddddddd11dddddddddddddddddddcfffffffff44eeeebbbee44eecffcfffecf44444444ddddddddddddddddddddddd11111111111dddd1d44dd44445d1dddd
                    ddd444d44dddddddddddd11111ddddddddddddddddddddddddddddddddddbfffffffff4444eceb4eee4eeeffffffceffe4444444dddddddddddddddddddddd111111111111dddd1d44dd44444dddddd
                    dd444444dd4dddddddddd11111dddddddddddddddddddddddddddddddddddbbbbcffffe44dbcceeeeeeeccffffffffffe4444444ddddddddddddd111111111111111111111dddd1d44dd44444dddddd
                    dd44444dd34ddd4dddddd11111d1111dd111ddddddddddddddddddddddd11d11ddccff444ddcfccccccfffceeffffffffe44444ddddddddddddd1111111111111111111111dddd1d44dd44454dddddd
                    dd44dd44d4ddd44ddddddd111111111111111ddddddddddddddddddddd1111111ddbebb444ddcfffffffce42eefeeeffffee443ddddddddddddd111111111111111111111dddd11dd44d445554ddddd
                    dd44dd4dddddd44ddddddd1111111111111111dddddddddddddddddd111111111dddddbbd44ddeccceebd4444bfeeeefffefee4ddddddddddddddddd1111111111d111111dddd1dddd4d444544ddddd
                    dd4ddd4dddddd4ddddd11d11111ddddddd11111ddddddddddddddd111111111111111ddbbd444dddd4dd4444ddbf2eeefffeeee44ddddddddddddddddd1ddd1dddd111111dddd1dddd4d444444ddddd
                    d44dddd4ddddddddddd11d1111ddddddddddd111dddddddddddddd1111111111111111dddbddd4dddddd444ddddee2eeeeffffee4dddddddddddddddddddddddddd111111dddd1dddddd4444444ddd1
                    d444ddd44ddd4dddddd1111111dddddddddddddd11ddddddddddd11111111111111111dddddddddddeddbdddddddce2efeefffefeddddddd1ddddddddd1111ddddd111111dddd1dddddd44444444dd1
                    d444dd444ddd4ddddddd111111dddddddddddddddd1dddddddddd11111111111111111dddddddddddeddddddddddefe2eeeefffff4ddddd11111dddd11111dddddd111111ddddddddddd44444444dd1
                    4444dd444ddd4ddddddd111111ddddddddddddddddd11ddddddd11111111111111111ddddddddddd4ddddddddddddee22feeffffff3ddd111dddddd111111dddddd111111ddd1dddddd4444444444dd
                    444444444dd344dddddd111111ddddddddddddddddd11ddddddd11111111111111111ddddddd444444444444dddddbce22feefffffe3dd111dddddd11111111dddd111111ddd1dddddd4444444444dd
                    444444444dd34dddddddd11111dddddddd4dddddddddd1ddddd11111111111111111111dddd444444444444dddddddef22efeefffffedd1ddddddd11111111ddddd11111dddd1dd4dddd4444444444d
                    444444444334ddddddddd11111ddddddddddddddddddddddddd11111111111111111111111dd444422244dd11dddddbcf22ffefffffe4dddddddd111ddddddddddd11111dddd1dd4dddd44444444444
                    444444444334dddddddddd1111ddddddddddddddddddddddddd11111111111111111d1dd11111dd3e2ebdd1111dddddefe2efeefffffe3ddddddddddddddddddddd11111ddd11dd4ddddd4444444444
                    444444444ddddddddddddd1111dddddddd111ddddddddddd4d1111111111111111111d111111deeee22eeeb1111ddddbef22ef2efffff4ddddddddddddddddddddd11111ddd11ddddddddd444444444
                    444444444ddddddddddddd11111ddddd11111111dddddddd4d111111111111111111dddd1111bcee44e22eed1111d1ddefe22ffefffffe44ddddddddddddddddddd11111ddd1ddddddddddd44444544
                    444444444ddddddddddddd11111d4dddd1dd111111dddddddd111111111d1111111ddddd1111fffceccccffb111dddddbefe2effefffffe44dddddddddddddddddd11111ddd1ddddddddddd44444444
                    444444444ddddddddddddd1111dd44dddddddd111111dddddd111111111d11d1111dd1111111cfeceeeeefcd11111111deff22efeefffff444dddddddddddddddd111111ddd1dddddddddddd44444dd
                    444444444ddddddddddddd11111d444dddddddd111111dd4d1111111111dddd11d11d11111111eeee2222eb1111ddddddecfe22ffefffffe444ddddddddddd1111111111dddddddddddddddddd44444
                    444444444ddddddddddddd11111dbe444e43dddd111111d4d1111111dd1dddd111111dd1111111beee2eee11111ddddddbeff22effffffff444ddddddddd111111111111dddddddddddd4dddddd4444
                    44444444dddddddddddddd1d111b4444e4dddddd111111dd111111d11d11ddd11d1111111111111deeefe11111d1d111ddeffe2ecffefffff44ddddddd11111111111111ddddddddddddddddddd4444
                    44444444ddddddddddddddd1d444444dddddd1d1111111d1111111d11d11dbbd1d1ddd1111111111deebd11111dddddd1dbcffeeccfffffffe44ddddd111111111111111dddddddddddddd4ddddd444
                    4444444ddddddddddddddd111dd4d44bdddddd1111111111111111d11dd1dbbddddd1111111111111dd1111111ddd111dbccccccccffffffff444ddd1111111111111111dddddd4dddddddd4ddddd44
                    4444444ddddddddddddddd1111ddddee3dddddddd111111111111dd11dd1bbbddd111dd1111111111111111111dddddcffccc666688fffffffe44dd11111111111111111ddddddd4dddddddd44ddddd
                    4444444ddddddddddddddd1111ddddeee3dddddddddd1d11d1111dd11dd1bebddddd1111111111111111111111111d6888c6b66666888ffffff44dd111111111111111111dddddd44ddddddd444dddd
                    44444444dddddddddddddd111dd44dee44ddddddddddddd111111dd11dddbebddddd1111d11111111111111d11119886668bb96996668ccfffffbdd1111d1111111111111dddddd44ddddddd4444ddd
                    dd444444dddddddddddddd111d4444444e4ddddddddddd111d111dd11dbdbebdddd1111d11111111111111ddd11666666669d999996668cffffffbdd1ddd11111111dd111dddddd444ddddddd4444dd
                    1dd44444dddddddddddddd11dd44444ee44ddddddddddd1111111dd11dbdbcbdd1dd11d1111dd111111111dd11666699666111dd9996668ccfffffdddddd1111111dddd111dddddd444dddddd44444d
                    111d4444dddddddddddddd11dd4444d444eeddddddddd111111111dd1dbdbcbddddd1d1111dd11111dd111d1d666699996911119999999668cffffcddddd11dddddddddd11dddddd444ddddd44444dd
                    1111dd4444444444dddddd11d444444eee4eddddddddd11111111ddd1dbd4cbddd1dd11111dd11d1d11d1d11d666669999d911d1d1d99996688ffffbddd111111ddddddd11ddddddd444dddd44444d1
                    11111ddd44444444dddddd1dd444444e4eee4444ddddd1111111dddd1dbd4c4ddddd11111d11dd11111d1111c866666911191111111199966688fffcddd11111ddddddddd11dddddd444dddd4444dd1
                    111111dddddddddddddddd1d44444444e44444444ddd111111111ddd1dbd4f4dddd11111d111dd11111d1111c88666691d111111111dd9966668ffffbdd1111ddddddddddd1ddddd4dddddddd444d11
                    111111dddd11111111ddddd444444444444e444444dd1111111111dd1dbd4f4ddd1111111111dd11111d111bf886666666111199999999996688ffffedd1111ddddddd4d4dd1ddd44dddddddd4ddd11
                    1111111111111111111111dd444444444eee4444444d11dbbbbbddddddd44f4dd11d1111d111dd11111111dcfcc69966669d1969966666696688fffffdd1ddddddddd44d44dddddd44ddddddd44dd11
                    11111111111111111111111d444444444eeee444444ddddddddddbddddd44f4dd1d1dd11d111dd11111111dcfcc6b99999666669966688866688fffffddddddddddd4444454dddddd4dddddd4444d11
                    1111111ddddd111111111111dd44444444eee44444dd111111111dddddd44fbddd11dd11d111dd11111111dffccbd99911996699996666886668fffffdddddd4ddd44444455dddddd44ddddd4444d11
        `, SpriteKind.Fondo)
    //  sprite2.set_position(76, 81)
    return sprite36
}

scene.onHitWall(SpriteKind.Bola, function on_hit_wall(sprite3: Sprite, location: tiles.Location) {
    sprites.destroy(sprite3, effects.fire, 100)
})
function help2() {
    
    scene.setBackgroundImage(assets.image`
        pizarra
    `)
    sprites.destroy(Play)
    sprites.destroy(Help)
    sprites.destroy(lore)
    sprites.destroy(Selector)
    sprites.destroy(sprite3322)
    sprite_fondo = sprites.create(assets.image`
        logo
    `, SpriteKind.Fondo)
    sprite_fondo.changeScale(3, ScaleAnchor.Middle)
    sprite_fondo.setPosition(80, 45)
    game.showLongText("Bienvenido a RAI'SE", DialogLayout.Bottom)
    game.showLongText("Lo primero que debes hacer es mirar el LORE", DialogLayout.Bottom)
    sprites.destroy(sprite_fondo)
    sprite_fondo = sprites.create(assets.image`
        myImage11
    `, SpriteKind.Fondo)
    sprite_fondo.changeScale(3, ScaleAnchor.Middle)
    sprite_fondo.setPosition(80, 45)
    game.showLongText("", DialogLayout.Bottom)
    game.showLongText("Una vez hecho, estarás listo para jugar. Pero antes déjame darte unos consejos: ", DialogLayout.Bottom)
    game.showLongText("Con el botón A", DialogLayout.Bottom)
    sprites.destroy(sprite_fondo)
    sprite_fondo = sprites.create(assets.image`
        boton_a
    `, SpriteKind.Fondo)
    sprite_fondo.changeScale(1, ScaleAnchor.Middle)
    sprite_fondo.setPosition(80, 45)
    game.showLongText("", DialogLayout.Bottom)
    game.showLongText("Raimon podrá saltar hasta dos veces.", DialogLayout.Bottom)
    game.showLongText("Con los botones de dirección: ", DialogLayout.Bottom)
    sprites.destroy(sprite_fondo)
    sprite_fondo = sprites.create(assets.image`
        myImage12
    `, SpriteKind.Fondo)
    sprite_fondo.changeScale(1, ScaleAnchor.Middle)
    sprite_fondo.setPosition(80, 45)
    game.showLongText("Movemos a Raimon de izquierda a derecha y en caso de haber escaleras al pulsar hacia arriba subirá las escaleras sin tener que saltar.", DialogLayout.Bottom)
    sprites.destroy(sprite_fondo)
    sprite_fondo = sprites.create(assets.image`
        logo
    `, SpriteKind.Fondo)
    sprite_fondo.changeScale(2, ScaleAnchor.Middle)
    sprite_fondo.setPosition(80, 45)
    game.showLongText("Hay 3 niveles en total y caerán proyectiles del cielo así que ándate con ojo.", DialogLayout.Bottom)
    game.showLongText("Por último, cada cierto tiempo sube el nivel de lava, así que ten cuidado y no te duermas.", DialogLayout.Bottom)
    game.showLongText("Todo listo, mucha suerte y que seas el mejor profesor del mundo !", DialogLayout.Bottom)
}

controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    if (level == 1) {
        animation.runImageAnimation(Raimon, assets.animation`
                camina_derecha
            `, 200, false)
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile17
    `, function on_overlap_tile5(sprite333: Sprite, location53: tiles.Location) {
    
    info.startCountdown(5)
    power_up = true
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    tiles.setTileAt(location53, assets.tile`
        cielo0
    `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile10
    `, function on_overlap_tile6(sprite223: Sprite, location223: tiles.Location) {
    tiles.setTileAt(location223, assets.tile`
        myTile6
    `)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    info.changeLifeBy(1)
})
function Level_Control() {
    
    if (level == 0) {
        music.stopAllSounds()
        sprites.destroy(sprite_fondo)
        sprite_fondo = create_sprite_menu()
        sprite_fondo.setPosition(81, 60)
        Play = sprites.create(assets.image`
            play_button
        `, SpriteKind.Button)
        Help = sprites.create(assets.image`
            help_button
        `, SpriteKind.Button)
        lore = sprites.create(assets.image`
            myImage3
        `, SpriteKind.Button)
        Selector = sprites.create(assets.image`
            user
        `, SpriteKind.Cursor)
        Play.setPosition(35, 91)
        Help.setPosition(120, 91)
        lore.setPosition(76, 21)
        controller.moveSprite(Selector)
    } else if (level == 1) {
        music.stopAllSounds()
        sprites.destroyAllSpritesOfKind(SpriteKind.Fondo)
        sprites.destroyAllSpritesOfKind(SpriteKind.Cursor)
        sprites.destroyAllSpritesOfKind(SpriteKind.Button)
        sprites.destroy(sprite_fondo)
        info.setLife(3)
        level_game = 1
        level_game_cntrl()
    }
    
}

function create_sprite_bobo(): Sprite {
    
    sprite36 = sprites.create(img`
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111111111b11111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111111111ecccccfcbb11111111111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111111cbccccfffffffccbb1111111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111111bccffffffffffffffffc11111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111bccfffffffffcfffffffffc1111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111cccffffffffffffffffffffcc11111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111bccfffffffffffffffffffffffc1c11111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111bcfffffffffffffffffffffffffccc1111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111cfffffffffffffffffffffffffffcfc111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111bfffffffffffffffffffffffffffffffc11111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111bfffffffffffffffffffffffffffffffc11111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111bcfffffffffffffffffffffffffffffffc1111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111ccffccceecccffffffffffffffffffffcc111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111cebeebbbbbbbecccccfffcfffffffffffcb11111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbeeeccccfffffffffffffb1111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbeeeecffffffffffffcd111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbeeeccfffffffffffcd111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbeeecfffffffffffc1111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbeffffffffffffc1111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbecffffffffffffd111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbcfffffffffffffb111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbecfffffffffffffc111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbeeccffffffffffffc111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111eeebbbbbbbbbbbbbbbbbbbbbbeeeecccffffffffffc111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111beeeebbbbebbbbbbbbbbbbbbbbeeeeccccfffffffffc111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111eecccebbbeeeeebbbbbbbbeebbeeeecccccffffffffc111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111eecccebbeeecceeeebbbbbeebbeeeeecccccfffffff1111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111eecfbbbbeeeccceeeebbbbeeebeeeeecccccfffffff1111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111becfbbbeeeececeeeeebbbeeeebbeeeeeccccfffffc1111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111bbbbbbbeeebeeccceeeebbeeeeebeeeeecccccffffd1111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111bbbbbbbebbbbeefeeeebbbeeeeeeeeeeeeccccffff11111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111bbbbbbebbbbbbbbbbeebbbbeeeeeeeeeeeecccffff11111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeccccfff11111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111bbbbbbeebbbbbbbbbbbbbbbbbbbeeeeeeeeeeeccffc11111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111bbbbbbeebbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeff111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111bbbbbeeeeebbbbbbbbbbbbbbbbbeeeeeeeebbbbbec111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111bbbeeeceeeebbbbbbbbbbbbbbbbbeeeeeebbbbeceee111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111dbbeeecffeebbbbbbbbbbbbbbbbeeeeeeebbbeeeeeb111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111bbeeeeeeeeebbbbbbbbbbbbbbeeeeeeeeebeebbeeb111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111beeeeeeeeebbbbbbbbbbbbbbeeeeeeeeeeeebbbebb111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111beeeeeeeebbbbbbbbbbbbbeeeeeeeeeeeeefebbebb111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111beeeeeeeebbbbbbbbbbbbeeeeeeeeeeebeeeebbbbb111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111beeeeeeeeeebbbbbbbbbbbeeeeeeeeeeebeebbebbed111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111ceeeebbeeeeeebbbbbbbbeeeeeeeeeeebbeebbbbbe1111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111ceccccceeeeeebbbbbbbbeeeeeeeeeeebeeb3bbbeb1111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111eeecffffceeeeebbbbeeeeeeeeeeeeeebbbbebbee11111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111eeeefffccceeeeebbeeeeeeeeeeeeeeeebbeeeeb111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111eeeeebeeeceeeeeeeeeeeeeeeeeeceeebbebbbe1111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111eeebebebbebeeeeeeeeeeeeeeeecceefebbbeb11111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111ecebbbbbeeeeeeeeeeeeeeeeeeccccecfccc1111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111eceeeeeeeeeeeceeeeeeeeeeeccccceccccc1111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111eceeeeeeeeeeecccceeecceeccccccecccc11111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111ccceeeeeeeeeeccccceecccccccfceeeeec11111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111cceeeeebbeeecccccceecccffffcceeeeec11111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111cceeeeebbeeeccccccccfffffffceeeeee111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111cceeeeeeeeecccccfffffffffffceeeeee111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111cceeceeeccecccffffffffffffceeeeeee111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111cccccccccccccffffffffffffceeeeeeee111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111cccccccccfcfffffffffffffceeeeeeeee111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111ccccccccfffffffffffffffceeeeeeeee111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111cffcccfcffffffffffffffffceeeeeeeeee111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111ffffffcccccfffffffffffffffceeeeeeeeeec111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111fcffffffbeeecffffffffffffffceeeeeeeeeeee111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111cfc1cffffffbbbeeecffffffffffccceeeeeeeeeeeeffc111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111cffb1cffffffffbbbbeeecfffffffccccceeeeeeeeeeeeffffff111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111cc111cfccbffffffbbbbeeeeccccffcccccceeeeeeeeeeeeffffffffb111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111c11cfffc1dbffffffbbbbbeeeecccccccccceeeeeeeeeeeeecffffbbcfcd11dd111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111b1fffffb11bffffffffbbbbbeeeeeecccccccceeeeeeeeeeeeecffffffddcccbcb111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111b1cfcffc111cffffffffffbbbbbbeeeeeeccccccceeeeeeeeeeeeecffffffffddbfffcd1111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111b1ffcd1111bfffff1dffffffebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeecffffdbfffcdddbccbbd1111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111bcfc111dcffffffb11ddfffffffbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeefffffdddcffffcdddbfccd11111111111111111111111111111111111111111111
                    1111111111111111111111111111111111cfc11bfffffffd1111dddcffffffbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeffffffbdddffffffcbdbbfcd111111111111111111111111111111111111111111
                    1111111111111111111111111111111ccfb11ffffffd11111111dd1dffffffebbbbbbbbbbbbeeeeeeeeeeeeeeeeecffffffffdddddcffffffcbbcbdd111111111111111111111111111111111111111
                    11111111111111111111111111111ccfd1bfccfc1111111111111111fffffffbbbbbbbbbbbbeeeeeeeeeeeeeeeecfffffccffffcddddddbcffffcbfcd11111111111111111111111111111111111111
                    111111111111111111111111111ccfd1cfcfc1111111111111111111dfc11bffbbbbbbbbbbbeeeeeeeeeeeeeeeeffffffdddcffffffffcbbddbfffcccdd111111111111111111111111111111111111
                    11111111111111111111111111bfc1cfffd111111111111111111111111dddfffbbbbbbbbbbeeeeeeeeeeeeeeecffffffddddd1bcfffcfffffbdbcffbcbd11111111111111111111111111111111111
                    111111111111111111111111ccfddfcc1111111111111111111db1111111111fffbbbbbbbbbeeeeeeeeeeeeeecffbfffcdddddddddddddddcfffcbbcffcb11111111111111111111111111111111111
                    11111111111111111111111fffdccfd11111111111111111dbb6b111d11d1111fffbbbbbbbbeeeeeeeeeeeeecffdddcfddddddddddddddddddcffffbbffbb1111111111111111111111111111111111
                    1111111111111111111111ffc1fcb111111111111111dbbb66666111111111111fffbbbbbbeeeeeebeeeeeefffbbdddddddd1dddddddddddddddbffffbbfccd11111111111111111111111111111111
                    111111111111111111111ffb1ff1dd11111111111bb6666666666111111111ddd1fffcbbbbeeeeeebeeeecfffdddddd111dd6bbbdddddbbddddddddcffcbffc11111111111111111111111111111111
                    11111111111111111111ffbdcf1dd1111111111bb66666666666b11111111d1ddd1bcffcebeeeeeebeecfbdbbddddddddddd6666cccddddddddddddbbcffbccb1111111111111111111111111111111
                    1111111111111111111ffbdffddd111111111b66666666666666b1111111d111d1111fffffcccccccffcdddbbbdddddddddd666cccccbddddddddddbbbbffbfccd11111111111111111111111111111
                    111111111111111111cfc1ffdbbd11111111b666666666666666b111111d11dd1d11dbbfffffffffffbdddbdddbbbdbdddbb6ccccc66bbbddddddddbbbbbffbfcb11111111111111111111111111111
                    111111111111111111cc1ff1dddd11111111c666666666666666b11111111dddd11dd6666ccfffffcddddddddddbbddddbbcccccc666666bdddddddbbbbbcfccfcd1111111111111111111111111111
                    111111111111111111f1fc1ddddd1ddddd1db666666666666666dd111111111dd11dd666666666bbdddbdddddddddbdddddc666666666666bddddddbbbbbbffccfcd111111111111111111111111111
                    1111111111111111ccdcfdddddd11ddddd1db6666666666666669111111d1ddd111db66666666bddddddddddddddddbddddc6666666666666bddddddbbbccbffcffd111111111111111111111111111
                    111111111111111cfbdffddddddd1ddddd1db6666666666666669d1111d1ddddd11db666666bbdddddddddddddddddbbdddc66666666666666bddddbbbdccccffcfd111111111111111111111111111
                    1111111111111111f1ff1ddddddddddddd1db6666666666666661d111111d1ddd11db666666bdddbdddddddddddddddbbddc666666666666666ddddbbbdccccffccb111111111111111111111111111
                    11111111111111111cf1ddddddddddddddddb6666666666666661111111d1ddd111db666666bddbbddddddddddddddddbbdc666666666666666ddddbbbdcccccffcb111111111111111111111111111
        `, SpriteKind.Fondo)
    //  sprite2.set_position(76, 81)
    return sprite36
}

function create_sprite_infierno(): Sprite {
    
    sprite322 = sprites.create(img`
            fffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffeecfffffcfffffffffffffffffffffffffffff222effffffffffffffcffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffeefffeffffffffffffffffffffffffff2fffffffffffffffff22fffffffffffffffffffffffffffffffffff
                    fffcfffffffffffffffffffffffffffffffffffffffffffffffefffffcffffffffffffffeffffffffffeefffffffffffffffffffefffffffffffffffffeffffffffffffffffffffffffcffffffcffff
                    ffeffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffcffeefffffffffffecfffffccffffffffffffffffffff2fefffffffffffffffffffffffffffffffffffffffffcc
                    fffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffece2eeffffffffffefffffffcffffffffffffffefffffeeeffffffffefffffffeecffffffffffffffffffffffef
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfefffeff2eefffeffffffeffffffffcfffffffffffffffffffeeffffffffcefffffffeecffffffffffffffffffffffff
                    ffffffffffffffffffffffffffcffffffffffffffffffffffffeffffffcffffcfffcee2effffffffffffefffffffffcffffffffffffffffffffffffeffffeeffffffe2effffefcfffffffffffffffff
                    fffffffffffffffffffffffffffcfffffffffffffffffffffffeffffffcfffffffcce2eeffffffffffff2effffffeccffffffffffffefffffffffffcffffffffffeeffffeeeefcfffffffffffffffff
                    fffeffffffffffffffffffffffeefffffffffffffffffffffffeffffffffffefefff22effffffcfffffffeffeefffffffffffffffffefffffffffffefffffeeffffffffeeeecccfffffffffffffffff
                    fffffffffffffffffffffffffeeefffffffffffffffeeefffffffffffffffeefeffe222efffffffffffffefffeffffffffceefffffffffffffffceeeeefee2feeffffff22eecfcffffffffeffffffff
                    ffffffffffffffffffffffffefffffffffffffffffee2effffffffffffffeefe2efe22eefffffcffffffffeffefffffffccfffffffffffffcffefeeeeee22fffffffffe22eecccccffcccfeffffffff
                    fffffffffffffffffffffffffffffffffffcfeffffff2eefffffefffffffeffe2efe2efeffffffffffffe22eecffccfffffffffffffffffecffefe2e2ee2effffffffce22eeecccccfeeceeefffffff
                    ffffffffffffffffffffffffffffff2eefffcffffccfeeefffffeefeeffeeecffefeeeefffffffffffffffeffeeefffffffeeeeeffeecfeeeceeeee2efe2eeffffffffffee2eeceeecceeeeefffffff
                    ffffffffffffffffffffffffffffceff222eeeccfffffeeeffffffeeeeeefffeeeee2eeffffffffffffffeefeeeefeffe2e2222ffffeffeeefeeeeeeffe2fffffffffffff2eeeeeceeeeeefffefffff
                    ffffeecfffffffffcfffffffffffceffeceeeeffffffffeeffeefffeee22222efeeeeeefffffffffffffffeeeeeeeff2222ff2feefffffee2feeeeeefffeefffffffffffffffceeeeeeeeeeeefcfffc
                    ffffeefcffcffccfcfffffffffcfeeefffffffffffffffeeefffeeee22222e2eeee2eefffffffffffffefffeeeeeefffeeefeffffefeefee2feeffcffffffffffffffffffffffeeeeeeeeeeeeeeffff
                    fffeeeccfffcffcfcffffffffffeeefeeecfffffffffeeeeeeeeee2e22222eeee2222eefffffcffffffffffeeeeeeeeeffffe2222222eeee2feefffeffffffffffffffffffffffceeeeeeeeeeeeffff
                    ffffeeeeefeecfcfccffcfffffffffffecffffffffffeeeee2eeeeeffeee222e2222efffffffffffffffffffeee2eeeeeffee2e22222222eeefeffffeceeeffffffffffffffffffeeeeeeeeeeeeffff
                    ffffeeeeeeeeefffccffffffffffffff2eeeffffccffe22ee22222eee2222e222222effeffffffffffffffffce222e2eeeeeee2eeeffe2222eeeeceeee2effffffffffffffffffffeeeeeee2222eccf
                    fffffee22eeeefffcccffffffffffffffffeefffeffffeeee22222e222222222222eefffffffffffffffffffee222e222222efeffffffe2222eeeeeceeeeffffffcfffffffffffffceeeeee22222eff
                    ffffffeeeeeeeeffcfccffffffffefffcffffeefeefffffee22e222222222222e22fffffffffffffffffffffeeee22222e2effffffffffe22222eeeceeeeffffffffffffffffffffffce22222e222cf
                    fffffcfeee22eeffcfcffffffffffffffffcffefffffffffffef222e2222222222eefffffffffffffffffffffeeeef222222ffffffffffce22222eeeeceeeffffffffffcffffffffffffeee2ee22eef
                    ffffceeee2eeeeffcfcfffffffccfcffcffecfefffffe2eeffcf2e2e22222222222effffffffffffffffffefffefff222222ffffffffffee22222222eefffffffffffffffffffffffffffffeee222ef
                    ffcfeeceeeeeeecffcccffffffccfecfeeeeeeeeffffeeffffffeeeeeee22e2222efffffffffffffffffffffffefeee22222eefffffffffe22442222eeeeeffeffffffffffffffffffffcffffe222ef
                    ceee22fcefffeeeffcecccccfcceeeeceeee222eeeeefffffffffe22eee22e2222ffffffffffffffffffffffff2eeee222222efeeefffffe24444222222222eeeeeffffffffffffffffcccffeeeeeef
                    ee2ee2fffffffeccffcccceecfceeecee2eee222222eeffffffeee22e22222222cffffffffffffffffffffffffeeeeee2222efffeeeffff2224444422222222222ecfcffffeeeffffffcceccee22ee2
                    2eeee2ffffffffffffffcceeecfccee2222222222222efffffefeeffe22222efefffffffffffeffffeefffffffff22ee2222fffffeceeeeee2224544222e222eee2eeeffffeeeeffffffcfceee222e2
                    fffe2eefffffffffffceeceeeeeeeeee222222222ee2effffeeff2fff2e222efffffffffffffffffffffffffffff222e2222effffffeeeeee2222444442eeee2ee22ecfffffcffccffffcfceee22222
                    fff222fffffffffffceecceeeeeeee2222ece22effffffffcfffe2fffef222eefffffffffffffffffffffffffffe222222ffcfffffec2fe2eeee2254444222222222efccccccffffecffcfeeee22222
                    efe2effffffffffffceeeeeeee222e222fffffcfffffffffeee2fffffff222efffffffffffffffffffffffeeeeeff2e2eeeffffffffcefe2e2e22245544222222222eccfceeecfcfccffeeeeee2222e
                    ce2eefffffffffffffeeeeee222222222fffffffffffffeceefffffffcf222fffffffffffffffffffffffffffffff2e2eefffffffffeecfece2e222544222222e2222eefcfeeceecccffeeeeee22222
                    fe2eecffffffffffffeeecee22222222cfffffcffffefffeeefffffffee222effffffffffffffffffffffffffffff2eefffffffffff2efffffe2ee24442222222222e22eeeeeeeecceeeeeeeee2222e
                    ffefffeffffffffffffecffe2222222cffffffcfffefffecefffffffffcf222fffffffffffffffffffffffffffffe2effffffffffff2effffee2eee244422222222ef22222eeeeeeeeeeeeeee2222ee
                    ff22efcfffffffffffffffffe22222effffffffffffffffffffffffffffc2222fffffffffffffffffffffffffffee22eeffffffffffeeffffeeefee24442222222efffe22eeeeeeeeeeeeee222222ef
                    ff222ffffcceffffffffffffe2222efffffffffffffffffffffffce2fffcf2fff2eeffeeeeeeeffeefffffffffffff22eefffffffffeeeeffeffeefe22222222fffffff22eeee2222e2ee222224442e
                    ffe222cfffcceffffffffffcce222efffffffffffffffffffffffcfeffcffeffffffffffffffffffffffffffffffff22222effffffffeffffeeeeeef2222e22cffffffee2222222222222222244eeee
                    ffff22ecffffcefffffffffffe222ecffffffffffffffffcfffffcfffffffeffffffffffffffffffffffffffffffff222f2effffffffefffeeeeee2e2fffe22fffffffee2222222ee222444444eccce
                    fffffe2ecccffffffffffccfffe222fffffffffffffffffffffffcffcffff2fffffffffffffffffffffffffffffffe22efeeffffffffffefeeeee2eeeffeeeefffffccee22222efffcee444542fffff
                    ffffc2eecceefffffffffcfffff222ffffffffffffeeefffffffffffeff2eefeffffffffffefffceeeeeeeeeeeeeeeefff2fffffffffffefee2eeeeeeffeeeffffffffeffe222effffe224422efffff
                    ffffeeeceffecffffffffffcfff222ffffffffffefffeffffffffffffcfeefffeffeeeffffffffffffffffffffffffffee2fffffffffffffe22e2eeeffeeefffffffffeffffeffffffee242eecfffff
                    ffffeeececffefcffffffffffff22ecffffffefefffffffffffffcfffefeeffffffffffffffffffffffffffffffffffff22ffffffffffffe22e2ee2efffefffffffffffffffffffffee222eeeffffff
                    fffffeeeeeffffffffffffffeff22cfffffffeeefefeeffffffffcffffffeffffffffffffffffffffffffffffffffffffeefffffffffffff22222eeefffffefffffffffffffffffff222eeeffffffff
                    ffffceeefefffffffffffffeefc2feecfffffe22eeeeefffffffcffffffeffffffffffffffffffffffffffffffffffffffefffffffffffffe222222efeeefeffefffffffffffffffff2eeccffffffff
                    fffffeeeeefffffcffffffffcce2efeffffffe22222eefffffffffffffe2fffffffffffffffffffffffffffffffffffffffffffffffffffff222222fee2ee2efefffffffffffffffffceefffffffffe
                    fffceeeeeeecfceecfffffffcce22eefcfffffe222effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe2222efeefffeff2ffffffffffe22ffffeeffffffffffc
                    fffeeeeefeeefceeeeeeefffecce2eeefffffff222cfffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffe222eeefffffff2effffffffeeeecfffccfeffffffffc
                    ffcceeeeeceeeeeeeeeeeefecfe22eeefffffff22effffffffffffffefffffffffffffffffffffffffffffffffffffffffffeffffffffffffff22eefffffffff2efffffffefffefecffcfefffffffff
                    ffecceeeeeeeeeeeee2eeeeffe22fffefffffff22fffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffcfffffffff222efffffffff2efffffffffffceeeccffefffffffff
                    ffcceeeeeeeeeeeeee22eecfee2effffcffcffe2efffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22eecfffffffe2eefffffffffe2222eeecceffffffff
                    ffeececceeeee22222222efeee2efffffeffe222efffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ecffcfffffffe2eeffffffff2effccefffe22efffff
                    fcccfcccceeee22244422efffffffefffefe2e22efffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffff2eeefffffffeffffffffff222fffff
                    fffffcfcceeee244454efffffffffffffee22222efffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffeee2eeeefffcffffffffffce22ffff
                    ffcfffccceeee44454ecfffffffffffce222222fffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2eee2eeeeffffffffffffffe222ef
                    ffffffcfceeee245d4cffffffffffffc2eef2cffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffeeefeee222cfffffffffffffeeee2
                    ffffffcfceeee444d2cfffffffffffceefffffffffffffffff2ffffffffffffffffffffffffffffeffffcffffffffffffffffefffffffffffffffffffffffffffe2eefff222efffffffffffffffefff
                    ffcfffcfceeee244deeffffffffffeeeefffffffffffffffff2fffffffffffffffffffffffffffffffefffffffffffffffffffffffffffcecffffffffeffffffeefeefff222cffffffffffffffeffff
                    cccfffffccee224ddeefffffffffffffffffccfcffffffffff22cffffffffffffffffffffecffffffffffffffffffffffffffffffffffefffffffffffefffffffffffffffe2cffffffcffffffffcfff
                    fcfffffcfeee244d4eefffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeffffffffefcfffe2cefffcfcffffffffffff
                    fffffcccfeee24d14effefffffffe2ffffffcfffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffcefffffffcfcfffe22eccffcfccfffffffffff
                    fffffccffee244dd4efffffffff2e22ffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffeeeffffff22effff222eeeccccfefffffffffff
                    fffffecffee44dd44eeeffffffe2e222ecfffffeecccefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffeefffffe22eeeecfefeef2effffffc
                    fffffcfeee2441d442efefeeef2fff22fffffffeffffffffffffffcffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffeffffffcefffffff2eeeeeecfeeffefffffff
                    ffffcfcee224d1d44222222eeeeffff2ffffcffffffffffffffffffffffffffccccceecccffffffffffffffffffffffffffffffffffffffffffffffffeeffffffffeffffff22ceeeeefeefefcfffffc
                    ffffeeee2224dd4e4422222eeeffffffefcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffeefffefff2cfffffffeffffeeeeefeeeffffff
                    fffffee222444eeeee22222222fffffeeeffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffeffe2fffffffffffffeceeeeee2efffff
                    ffffee222245ecccffce222222effffcfeefffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecfffffffffeeffffffffffccffeeeeeee2efffff
                    ffcfe2222444ceefffcce2222ffffffffceffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffefffffffffeffffeeeeeee2ffffff
                    ffefe2244442cfffffcfee22efffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffffffecffffeee22222ffffff
                    ffcee22ee4eeffffffffff22efffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeefffffffceefffffffffccfcee2222222effffe
                    fffee2ecccffffffffffff22effffffffffeffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeefcefffffefccfffffffffeeffee2222222effffc
                    ccfe2ecfffffffffffffff22efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffccfffffffffccff222222222efffef
                    ffee2fffffcffffffffffce22fffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffceeeffffffcfffffffffcff222222feeeeefeef
                    fffffffffffffffffecffcff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeffffffffffffffffffcffcf2222ffffffeeeeef
                    fffeffffffffffffcfffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffcffffffffffffffffffee222fffffffefeecf
                    ffffecfffffffffefffffffcffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffcfffffffcfe222fffffffffe2ff
                    eefffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee222effffffffffeff
                    fffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecfffffffffffffffffffffe2222ffffccffffffff
                    fffeeefffffffffffffffffcecfecffffffcffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffeeecffffffffffffffff2222fffefcffffffff
                    fffeeeffffffffffffffffffcecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcccffffffffffffffffffe22ffffffcffffffff
                    fffffffffffffffffffffffefffffcfffffffffcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffeffffffffffeffffff222fffffffffffffff
                    ffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffeffffffe22ffffffffffeffff
                    fffffffffffffffcccfffffffffffffffffcffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcecffffffffffffffffffe22fffffffceccffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccefffffffffffffffffffe222ffffffffffffff
                    fffffffffffffffceecffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff22fffffffffffffff
                    ffffffefffffffeeecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccf22fffffffffffffff
                    fffffeefffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe222ffffffffffffff
                    ffffffeefffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222ffffffffffffff
                    fffffff2effffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe222ffffffffffffff
                    ffffffff2fffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffff
                    ffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222effffcffffffffff
                    fffffffffffffffeccfecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffec
                    ffffffffffffffecffffffffffeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe2fffffffffffffcff
                    ffffffffffffffccffffffffffceffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeecffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff
                    ffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeefffffffffffffffffffffffffffffffffffffffffffffffffccffffffeffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffffffffffffffffffffffffffffffccffffffefffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffeffcffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffcfffff2fccecffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefcccfffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefececffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefeecee2ecffffff
                    fffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcee22222ffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcee22222ffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffe222222efffff
                    ffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefee2222222fffff
                    ffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffeeee222222cffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcceee222cffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeeefffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffccefccffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffcccfcfccffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffccfcffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffefffe2eeeffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefefffe2222eeeffffffffffffffffffffffffffffffffffffffffcff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe2222effffffffffffffffffffffffffffffffffffffffffef
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222efffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Fondo)
    //  sprite2.set_position(76, 81)
    return sprite322
}

function eliminar_sprite(): Sprite {
    
    borrar_sprite = sprites.create(assets.image`
        myImage0
    `, SpriteKind.Fondo)
    //  sprite2.set_position(76, 81)
    return borrar_sprite
}

scene.onHitWall(SpriteKind.Rayo, function on_hit_wall2(sprite5: Sprite, location3: tiles.Location) {
    sprites.destroy(sprite5, effects.starField, 100)
})
scene.onHitWall(SpriteKind.Paloma, function on_hit_wall3(sprite6: Sprite, location4: tiles.Location) {
    sprites.destroy(sprite6, effects.disintegrate, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Paloma, function on_on_overlap4(sprite7: Sprite, otherSprite4: Sprite) {
    info.changeLifeBy(-1)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 308, 4543, 119, 137, 200, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite4, effects.disintegrate, 100)
    scene.cameraShake(4, 200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile18
    `, function on_overlap_tile7(sprite332: Sprite, location52: tiles.Location) {
    
    info.startCountdown(5)
    power_up = true
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    tiles.setTileAt(location52, assets.tile`
        myTile6
    `)
})
function create_sprite_menu(): Sprite {
    
    sprite3322 = sprites.create(img`
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccceeeeeeeeccccccbbbbd1ddd111111111111d1dddddddddddddddd111111d11111111111111dd111dddddbb
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccecccceeeebeeeecccbbbbbbd111111111111111d11dddd11111111ddd111111ddd11111111111111dd1d1dddddd
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcceecceeeebbbbbbbbbbbbbbddd1d111111111111d11ddd1111111111111111111dd11111111111111ddd111ddddb
                    fffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffcccceeeececccccbddbbbbddb3dddd111111111111111111111111dbbbbd11111111ddd1111111111111111111ddddbb
                    fffffffffffffffffffcfffffffffffffcfffcccffffffffccfffffffffffffcccceeeceecccccbbbbbdbbdb3ddddd11111111111111111dbbbbcccccccc11111111111111111111111111111ddbbbc
                    fffffffffffffffffffccffffffcffffcceeeecefffffcffffffffffffffccfffcceeeeeecccccccbbbbdddddbdddddd111111111111111bcccccccccccccd11111111111111111111111111ddbbbcc
                    ffffffffffffffffffceefcffffccffffcceeebbecfffcccffffffffffffcccccceeeeeeeecccccccbbddddbbbdddddd111111111111dbbcccccccccccccccd1111111111111111111111111dbbbbcc
                    ffffffffffffffffffeeeccffccccfffffcceeebbecfffccffffffffffffcccceeeeeebeeeeccccccbbbddddbbbddddd1111111111dbccccccccccccfcfccccd11111111111111111d1111dddbbbbbc
                    ffffffffffffffffffeeecfffeeeccfffcceeeeeebbecfecffffcfffffcfceeeeceeeeeeebeeccccccbbbbdddbdbddddd11111111dcccfffccfffcffffccfcccd11111111111111111111dddbbbbbbb
                    ffffffffffffffffcceccfffeeeccccfffceeeeeeebcfcecfffffffffccccceeeeeeeeeeeeeecccccbbbbbbddddddddd11111111dccffffffcfffffffffccfccbd111111111111111111ddddbbbbbbb
                    ffffffffffffffcccfccfffceeeeeeffefeeeeeffecffcecfeffffffffcccceeeeeeeeeeeeeecccccbbbbbbdddddddd111111111cccffffccffffffffffccffccb11111111111111111dddddbbbbbbb
                    fffffffffffffffffcfeffffeeeeefffcfccfffffffffeecceccccfffecfcceeeeeeeeeeeeebbbbcbbbbbbbbddddddddd111111bcfffffccccfffffffffffffcccb111111111111111dddddddbbbbbb
                    ffffffffffffcffffccecffce4eeefffeefcffffffffeeffeefccfcfffeceeeeeeeeeeeeeeeebbebbbbbbbbbbdddddddd11111dcffffcfcfffffffffffcfffffcccd1111111111111ddddddddbbbbbc
                    fffffffffffffffffcceecfe4e4eeffffcffffffffffebbeefffcfffffceeeeeeeeeeeeeeeeebbbbbbbbbbbbdddddddd11111dcffffcfccffffffffffffffffffccbd111111111111dddddddbbbbbbc
                    ffffffffffffffcfffceeefeeeeefffffffffffffceebbbbefffffffeeeeeeeeeeeeeeecccecbbbbbbbbbbdddddddddd111dbccffffcffffffffffffffffffffffccb1111111111d111ddddbbbbbbbc
                    fffffffffcffffcfffeeeeeeeecefffffffffffffcebbbddecffffffeeebeeeeeeeeeeecccccbbbbbbbbdddddddddddd111dbcffcfffffffffffffffffffffffffccbd1111111111111ddddbbbbbbbb
                    fffffffffccfffffffeeeeeeecffecfffffffffffceebdbdbeffffceeeebebbeeeeeeeecccccbbbbbbbbddddddddddd1111dbcccfffffffffffffffffffffffffffccbd111111111ddddddddbbbbbbb
                    ffffffffccccfffcfcceeeeeefffcecffffffffffccebddbbecffceeeeebbbbbbbbbebbbccbbbbbbbbbdddddddddd111111dbcccbcfffffffffffffffffffffffffccbbd1111111dddddddddbbbbbbb
                    fffffffeeeefffccfceeeeeeefffffbffffffffcccebbbbbbecceeeeeeebbbbbbbbbbbbbbbbbbbbdbbdddddddddd1111111dbcccddbbcffffffffffffffffffffffcccbbd11111ddddddddddddddbbb
                    ffffffceeeefffceceeeeeeeefffffeffffcfffceeebbeeebeefeeeeeeebddddddbbbbbbbbbbdddddddddd11111d11111111cffcdddbbcccffffffffffffffcfffffcfccbdd1dddddddddddd11dddbb
                    fccfffceeeefcfeeccccceeeefffffcfcfffffffebbbbeeeeeeeeeeeeeebdddddbbbbbbbbbbbddddddd1111111111111111dbcfcd1ddbbbecfffffffffffffcffffffcfcccbdd11dddddd11ddddddbb
                    ccccfffeeeececeefcceeeeffffffffffffffffeebdbdbeeeecffeeeeeeebdbbbbbbbbbbbddddddd1111111111111111111bbcfcdd1ddbbeeeecffffffffffcffffffcfccccccbdd1111111ddddddbb
                    cccfffffeeeeefcefffceeecffffffffffffffceeebddddeeffffeeeeeeebdbbbbbbbbbdddd111111111111111111111111dbcccdd11ddbbeeeccffffffccffffffffccffccccccbbd11ddddddddddd
                    cccfffccecfccfcccfffeeeefffefffffffffcceeeeebbbbbeefffcfeeeeebbbbebbbbddd11111111111111111111111111ddcccdd1ddbebbbbecffffcfccffffffffffcfccccffccbddddddddddddb
                    ccfffffcecffccccceeeeeeeeffefffffffffeecffceee44deeecffceeeeeebeeeebbbbddddd111111111111111111111111dccbddbbccbbbbbbccfffcccbcfffffffffffccffccfcbdddddddddddbb
                    ffffccceeecfffffceeeeeeecfffcfffffffeeefffffeeeeeeeeefceeeeeeebeeeeebbbbddddddddd11111111111111111111dcbddecccbbbbbbecfffffebfffffffffffffffffcfccbdddddddddddb
                    ffffcceeeeefcccceeeeeeefffffecffffffcebecfefffeeeeeeefeeeeeeeeebeeeeebbbdddddddddddd1d11111111111111111ddbccfbbdddbbecfffcfbbffffffffffffffffffffccbbdddddddddd
                    fffcfeeeeeecceeeeeeeefcfffffcefffffffebbeebffeffeeeeeceeeeeeeeebeeeeebbbbddddddddddddd111111111111111111bdbecddd1dbbeccffccdefcffffffffffffffffcfffcbddddd11ddd
                    ffffceeeeeeeeccfffeffffffffffbffffffffebbbbececcceeccceeeeeeeeeeeeeeebbbbddddddddddddd1111111111111111111ddbdddd1dbbeecffccdccccfffffffffffffcccfcfccbdd11ddddd
                    fffffeeeeffffffffffffffffffffecffffffcebbbddbbccfcccfcceeeeeeeeeeeeeebbbbbdbbddddddddd11111111111111111111ddddd1dbbbeecfffcbccccfffcfffffffffffcfccfccbbbd1dddd
                    fffcceeeffffffffffffffffffffffffffffffceeebbbdecfffffeeeeeeeeeeeeeeeebbbbbbbbdddddddd111111111111111111111dddddddbbbecffffccccccccccffffffffffffffcfccbbddd1ddd
                    cfcceeefffffffffffffffffffffffffffffffeeeebcebefffffeeeeeeeeeeebeeeebbbbbbbbbbddddddd111111111111111111111dddddddbbbeccfffcccbcccccfffffffffffcccccbddddbbddddd
                    ccceecfffffffffffffffffffffffffffffceeeeeecfbeeffffeeeeeeeeeeeebbebebbbbbbbbbbbdddddd111111111111111111111dbbdddbbbbecfffcccccccccfffffffffcffcbbbddd1d1111dddd
                    ceeeecfffffffffffffffffffffffffffffeeeeeeeffeebfefeebeeeeeeeeeebbbeeebbbbbbbbbbbbbdd1111111111111111111111ddbdddbbbbbcfcccccccccffffffffffffffcdddd11d1d1dddddd
                    eeeecffffffffffffffffffffffffffffffeeeeeeeffffbeeeeebeeeeeeeeeebbeeeeecccbbbbbbbbbddddd111111111111111111dbbebddbbbbccffccccccfcffffffffffffffbdd1111dd1dbdbddd
                    eeeeffffffffffffffffffffffffffcffffeeeeeeebfffeeeeeeb3eeeeeeeeeebeeeecccccbbbbbbbbddddd1111111d1111111111dbccdddbbbbcccfccccccfcfcfffffffffffcdd11111ddddbdbbdb
                    eeeefffffffffffffffffffffffffffffcffeeeeffeccceeeedebbeeeeeeeeeebeeecccccbbbbbbddddddd1111111dd11d111111111dccccbbbecffffcccccfffffffffffffffbdd111111dddbbbbbb
                    eeecfffffffffffcfffffffffffffffffcffceecfceeffceee44ebeeeeeeeeeebbeeccccccbbbdddd111dd11111ddddddd111111111dcccccccccffffcccccffffcfffffffffcdd111111ddd1dcbbcb
                    ceeefffffffffffffefecffffffffffffffffeecfceccffeeeedbeeeeeeeeeeebbeecccccccbbbdddddddd1111ddddddddd11111111bcccccffccfffccecccffffcffffffffcd11111111dddddcbbcc
                    ceeeefffcffffffffcffcffffffffffffffffecefeecfffceee4eeeeeeeeeeeebbbecccccccbbbddddddddddddddddddddd11111111bccbccfffffffccccccecffffffffffccd11111111dddddbcbcc
                    feeeeffffffffccfffffceccfffffffffffffceeeebcfffceb4ddeeeeebeeeeeeebeecccccbbbbdddddddddddddddddddd1111111111bbbccccffffcccccceecfccfffffccccd111dd111bddddbcbcc
                    ceeeeeeefffffceffffffceecffffffffffffceeefefffffce4ddddeeeeeeeeeeeeeeecccbbbbbdddddddddddddddddddd1d111111111bbfcccffffccfccceecfccccffbbcccd111dd11ddbddddcbcc
                    ceeeeeeecfffffcfffffffeecfcfffffffffcfeeeebffffffedddeddeeeeeeeeeeeeeebbbbbbdbbddddddddddddbdddd1d111111111111dcccffffcccccceeeecccccfcddcccd111dd111dbbdddbbbc
                    feeeeebecfffffffffffffceeeccfffccffffcfceecffffffeede4bbbeeeeeeeeeeeccbbbbddddbddddddddddddddddd1d1d1dd1111111dccccfcc1bcceeeeeeeeccffcddccbd1111dd11dbbdddbcbc
                    ceeeeebeccffffffffffffffeeeecfccfcffffffeeffffffeeeceeeebbeeeeeeeeeeccbbbbbbbbbbdddddddddddddddddddddddddd1d1d1bccffcb11cceeeeebecccccbddcbdd111ddd11dbbbddbcbc
                    eeeeeeefffffffffffffffffceeeefcfccfffffffefffffeeeeeeeeebeeeeeeecccccbbdbddddbbbdddddddddddddbdddddddddddddddddbccffbdd1bcceeeebbcbddbbdbbbdd1111dd11dbbbbddbcb
                    eeeeeecffffffffffffffffffceebecccffffffffcfffffceecceeeeeeeeeccecccccbdddbdddbbdddddddddddddbbbbbbddddddddddddddbccbd111dcceeeebbd1ddbbddbddd1111dd11dbbbbddbcb
                    beeeeeffffffffffffffffffffcbecffcffffffffffffffccfffeeeeceeeeececccbbbbbbdddbbbbddddddddbbbbbbbbbbbddddddddddddddddd1111dbccceccd11dbbddddb111111ddd1ddbbbbddcc
                    eefeeffffffffffffffffefffffbeecccffffffffffffffcffffecfcceeeeeeceeebbbbbbbbddbebdddddbbbbbbbbbbbbbbbbbbdddddddddddd11111dbcccccd111dbb111dd11111dddd1ddbbbbddbc
                    eeeecfffffffffffffffceeffffeeeeccfffffffffffffffffffccffceeeecceeeebbbdddddddbeebbddbbbbbbbbbbbbbbccbbbbbbbdddddd11111dd1bbbbb1111dbbd111dd11111dddddddbbbcbdbc
                    eeeeffffffffffffffffeeeefcceeeeeefffffffffffffffffccfcffceeeecceeeebdeeeebbbdbeeeedbbbbbbbbbbbbbbbbbbbbbbbbdbddd1111111dddbdd11111dbbd111dd11111dddddddbbbccbdb
                    eefeffffffffffffffffceebcfeeeeeeecffffffffffffffffeefccccceeeecceeebbebbdbbeeeeeeedbbbbbbbbbbbbbbbbbbbbbbbbbbddd11111111ddbbd11111dbb1111dd11111dddddddbbbccbdb
                    eeefffffffffffffffffceeebefeeeeeefcfffffffffffcfcfefccfffcecccccceebeebbbbbddeeceeddbbbbbbbbbbbbdbdbbbbbbbbddddd11111111d1ddd11111dbb1111db11111dddddddbbbcccbb
                    eecffffffffffffffffffcffeeeeeeeeecffffffcccffffffceccccfcccccccccceeeeeeecfeeccfcebdbbbbbbbbbbbbbbbbbbbbbddddddd1111111111dddd1111dbb1111db11111dddddddbbbbccbb
                    eeffffffffffffffffffcfffeeeeeeeeeecffffffcccccfffccccffcfccccccccceeeeebbbcfcccceebbbbbbbbbbbbbbbbbbbbbbbdddddd111d111111111dd11111bb1d11db11111dddddddbbbbcccb
                    eeffffffffffffffffffffffeeeeeeeeebcffffffccccccfcccccccfccccccccccebeeecfcffecfcfebdbbbbbbbbbbbbbbbbbbbbbbbdddd111d111111111ddd1111bd1d1ddb1111ddddddddbbbccccb
                    eefffffffffffffffffffffffeeeeeeeeebcffffffccccffccceccccccccccccccceeeffeefffffcccbbbbbbbbbbbbbbbbbbbbbbbddddd1111d1111111111ddd111dd1d1ddb1d11ddddddddbbbccccc
                    ecfffffffffffffffffffffffeeeeeeeeeeecfffffccccffcfcfcceccccccfffffccecfeeecfffffcebbbbbbbbbbbdddbbbbbbbbbddddd1111dd111111111ddd111dd1d11db1dd1dddddddbbbbccccc
                    ecfffffffffffffffffffffffeeeeeeeeeebeccfcfccccfcfccceeccccbcfffffffcecfeeeefffffebbbbcbbbbbbbbdddbbbbbbbbbdddd1111dd1111111111ddd11db1dd1bb1dd1dddddddbbbbccccc
                    effffffffffffffffffffffffceeeececeebeccffcccccceeebbeecffffffffffffceeeeeecfffccebbdbbbbdbbbbbbdbbbbbbbbbbdddd11111d111d11111ddddd11b1dddbd1dd1ddddddbbbbbccccc
                    fffffffffffffffffffffffffccfcefecceebecccccfcccfcfffeeeeeeeffffffcceeeeeeecffffebdbbdbbbddbbbbbbbbbbbbbbbdddd111111dd111d11111ddddd1dddddbdddd1ddddddbbbbbccccc
                    ffffffffffffffffffffffffffffffeecefbbefffffffffffccceffffffffcccccceeceeecffcffebddddd11ddddddddddbbbbdbbbdd1111111dd111d111111dddd1dddddbdddd1ddddddbbbbbccccc
                    ffffffffffffffffffffffffffffcffcfecebefffffffffffffffccccccccffccccececfccfcccebbddddddbbbbbbbbbbbbbbbbdbbbd11111111d111dd111111dddddddd1b1ddd1ddddddbbbbbccccc
                    fffffffffffffffffffffffffffffffcceeebecfffffccffcecffffcecceccffcccecfffccceccebddd1ddddb7ebbbbbbeebbbbbbbbd11d11111d1111d1111111dbddddddb1ddd1dbddddbbbbbccccc
                    fffffffffffffffffffffffffffffffcceeb4effffffccffceccffcccecccccccfcfffcceceeceebddd11dddbbbbeebbb7eeeebbbbdd11d11111dd111d1111111ddbdddd1b1dddddbbdddbbbbbccccc
                    ffffffffffffffffffffffffffffffffeccebecfffffffffffccfffcccecccfceeececccfceceeeebddd1dddbbbbeceeeebeeebbbbd111d111111d111dd1111111dbdddddbdddddbbbddbbbbbbccccc
                    fffffffffffffffffffffffffffffffffffebeefffffffffffffffffecffccfceeeeeeefcceeeeeebbdd11dbbbbbbbbbbbbcbbbbbbd1d1dd11111dd111dd111111ddbddddbdddddbbbbdbbbbbbccccc
                    ffffffffffffffffffffffffffffffffffccbbeecccfffccfcefcfccfffffcceeeeeeeeffffeeeeeebbdd11dddddddbdddbdbbdd1d11d1dd111111d111dd1111111dbbdddddddddbbbbbbbbbbcccccc
                    ffffffffffffffffffffffffffffffffffcebdbbbbeeeeecffeeffccfffcceeeeeeeeccfffeeeeeeebbbdd1111ddddbdddd11dddd111dd1d111111d1111dd111d111dbdbdddddddbbbbbbbbbbcccccc
                    ffffffffffffffffffffffffffffffffffccbbeeeeebeeeefffeffcffffeeeeeeeeeecffffeeeeeeeebbbddd11ddddddd1111ddddd111dddd11111d1111dd1111ddd1dbdbdbddddbbbbbbbbbbcccccc
                    ffffffffffffffffffffffffffffffffffcebbeeeeee4eecffccffffffceeeeeeeeeecfffceceebbeeebbdddd11dddd11111dddbd111dbddd111111d1111dd1111dddddbddbddddbbbbbbbbbbcccccc
                    fffffffffffffffffffffffffffffffffffeeeeeebbeebeffcfcfcfccffeeeeeeeeeecfffceccebbbeebbbddd111ddd11111d1ddd111dbd1d111111d1111ddd1111dd1dbbdbddddbbbbbbbbbbcccccc
                    ffffffffffffffffffffffffffffffffffffceecfebeebeecccceececeebd4eeeeeecfffcecffebbbeeebbbddd111d111111d1ddd111dbbddd111111d1111ddd1111ddddbbbddddbbbbbbbbbbcccccc
                    ffffffffffffffffffffffffffffffffffcceeecceeeeebeccceeeeebbdd4eeeebeefffccecccebbdeeeebbddd111111111dd1ddd1111bbddd111111dd111dddd1111ddddbbbdddbbbbbbbbbbcccccc
                    ffffffffffffffffffffffffffffffffffeefeeeeeeeeeeeecceeeebedd4eeeeebecfffceeeccebbdbeeebbbbddd111ddd1d1ddddd111dbb1d11111ddd1111dddd1d11dddbcbbddbbbbbbbbbbcccccc
                    ffffffffffffffffffffffffffffffffffccccceeeeceeebeeeee44e444eeeeeeeecfffceeeccebdddeeeebbbdddd111dddd1ddddd111dbbddd1111dddd111dddd1d11ddddbcbbdbbbbbbbbbbcccccc
                    ffffffffffffffffffffffffffffffffffccfffcccceeeebeeee44444444eeeeeecfffceeeeccebddddeeeebbdbbdd111ddd1ddddddd1dbbd1d1111ddddd111dddd1dd1ddddccbbbbbbbbbbbbcccccc
                    ffffffffffffffffffffffffffffffffffffffffffffcceebee4e444bebeeeeeeefffccceeeeebdddddbeeebbbbbdd1111dd1ddddddd1dbbb111d11ddddd111ddddddd1dddddbccbbbbbbbbbbbccccc
                    fffffffffffffffffffffffffffffffffffffffffffffffeeeeee444ebbebeeeecffcccceeeeebddddddbeeebbbbddd1dddddddddddd11dbb1111d11dddd111dddddddddddbdbcccbbbbbbbbbbccccc
                    fffffffffffffffffffffffffffffffffffffffffffffffceceeeb4bbbeeeeeeefffeccfceeebbdddddddbeebbbddd1ddddddddd1ddd11dbbd111d11ddddd111dbdddddddddbdbccccbbbbbbbbccccc
                    ffffffffffffffffffffffffffffffffffffffffffffffcfcceeeebbeeefeceecffeeeccceeebbdddddddbeeebcddddddddddddd11ddd11dbb111ddddddddd11ddbdddddddddbbbccccbbbbbbbccccc
                    fffffffffffffffffffffcccffffffffffffffffffffffcffcfceeeeeefccecfffceeeccebeebbdddddddbbbecddddddddddddd111ddd11dbbd11ddddddddd11ddbbdddddddddbbbccccccbbbbccccc
                    fffffffffffffffffffffceeccfffffffffffffffffffffffffccceeecffffffffeeeeeeeeebbbddddddddbbbbdddddddddddddd11ddd111bbdd1ddddddddddddddbbbdddddddbbbbccccccbbbccccc
                    ffffffffffffffffffffceeeeecffffffffffffffffffffcffffcfcefffffffffeeceeeeeeebbbdddddddddbbbd1dddddddddddb11dddd11dbbddddddddbbdddddddbbbbddddddbbbbcccccccbccccc
                    ffffffffffffffffffffceeeeeecffffffffffffffffffffffffffffffffffffceeeeeebeebbbdddddddddddbdddddddddddbddbbddddd1ddbbddddbdddbbbddddddbbbbbbbbbddbbbbcccccccccccc
                    ffffffffffffffffffffeeeeeefcccfffffffffffffffffffffffffffffffffceeceebebeeebbbdddddddddddd111ddddd1dbddbbdddbddddbcbdddbbddbbbbddddddbbbbbbbbbbbbbbbccccccccccc
                    ffffffffffffffffffcffceeecfcfccffffffffffffffffffffffffffffffffcceeeeeeeeebbbbddddddddddd1111111111dbddbbbbbbbdddbccbbbbbbdbbbbbdddddbbbbbbbbbbbbbbbbcccccccccc
                    ffffffffffffffffffcfcfcecfffffcccffffffffffffffffffffffffffccfcceeeeebeebebbbdddddddddddd11111111dddb1dbdbbbbcbddbcccbbbbbddbbbbbdddddbbbbbbbbbbbbbbbcccccccccc
                    ffffffffffffffffcffffccccffffcccccfffffffffffffffffffffffffffccceeeebbbbbbbbbdddddddd11d11111111ddddb1dbdbbbbccbbbcccbbbccbbbbbbbbddddbbbbbbbbbbbbbbccccccccccc
                    ffffffffffffffffcfffceeccffccccccfcffffffffffffffffffffffffffceeeeeebbbbbbbbddddd1dd11111111111dddddd1dbddbbbbcbbbbcccbbbcbbbbcbbbdddbbbbbbbbbbbbbbbbcccccccccc
                    ffffffffffffffffffcceecfffffffffffffcfffffffffffffffffffffffceeeeeeebbdbbbbbddddd1d1dd11111111ddddbbd1dbbdbbbbccbbbcccbbbccbbbcccbbbdbbbbbbbbbbbbbbbbcccccfcfcc
                    fffffffffffffffffffeefffffffffffffffcfeeefffffffffffffffffeeeeeebbebbbdbbbdddddddd11ddd111111dddddbddddbbdbcbbcccbbccccbbcccbbccccbbbbbbbbcbbbbcccbbbbcccccfccc
                    ffffffffffffffffffcecfffffffffcfffffcfeeeeefffffffffffffeeeeebdddbddddddddddddddd1ddddd111dddddddddddddbbbbcbbccccccccccbccccccccccbbbbbbbcccbcccccccbccccccfff
                    fffffffffffffffffeeefcffffffcffcfffffceeeeeecffffffffffeeeeeeddddddddddddbddddddddddddddd1ddddddd111dddbbbbcccccccccccfcccccccccccccbbbbbbbccccccccccccccccccff
                    ffffffffffffffffffeeccfccffccfcccffcffceeeeecfffffffffceee4444ebdbbbbdbbdbbbbddddbddbbddddbdddd1d1ddddbcbbbcccccccccccfccccfcccccccccbbbbbbcccccccccccccccccccf
                    ffffffffffffffffffeeccccccfcccccccfffcffcccffffffffffffceeeebbbbbbbbbbbbbbbbdddddbbbbbbddbbbdddddddbbbbcbbccccfffcccccfccccfccccccccccccccccccccccccccccccccccc
                    ffffffffffffffffffcccccccfffcceccfccfffcccfffffffffffffceeeeeebbeeeeebbbbbbbbbbbbbbebbecbbbbddbbbbccccccccffffffffffcfffcccffcccccccccccccccccccccccccccccccccc
                    ffffffffffffffffffccccffcfffffffffffccfffffffffffffffffccccceececcccfebbbbbbbbbbbbbbbbeeeecbccccccfccccfcffffffffffffffffcccffcccccfcfccccccccccccccccccccccccc
                    fffffffffffffffffffffffffffffffffceccfffffffffffffffffcffffcffceebbecceebbbbbbbbbbbbbbeeeccffffffffffffffffffffffffffffffcccfffcffffffccccccccccccccccccccccccc
                    ffffffffffffffffffffffffffffffffffcccfffffffffffffffcccfffffffeeebeeeeebbbbbbbbbbddbdbbbbebecccccffffffffffffffffcfcfcffffccfffffffffffcccccccccccccccccccccccc
                    ffffffffffffffffffffffceebeeecfffffffffffffffffcfffffffffcffcfceebeeeeeeebbbbddbbbbbbbbbbbeececeeeeeeeeccccfcfcceeecccccccccffffffffffffccccccccccccccccccccccc
                    ffffffffffffffffffffcfceeeeeeeeeccccccffffffcccccccffffffcffccccceeceecceeebbbbddddddbbbbbeeeeebbeeeeeeeebeeeeeeeeeeeecccccccccfffffffffffccccccccccccccccccccc
                    fffffffffffffffffffffffceeeccccecccccfffffffffcccffffffccceccfcceececeeeeeebbbbbbbbbdddddbbbbbbbbbbbbbeeeeeebeeeceeebeeecceeeeccfffffffffffcfffcccccccccccccccc
                    fffffffffffffffffffffccccfcfcccccccccfffffffcccccffcffccceecccccccceeeeeebbbbbbbbbbdddddbddddbbbbdbbbbbbbbeeeeeeeeeeceeeeceeeeecfffffffffffffffffcfcccccccccccc
                    fffffffffffffffffffffcfffffffffcfcccffffccfcfcceecccebcccccccceeceeeeeeebeeebbbbbbbbbbdddbdddddbbbbbbbbbbbeeceeeebecffffeceeeeccfffffffffffffffffffffcccccccccc
                    ffffffffffffffffffffffffffffffcfcffffffffffffffccccccccceecccceeebeeeeeeeebeeeeeebbebbbbeeebbbbbbbbbbbbbbbbeecebbeeeeccfffccccefffffffffffffffffffffffccccccccc
                    ffffffffffffffffffffffffffffffffffffffffffffffffffcffccfceeeccceeebeeeeeeeeeeeceeeeeeecccffeebbbbbeeeeeeeeeeecceeeeeecceccffccccfffffffffffffffffffffffcccccfff
                    fffffffffffffffffffffffffffffffcffffffffffffffffffcffffffcccecfcceeeecccfffffcfffcecfffffffceeecceeecceeeeeeeeeeeeeeecccccfffffffffffffffffffffffffffffffffcccc
                    fffffffffffffffffffffffffffffffcffffffffffffffffffffffffffccfeeeeeececccfffccffffffffffffffffffcceeeeeeceeeeccccffccffffffcfffffffffffffffffffffffffffffffccccc
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffceeececfffffcccffffffffffffffffffffcceeeeeeeccffffffffffffffffffffffffffffffffffffffffffffccccccc
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcceeccffffffccccfffffffffffffffffffccceeccfcfffffffcfffcffffffffffffffffffffffffffffffffcccccccc
                    ffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffccccfffffffffcfffffffffffffffffffffffccffcffffffffffffffffffffffffffffffffffffffffffffffcccfff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffccffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Fondo)
    //  sprite2.set_position(76, 81)
    return sprite3322
}

function level_game_cntrl() {
    
    if (level_game == 1) {
        music.play(music.createSong(assets.song`
                musica_infierno
            `), music.PlaybackMode.LoopingInBackground)
        tiles.setCurrentTilemap(tilemap`
            level0
        `)
        Raimon = sprites.create(assets.image`
            user
        `, SpriteKind.Player)
        tiles.placeOnRandomTile(Raimon, assets.tile`
            trueinicio2
        `)
        controller.moveSprite(Raimon, 150, 0)
        Raimon.ay = 800
        //  tiles.place_on_random_tile(mySprite, img("""
        //  trueinicio1
        //  """))
        lava_level = 0
        scene.cameraFollowSprite(Raimon)
    } else if (level_game == 2) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`
                musica_tierra
            `), music.PlaybackMode.LoopingInBackground)
        sprites.destroyAllSpritesOfKind(SpriteKind.Bola)
        sprites.destroy(Raimon)
        tiles.setCurrentTilemap(tilemap`
            level2
        `)
        Raimon = sprites.create(assets.image`
            user
        `, SpriteKind.Player)
        tiles.placeOnRandomTile(Raimon, assets.tile`
            myTile13
        `)
        controller.moveSprite(Raimon, 150, 0)
        Raimon.ay = 800
        scene.cameraFollowSprite(Raimon)
        lava_level = 0
        game.showLongText("RAIMON: ¡He conseguido escapar del infierno!", DialogLayout.Bottom)
        game.showLongText("RAIMON: ...", DialogLayout.Bottom)
        game.showLongText("RAIMON: ¡¡Joder que todavía esta subiendo la lava!!", DialogLayout.Bottom)
    } else if (level_game == 3) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`
                musica_cielo
            `), music.PlaybackMode.LoopingInBackground)
        sprites.destroyAllSpritesOfKind(SpriteKind.Paloma)
        sprites.destroyAllSpritesOfKind(SpriteKind.Bola)
        sprites.destroy(Raimon)
        tiles.setCurrentTilemap(tilemap`
            level6
        `)
        Raimon = sprites.create(assets.image`
            user
        `, SpriteKind.Player)
        tiles.placeOnRandomTile(Raimon, assets.tile`
            myTile
        `)
        controller.moveSprite(Raimon, 150, 0)
        Raimon.ay = 800
        scene.cameraFollowSprite(Raimon)
        lava_level = 0
        game.showLongText("RAIMON: ¡Ahí está Dios!", DialogLayout.Bottom)
        game.showLongText("RAIMON: Espero no quemarme con la lava...", DialogLayout.Bottom)
    } else if (level_game == 4) {
        tiles.setCurrentTilemap(tilemap`
            nivel6
        `)
        sprite_fondo = create_sprite_dios()
        sprite_fondo.setScale(1, ScaleAnchor.Middle)
        game.showLongText("DIOS: HOLA HIJO MÍO...", DialogLayout.Bottom)
        sprites.destroy(sprite_fondo)
        sprite_fondo = create_sprite_raimon()
        sprite_fondo.setPosition(81, 20)
        game.showLongText("RAIMON: ¿Messi eres tú?", DialogLayout.Bottom)
        sprites.destroy(sprite_fondo)
        sprite_fondo = create_sprite_dios()
        sprite_fondo.setScale(1, ScaleAnchor.Middle)
        game.showLongText("DIOS: ¿QUIÉN SINÓ?", DialogLayout.Bottom)
        sprites.destroy(sprite_fondo)
        sprite_fondo = create_sprite_raimon()
        sprite_fondo.setPosition(81, 20)
        game.showLongText("RAIMON: oh dios mío... mmm esto si que no me lo esperaba...", DialogLayout.Bottom)
        sprites.destroy(sprite_fondo)
        sprite_fondo = create_sprite_dios()
        sprite_fondo.setScale(1, ScaleAnchor.Middle)
        game.showLongText("DIOS: LO SÉ... RECUERDO TUS LLANTOS DE FELICIDAD CUANDO EL BARÇA GANÓ EL SEXTETE. SOS UN FIEL CREYENTE POR ESO TE ABRÍ LAS PUERTAS DEL CIELO.", DialogLayout.Bottom)
        sprites.destroy(sprite_fondo)
        sprite_fondo = create_sprite_raimon()
        sprite_fondo.setPosition(81, 20)
        game.showLongText("RAIMON: SIEMPRE HE SIDO FAN DE TI! Por favor, necesito tu ayuda. Verás...", DialogLayout.Bottom)
        sprites.destroy(sprite_fondo)
        sprite_fondo = create_sprite_dios()
        sprite_fondo.setScale(1, ScaleAnchor.Middle)
        game.showLongText("DIOS: LO SÉ TODO. NO TE PREOCUPÉS YO ME ENCARGO HACETE A UN LADO.", DialogLayout.Bottom)
        sprites.destroy(sprite_fondo)
        sprite_fondo = create_sprite_bobo()
        sprite_fondo.setScale(1, ScaleAnchor.Middle)
        game.showLongText("DIOS: ANDÁ PA ALLÁ BOOOBO !", DialogLayout.Bottom)
        sprites.destroy(sprite_fondo)
        sprite_fondo = create_sprite_infierno()
        sprite_fondo.setPosition(81, 60)
        game.showLongText("El Diablo desciende asustado hacia el infierno al escuchar a DIOS.", DialogLayout.Bottom)
        sprites.destroy(sprite_fondo)
        sprite_fondo = create_sprite_dios()
        sprite_fondo.setScale(1, ScaleAnchor.Middle)
        game.showLongText("DIOS: YA SE FUE EL PELOTUDO, AHORA ESCUCHÁME. RAIMON ERES CULÉ, NO HAY MEJOR PERSONA QUE VOS. CONFIÁ EN TI, ESCUCHÁ A TUS ALUMNOS Y SIGUE SIENDO COMO SOS. VALÉS MUCHO.", DialogLayout.Bottom)
        sprite_fondo = create_sprite_raimon()
        sprite_fondo.setPosition(81, 20)
        game.showLongText("RAIMON: Tienes razón Leo...", DialogLayout.Bottom)
        sprites.destroy(sprite_fondo)
        sprite_fondo = create_sprite_dios()
        sprite_fondo.setScale(1, ScaleAnchor.Middle)
        game.showLongText("DIOS: DIOS. LEO ES COMO ME LLAMAN EN LA TIERRA.", DialogLayout.Bottom)
        sprites.destroy(sprite_fondo)
        sprite_fondo = create_sprite_raimon()
        sprite_fondo.setPosition(81, 20)
        game.showLongText("RAMON: Perdón. Te prometo que a partir de ahora escucharé más a mis alumnos. Seré...", DialogLayout.Bottom)
        game.setGameOverMessage(true, "¡EL MEJOR PROFE!")
        game.gameOver(true)
    }
    
}

let rayo : Sprite = null
let paloma : Sprite = null
let bola_fuego : Sprite = null
let lava_level = 0
let borrar_sprite : Sprite = null
let sprite322 : Sprite = null
let power_up = false
let Salto = 0
let saltos = 0
let sprite_fondo : Sprite = null
let sprite3322 : Sprite = null
let Selector : Sprite = null
let sprite36 : Sprite = null
let Raimon : Sprite = null
let lore : Sprite = null
let Help : Sprite = null
let Play : Sprite = null
let level_game = 0
let level = 0
level = 0
level_game = 0
Level_Control()
game.onUpdateInterval(700, function on_update_interval() {
    
    if (level_game == 1) {
        bola_fuego = sprites.create(assets.image`
            myImage4
        `, SpriteKind.Bola)
        tiles.placeOnRandomTile(bola_fuego, assets.tile`
            meta
        `)
        bola_fuego.vy = 200
    } else if (level_game == 2) {
        paloma = sprites.create(assets.image`
            myImage6
        `, SpriteKind.Paloma)
        tiles.placeOnRandomTile(paloma, assets.tile`
            meta
        `)
        paloma.vy = 200
    } else if (level_game == 3) {
        rayo = sprites.create(assets.image`
            myImage7
        `, SpriteKind.Rayo)
        tiles.placeOnRandomTile(rayo, assets.tile`
            meta
        `)
        rayo.vy = 200
    }
    
})
game.onUpdateInterval(1000, function on_update_interval2() {
    
    if (level == 1) {
        lava_level += 1
        for (let index = 0; index < 101; index++) {
            tiles.setTileAt(tiles.getTileLocation(index, lava_level * -1 + 102), assets.tile`
                    lava
                `)
            tiles.setWallAt(tiles.getTileLocation(index, lava_level * -1 + 102), false)
        }
    }
    
})
forever(function on_forever() {
    
    if (level == 1) {
        Raimon.ay = 1000
        if (Raimon.isHittingTile(CollisionDirection.Bottom)) {
            saltos = 2
        }
        
        if (info.life() == 0) {
            if (level_game == 1) {
                game.setGameOverMessage(false, "¿TANTO DUELE?")
                game.gameOver(false)
            } else if (level_game == 2) {
                game.setGameOverMessage(false, "PALOMA DE LA ¿PAZ?")
                game.gameOver(false)
            } else if (level_game == 3) {
                game.setGameOverMessage(false, "TE HA DADO UN CALAMBRE...")
                game.gameOver(false)
            }
            
        }
        
        if (power_up == true) {
            Salto = -500
        } else {
            Salto = -300
        }
        
    } else {
        music.play(music.createSong(assets.song`
                muscia_menu
            `), music.PlaybackMode.UntilDone)
    }
    
})
