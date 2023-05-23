---
sidebar_position: 1
---

# Hardware: CPU
We use PassMark Software's services to roughly compare CPUs. You can use their comparison tool [here](https://cpubenchmark.net/compare) for yourself. You can also view a list of our updated hardware [here](https://asteroidhost.com/company/hardware).

---

### Cores & Threads
The amount of cores or threads that a CPU has lets you know whether a host is overselling their servers or not. If a node has 128GB of RAM but only 8 threads, you're in for a rough time as a lot of people will be sharing the same thread. The more overall threads a CPU has, the less people use the same thread.

### Cache
On a CPU, the cache is basically like onboard RAM. Since it is literal milimeters from the other components it is extremely fast memory. Minecraft really only cares about L3 cache. This would be anything that stores data whether it be inventories, chests, worlds, etc.

This kind of thing gets loaded into RAM later, but for on the fly math like world generation, having a lot of L3 cache is extremely important for noticeable performance gains over a different CPU.

### Single Core
Currently, *(without [Folia](https://papermc.io/software/folia))*, Minecraft LOVES Single Core performance since most of the Server runs on one thread. Therefore, the Single Core score is extremely important. It is a relative number showing the real-world differences in single threaded performance.

For a newbie's perspective, good way to look at it is like 10,000 multicore score is about 1,000 single core in performance tradeoffs.

### Multi Core
Multi Core performance is how good all the cores are combined. This isn't too important for Minecraft Servers, but it can expose some generational improvements between chips. This is the number you would usually use to determine speed variations between chips if you were looking to buy for a desktop computer or workstation.
