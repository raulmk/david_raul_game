@namespace
class SpriteKind:
    Button = SpriteKind.create()


def create_sprites():
    sprite2 = sprites.create(img("""fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccceeeeeeecccccbbbbdd1dd11111111111111ddddddddddddddd11111dd1111111111111ddd1ddddddbbbbb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccceccceeebbbbbecbbbbbbbdd1d111111111111d11dddd11111dd11d111111ddd11111111111111dddddddddbbbb
    fffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffcccceeeceecccbbbbbbbbbbbddddd111111111111111111dddddddbbdd1111111ddd111111111111111111ddddbbccc
    fffffffffffffffffffffffffffffffffffccccfcffffffffffffffffffffffffcceeeeeecccccebbbbbbdd3ddddd11111111111111111dbbbbccccccbbd1111111111111111111111111dddbbbcccc
    fffffffffffffffffffffceffffffffffffceeeeecfffffffffffffffffffcccccceeeeeeecccccccbbddddbbdddddd1111111111111dbcccccccccccccbd111111111111111111111111ddbbbccccc
    fffffffffffffffffffffeecfffffccffffcceeeebecfffccffffffffffffccccceeeeeeeeeccccccbbddddbbbddddd1111111111ddbccccccccccccccccbd1111111111111111d11111ddbbbbccccc
    ffffffffffffffffffffceeecffeeeccfffcceeeeeebecfccffffcfffffcceeeeeeeeeeeeeecccccccbbbbdddbdddddd11111111dbccfffccffccffffccccbd1111111111111111111dddbbbbbbbccc
    ffffffffffffffffffcccccfffceeeeecfffceeeeeeeeffeefffffffffcccceeeeeeeeeeeeeecccccbbbbbbddddddddd1111111dccfffffcffffffffffcfccbd1111111111111111dddddbbbbbbbccc
    fffffffffffffffffccffcffffeeeeecffecccccfffcffceefecffffffcccceeeeeeeeeeeeeeeccccbbbbbbdddddddd1111111dccffffcccffffffffffcffccbd111111111111111dddddbbbbbbbccc
    fffffffffffffffffffccccffcee4ecfffccffffffffffeefeecccccffcccceeeeeeeeeeeecebbbbbbbbbbbbdddddddd11111dbffffffcffffffffffffffffccbd1111111111111dddddddbbbbbcccc
    fffffffffffffffffffcceecfeeeeecffffccffffffffebeeecffcfffffceeeeeeeeeeeeeeeebbbbbbbbbbbbdddddddd111ddbcfffffffffffffffffffffffcccb1111111111111dddddd3bbbbbcccc
    fffffffffffffffffcffceeeceeeeefffffffffffffceebbbecffffffeeeeeeeeeeeecccceecbbbbbbbbbddddddddddd11dbccfffccfffffffffffffffffffffccb1111111111111ddddbbbbbbbcccc
    fffffffffffccfffffffceeeeeeefccffffffffffffeebdddeefffffceebeeeeeeeeeeeeeccccbbbbbbbddddddddddd111dbcffcffffffffffffffffffffffffccbd111111111111dddddbbbbbbbccc
    fffffffffffcccffffffceeeeeefffeecfffffffffceebddbbeeffceeeeebbbbbeeeeeeecccbbbbbbbbdddddddddd11111dbcccccffffffffffffffffffffffffccbd11111111ddddddddbbbbbbbccc
    ffffffffffceeefffcccceeeeeeffffceffffffffcccebbb44ecceeeeeeebbbbbbbbbbbbbbbbbbbbbbddddddddd1111111dbcccddbccfffffffffffffffffffffcccbbd11111dddddddddddddbbbccc
    fffffffffceeeefffeeceecceeefffffecfffffffceeebeee4ecceeeeeeebdddddbbbbbbbbbbdddddddddd1111dd111111dbcfcdddbbeccfffffffffffffcfffffccccbbdddddddddddddd1dddbbccc
    ffffccfffceeeeccceeccccceccfffffcfffffffceebbbbeeeccfceeeeeebdddbbbbbbbbbbbddddddd1111111111111111dbcfcdddddbeecccfffffffffffffffffffcccbbbddddddd11ddddddbbbcc
    fffcccffffceeeeececffcceeeffcfffffffffffeeeebddbeeccffeeeeeeebdbbbbbbbbbdddd1111111111111111111111dbcccddddddbeeeecffffffffffffffffccfccccccbbd11ddddddddddbbbc
    fffcccfffcccccecfcccfceeeefffcfffffffffceeeeebbbbbeefffcceeeebbbbbbbbbbddd111111111111111111111111ddcccdd1ddbebebeecfffcfcefffffffffcfcccccfccbdddddddddddbbbbc
    ffffcffffceecfffccceeeeeeeeffcffffffffceefffeeee4deeeeffeeeeeeebeeeebbbddddd11dd1111111111111111111dcccddbcccbbbbbeeffffccbcffffffffffccfffccccbddddddddddbbbbc
    fffffffccceeecfccccceeeeeccfffcfffffffeeefffffceeeeeeefeeeeeeeebeeeeebbbddddddddddd111111111111111111cbdbccccbbddbbefffffcbffffffffffffffffccfccbddddddddddbbbc
    fffffffceeeeeeceeeeeeeeecfffffceffffffcebeeeefceeeeeeeceeeeeeeebeeeeebbbbddddddddddddd11111111111111111dbeecdddddbbecfffcbbfffffffffffffffffccfccbddddddddddbbb
    ffffffffeeeeeeffffffeeffffffffcefffffffeebbbbeeeccccecceeeeeeeeeeeeeebbbbddddddddddddd11111111111111111ddbbddd1ddbeecfffcbecccfffffffffffffcccfcccbbbdddddddbbb
    fffffffceeecfffffffffffffffffffcfffffffcebbbdbbecfffcfceeeeeeeeeeeeeebbbbbbbbdddddddd11111111111111111111dddddddbbeecfffcbccccccccffffffffffccfcfccbbdddddddbbb
    ffffffceeeffffffffffffffffffffffffffffffeeeeeebbcffffceeeeeeeeebeeeebbbbbbbbbbddddddd11111111111111111111dddddddbbeecfffcececcccccfffffffffffffcccbbbbbdddddbbb
    ccccccceeffffffffffffffffffffffffffffcceeeeeceeeefffceeeeeeeeeeebeeeebbbbbbbbbbdddddd11111111111111111111dbddddbbbbecfffccccbcccffffffcffcfccbbbddd11111ddddbbb
    cccccceefffffffffffffffffffffffffffffeeeeeecfcebeeceeeeeeeeeeeeebbeeebbbbbbbbbbbbddd11111111111111111111dbbbddbbbbbecfcccccccccffffffffffffcbddddddddd1ddddddbb
    ccceeeecfffffffffffffffffffffffffffffeeeeeeefffeeeeee4eeeeeeeeeebbeeecccccbbbbbbbbdddd111111111111111111dbbedddbbbbccfccccccfcfffffffffffffcdd1111ddddbdbdddddb
    fcceeeeffffffffffffffffffffffffffffffeeeeeeeeffeeee4ebbeeeeeeeeebbeeccccccbbbbbbbddddd1111111dd111111111dbccbbbbbbeccffcceccffffffffffffffcdd11111ddddbbbbbbbdb
    fccceecffffffffffffffffffffffffffffccfeeeffcecfceeee4eeeeeeeeeeeebeeccccccbbbbdddddddd11111ddddddd11111111bccccccccffffceeccfffffffffffffcbd111111ddddbbbbbbbbd
    ffcceeeffffffffffffccceffffffffffffcffcecffcecffceee4eeeeeeeeeeeebbeeccccccbbbdddddddd11dddddddddd11111111bcccccffccffcceccccfffcfffffffccd1111111dddddcbccccbb
    fffceeeeffffffffffffcfefffffffffffffffceeeebefffcee44beeeeeeeeeeebbeeccccccbbbdddddddddddddddddddd11111111bcbbeccfffffcccccceeffcffffffccbd111d111dddddbcbccccb
    ffffeeeefccfffffeefffffceefffffffffffffeeecceffffee4ddbbeeeeeeeeeeeeccccccbbbbddddddddddddddddddd1111111111dbcccccfffcccccceeefecccffccccbd111d11ddbdddbcbccccc
    ffffeeeeeeefffffffffffffeeccfffffffffffceeeeefffffe4ddbdbeeeeeeeeeeeeecbbbbbbbbddddddddddddddddddd1111111111dbcccfffcccccceeeececccfcdbccbd111dd11dbbdddbcccccc
    ffffeeeeeeecfffffffffffffeeeeeffffffffffceeecfffffebbee44eeeeeeeeeeeeccbbbbbbbbddddddddddddddddddddddd1111111dcccffcbbceeeeeeeccccffbdbccdd111dd11dbbdddbcbcccc
    fffeeeeeeecfffffffffffffffceeecfcfcfffffffeeffffceeeeeeeebeeeeeeeececcbbbddddbbbddddddddddddddddddddddddddddddcccfcbddbeeeeeebbccbbcbdbbbd1111dd11dbbbddbbccccc
    fffeeeeeeefffffffffffffffffeeeeecfcfffffffccffffceeeceeeeeeeeecccccccbbddddddbbdddddddddddddbbbbddddddddddddddbcccbd11dbeeeeebbbdddbbdbbdd1111ddd1ddbbbddbccccc
    ffceeeeeeffffffffffffffffffffeeccfcfffffffffffffcefffceeeceeeeccecccbbbbbdddbbbbddddddddbbbbbbbbbbddddddddddddddddd1111beeeeeed1ddbbdddbd11111ddd1ddbbbbdbccccc
    ffceeeeefffffffffffffffccffffeeeccffffffffffffffcffffccfcceeeeecceebbbbddbbddbebdddddbbbbbbbbbbbbbbbbbddddddddddd111dd1dbecccd11ddbd11db111111ddddddbbbbddbcccc
    ffeeeeeffffffffffffffffeecfffeeeeecffffffffffffffffffccffceeeecceeebbbbbbbbddbeebbddbbbbbbbbbbbbccbbbbbbbbbbddd111111dddbbdd1111dbbd11db111111ddddddbbbcbdbcccc
    ffeeeeefffffffffffffffceeecfceeeeeeffffffffffffffffcccccfceeeeccceebbbeebbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbddd1111d11ddbbd11111dbb111dbd11111ddddddbbbccbbbccc
    ffeeeefffffffffffffffffeeeeeceeeeeefffffffffffffffcecccffcceccccceeebeebbbbbbecceebbbbbbbbbbbbbbbbbbbbbbbbddddd11111111dddd11111dbb111dbd1111dddddddbbbcccbbccc
    ffeeeefffffffffffffffffccfeeeeeeeeeffffffffcccfcffcecccffccccccccceeeeeebbeceecccebbbbbbbbbbbbbbbbbbbbbbbddddd1111111111dddd1111dbb111dbd1111dddddddbbbcccbbbcc
    fceeefffffffffffffffffffffeeeeeeeeeefffffffccccfffccecffccccccccccceeeeeeecfecffcebdbbbbbbbbbbbbbbbbbbbbbddddd11dd11111111dd1111dbd1d1dbd1111dddddddbbbccccbbcc
    feeeefffffffffffffffffffffceeeeeeeebecfffffcccccfcccecccccccccccccceeecffecffffecebbbbbbbbbbbbbbbbbbbbbbddddd111dd111111111dd1111bd1d1dbd1111dddddddbbbcccccbcc
    feeecffffffffffffffffffffffeeeeeeeeebecfffffccccfcccccccccccccfffffceefceeefffffcebbbbbbbbbbbdbbbbbbbbbbddddd1111d111111111ddd111dd1d1dbd1d1dddddddbbbbcccccbcc
    ceeefffffffffffffffffffffffceeeeeeeeeeecffccccccccceeeeccccecffffffceefeeeefffffebbbbbbbbbbbbdddbbbbbbbbbdddd1111dd111111111ddd11db1d1dbddd1dddddddbbbbcccccccc
    eeeefffffffffffffffffffffffccceececeeeeeccccccccceeeeeeeccccfffffffceeeeeecffffebbbbbbbbdbbbbbbbbbbbbbbbbddd11111dd111111111ddddd1bddddbddd1ddddddbbbbbcccccccc
    eeeffffffffffffffffffffffffffffceeceebeeffffffffffffccccffccfffcccceeeeeeeffcffebdddddddddddddddbbbbbbbbbdd1111111d1111111111dddd1dddddbddd1ddddddbbbbbcccccccc
    eecffffffffffffffffffffffffffffffcfecebeffffffffffffffccccccccffccceeeecccfccfebdddddddbbbbbbbbbbbbbbbbbbbd1111111dd111d111111dddddddddbddddddddddbbbbbcccccccc
    eefffffffffffffffffffffffffffffffeeeeeeeeffffeecfceeffffceecccffcccccffccececeebddd1dddbbbbbbbbbeee7bbbbbd111111111d111dd111111dbddddddbdddddbbdddbbbbbcccccccc
    ecfffffffffffffffffffffffffffffffccceeeeffffffffffffcffffcceeeeeecccffcfcceeeeeebdd11ddbbbbb77bb7eeccbbbbd111d11111d111dd111111ddbdddddddddddbbdddbbbbbcccccccc
    effffffffffffffffffffffffffffffffffffebeefffffffffffffffcecccccfceeeeeecffceeeeebbdd11dbbbbbbbbbbbecbbbbbd111d111111d111dd111111dbbddddbdddddbbbdbbbbbbcccccccc
    effffffffffffffffffffffffffffffffffffebeeeeecffccffccccccffffcceeeeeeeecffceeeeeebbdd1dddddddbdddbddbddddd1d1dd11111d111dd1111111dbbdddbdddddbbbbbbbbbccccccccc
    cfffffffffffffffffffffffffffffffffffcebbbeeeeeeeeffcecfcffffceeeeeeeecffffeeeeeeeebbddd1dddddddddd11ddddd11dddd111111d111dd1111d11dbbddbddddbbbbbbbbbbccccccccc
    ffffffffffffffffffffffffffffffffffffcebbeeeee4eeefffcfffffffeeeeeeeeecffffeeeeeeeebbbddd11ddddd11111ddddd11ddddd11111d1111dd1111ddddbbdbddddbbbbbbbbbbccccccccc
    fffffffffffffffffffffffffffffffffffffeeeeebbee4eeffccffffffceeeeeeeeecfffcecceebeeebbdddd11dddd1111d1ddd111dbddd11111dd111ddd1111ddddbbbddddbbbbbbbbbbccccccccc
    ffffffffffffffffffffffffffffffffffffffceefeeeeeeeceeceeccce4bdeeeeeeefffcccfcebbbeeebbddd1111d11111d1ddd111dbb1d111111d1111ddd1111ddddbbbdddbbbbbbbbbbccccccccc
    ffffffffffffffffffffffffffffffffffffcceecceeeeeeecceeeeeeb4dbeeeeeeecfffeecccebbdbeeebbbddd111111dddddddd11dbbddd11111dd1111ddd1111dddbbbbddbbbbbbbbbbccccccccc
    ffffffffffffffffffffffffffffffffffffccceeeeeeeeeeeceeeeeeed44eeeeeecfffceeeccebddbeeeebbdddd111dddd1dddddd11dbddd1111dddd111dddd1d1ddddbebbbbbbbbbbbbbccccccccc
    ffffffffffffffffffffffffffffffffffffffcffcccceeeeeeeee4e444beeeeeecffffceecccebdddbeeeebbdbdd111ddd1ddddddd1dbbdd11111ddd1111dddddddddddbebbbbbbbbbbbbccccccccf
    fffffffffffffffffffffffffffffffffffffffffffffcceebeeee444ebbeeeeeecfffcceeecebdddddbeeebbbbddd11dd11ddddddd1dbbd111d11dddd111ddddddddddddbecbbbbbbbbbbbcccccccf
    ffffffffffffffffffffffffffffffffffffffffffffffffceeeee444bbeeeeeecffccccceeeebddddddbeeebbbdddddddddddddddd11dbbd11dd1ddddd11dddddddddddbdbeeccbbbbbbbbcccccccf
    fffffffffffffffffffffffffffffffffffffffffffffffffceeeeebbeeeceeeeffceeccceeebbdddddddbeeebbdddddddddddd1ddd11dbbd11ddddddddd11ddbddddddddbbbceccbbbbbbbcccccccf
    ffffffffffffffffffffffffccffffffffffffffffffffffcfccceeeeeecceeffffeeeccceeebbdddddddbbeebddddddddddddd1dddd11dbdd1ddddddddd11ddbbddddddddbbbccccccbbbbcccccccf
    fffffffffffffffffffffffceeecffffffffffffffffffffffffccceeeffffffffeeeeeeeeeebbddddddddbbbbddddddddddddd1dddd11dbbddddddddddddddddbbbdddddddbbbbccccccbbcccccccc
    fffffffffffffffffffffffeeeeeeffffffffffffffffffffffffffccffffffffceeeeeeeeeebbdddddddddbbdddddddddddddbdddddd1dbbbdddddddbbbddddddbbbbbbbddbbbbbccccccccccccccc
    ffffffffffffffffffffffceeeeeccffffffffffffffffffffffffffffffffffceeceeebeeebbbdddddddddddd111dddddddddbbdddbdddbbbdddbbddbbbbddddddbbbbbbbbbbbbbbcccccccccccccc
    ffffffffffffffffffffcffceeecfffccffffffffffffffffffffffffffffffceeeeeeeeeeebbbddddddddddd111111111dbddbbbbbbbdddbcbbbbbbddbbbbdddddbbbbbbbbbbbbbbbccccccccccccc
    fffffffffffffffffffffcfffccffffccccfffffffffffffffffffffffffcffcceeeeebebbbbbddddddddddd11111111dddb1dbdbbbbcbddbccbbbbbbbbbbbbddddbbbbbbbbbbbbbbbccccccccccccc
    fffffffffffffffffffffffeeccffffccccccfffffffffffffffffffffffffccceeeebbbbbbbddddddddd111111111dddddd1dbdbbbbccbbbcccbbbcbbbbbbbbdddbbbbbbbbbbbbbbbccccccfcccccf
    ffffffffffffffffffffffceecffffffffffffcffffffffffffffffffffffceeeeeebbdbbbbbddddd111111111111dddddbd1dbbbbbbbcbbbccccbbccbbbcccbbddbbbbbbbbbbbbbbbccccccccccccf
    fffffffffffffffffffffcccfffffffffffffffceeccffffffffffffffceeeebbbbbbdddbdddddddd111dd111111ddddddddddbbbbbbbcccbcccccbcccbbccccbbbbbbbbcbbbbbcbbbbcccccfccccff
    fffffffffffffffffffcfecffffffffffffffffceeeeefffffffffffceeee4bddddddddddddddddddddddddd11ddddddddddddbbbbcbcccccccccccccccccccccbbbbbbbcccccccccccccccccffffff
    fffffffffffffffffffccecccccffcccccfffcfceeeeeeffffffffffeee4444bdddddddbddddddddddddbdddddddddddd1dddbbbbbccccccccccfcccccccccccccbbbbbbccccccccccccccccccfffff
    ffffffffffffffffffffceccccccfcccccccffffffecffffffffffffeeeeebbbbbbbbbbbbbbbdddddbbbbbbddbbbdddddddbbbccbccccfffccccffccccfcccccccccbccccccccccccccccccccccffff
    ffffffffffffffffffffccecccefffceccffccfffcccffffffffffffeeeeeeebeeeeeeebbbbbbbbbbbbbbbecbbbddbbccccccccccffffffffffcffccccffccccccccccccccccccccccccccccccccfff
    ffffffffffffffffffffcccffffffffffffceccfffffffffffffffffcccccccccccccceebbbbbbbbbbbbbbeeeecccccffffffffffffffffffffffffcccffcccffffccccccccccccccccccccccccccff
    fffffffffffffffffffffffffffffffffffcccfffffffffffffffffcfffffffeeeeeeeeebbbbbbbbbbbbbbbeeecccfffffffffffffffffffffffffffccffffffffffcccccccccccccccccccccccccff
    ffffffffffffffffffffffffcceeeeccffffffffffffffffccffffffffffffceeeeeeeeeeebbbbbdbbbbbbbbbbeeeeeeeeccccccccccccceeeccccccccffffffffffffcccccccccccccccccccccccff
    ffffffffffffffffffffffffceeeeeeeeccccccffffffffccccfffffffccccfceeeeeeceeeebbbbddbdbbbbbbbeeeebbbeeeeeeeeeeeeeeeeeeeeccccccccffffffffffccccccccccccccccccccccff
    fffffffffffffffffffffffffeecccccccccccfffffffffcccffffffcceeccccceeeeeeeeebebbbbbbbbddddbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeceeeeccfffffffffffffffcccccccccccccccccf
    fffffffffffffffffffffffffffffffffcccccfffffcfccceecfceeeccccccceceeeeeeeeeebbbbbbbddbbddddddddbbbbbbbbbbbeeeeeeeeecffceeeeeeecffffffffffffffffffffccccccccccccf
    fffffffffffffffffffffffffffffffffccfffffffffffffceccceeeeecccceeeeeeeeeeeeeeeeeeebbbbbbbeebbbbbbbbbbbbbbbbeecebbeeecccffceeeecfffffffffffffffffffffccccccccccff
    fffffffffffffffffffffffffffffffffffffffffffffffffffccffcffceeccceeeeeeeeeeeeeccceeeeeecccfceeeeeeeeeeeeeeeeeceeeeeecceccfffcccfffffffffffffffffffffffffffffcccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccceeeeeeccffffcfffffcffffffffccccceeeeeeeeeeecccccceccfcccffffffffffffffffffffffffffffffffccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcceeeeeccffffccfffffffffffffffffffcceeeeeeccccfffffccfffffffffffffffffffffffffffffffffffcccccccff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeecffffffcccffffffffffffffffffccceeccccfffffffffffffffffffffffffffffffffffffffffffccccccffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffcccffffff

    """), SpriteKind.Player)
        #sprite2.set_position(76, 81)
    return sprite2


