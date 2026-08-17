# Motion Specification

## Canonical duration

```text
1.44s
```

## Exact GenLayer geometry

```text
left:  183,33 20,372 179,310 122,279 183,152
right: 218,33 218,151 280,281 222,310 382,373
core:  200,195 166,265 200,283 235,266
```

## Signal A

```text
M 31 361 C 82 338, 128 317, 171 299 C 184 293, 193 286, 200 279
```

Timing:

```text
0%      dashoffset 250 / opacity 0
5%      opacity .95
26%     dashoffset 12 / opacity .95
31%     opacity 0
```

## Signal B

```text
M 369 361 C 319 337, 274 317, 229 299 C 216 293, 207 286, 200 279
```

Timing:

```text
24%     waiting
29%     opacity .95
50%     dashoffset 12 / opacity .95
55%     opacity 0
```

## Signal C

```text
M 201 45 C 201 90, 201 132, 201 170 C 201 202, 200 233, 200 258
```

Timing:

```text
48%     waiting
53%     opacity .95
74%     dashoffset 12 / opacity .95
79%     opacity 0
```

## Core confirmation

```text
0%,72%,100%    scale 1 / opacity 1
82%             scale 1.13 / opacity 1
90%             scale .97 / opacity .92
```

Core transform origin:

```text
200.33px 247.84px
```

## Signal stroke

```text
stroke-width: 15
stroke-linecap: round
stroke-dasharray: 24 220
pathLength: 250
```

## Reduced motion

Signals stop and disappear.

The core continues with a slow opacity-only confirmation cycle.
