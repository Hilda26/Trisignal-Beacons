import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const [kitBuffer, liveBuffer, tsx, index, loading, readme] = await Promise.all([
  readFile(new URL("../spinner-kit/tri-signal.svg", import.meta.url)),
  readFile(new URL("../tri-signal.svg", import.meta.url)),
  readFile(new URL("../spinner-kit/TriSignalSpinner.tsx", import.meta.url), "utf8"),
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../loading.html", import.meta.url), "utf8"),
  readFile(new URL("../README.md", import.meta.url), "utf8"),
]);

const svg = kitBuffer.toString("utf8");
const hash = createHash("sha256").update(kitBuffer).digest("hex");

const checks = [
  ["original source SHA-256 preserved", hash === "dbe3f4633e6c6a77e97fc246bd82b89415e45a1f5e07fddbfe6ab889eddc5425"],
  ["root and kit SVG byte-identical", kitBuffer.equals(liveBuffer)],
  ["400x400 viewBox", svg.includes('viewBox="0 0 400 400"')],
  ["exact left geometry", svg.includes("183,33 20,372 179,310 122,279 183,152")],
  ["exact right geometry", svg.includes("218,33 218,151 280,281 222,310 382,373")],
  ["exact core geometry", svg.includes("200,195 166,265 200,283 235,266")],
  ["tri-signal mask present", svg.includes('id="tri-signal-mask"')],
  ["exact signal A path", svg.includes("M 31 361 C 82 338, 128 317, 171 299 C 184 293, 193 286, 200 279")],
  ["exact signal B path", svg.includes("M 369 361 C 319 337, 274 317, 229 299 C 216 293, 207 286, 200 279")],
  ["exact signal C path", svg.includes("M 201 45 C 201 90, 201 132, 201 170 C 201 202, 200 233, 200 258")],
  ["three masked signal paths", (svg.match(/class="gl-signal gl-signal-/g) || []).length === 3],
  ["1.44 second loop preserved", (svg.match(/1\.44s/g) || []).length >= 4],
  ["signal A timing preserved", svg.includes("5%") && svg.includes("26%") && svg.includes("31%,100%")],
  ["signal B timing preserved", svg.includes("0%,24%") && svg.includes("29%") && svg.includes("50%") && svg.includes("55%,100%")],
  ["signal C timing preserved", svg.includes("0%,48%") && svg.includes("53%") && svg.includes("74%") && svg.includes("79%,100%")],
  ["core confirmation preserved", svg.includes("82% { transform: scale(1.13); opacity: 1; }")],
  ["core settle preserved", svg.includes("90% { transform: scale(.97); opacity: .92; }")],
  ["mark uses currentColor", svg.includes("fill: currentColor")],
  ["reduced-motion behavior preserved", svg.includes("prefers-reduced-motion") && svg.includes("gl-reduced")],
  ["React wrapper has unique mask id", tsx.includes("useId") && tsx.includes("maskId")],
  ["React wrapper preserves all three paths", tsx.includes("M 31 361 C 82 338, 128 317, 171 299 C 184 293, 193 286, 200 279") && tsx.includes("M 369 361 C 319 337, 274 317, 229 299 C 216 293, 207 286, 200 279") && tsx.includes("M 201 45 C 201 90, 201 132, 201 170 C 201 202, 200 233, 200 258")],
  ["root showcase uses live SVG", (index.match(/data="tri-signal.svg"/g) || []).length >= 9],
  ["loading state uses live SVG", loading.includes('data="tri-signal.svg"')],
  ["light and dark surfaces exist", index.includes("surface light") && index.includes("surface dark")],
  ["all target sizes exist", [16,20,24,32,48,64].every(n => index.includes(`width="${n}"`))],
  ["README architecture differs", readme.includes("spinner-kit/") && readme.includes("handoff/") && readme.includes("checks/")],
  ["README contains no em dash", !readme.includes("—")],
  ["README contains no other spinner names", !/Decision Origami|Intelligence Loop|Validator Relay|Aperture/.test(readme)],
];

let failed = false;
for (const [label, ok] of checks) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}`);
  if (!ok) failed = true;
}

if (failed) process.exit(1);
console.log(`\\n${checks.length}/${checks.length} checks passed.`);
