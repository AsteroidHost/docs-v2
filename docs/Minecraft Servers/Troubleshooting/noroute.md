---
sidebar_position: 1
---

# No Route to Host
Error: java.net.NoRouteToHostException: No route to host

---

## The Cause
If your server cannot start or multiple plugins are failing to load, and it is throwing an error along the lines of "No route to host", then your JARs may have been infected with malware.

*TIP: You can check first by downloading one of your plugins and following the guide at the bottom.*


## The Fix
1. You want to redownload new copies of ALL of your plugins Do not skip any, this is explained at the bottom of the article.

2. Delete all of your plugin `.JAR` files **(not configs!)** and reupload them with the new copies. Also make sure to delete the `cache` folder.

3. Grab a new copy of your server software like PaperMC or Spigot or Purpur.

4. Upload the new copy of your server software, and don't forget to change the JAR name under "Startup" if it's under a different name.


**Note:** When reuploading your plugins, please make sure you are getting them from credible sources such as Bukkit, Spigot, CurseForge, BuiltByBit, Songoda, or GitHub. 

**Do NOT use any cracked plugins. They are most likely the source of your problems.**

If it continues, contact support on [Discord](https://discord.gg/rdDaUW3Wt6) and we'll work on it with you.


## The Malware
This malware is installed via either an infected JAR file or the original bad actor. Once it is run, it infects all other major JAR files on the system. It tries to run an "Updater" and fails, crashing the server.

## How to tell if a JAR is infected
### Method 1
1. [Click Here](https://github.com/deathmarine/Luyten/releases/tag/v0.5.4_Rebuilt_with_Latest_depenencies) to download the Open-Source Java Decompiler **Luyten**.
2. Run Luyten when it is done downloading, and drag and drop the JAR file into the window.
3. Scroll to the bottom and if you see "Updater.class", the JAR file is infected. Dispose of it immediately.

### Method 2
1. Download your plugins folder, and server JAR files. Delete your cache folder.
2. [Click Here](https://github.com/overwolf/jar-infection-scanner/releases/download/1.0.1/jar-infection-scanner.zip) to download the Open-Source Scanner Tool by **CurseForge**.
3. Run the .exe when it is done downloading.
4. Point the application to scan your downloaded plugins folder.
5. Remove and replace any JAR that is infected with one from a trustworthy source.

---

*Last updated: June 11, 2023.*
