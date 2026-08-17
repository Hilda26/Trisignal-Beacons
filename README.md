# Tri-Signal: GenLayer Spinner

**Three inward signal cuts. One GenLayer confirmation.**

Tri-Signal is an original loading animation for the GenLayer Spinner Builder mission.

Three transparency cuts move inward through the assembled GenLayer mark from the lower-left tip, lower-right tip and upper split. The signals arrive in sequence. After the third reaches the center, the core gives a short confirmation pulse.

The logo never rotates and never breaks apart.

## Live links

These are filled in after deployment:

```text
Repository: https://github.com/Hilda26/Trisignal-Beacons
Signal Chamber: https://hilda26.github.io/Trisignal-Beacons/
Loading state: https://hilda26.github.io/Trisignal-Beacons/loading.html
```

## Why this package is structured differently

This repository does not use the usual `src / docs / assets / tests` shape.

The root is the live site.

The reusable implementation lives in `spinner-kit`.

Design and engineering notes live in `spec`.

Human and agent handoff material lives in `handoff`.

Verification logic lives in `checks`.

```text
.
├── index.html
├── loading.html
├── tri-signal.svg
├── README.md
├── LICENSE
├── package.json
├── spinner-kit/
│   ├── tri-signal.svg
│   ├── tri-signal.css
│   ├── TriSignalSpinner.tsx
│   └── index.ts
├── spec/
│   ├── concept.md
│   ├── motion.md
│   └── integration.md
├── handoff/
│   ├── DEPLOY.md
│   ├── SUBMISSION.md
│   └── REVIEWER_CHECKLIST.md
└── checks/
    └── verify.mjs
```

## Canonical source

The original Tri-Signal SVG is preserved unchanged at:

```text
spinner-kit/tri-signal.svg
```

The root deployment copy is:

```text
tri-signal.svg
```

They are byte-identical.

SHA-256:

```text
dbe3f4633e6c6a77e97fc246bd82b89415e45a1f5e07fddbfe6ab889eddc5425
```

## Concept

The original source describes the motion as three signal cuts traveling inward through the GenLayer geometry from the outer tips.

The order is:

```text
lower-left
lower-right
upper split
core confirmation
```

The cuts are transparency inside an SVG mask.

This is important because the signal is not a decorative line painted over the logo. It removes a moving slice from the mark as it travels inward.

## Timing

Full loop:

```text
1.44s
```

### Signal A

Lower-left tip to center.

Active window:

```text
5% to 31%
```

### Signal B

Lower-right tip to center.

Active window:

```text
29% to 55%
```

### Signal C

Upper split to center.

Active window:

```text
53% to 79%
```

### Core confirmation

The center remains neutral through 72%.

Then:

```text
82%   scale 1.13
90%   scale .97 / opacity .92
100%  exact neutral state
```

## Exact GenLayer geometry

```text
left:  183,33 20,372 179,310 122,279 183,152
right: 218,33 218,151 280,281 222,310 382,373
core:  200,195 166,265 200,283 235,266
```

## Exact signal paths

Signal A:

```text
M 31 361 C 82 338, 128 317, 171 299 C 184 293, 193 286, 200 279
```

Signal B:

```text
M 369 361 C 319 337, 274 317, 229 299 C 216 293, 207 286, 200 279
```

Signal C:

```text
M 201 45 C 201 90, 201 132, 201 170 C 201 202, 200 233, 200 258
```

## Standalone asset

Use:

```text
spinner-kit/tri-signal.svg
```

It contains its own CSS and requires no JavaScript animation runtime.

## React component

```tsx
import { TriSignalSpinner } from "./spinner-kit";

<TriSignalSpinner size={24} />
```

The component uses React `useId` for its SVG mask id. This prevents mask collisions when several spinner instances are rendered on one page.

## Light and dark

The mark uses `currentColor`.

The signal itself is transparency created by the mask.

The Signal Chamber page includes both light and dark review surfaces.

## Scale tests

The live design page displays the exact SVG at:

```text
16px
20px
24px
32px
48px
64px
```

## Loading-state demo

`loading.html` demonstrates Tri-Signal as a real waiting state for three incoming decision channels.

It is intentionally different from the main Signal Chamber page and adapts to mobile screens.

## Reduced motion

When reduced motion is requested:

- the three signal cuts stop and disappear;
- the core uses a slower opacity-only confirmation cycle.

This behavior comes from the original source SVG.

## Validation

Run:

```bash
npm test
```

The verifier checks source integrity, exact geometry, exact signal paths, original timing, core confirmation, root deployment reuse, loading-state reuse, light and dark demos and all target sizes.

## Deployment

This project is designed for GitHub Pages directly from:

```text
main / (root)
```

That keeps the project architecture different while avoiding a build step.

See `handoff/DEPLOY.md`.

## Submission

Prepared Portal copy is in:

```text
handoff/SUBMISSION.md
```

## License

MIT.
