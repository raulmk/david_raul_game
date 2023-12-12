@namespace
class SpriteKind:
    Button = SpriteKind.create()
    Cursor = SpriteKind.create()
    Fondo = SpriteKind.create()
    Bola = SpriteKind.create()
    Paloma = SpriteKind.create()
    Rayo = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    sprites.destroy(otherSprite, effects.star_field, 100)
    music.play(music.melody_playable(music.zapped),
        music.PlaybackMode.IN_BACKGROUND)
    info.change_life_by(-1)
    scene.camera_shake(4, 200)
sprites.on_overlap(SpriteKind.player, SpriteKind.Rayo, on_on_overlap)

def on_on_overlap2(sprite32, otherSprite3):
    global level
    if otherSprite3 == Play and controller.A.is_pressed():
        level = 1
        Level_Control()
    if otherSprite3 == Help and controller.A.is_pressed():
        help2()
        sprites.destroy_all_sprites_of_kind(SpriteKind.Fondo)
        Level_Control()
    if otherSprite3 == lore and controller.A.is_pressed():
        cinematica()
        sprites.destroy_all_sprites_of_kind(SpriteKind.Fondo)
        Level_Control()
sprites.on_overlap(SpriteKind.Cursor, SpriteKind.Button, on_on_overlap2)

def on_overlap_tile(sprite2, location2):
    if level == 1 and controller.up.is_pressed():
        music.play(music.string_playable("C E C - - - - - ", 1200),
            music.PlaybackMode.IN_BACKGROUND)
        animation.run_image_animation(mySprite,
            assets.animation("""
                subiranimacion
            """),
            200,
            False)
        mySprite.vy += -30
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_north,
    on_overlap_tile)

def create_sprite_raimon():
    global sprite36
    sprite36 = sprites.create(img("""
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
        """),
        SpriteKind.Fondo)
    # sprite2.set_position(76, 81)
    return sprite36

def on_on_overlap3(sprite4, otherSprite2):
    sprites.destroy(otherSprite2, effects.fire, 100)
    music.play(music.melody_playable(music.small_crash),
        music.PlaybackMode.IN_BACKGROUND)
    scene.camera_shake(4, 200)
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.Bola, on_on_overlap3)

