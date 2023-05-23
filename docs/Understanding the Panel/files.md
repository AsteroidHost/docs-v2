---
sidebar_position: 3
---

# File Manager
The second tab on the top navigation bar. This uses SFTP via PHP and has an upload limit of 100MB.

**Legend**
- `□` is a checkbox.
- `•••` is a meatball menu.

---

## Breadcrumbs
```
□ /home/container/
```
This is the breadcrumbs bar. `Container` is your home directory. This is what we're  talking about when mentioning the home or root directory.


## Create Buttons

There are 3 buttons at the top.

**New Directory**
- This creates a new folder.
- If you need to create an entire path, just type the whole path.
    - The extra folders will create themselves.

**Upload File**
- This lets you upload **files** to the current directory.
- Folders must be zipped, uploaded, then unzipped.
- Files have a 100MB upload limit.
    - Group uploads contributes to this limit.
    - [Click here](#) to setup FTP to remove upload limits entirely.

**New File**
- Clicking this will take you to a new page to paste code into a file.
    - You can pick the formatter in the top right.
- Clicking save file will prompt a name for the file.
    - Make sure to include the file extension in the file name.
    - You can use `../` to create files back a directory.


## File Browser

For an explanation of important files and their purpose [Click here](#)

### Selecting Files

**To the left of each file** is a selection box. Clicking multiple will select multiple files and show a prompt at the bottom for actions to take upon the selected files.

You can also click the main box at the top beside the Breadcrumbs to select all the files in the current directory.

You can also use the 3 dots `•••` *(meatball menu)* next to each file for file-specific options like **Extracting**.


### File Actions

**Single File**
After clicking the `•••` a dropdown will appear.

- **Rename** renames the selected file. 
    - Keep in mind of file extensions.
- **Move** moves the file to a new directory.
    - Insert the new folder BEFORE the name of the file.
    - This can also be used to rename.
    - If the target directory doesn't exist, one will be created.
- **Permissions**
    - This uses numbers to determine permissions.
    - Please refer to [this guide](https://www.pair.com/support/kb/file-permissions/) for an explanation regarding file permissions.
- **Archive**
    - Clicking this will create a `.tar.gz` file that can be extracted.
    - If you are using this on single files, we would recommend using it on folders rather than individual files.
- **Unarchive**
    - Clicking this will unpack a zipped file into the current directory.
    - This will overrite any files with the same name as the contents of the archive.
- **Download**
    - Downloads the file to your computer.
    - To download a folder, you must Archive it first.
    - No download restrictions.
- **Delete**
    - Permanently deletes a file.
    - Files can still be restored via a Backup.

---

**Multi File**
After selecting one or more files with the `□` a floating menu will appear at the bottom.

- **Move**
    - This will move the files to another directory.
    - Input a directory that is **relative** to the current one.
        - You can use `../` to go back a directory.
        - You can also use `~/` to go back to the home directory.
- **Archive**
    - Clicking this will create a `.tar.gz` file that can be extracted.
    - This could load for a while, but we promise you it is going.
    - Wait until the file size stops increasing before downloading or moving the archive.
- **Delete**
    - Permanently deletes the selected files.
    - Files can still be restored via a Backup.

---

> *Last Updated: May 13, 2023*   
[<icon icon="fa-brands fa-discord" size="lg" /> Discord Support](https://discord.gg/ZTGMcfsskN)