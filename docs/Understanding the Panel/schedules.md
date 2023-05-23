---
sidebar_position: 5
---

# Schedules Tab
The fourth tab on the top navigation bar. These use cron as the scheduling service. Make sure to check your server's timezone [here](https://asteroidhost.com/company/hardware).

---

## Creating a Schedule

### Step 1
Head over to our panel at [panel.asteroidhost.com](https://panel.asteroidhost.com).

### Step 2
Next click on your server you would like to change, and navigate to the "Schedules" tab.

### Step 3
Click on the "CREATE SCHEDULE" button.

### Step 4 - Values
This may look daunting if you have never used cronjobs before. If this is the case, we highly recommend using a site like [Crontab Guru](https://crontab.guru/) to generate you a value.

Let's start by giving our schedule a name. Then, we want to schedule a daily server restart for every Wednesday at 4:30AM. Keep in mind that the time is based on where the server is located. You can view our locations [here](https://asteroidhost.com/company/hardware).

Thus, we will set our values to `30 4 * * 3`.
- `30` standing for 30 minutes into the hour.
- `4` standing for hour 4 in the day. Cron uses 24-hour time, so if you want it to fire at 6pm, you would need to use `18` instead of `6`.
- `*` means it can be any value. Therefore the current day of the month is irrelevant.
- `*` means it can be any value. Therefore the current month is irrelevant.
- `3` is for the day of the week. 0 is for Sunday, and 6 is for Saturday. This makes 3 stand for Wednesday. Perfect.

### Step 5 - Options
- **SHOW CHEATSHEET**
  * Below the values is the option for a cheatsheet. This can be used to get familiarized with the concept of cron.

- **ONLY WHEN SERVER IS ONLINE**
  * If enabled, this schedule will only run if the server is currently online, else it will fail.

- **SCHEDULE ENABLED**
  * If enabled, schedule will run automatically. It's usually best to leave this enabled, but the option is there if you don't want it to be running yet.

### Step 6 - Create
Make sure all is good, then click the "CREATE SCHEDULE" button.

### Step 7 - Tasks
Next we need to add a task. Click on your newly created schedule. Click on "NEW TASK".

Here there will be 3 options.
- Send Command
- Send Power Action
- Create Backup

We will first be choosing `Send Command`. We will use this to notify players of an incoming restart.

For our **Payload**, we will be inputting `say Server will be restarting in 30 seconds!` into the box, and clicking "CREATE TASK".

Now, we will create another task. This time we will be using the `Send Power Action` function. We will set the **Time Offset** to 30 seconds.

For our **Payload** we will be selecting `Restart the server` from the list. *(Keep in mind Terminating the server is different from a billing termination, and works the same as the kill button. It will not delete your server from your account.)*

Now add the task.

### Step 8 - Testing
If possible, it's good to make sure to test. You can either do this by scheduling a few minutes from now or just test your tasks by clicking the `Run Now` button on the schedule.


## Modifying a Schedule
You can modify your schedule's cron time and date requirements by clicking on the "Schedules" tab, and clicking on your Schedule.

Next, click "EDIT" at the top. The original schedule creation box will pop up. Make sure to save your changes.

If you want to change your tasks, you can by clicking on each one's <icon icon="fa-solid fa-pencil" size="lg" /> Edit button.


## Deleting a Schedule
If you want to delete your entire schedule, start by navigating to the "Schedules" tab, and clicking on your Schedule.

At the bottom, click "Delete". Confirm your changes.

If you want to delete a task, you can by clicking on each one's <icon icon="fa-solid fa-trash-can" size="lg" /> Delete button.

---

> *Last Updated: May 13, 2023*   
[<icon icon="fa-brands fa-discord" size="lg" /> Discord Support](https://discord.gg/ZTGMcfsskN)