def on_overlap_tile2(sprite222, location222):
    if level == 1:
        game.set_game_over_message(False, "!TE HAS QUEMADO!")
        game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        lava
    """),
    on_overlap_tile2)

def cinematica():
    global sprite34
    scene.set_background_image(assets.image("""
        fondomyImage
    """))
    sprites.destroy(Play)
    sprites.destroy(Help)
    sprites.destroy(lore)
    sprites.destroy(Cursor2)
    sprites.destroy(sprite3322)
    game.show_long_text("MAMÁ: Raimon... Raimon ! Despierta, llegas tarde al cole...RAIMOOOON !",
        DialogLayout.BOTTOM)
    game.show_long_text("RAI: Mmmm...ya voy mamá. Eh? He dicho mamá? Vivo solo desde hace ya mucho, debe haber sido un sueño. Que hora será?",
        DialogLayout.BOTTOM)
    game.show_long_text("LAS 12:15 !!!!", DialogLayout.BOTTOM)
    scene.set_background_image(img("""
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
    """))
    game.show_long_text("Raimon salió corriendo dirección al ITB, el instituto dónde impartía clase y dónde todo los alumnos lo adoraban por ser el mejor profesor que jamás podrían tener. Raimon al ser runner corrió hacía el colegio y llegó a tiempo para impartir clase a los alumnos de DAM. Pero uno de sus alumnos, Raúl, tenía una queja por bajarle medio punto en un trabajo... el día no podía empezar peor para nuestro protagonista.",
        DialogLayout.BOTTOM)
    scene.set_background_image(assets.image("""
        myImage1
    """))
    game.show_long_text("RAÚL: Raimon tenemos que hablar, me has bajado medio punto y a la...",
        DialogLayout.BOTTOM)
    game.show_long_text("Raimon no escuchó al alumno, era muy común que los alumnos se quejasen y había aprendido a no dejarse afectar. Mientras, Raúl seguía...",
        DialogLayout.BOTTOM)
    game.show_long_text("RAÚL: Pues eso, que me tienes que subir medio punto. No me puedes hacer esto...",
        DialogLayout.BOTTOM)
    game.show_long_text("RAIMON: mmm lo siento Raúl pero no puedo hacer nada. Además, es medio punto no te afectará...",
        DialogLayout.BOTTOM)
    scene.set_background_image(assets.image("""
        myImage2
    """))
    game.show_long_text("RAÚL: QUEEEEEE??? LO NECESITO PARA ACCEDER A LA UNIVERSIDAD !! YA NO ERES EL MEJOR PROFE QUE HE TENIDO...",
        DialogLayout.BOTTOM)
    sprite34 = create_sprite_raimon()
    sprite34.set_position(81, 20)
    game.show_long_text("Lo que más quería Raimon en la vida era al FCBarcelona y a sus alumnos. Esta frase le afectó y recapacitó sobre si mismo, si estaba haciendo lo correcto, si era el mejor profesor que podían tener... Esa misma noche, después de pensar horas y horas, exclamó al cielo...",
        DialogLayout.BOTTOM)
    game.show_long_text("RAIMON: PORQUE DIOS?? QUE HE HECHO YO PARA MERECER ESTO?? DESEO VENDER MI ALMA A CAMBIO DE CONVERTIRME EN EL MEJOR PROFESOR QUE PUEDAN TENER !!",
        DialogLayout.BOTTOM)
    sprite34 = eliminar_sprite()
    sprite34 = create_sprite_infierno()
    sprite34.set_position(81, 60)
    game.show_long_text("RAIMON: Eh? Qué hago aquí? Es esto un sueño?",
        DialogLayout.BOTTOM)
    game.show_long_text("DIABLO: JA JA JA ! Bienvenido a tu nuevo hogar, me has concedido tu alma a cambio de ser el mejor profesor que podían tener muajajaja",
        DialogLayout.BOTTOM)
    game.show_long_text("RAIMON: Exacto! Pero por qué estoy aquí? Debería estar dando clase... ese era el trato!",
        DialogLayout.BOTTOM)
    game.show_long_text("DIABLO: JAJAJA verás, querías ser el mejor profesor que puedan tener a cambio de tu alma. Pero hay un pequeño detalle, ya lo eres! Por lo tanto tu alma me pertenece...",
        DialogLayout.BOTTOM)
    game.show_long_text("RAIMON: Ya lo soy? En serio?", DialogLayout.BOTTOM)
    game.show_long_text("DIABLO: No me malinterpretes, ya sabes como va la Educación en catalunya. Hoy en día ponen a cualquiera MUAJAJAJA",
        DialogLayout.BOTTOM)
    game.show_long_text("RAIMON: Serás cabrón... y nunca mejor dicho. Debo hacer algo, esto no puede quedar así...",
        DialogLayout.BOTTOM)
    sprite34 = create_sprite_raimon()
    sprite34.set_position(81, 20)
    game.show_long_text("RAIMON: Tengo que salir de aquí, subir hasta lo más alto y rogar a DIOS por clemencia. Yo no soy así, que he hecho? Debo demostrar quien soy, lo que valgo y que soy el mejor profesor que pueden tener. LO HARÉ POR VOSOTROS ALUMNOS, VOY A DEMOSTRAROS QUE SOY EL MEJOR PROFE DEL MUNDOOO !!",
        DialogLayout.BOTTOM)
    sprite34 = eliminar_sprite()
    scene.camera_shake(4, 500)

def on_overlap_tile3(sprite22, location22):
    tiles.set_tile_at(location22, assets.tile("""
        cielo0
    """))
    music.play(music.melody_playable(music.magic_wand),
        music.PlaybackMode.IN_BACKGROUND)
    info.change_life_by(1)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile7
    """),
    on_overlap_tile3)

def on_right_pressed():
    if level == 1:
        animation.run_image_animation(mySprite,
            assets.animation("""
                camina_derecha
            """),
            200,
            False)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    if level == 1:
        animation.run_image_animation(mySprite,
            assets.animation("""
                camina_izquierda
            """),
            200,
            False)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_a_pressed():
    global saltos
    if level == 1:
        if saltos == 2:
            mySprite.vy += Salto
            music.play(music.create_sound_effect(WaveShape.SINE,
                    308,
                    575,
                    255,
                    0,
                    200,
                    SoundExpressionEffect.NONE,
                    InterpolationCurve.LINEAR),
                music.PlaybackMode.IN_BACKGROUND)
            saltos = 1
        elif saltos == 1:
            mySprite.vy += Salto
            music.play(music.create_sound_effect(WaveShape.SINE,
                    308,
                    575,
                    255,
                    0,
                    200,
                    SoundExpressionEffect.NONE,
                    InterpolationCurve.LINEAR),
                music.PlaybackMode.IN_BACKGROUND)
            saltos = 0
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_countdown_end():
    global power_up
    power_up = False
