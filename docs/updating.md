---
sidebar_position: 3
---

# ⚠️ Updating Minecraft
This guide will show you how to easily and quickly update your Minecraft version!

---

## Step 1 - Navigation
Head over to our panel at [panel.asteroidhost.com](https://panel.asteroidhost.com), then click on your server you would like to change, and navigate to the "Startup" tab.

## Step 2 - Selecting a Version
Change `MINECRAFT VERSION` to either `latest` or a version of Minecraft, ex: `1.19.4`.

Change `BUILD VERSION` to either `latest` or a version of your Server Software, ex: `485`.
*(Invalid versions will default to latest)*

Then, set your `SERVER JAR FILE` to what you want your new JAR to be called. If one of the same name already exists, it will need to be Deleted from the [Files Tab](/Understanding%20the%20Panel/files#file-actions).

## Step 3 - Starting the Update

:::caution

**Make sure your Server is turned off before continuing.** We also **highly** recommend [creating a backup](/Understanding%20the%20Panel/backups#creating-a-backup) before proceeding.

:::

Once you're ready, head to the "Settings" tab on the Panel. Scroll down and click `REINSTALL SERVER`.

This will re-run the installation script which will download the JAR specified in Step 2.
*(This should NOT delete ANY extra files, but in the event it does you should create a backup beforehand.)*


## Alternative Method
If using the automatic installer doesn't fit you, you can always download the JAR file yourself and upload it to your server. However, make sure the name of the JAR is the same as specified in the "Startup" tab.

Download links:
- Vanilla: https://www.minecraft.net/en-us/download/server
- Bukkit: https://getbukkit.org/download/craftbukkit
- Spigot: https://getbukkit.org/download/spigot
- Paper: https://papermc.io/downloads/paper
- Purpur: https://purpurmc.org/downloads
- Forge: https://files.minecraftforge.net/net/minecraftforge/forge/
- Fabric: https://fabricmc.net/use/server/
- Bungeecord: https://ci.md-5.net/job/BungeeCord/