def on_overlap_tile(sprite2, location2):
    if level == 1 and controller.up.is_pressed():
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

def on_overlap_tile2(sprite22, location22):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        lava
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite, location):
    global level_game
    level_game = level_game + 1
    level_game_cntrl()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        meta
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
            mySprite.vy += -250
            mySprite.say_text(saltos)
            saltos = 1
        elif saltos == 1:
            mySprite.vy += -200
            mySprite.say_text(saltos)
            saltos = 0
        else:
            mySprite.say_text(saltos)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def Level_Control():
    global Play, Help, Cursor, level_game
    if level == 0:
        sprite = create_sprites()
        sprite.set_position(81, 60)
        Play = sprites.create(assets.image("""
            play_button
        """), SpriteKind.Button)
        Help = sprites.create(assets.image("""
            help_button
        """), SpriteKind.Button)
        Cursor = sprites.create(assets.image("""
            cursor
        """), SpriteKind.player)
        Play.set_position(76, 25)
        Help.set_position(76, 82)
        controller.move_sprite(Cursor)
    elif level == 1:
        level_game = 1
        sprites.destroy(Play)
        sprites.destroy(Help)
        sprites.destroy(Cursor)
        info.set_life(3)
        level_game_cntrl()
    else:
        pass

def on_up_pressed():
    pass
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap(sprite3, otherSprite):
    global level
    if otherSprite == Play and controller.A.is_pressed():
        level = 1
        Level_Control()
    if otherSprite == Help and controller.A.is_pressed():
        level = 2
        Level_Control()
