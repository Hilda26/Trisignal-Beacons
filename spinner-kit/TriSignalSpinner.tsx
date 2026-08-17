import { useId } from "react";
import type { CSSProperties, SVGProps } from "react";
import "./tri-signal.css";

export type TriSignalSpinnerProps = Omit<SVGProps<SVGSVGElement>, "color"> & {
  size?: number | string;
  duration?: string;
  color?: string;
  label?: string;
};

export function TriSignalSpinner({
  size = 24,
  duration = "1.44s",
  color = "currentColor",
  label = "Loading",
  className,
  style,
  ...props
}: TriSignalSpinnerProps) {
  const generatedId = useId().replace(/:/g, "");
  const maskId = `tri-signal-mask-${generatedId}`;
  const resolvedSize = typeof size === "number" ? `${size}px` : size;

  const spinnerStyle = {
    "--tri-size": resolvedSize,
    "--tri-duration": duration,
    color,
    ...style,
  } as CSSProperties;

  return (
    <svg
      {...props}
      viewBox="0 0 400 400"
      role="status"
      aria-label={label}
      className={`tri-signal-spinner ${className ?? ""}`.trim()}
      style={spinnerStyle}
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="400">
          <rect width="400" height="400" fill="white" />
          <path className="tri-cut tri-cut-a" pathLength="250" d="M 31 361 C 82 338, 128 317, 171 299 C 184 293, 193 286, 200 279" />
          <path className="tri-cut tri-cut-b" pathLength="250" d="M 369 361 C 319 337, 274 317, 229 299 C 216 293, 207 286, 200 279" />
          <path className="tri-cut tri-cut-c" pathLength="250" d="M 201 45 C 201 90, 201 132, 201 170 C 201 202, 200 233, 200 258" />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <polygon className="tri-mark" points="183,33 20,372 179,310 122,279 183,152" />
        <polygon className="tri-mark" points="218,33 218,151 280,281 222,310 382,373" />
        <polygon className="tri-mark tri-core" points="200,195 166,265 200,283 235,266" />
      </g>
    </svg>
  );
}
