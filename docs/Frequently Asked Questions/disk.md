---
sidebar_position: 4
---

# How to I free up Disk Space?
If you have run out of available disk space on your server, here are some of your options going forward.

---

## Delete unused files.
Head over to your server @ [panel.asteroidhost.com](https://panel.asteroidhost.com) and click on the Files tab.

### Large Zips
Check around for any large files usually ending in `.tar.gz` or `.zip`. Anything like old imported worlds or self-made backups.

### Logs
You can also safely delete anything in the `logs` folder. These are never cleared and preserve a long history of all the console's logs, however some can get quite large with time.

### Skript Backups
The popular plugin [Skript](https://github.com/SkriptLang/Skript), saves backups daily in its plugin folder. Anything predating a week can be safely deleted in most cases.

### Unused worlds
Any worlds that you aren't using can be deleted by simply deleting their folder. A server restart will be required if the world was currently loaded.


## Dynmap Optimization
If you have [Dynmap](https://www.spigotmc.org/resources/dynmap%C2%AE.274/) installed, you can optimize the resolution of your images.

**Note:** This will require regenerating your rendered regions however.

You can do this by navigating to `~/plugins/dynmap/` in the file manager.

First delete the `~/plugins/dynmap/web/tiles` folder. This will clear all previously explored dynmap tiles.

Then open `~/plugins/dynmap/configuration.txt` and on **line 16**, change `deftemplatesuffix: hires` to `deftemplatesuffix: lowres` or `deftemplatesuffix: vlowres` for even more compression.

## Upgrading
If none of these worked enough for you, you should consider upgrading your plan. We try to balance the amount of resources required evenly. If you're out of disk from something like a massive world, your ram is probably reaching its limits as well.

You can upgrade here: [Billing Area](https://billing.asteroidhost.com/clientarea.php?action=services). Click on the service your would like to upgrade, then click on Upgrade/Downgrade.