info.on_countdown_end(on_countdown_end)

def on_overlap_tile4(sprite33, location5):
    if level == 1:
        
        def on_throttle():
            global level_game
            music.play(music.string_playable("C D E F G A B C5 ", 800),
                music.PlaybackMode.IN_BACKGROUND)
            level_game = 1 + level_game
            sprites.destroy_all_sprites_of_kind(SpriteKind.player)
            level_game_cntrl()
        timer.throttle("action", 5000, on_throttle)
        
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        meta
    """),
    on_overlap_tile4)

def on_hit_wall(sprite3, location):
    sprites.destroy(sprite3, effects.fire, 100)
scene.on_hit_wall(SpriteKind.Bola, on_hit_wall)

def help2():
    global sprite34
    scene.set_background_image(assets.image("""
        pizarra
    """))
    sprites.destroy(Play)
    sprites.destroy(Help)
    sprites.destroy(lore)
    sprites.destroy(Cursor2)
    sprites.destroy(sprite3322)
    sprite34 = sprites.create(assets.image("""
        logo
    """), SpriteKind.Fondo)
    sprite34.change_scale(3, ScaleAnchor.MIDDLE)
    sprite34.set_position(80, 45)
    game.show_long_text("Bienvenido a RAI'SE", DialogLayout.BOTTOM)
    game.show_long_text("Lo primero que debes hacer es mirar el LORE",
        DialogLayout.BOTTOM)
    sprites.destroy(sprite34)
    sprite34 = sprites.create(assets.image("""
        myImage11
    """), SpriteKind.Fondo)
    sprite34.change_scale(3, ScaleAnchor.MIDDLE)
    sprite34.set_position(80, 45)
    game.show_long_text("", DialogLayout.BOTTOM)
    game.show_long_text("Una vez hecho, estarás listo para jugar. Pero antes déjame darte unos consejos: ",
        DialogLayout.BOTTOM)
    game.show_long_text("Con el botón A", DialogLayout.BOTTOM)
    sprites.destroy(sprite34)
    sprite34 = sprites.create(assets.image("""
        boton_a
    """), SpriteKind.Fondo)
    sprite34.change_scale(1, ScaleAnchor.MIDDLE)
    sprite34.set_position(80, 45)
    game.show_long_text("", DialogLayout.BOTTOM)
    game.show_long_text("Raimon podrá saltar hasta dos veces.", DialogLayout.BOTTOM)
    game.show_long_text("Con los botones de dirección: ", DialogLayout.BOTTOM)
    sprites.destroy(sprite34)
    sprite34 = sprites.create(assets.image("""
        myImage12
    """), SpriteKind.Fondo)
    sprite34.change_scale(1, ScaleAnchor.MIDDLE)
    sprite34.set_position(80, 45)
    game.show_long_text("Movemos a Raimon de izquierda a derecha y en caso de haber escaleras al pulsar hacia arriba subirá las escaleras sin tener que saltar.",
        DialogLayout.BOTTOM)
    sprites.destroy(sprite34)
    sprite34 = sprites.create(assets.image("""
        logo
    """), SpriteKind.Fondo)
    sprite34.change_scale(3, ScaleAnchor.MIDDLE)
    sprite34.set_position(80, 45)
    game.show_long_text("Hay 3 niveles en total y caerán proyectiles del cielo así que ándate con ojo.",
        DialogLayout.BOTTOM)
    game.show_long_text("Por último, cada cierto tiempo sube el nivel de lava, así que ten cuidado y no te duermas.",
        DialogLayout.BOTTOM)
    game.show_long_text("Todo listo, mucha suerte y que seas el mejor profesor del mundo !",
        DialogLayout.BOTTOM)

def on_overlap_tile5(sprite333, location53):
    global power_up
    info.start_countdown(5)
    power_up = True
    music.play(music.melody_playable(music.ba_ding),
        music.PlaybackMode.IN_BACKGROUND)
    tiles.set_tile_at(location53, assets.tile("""
        cielo0
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile17
    """),
    on_overlap_tile5)

def on_overlap_tile6(sprite223, location223):
    tiles.set_tile_at(location223, assets.tile("""
        myTile6
    """))
    music.play(music.melody_playable(music.magic_wand),
        music.PlaybackMode.IN_BACKGROUND)
    info.change_life_by(1)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile10
    """),
    on_overlap_tile6)

