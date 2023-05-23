---
sidebar_position: 3
---

# Why is my RAM maxing out?

---

## Backstory
Our Panel is based on FOSS Pterodactyl Panel. The reason you may see your RAM usage beyond 90% and not decreasing is because of how the panel functions.


## Understanding RAM
On Minecraft specifically, there are 4 states of memory.
- Maximum RAM
  * This is the amount of memory you paid for. The maximum limit you can use.
- Allocated RAM
  * This is how much memory has been taken from Free RAM and used at some point. Being allocated, does not inherently mean it is actively being used.
- Free RAM
  * This is how much memory that is available and has not been allocated yet.
- Used RAM
  * This is how much memory that currently in use.

## How the Panel reports RAM
Pterodactyl's RAM graph is reporting on the current **allocated** memory. If this is nearing full, it means you are getting the most out of what you paid for.

In order to see your current and actively used memory, you will have to install a plugin or mod to view this value directly from the Server itself. For Spigot based servers, [spark](https://spark.lucko.me/download) is a fantastic option. Once installed just run `spark healthreport --memory` in the console, and this will dump all your memory information.

The Memory usage bar is what you want to be looking at. The left number is how much RAM is currently, and actively being used. The RAM on the right is your Maximum RAM, and the red line is how much RAM is currently allocated.


## Why is my Maximum RAM not the same amount I paid for?

Please refer to [this](/Understanding%20the%20Panel/startup#aikars-flags) article for explanation on our modification of the startup flags.