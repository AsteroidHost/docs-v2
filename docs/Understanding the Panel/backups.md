---
sidebar_position: 7
---

# Backups Tab
The sixth tab on the top navigation bar. They are located offsite via S3 Backups. You can buy more for $3.00/ea.

**We recommend stopping your server before starting a backup so that any changes saved while the backup was in progress gets picked up properly.

---

## Creating a Backup

### Step 1
Head over to our panel at [panel.asteroidhost.com](https://panel.asteroidhost.com).

### Step 2
Next click on your server you would like to change, and navigate to the "Backups" tab.

### Step 3
Click on the "CREATE BACKUP" button.

### Step 4
Give your backup a name.

Then, below, list the folders and/or files you would like to **exclude** from this backup. We recommend leaving out the `logs` folder and the `cache` folder. These aren't needed to start the server, and the cache will be regenerated automatically when the server starts.

If you want this backup to not be easily removable, you can lock it at the bottom. This will require unlocking it before it can be removed.

### Step 5
Finally, click "CREATE BACKUP" and the backup process will start. Depending on your server size, it may take a while. You can safely leave this page.

If it has been a while and it is still loading, try refreshing the page. (Visual error that sometimes occurs.)


## Unlocking a Backup

Unlocking a backup can be done by simply clicking on the <icon icon="fa-solid fa-ellipsis" size="lg" /> icon, and clicking "<icon icon="fa-solid fa-unlock" size="lg" /> Unlock".


## Deleting a Backup
You can delete a backup by heading to the backups tab. Find the backup you wish to remove. If it is locked it must be [unlocked](#unlocking-a-backup) first. Click the <icon icon="fa-solid fa-ellipsis" size="lg" /> icon, and click "DELETE".

:::danger WARNING
Keep in mind that this action is **irreversible** and Staff **CANNOT** retrieve deleted backups for you!
:::


## Scheduling a Backup
You can do so by following [this guide](/Understanding%20the%20Panel/schedules) on schedules, but for choose "Create Backup" instead for the **payload**.

---

> *Last Updated: May 13, 2023*   
[<icon icon="fa-brands fa-discord" size="lg" /> Discord Support](https://discord.gg/ZTGMcfsskN)