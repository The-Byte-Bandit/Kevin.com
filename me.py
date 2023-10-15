# ﻿

# sys.exit()
# pygame.display.flip()
# clock.tick(30)

# I
import pygame, sys
pygame.init()
clock = pygame.process_time()
screen width 1366
screen_height
768
screen pygame.display.set_mode ((screen_width, screen_height)) pygame.display.set_caption('Pong test')
while True:
for event in pygame.event.get():
if event.type pygame.quit()
pygame.QUIT:
sys.exit()
pygame.display.flip()
clock.tick(30)
