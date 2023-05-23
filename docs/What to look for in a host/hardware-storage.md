---
sidebar_position: 3
---

# Hardware: Storage
You can view a list of our updated hardware [here](https://asteroidhost.com/company/hardware).

---

### Interface/Type
This is a mixed bag. Below is a list of standard storage devices you may find.
- Hard drive (HDD)
- Solid State Drive (SSD)
- Non-Volatile Memory (NVMe or M.2)

**Hard Drives**
This is for *really* budget hosting. You will notice significant slowdowns when starting your server, saving, or stopping. Hard drives have a lot of latency with Read or Write operations and have a very limited speed of only about 70MB/s to 140MB/s.

**SATA SSDs**
This is what most computers have now adays. These are small tabs that store data via flash memory over a SATA connection. They have no spinning parts and are much faster with significantly less latency compared to hard drives. Their speeds vary from around 250MB/s to 500MB/s.

**NVMe SSDs**
These are what to look for in Server Hosting. These are installed directly onto the motherboard via M.2. They have incredibly low latency and speeds ranging from 800MB/s to a blistering 8,000MB/s. It really depends on generation, but we'll touch on that later.


### Capacity
Most companies only have a few terabytes for the node itself. You can usually check this via plugins. However, when purchasing a server, your capacity needs may vary. We've added good rule-of-thumb of what to get as a minimum storage below.

**Fully Generated 5000x5000 world:**
- Vanilla or Bukkit Fork (20GB)
- Forge Modpack (35GB)

**Fully Generated 10000x10000 world:**
- Vanilla or Bukkit Fork (60GB)
- Forge Modpack (75GB)

**Note:** These are educational guesses and have not been clearly defined in testing. These are just to get an understand of space restraints based on world size.

### NVMe Generation
*For simplicity we're only going to be talking about Gen 3 and above.*

Different generations of NVMe will give wildly different results. A lot of hosts will just say "NVMe drives" because in reality, the extra bonuses past Gen 3 aren't very noticeable. However, we have still listed the difference in speeds below:

**Gen 3**
 - Read: 3000MB/s
 - Write: 2000MB/s

**Gen 4**
 - Read: 5000MB/s
 - Write: 4000MB/s

**Gen 5**
 - Read: 10GB/s
 - Write: 9.5GB/s