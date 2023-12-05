@namespace
class SpriteKind:
    Button = SpriteKind.create()

def on_a_pressed():
    global saltos
    if level == 1:
        if saltos == 2:
            mySprite.vy += -250
            mySprite.say_text(saltos)
            saltos = 1
        elif saltos == 1:
            mySprite.vy += -150
            mySprite.say_text(saltos)
            saltos = 0
        else:
            mySprite.say_text(saltos)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile(sprite2, location2):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        lava
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite, location):
    global level_game
    game.game_over(True)
    level_game = level_game + 1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        meta
    """),
    on_overlap_tile2)

def on_left_pressed():
    if level == 1:
        animation.run_image_animation(mySprite,
            assets.animation("""
                camina_izquierda
            """),
            200,
            False)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    if level == 1:
        animation.run_image_animation(mySprite,
            assets.animation("""
                camina_derecha
            """),
            200,
            False)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def Level_Control():
    global Play, Help, Cursor, level_game, mySprite, lava_level, one, two
    if level == 0:
        scene.set_background_image(assets.image("""
            myImage
        """))
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
        one = False
        two = False
    else:
        pass

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
    if lava_level == 1:
        pass
    elif lava_level == 2:
        pass
    else:
        pass
two = False
one = False
lava_level = 0
Cursor: Sprite = None
Help: Sprite = None
Play: Sprite = None
level_game = 0
mySprite: Sprite = None
saltos = 0
level = 0
level = 0
Level_Control()

def on_update_interval():
    global lava_level
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
forever(on_forever)
