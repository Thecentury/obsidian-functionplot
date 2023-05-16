import type {
  ConstantInputs,
  DeepNonNullable,
  FunctionInputs,
  PlotInputs,
  PluginSettings,
  rendererType,
} from "./types";

/**
 * The default plugin settings.
 */
export const DEFAULT_PLUGIN_SETTINGS: Required<PluginSettings> = {
  titleFontSize: 24,
  scaleFontSize: 12,
  labelFontSize: 12,
  // annotationFontSize: 16,

  lineWidth: 2,
  gridWidth: 1,

  fontColor: "var(--text-normal)",
  // annotationColor: '#000',
  lineColor: "gray",
  gridColor: "var(--interactive-hover)",

  defaultRenderer: "interactive",
};

/**
 * The options displayed for renderers
 */
// eslint-disable-next-line no-unused-vars
export const RENDERER_OPTIONS: { [_ in rendererType]: string } = {
  interactive: "Interactive (zoomable)",
  image: "Image (exportable)",
};

export const DEFAULT_FUNCTION_INPUTS: Omit<FunctionInputs, "fn" | "r"> = {
  id: "",
  scope: {},
  fnType: "linear",
  closed: false,
  offset: {
    x: null,
    y: null,
  },
  vector: {
    x: null,
    y: null,
  },
  range: {
    min: null,
    max: null,
  },
  skipTip: false,
  color: null,
  graphType: "polyline",
  nSamples: null,
};

export const FALLBACK_FUNCTION_INPUTS: DeepNonNullable<
  Pick<FunctionInputs, "range" | "offset">
> = {
  offset: {
    x: 0,
    y: 0,
  },
  range: {
    min: -Infinity,
    max: Infinity,
  },
};

export const DEFAULT_CONSTANT_INPUTS: ConstantInputs = {
  min: -10,
  max: 10,
  step: 1,
  value: 1,
};

/**
 * The default options for a plot.
 */
export const DEFAULT_PLOT_INPUTS: PlotInputs = {
  constants: {},
  xAxis: {
    label: null,
    domain: {
      min: null,
      max: null,
    },
  },
  yAxis: {
    label: null,
    domain: {
      min: null,
      max: null,
    },
  },
  grid: true,
  data: [],
  disableZoom: null,
  title: null,
};

export const FALLBACK_PLOT_INPUTS: DeepNonNullable<
  Pick<PlotInputs, "xAxis" | "yAxis">
> = {
  xAxis: {
    label: "", // not needed
    domain: {
      min: -10,
      max: 10,
    },
  },
  yAxis: {
    label: "", // not needed
    domain: {
      min: -10,
      max: 10,
    },
  },
};
