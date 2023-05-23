---
sidebar_position: 2
---

# Hardware: RAM
You can view a list of our updated hardware [here](https://asteroidhost.com/company/hardware).

---

### Capacity
There's two capacities you will see around. The node's maximum capacity, and the capacity you are allotted when you purchase a server. Most companies generally have 128GB of RAM on each node. However, rarely is it 64GB.

This is usually what you think of immediately when someone brings up RAM. This is because RAM, *(or Random Access Memory)* is essentially just fast caching storage. Since it is so close to the CPU, this is what makes it much better to use over an SSD or even a PCIe SSD. 

Some hosts offer swap space. This is like having memory on the disk. It is significantly slower, but can be useful for things like inactive, but loaded, worlds. *(Like the End)*

### Generation
Now adays, more hosts are starting to use DDR5 over the previous generation, DDR4. DDR5 offers significantly higher clock speeds at the cost of CAS Latency. Currently DDR5 is considered a Premium feature as it is only compatible with very recent CPUs. DDR4 is still more than adequate for budget hosting however.

This only becomes a problem if the host is offering DDR3 or older. Generally you want to stay away at this point. DDR3 speeds are pretty unexceptional and this is where you will start to notice significant performance losses over the competition.

### Speed, Latency, and First Word
**Speed**
The Speed of memory is loosely based on its generation. The Standard clocks are listed below. Keep in mind for DDR4 & DDR5 you can find kits for over these rated speed. That is due to those sticks being verified by the manufacturer to support those speeds via XMP or D.O.C.P. overclocking.

- DDR (~400MT/s)
- DDR2 (400MT/s — 800MT/s)
- DDR3 (800MT/s — 2133MT/s)
- DDR4 (1600MT/s — 3200MT/s)
- DDR5 (4000MT/s — 6400MT/s)

**Note:** 1000MT/s = 1000MHz. It's a 1:1 scale.

For Minecraft, and just about any application, faster speeds will equate to more performance. You really shouldn't be getting less than 2133MT/s for the newer versions beyond 1.16.


**Latency**
If you've bought a kit of memory before you may have noticed something like "CL16". The CL stands for CAS Latency. In 99% of cases the Hosting Company will maintain acceptable CL ratings. For DDR4 CL16 or CL18 is good. For DDR5, CL36 — CL40 is good.

In short, the CAS Latency tells us how many clock cycles the memory will delay to return the requested data. If that didn't make any sense, that's fine. In essence, the smaller the number, the better.


**First Word**
Wrapping things up, the first word latency is just how much time (in nanoseconds) it takes to return data after the data was requested. Generally, this should be below 12ns.

### Error Correcting
If a Host is using a Server-Grade CPU, they are probably running ECC Memory as well. ECC *(or Error Correcting Code)* is memory with an extra chip onboard specifically designed to check for bit flips. Any time there is an error or mismatch in the data, this chip will fix it and restore it to its proper state. This is important for stability, however isn't too necessary in the Minecraft Server Space. For any Server that doesn't have hundreds of players online, this really isn't necessary.
