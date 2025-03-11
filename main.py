name = game.ask_for_string("Give a name")
place = game.ask_for_string("Give a place")

output = "" + name + " is exploring  and stumbles across a " + place + " in order to reach his final destination. If the explorer hits a wall during his time in the maze while on his adventure, he is eliminated. The explorer must beat the maze in order to reach civilization. There may be traps set in the maze in which the explorer needs to surpass."

game.splash(output)