sprites.on_overlap(SpriteKind.player, SpriteKind.Button, on_on_overlap)

def level_game_cntrl():
    global mySprite, lava_level
    if level_game == 1:
        sprites.destroy(mySprite)
        tiles.set_current_tilemap(tilemap("""
            level0
        """))
        mySprite = sprites.create(assets.image("""
            user
        """), SpriteKind.player)
        controller.move_sprite(mySprite, 150, 0)
        mySprite.ay = 800
        scene.camera_follow_sprite(mySprite)
        tiles.place_on_random_tile(mySprite, assets.tile("""
            trueinicio1
        """))
        lava_level = 0
    elif level_game == 2:
        sprites.destroy(mySprite)
        tiles.set_current_tilemap(tilemap("""
            level2
        """))
        mySprite = sprites.create(assets.image("""
            user
        """), SpriteKind.player)
        controller.move_sprite(mySprite, 150, 0)
        mySprite.ay = 800
        scene.camera_follow_sprite(mySprite)
        tiles.place_on_random_tile(mySprite, assets.tile("""
            myTile
        """))
        lava_level = 0
    else:
        pass
two = False
one = False
lava_level = 0
Cursor: Sprite = None
Help: Sprite = None
Play: Sprite = None
saltos = 0
level_game = 0
mySprite: Sprite = None
level = 0
level = 0
Level_Control()

def on_update_interval():
    global lava_level
    if level == 1:
        lava_level += 1
        for index in range(101):
            tiles.set_tile_at(tiles.get_tile_location(index, lava_level * -1 + 102),
                assets.tile("""
                    lava
                """))
            tiles.set_wall_at(tiles.get_tile_location(index, lava_level * -1 + 102), False)
game.on_update_interval(2000, on_update_interval)

def on_forever():
    global saltos, one, two
    if level == 1:
        mySprite.ay = 1000
        if mySprite.is_hitting_tile(CollisionDirection.BOTTOM):
            saltos = 2
            one = False
            two = False
        if info.life() == 0:
            game.game_over(False)
forever(on_forever)
