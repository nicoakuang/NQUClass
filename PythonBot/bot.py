# Import the pyautogui module for mouse and keyboard control
from pyautogui import *
# Import the time module to introduce delays in the script
import time
# Import the keyboard module to stop script execution with the 'q' key
import keyboard
import pyautogui
# Import the win32api and win32con modules for mouse cursor control and clicks
import win32api, win32con

# Comments explaining the locations and pixel colors to be checked
# Tile 1 Position
# Tile 1 Position: X:  307 Y:  400 RGB: (159, 164, 231)
# Tile 2 Position
# Tile 2 Position: X:  416 Y:  400 RGB: (253,  18,   1)
# Tile 3 Position
# Tile 3 Position: X:  524 Y:  400 RGB: (156, 162, 230)
# Tile 4 Position
# Tile 4 Position: X:  639 Y:  400 RGB: (167, 172, 233)

# The click function to perform a mouse click at coordinates (x, y)
def click(x, y):
    win32api.SetCursorPos((x, y)) # Set the mouse cursor position
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN, 0, 0) # Simulate a left mouse button press
    time.sleep(0.01) # Pause for 0.01 seconds (10 milliseconds)
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP, 0, 0) # Simulate a left mouse button release

# A while loop that will run as long as the 'q' key is not pressed
while keyboard.is_pressed('q') == False:
    # Check the pixel color at the location (307, 400), and if R=0, call the click function
    if pyautogui.pixel(307, 400)[0] == 0:
        click(307, 400)
    # Check the pixel color at the location (416, 400), and if R=0, call the click function
    if pyautogui.pixel(416, 400)[0] == 0:
        click(416, 400)
    # Check the pixel color at the location (524, 400), and if R=0, call the click function
    if pyautogui.pixel(524, 400)[0] == 0:
        click(524, 400)
    # Check the pixel color at the location (639, 400), and if R=0, call the click function
    if pyautogui.pixel(639, 400)[0] == 0:
        click(639, 400)
