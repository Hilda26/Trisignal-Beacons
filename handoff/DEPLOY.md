# Deployment

This package uses a different GitHub Pages layout from the other spinner handoffs.

The live site is served directly from the repository root.

## GitHub Pages

Use:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

Expected URLs:

```text
https://hilda26.github.io/Trisignal-Beacons/
https://hilda26.github.io/Trisignal-Beacons/loading.html
https://hilda26.github.io/Trisignal-Beacons/tri-signal.svg
```

No build step is required.

## Code match

`tri-signal.svg` and `spinner-kit/tri-signal.svg` must remain byte-identical.

Run `npm test` before the first push and after final URL edits.
