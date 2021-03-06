const extend = {
  "colors": {
    "default": {
      "50": "#E8E8E8",
      "100": "#D4D4D4",
      "200": "#A6A6A6",
      "300": "#7A7A7A",
      "400": "#4D4D4D",
      "500": "#212121",
      "600": "#1A1A1A",
      "700": "#141414",
      "800": "#0D0D0D",
      "900": "#080808"
    },
    "primary": {
      "50": "#EBF2FF",
      "100": "#D1E2FF",
      "200": "#A3C5FF",
      "300": "#75A8FF",
      "400": "#478BFF",
      "500": "#1A6DFF",
      "600": "#0052E0",
      "700": "#003EA8",
      "800": "#002970",
      "900": "#001538"
    },
    "danger": {
      "50": "#FFF0F0",
      "100": "#FFE0E1",
      "200": "#FFBDBE",
      "300": "#FF9EA0",
      "400": "#FF8082",
      "500": "#FF5E60",
      "600": "#FF1A1D",
      "700": "#D10003",
      "800": "#8A0002",
      "900": "#470001"
    },
    "line": {
      "50": "#FCFCFC",
      "100": "#FCFCFC",
      "200": "#F7F7F7",
      "300": "#F5F5F5",
      "400": "#F2F2F2",
      "500": "#EEEEEE",
      "600": "#BFBFBF",
      "700": "#8F8F8F",
      "800": "#5E5E5E",
      "900": "#303030"
    },
    "placeholder": {
      "50": "#F7F8F8",
      "100": "#EFF0F0",
      "200": "#DFE1E1",
      "300": "#D0D3D2",
      "400": "#C0C4C3",
      "500": "#B0B5B4",
      "600": "#8B9391",
      "700": "#686F6D",
      "800": "#454A49",
      "900": "#232524"
    },
    "success": {
      "50": "#E0FFF6",
      "100": "#C2FFEE",
      "200": "#8AFFDE",
      "300": "#4DFFCC",
      "400": "#14FFBD",
      "500": "#00D69A",
      "600": "#00AD7C",
      "700": "#00805B",
      "800": "#00573E",
      "900": "#00291D"
    },
    "border": {
      "50": "#FCFCFC",
      "100": "#F7F7F7",
      "200": "#F2F2F2",
      "300": "#EBEBEB",
      "400": "#E3E3E3",
      "500": "#DDDDDD",
      "600": "#B0B0B0",
      "700": "#858585",
      "800": "#595959",
      "900": "#2B2B2B"
    },
    subGray: '#888888'
  }
};


module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      ...extend
    },
  },
  plugins: [],
}
