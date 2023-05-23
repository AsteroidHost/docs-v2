---
sidebar_position: 2
---

# Enabling Command Blocks
This guide takes only a few minutes to enable command blocks on your server.

---

## Step 1
Head over to our panel at [panel.asteroidhost.com](https://panel.asteroidhost.com).

## Step 2
Next click on your server you would like to change, and navigate to the "Files" tab.

## Step 3
Scroll down until you find `server.properties` and click on it.

## Step 4
Find the line *(or `CTRL + F`)* named `enable-command-block`. Change this value to `true`.
```
enable-command-block=true
```
 
## Step 5

Restart your server and command blocks will function properly.

**Note:** Do not use /reload here. A restart is required whenever you edit `server.properties`.




