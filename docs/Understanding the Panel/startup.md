---
sidebar_position: 9
---

# Startup Tab
The eighth tab on the top navigation bar. It is where your version manager is located.

---

## Updating Minecraft
If you're looking to update your Minecraft version, try [this](/Frequently%20Asked%20Questions/updating) article instead.


## Minecraft Version
If you want to download a specific version of Minecraft, type it into this box. If you're updating, type in the new version or leave it at "latest".

This option has no effect on custom JARs.

## Build Version
If you want to download a specific version of your Server Software, type it into this box. If you're updating, type in the new version or leave it at "latest".

This option has no effect on custom JARs.


## JAR File

This box is for telling the server which JAR file you want the server to start with. We recommend setting this to either `server.jar` or `<name of server software>.jar`, like `paper.jar` or `spigot.jar`.


## Aikar's Flags

Aikar's Flags is a set of optimized Java VM startup flags by Aikar. They can be found [here](https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/).

### Asteroid's Modified Flags
Here at Asteroid, we tuned Aikar's Flags to perform better for our sets of hardware. These are viewable from the server's panel.

Our Panel is based on Pterodactyl Panel. Due to how the software works, we have to manually set up headroom for Java on your server. We have adjusted our flags to automatically provide a **25% headroom**. (Varies on larger plans). If your server is becoming unresponsive, we can adjust this for your server.


## Java Version / Docker Version
The Docker Version box is what decides what Java Version you are running. Typically you want to just stick with Java 17, but if you are experiencing problems, switching to an older version may help.

Here's a guide for the recommended/required Java Version for specific Minecraft Versions:
- Minecraft 1.18 and above — Java 17
- Minecraft 1.12 through 1.17 — Java 11/16
- Minecraft 1.11 and below — Java 8

---

> *Last Updated: May 13, 2023*   
[<icon icon="fa-brands fa-discord" size="lg" /> Discord Support](https://discord.gg/ZTGMcfsskN)