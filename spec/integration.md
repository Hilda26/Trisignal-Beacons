# Integration

## Standalone SVG

Use:

```text
spinner-kit/tri-signal.svg
```

or the root deployment copy:

```text
tri-signal.svg
```

The two files are byte-identical.

## React

```tsx
import { TriSignalSpinner } from "./spinner-kit";

<TriSignalSpinner size={24} />
```

Custom:

```tsx
<TriSignalSpinner
  size={32}
  duration="1.6s"
  color="currentColor"
  label="Resolving incoming signals"
/>
```

The React component generates a unique mask id with `useId`, so multiple spinner instances can appear on the same page without mask-id collisions.

## Theme behavior

The mark uses `currentColor`.

When the SVG is inlined, it inherits the host text color.

When the standalone SVG is loaded as an external object, the enclosing page can use a display filter for dark previews because CSS color does not cross the external SVG document boundary.
