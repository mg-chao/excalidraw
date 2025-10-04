import type { ElementOrToolType } from "@excalidraw/excalidraw/types";

export const hasBackground = (type: ElementOrToolType) =>
  type === "rectangle" ||
  type === "iframe" ||
  type === "embeddable" ||
  type === "ellipse" ||
  type === "diamond" ||
  type === "line" ||
  type === "freedraw" ||
  type === "highlight";

export const hasStrokeColor = (type: ElementOrToolType) =>
  type !== "image" &&
  type !== "frame" &&
  type !== "magicframe" &&
  type !== "blur" &&
  type !== "blur_freedraw";

export const hasTextStrokeColor = (type: ElementOrToolType) => type === "text";

export const hasStrokeWidth = (type: ElementOrToolType) =>
  type === "rectangle" ||
  type === "iframe" ||
  type === "embeddable" ||
  type === "ellipse" ||
  type === "diamond" ||
  type === "freedraw" ||
  type === "blur_freedraw" ||
  type === "highlight" ||
  type === "arrow" ||
  type === "line";

export const hasStrokeStyle = (type: ElementOrToolType) =>
  type === "rectangle" ||
  type === "iframe" ||
  type === "embeddable" ||
  type === "ellipse" ||
  type === "diamond" ||
  type === "arrow" ||
  type === "line";

export const canChangeRoundness = (type: ElementOrToolType) =>
  type === "rectangle" ||
  type === "iframe" ||
  type === "embeddable" ||
  type === "line" ||
  type === "diamond" ||
  type === "image";

export const canChangeBlur = (type: ElementOrToolType) =>
  type === "blur" || type === "blur_freedraw";

export const canChangeHighlight = (type: ElementOrToolType) =>
  type === "highlight";

export const canChangeLayer = (type: ElementOrToolType) =>
  type !== "blur" &&
  type !== "blur_freedraw" &&
  type !== "watermark" &&
  type !== "highlight";

export const toolIsArrow = (type: ElementOrToolType) => type === "arrow";

export const canHaveArrowheads = (type: ElementOrToolType) => type === "arrow";