def Level_Control():
    global Play, Help, lore, Cursor2, level_game
    if level == 0:
        music.stop_all_sounds()
        sprites.destroy(sprite34)
        sprite35 = create_sprite_menu()
        sprite35.set_position(81, 60)
        Play = sprites.create(assets.image("""
            play_button
        """), SpriteKind.Button)
        Help = sprites.create(assets.image("""
            help_button
        """), SpriteKind.Button)
        lore = sprites.create(assets.image("""
            myImage3
        """), SpriteKind.Button)
        Cursor2 = sprites.create(assets.image("""
            user
        """), SpriteKind.Cursor)
        Play.set_position(35, 91)
        Help.set_position(120, 91)
        lore.set_position(76, 21)
        controller.move_sprite(Cursor2)
    elif level == 1:
        music.stop_all_sounds()
        sprites.destroy_all_sprites_of_kind(SpriteKind.player)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Fondo)
        sprites.destroy(Play)
        sprites.destroy(Help)
        sprites.destroy(lore)
        sprites.destroy(Cursor2)
        sprites.destroy(sprite36)
        sprites.destroy(sprite322)
        sprites.destroy(sprite3322)
        sprites.destroy(sprite34)
        sprites.destroy(sprite35)
        info.set_life(3)
        level_game = 1
        level_game_cntrl()
def create_sprite_infierno():
    global sprite322
    sprite322 = sprites.create(img("""
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
        """),
        SpriteKind.Fondo)
    # sprite2.set_position(76, 81)
    return sprite322
def eliminar_sprite():
    global borrar_sprite
    borrar_sprite = sprites.create(assets.image("""
        myImage0
    """), SpriteKind.Fondo)
    # sprite2.set_position(76, 81)
    return borrar_sprite

def on_hit_wall2(sprite5, location3):
    sprites.destroy(sprite5, effects.star_field, 100)
scene.on_hit_wall(SpriteKind.Rayo, on_hit_wall2)

def on_hit_wall3(sprite6, location4):
    sprites.destroy(sprite6, effects.disintegrate, 100)
scene.on_hit_wall(SpriteKind.Paloma, on_hit_wall3)

def on_on_overlap4(sprite7, otherSprite4):
    info.change_life_by(-1)
    music.play(music.create_sound_effect(WaveShape.SAWTOOTH,
            308,
            4543,
            119,
            137,
            200,
            SoundExpressionEffect.VIBRATO,
            InterpolationCurve.CURVE),
        music.PlaybackMode.IN_BACKGROUND)
    sprites.destroy(otherSprite4, effects.disintegrate, 100)
    scene.camera_shake(4, 200)
sprites.on_overlap(SpriteKind.player, SpriteKind.Paloma, on_on_overlap4)

def on_overlap_tile7(sprite332, location52):
    global power_up
    info.start_countdown(5)
    power_up = True
    music.play(music.melody_playable(music.ba_ding),
        music.PlaybackMode.IN_BACKGROUND)
    tiles.set_tile_at(location52, assets.tile("""
        myTile6
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile18
    """),
    on_overlap_tile7)

def create_sprite_menu():
    global sprite3322
    sprite3322 = sprites.create(img("""
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
        """),
        SpriteKind.Fondo)
    # sprite2.set_position(76, 81)
    return sprite3322
