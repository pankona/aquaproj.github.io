---
sidebar_position: 850
---

# aqua doesn't support installing aqua

aqua doesn't support installing aqua.
You shouldn't write the configuration to install the command `aqua` with aqua,
because it causes the infinite loop.

From aqua v0.8.6 (aqua-proxy v0.2.1), aqua prevents the infinite loop.

```console
# Create the symbolic link accidentally
$ ln -s ~/.aqua/bin/aqua-proxy ~/.aqua/bin/aqua
$ aqua i
[ERROR] the command "aqua" can't be executed via aqua-proxy to prevent the infinite loop
```

If you encounter the error `[ERROR] the command "aqua" can't be executed via aqua-proxy to prevent the infinite loop`,
remove the symbolic link `~/.aqua/bin/aqua`.

```console
$ rm ~/.aqua/bin/aqua
```
