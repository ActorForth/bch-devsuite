# Known Issues

### smartbchd illegal instruction (SIGILL)

#### Symptoms

```bash
$ docker run ghcr.io/actorforth/smartbch-amber:v0.3.5 start --mainnet-genesis-height=602983
SIGILL: illegal instruction
PC=0xbfd520 m=0 sigcode=2
instruction bytes: 0xf 0x1 0xf9 0x48 0xc1 0xe2 0x20 0x48 0x1 0xd0 0x48 0x89 0x44 0x24 0x8 0xf

goroutine 1 [running, locked to thread]:
github.com/dterei/gotsc.BenchEnd(0x34fea9a7ce340)
  /go/pkg/mod/github.com/dterei/gotsc@v0.0.0-20160722215413-e78f872945c6/tsc_amd64.s:18 fp=0xc0002c5838 sp=0xc0002c5830 pc=0xbfd520
github.com/dterei/gotsc.TSCOverhead(0xf)
  /go/pkg/mod/github.com/dterei/gotsc@v0.0.0-20160722215413-e78f872945c6/tsc.go:36 +0x48 fp=0xc0002c5868 sp=0xc0002c5838 pc=0xbfd4a8
github.com/smartbch/moeingads/datatree.init.0()
  /go/pkg/mod/github.com/smartbch/moeingads@v0.3.0/datatree/tree.go:76 +0x37 fp=0xc0002c5a48 sp=0xc0002c5868 pc=0xc0bbb7
runtime.doInit(0x1d6c960)
  /usr/local/go/src/runtime/proc.go:6309 +0xec fp=0xc0002c5b98 sp=0xc0002c5a48 pc=0x45e42c
runtime.doInit(0x1d6be20)
  /usr/local/go/src/runtime/proc.go:6286 +0x72 fp=0xc0002c5ce8 sp=0xc0002c5b98 pc=0x45e3b2
runtime.doInit(0x1d73900)
  /usr/local/go/src/runtime/proc.go:6286 +0x72 fp=0xc0002c5e38 sp=0xc0002c5ce8 pc=0x45e3b2
runtime.doInit(0x1d76200)
  /usr/local/go/src/runtime/proc.go:6286 +0x72 fp=0xc0002c5f88 sp=0xc0002c5e38 pc=0x45e3b2
runtime.main()
  /usr/local/go/src/runtime/proc.go:208 +0x205 fp=0xc0002c5fe0 sp=0xc0002c5f88 pc=0x450785
runtime.goexit()
  /usr/local/go/src/runtime/asm_amd64.s:1371 +0x1 fp=0xc0002c5fe8 sp=0xc0002c5fe0 pc=0x488241

rax    0x34fea9a7ce340
rbx    0x756e6547
rcx    0x6c65746e
rdx    0x34fea00000000
rdi    0x1d6c9f0
rsi    0xf
rbp    0xc0002c5858
rsp    0xc0002c5830
r8     0x0
r9     0xc000144090
r10    0x6f00af00
r11    0x2f0e1eb5
r12    0x7200b376
r13    0x6f
r14    0x200
r15    0xffffffffffffffff
rip    0xbfd520
rflags 0x10202
cs     0x33
fs     0x0
gs     0x0
```

- It seems the asm is trying to run a command not supported by your CPU architecture.
- Issue occured on machines running ProxMox VM default CPU ("kvm64"), fixed by change to "host" instead.
- Read more: [SIGILL: illegal instruction when running smartbchd init mynode --chain-id 0x2710](https://github.com/smartbch/smartbch/issues/28)