def level_game_cntrl():
    global mySprite, lava_level
    if level_game == 1:
        sprites.destroy(mySprite)
        music.play(music.create_song(assets.song("""
                musica_infierno
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        tiles.set_current_tilemap(tilemap("""
            level0
        """))
        sprites.destroy(sprite34)
        mySprite = sprites.create(assets.image("""
            user
        """), SpriteKind.player)
        tiles.place_on_random_tile(mySprite, assets.tile("""
            trueinicio2
        """))
        controller.move_sprite(mySprite, 150, 0)
        mySprite.ay = 800
        # tiles.place_on_random_tile(mySprite, img("""
        # trueinicio1
        # """))
        lava_level = 0
        scene.camera_follow_sprite(mySprite)
    elif level_game == 2:
        music.stop_all_sounds()
        music.play(music.create_song(assets.song("""
                musica_tierra
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Rayo)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Paloma)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Bola)
        sprites.destroy(mySprite)
        sprites.destroy(bola_fuego)
        sprites.destroy(sprite34)
        tiles.set_current_tilemap(tilemap("""
            level2
        """))
        mySprite = sprites.create(assets.image("""
            user
        """), SpriteKind.player)
        tiles.place_on_random_tile(mySprite, assets.tile("""
            myTile13
        """))
        controller.move_sprite(mySprite, 150, 0)
        mySprite.ay = 800
        scene.camera_follow_sprite(mySprite)
        lava_level = 0
        game.show_long_text("RAIMON: ¡He conseguido escapar del infierno!",
            DialogLayout.BOTTOM)
        game.show_long_text("RAIMON: ...", DialogLayout.BOTTOM)
        game.show_long_text("RAIMON: ¡¡Joder que todavía esta subiendo la lava!!",
            DialogLayout.BOTTOM)
    elif level_game == 3:
        music.stop_all_sounds()
        music.play(music.create_song(assets.song("""
                musica_cielo
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Rayo)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Paloma)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Bola)
        sprites.destroy(bola_fuego)
        sprites.destroy(paloma)
        sprites.destroy(mySprite)
        sprites.destroy(sprite34)
        tiles.set_current_tilemap(tilemap("""
            level6
        """))
        mySprite = sprites.create(assets.image("""
            user
        """), SpriteKind.player)
        tiles.place_on_random_tile(mySprite, assets.tile("""
            myTile
        """))
        controller.move_sprite(mySprite, 150, 0)
        mySprite.ay = 800
        scene.camera_follow_sprite(mySprite)
        lava_level = 0
        game.show_long_text("RAIMON: ¡Ahí está Dios!", DialogLayout.BOTTOM)
        game.show_long_text("RAIMON: Espero no quemarme con la lava...",
            DialogLayout.BOTTOM)
    elif level_game == 4:
        game.game_over(True)
rayo: Sprite = None
paloma: Sprite = None
bola_fuego: Sprite = None
lava_level = 0
borrar_sprite: Sprite = None
sprite322: Sprite = None
power_up = False
Salto = 0
saltos = 0
sprite34: Sprite = None
sprite3322: Sprite = None
Cursor2: Sprite = None
sprite36: Sprite = None
mySprite: Sprite = None
lore: Sprite = None
Help: Sprite = None
Play: Sprite = None
level_game = 0
level = 0
level = 0
level_game = 0
Level_Control()

def on_update_interval():
    global bola_fuego, paloma, rayo
    if level_game == 1:
        bola_fuego = sprites.create(assets.image("""
            myImage4
        """), SpriteKind.Bola)
        tiles.place_on_random_tile(bola_fuego, assets.tile("""
            meta
        """))
        bola_fuego.vy = 200
    elif level_game == 2:
        paloma = sprites.create(assets.image("""
            myImage6
        """), SpriteKind.Paloma)
        tiles.place_on_random_tile(paloma, assets.tile("""
            meta
        """))
        paloma.vy = 200
    elif level_game == 3:
        rayo = sprites.create(assets.image("""
            myImage7
        """), SpriteKind.Rayo)
        tiles.place_on_random_tile(rayo, assets.tile("""
            meta
        """))
        rayo.vy = 200
game.on_update_interval(700, on_update_interval)

def on_update_interval2():
    global lava_level
    if level == 1:
        lava_level += 1
        for index in range(101):
            tiles.set_tile_at(tiles.get_tile_location(index, lava_level * -1 + 102),
                assets.tile("""
                    lava
                """))
            tiles.set_wall_at(tiles.get_tile_location(index, lava_level * -1 + 102), False)
game.on_update_interval(1000, on_update_interval2)

def on_forever():
    global saltos, Salto
    if level == 1:
        mySprite.ay = 1000
        if mySprite.is_hitting_tile(CollisionDirection.BOTTOM):
            saltos = 2
        if info.life() == 0:
            if level_game == 1:
                game.set_game_over_message(False, "¿TANTO DUELE?")
                game.game_over(False)
            elif level_game == 2:
                game.set_game_over_message(False, "PALOMA DE LA ¿PAZ?")
                game.game_over(False)
            elif level_game == 3:
                game.set_game_over_message(False, "TE HA DADO UN CALAMBRE...")
                game.game_over(False)
        if power_up == True:
            Salto = -500
        else:
            Salto = -300
    else:
        music.play(music.create_song(assets.song("""
                muscia_menu
            """)),
            music.PlaybackMode.UNTIL_DONE)
forever(on_forever)
