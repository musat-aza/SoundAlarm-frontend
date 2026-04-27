import { css } from 'styled-components';

const media = {
  mobile: '@media (min-width: 14rem) and (max-width: 44.9375rem)',
  hover: '@media (hover: hover) and (pointer: fine)',
} as const;

const createFontStyle = (
  size: number,
  weight: number,
  lineHeight: number,
  letterSpacing = 0,
) => css`
  font-family:
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: ${size}rem;
  font-style: normal;
  font-weight: ${weight};
  line-height: ${lineHeight}rem;
  letter-spacing: ${letterSpacing}rem;
`;

const colors = {
  primary: {
    VT500: '#3e44e9',
    MT400: '#6ca9c8',
  },
  secondary: {
    VT700: '#1919dc',
    VT500: '#3e41e9',
    VT100: '#F5EEFB',
    VT50: '#FAF6FD',
    MT700: '#007385',
    MT500: '#66b9d7',
    MT100: '#D1EEED',
  },
  grayScale: {
    white: '#FCFCFF',
    gray50: '#F6F7FA',
    gray100: '#EEF0F5',
    gray200: '#E1E4EB',
    gray300: '#D0D2DC',
    gray400: '#C0C2CF',
    gray500: '#A3A9BC',
    gray600: '#8A8DA0',
    gray700: '#6F7587',
    gray800: '#575D6B',
    gray900: '#3B3F48',
    black: '#19181D',
  },
  transparents: {
    BL100: 'rgba(25, 24, 29, 0.10)',
    BL200: 'rgba(25, 24, 29, 0.20)',
    WH200: 'rgba(252, 252, 255, 0.20)',
    WH300: 'rgba(252, 252, 255, 0.30)',
  },
  inner: {
    GL100: {
      background: 'rgba(252, 252, 255, 0.30)',
      boxShadow:
        '-0.0125rem 0 0.0625rem 0 #FCFCFF inset, 0 -0.0625rem 0.625rem 0 rgba(252, 252, 255, 0.30) inset, 0.01875rem 0.01875rem 0.03125rem 0 #FCFCFF inset, 0 0 0.5rem 0 rgba(25, 24, 29, 0.08) inset',
      backdropFilter: 'blur(0.125rem)',
    },
    GL200: {
      background: 'rgba(252, 252, 255, 0.05)',
      boxShadow:
        '-0.0125rem 0 0.09375rem 0 #FCFCFF inset, -0.0625rem -0.0625rem 0.625rem 0 rgba(252, 252, 255, 0.30) inset, 0.03125rem 0.03125rem 0.0625rem 0 #FCFCFF inset, 0.0625rem 0.0625rem 0.5rem 0 rgba(25, 24, 29, 0.08) inset',
      backdropFilter: 'blur(0.625rem)',
    },
    Gl_DS_VT: {
      background: 'rgba(252, 252, 255, 0.30)',
      boxShadow:
        '-0.0125rem 0 0.0625rem 0 #FCFCFF inset, 0 -0.0625rem 0.625rem 0 rgba(252, 252, 255, 0.30) inset, 0.01875rem 0.01875rem 0.03125rem 0 #FCFCFF inset, 0 0 0.5rem 0 rgba(25, 24, 29, 0.08) inset, 0 0.0625rem 0.75rem 0 rgba(151, 62, 233, 0.30)',
      backdropFilter: 'blur(0.625rem)',
    },
  },
  systems: {
    default: '#D0D2DC',
    active: '#01B777',
    success: '#3D85FF',
    error: '#EF5D58',
    warning: '#EFB058',
  },
} as const;

const withOpacity = (color: string, opacity: number) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
};

const withTint = (color: string, amount: number) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const tintR = Math.round(r + (255 - r) * (amount / 100));
  const tintG = Math.round(g + (255 - g) * (amount / 100));
  const tintB = Math.round(b + (255 - b) * (amount / 100));

  return `#${tintR.toString(16).padStart(2, '0')}${tintG
    .toString(16)
    .padStart(2, '0')}${tintB.toString(16).padStart(2, '0')}`;
};

const withShade = (color: string, amount: number) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const shadeR = Math.round(r * (1 - amount / 100));
  const shadeG = Math.round(g * (1 - amount / 100));
  const shadeB = Math.round(b * (1 - amount / 100));

  return `#${shadeR.toString(16).padStart(2, '0')}${shadeG
    .toString(16)
    .padStart(2, '0')}${shadeB.toString(16).padStart(2, '0')}`;
};

const borders = {
  hard: '0.375rem',
  sharp: '0.5rem',
  smooth: '0.75rem',
  soft: '1.125rem',
  round: '1.5rem',
} as const;

const gaps = {
  none: '0',
  XXXS: '0.125rem',
  XXS: '0.25rem',
  XS: '0.375rem',
  S: '0.5rem',
  R: '0.625rem',
  M: '0.75rem',
  L: '0.875rem',
  XL: '1rem',
  XXL: '1rem',
  CenterSheet: '0.75rem',
  GeneralMargin: '1rem',
} as const;

const componentWidths = {
  min: '6.0625rem',
  small: '8.0625rem',
  medium: '11.375rem',
  large: '20.5rem',
  max: '20.5rem',
} as const;

const overlaySheets = {
  width: '22.5rem',
} as const;

const overlayModals = {
  width: '20.5rem',
} as const;

const sourceWidths = {
  S: '1rem',
  R: '1.25rem',
  M: '1.375rem',
  L: '2rem',
} as const;

const generalViewport = '22.5rem';

const fonts = {
  heading: {
    Extra: createFontStyle(1.375, 700, 2, -0.03),
    h0: createFontStyle(1.375, 600, 2, -0.0275),
    h1: createFontStyle(1.125, 600, 1.75, -0.0225),
    h2: createFontStyle(1, 600, 1.5, -0.02),
    h3: createFontStyle(0.875, 600, 1.31, -0.0175),
    h4: createFontStyle(0.75, 600, 1.25, -0.0175),
  },
  body: {
    l500: createFontStyle(1, 500, 1.5, -0.02),
    l400: createFontStyle(1, 400, 1.5, -0.02),
    m500: createFontStyle(0.875, 500, 1.25, -0.0175),
    m400: createFontStyle(0.875, 400, 1.25, -0.0175),
    r500: createFontStyle(0.8125, 500, 1.125, -0.01625),
    r400: createFontStyle(0.8125, 400, 1.125, -0.01625),
    s500: createFontStyle(0.75, 500, 0.125, -0.015),
    s400: createFontStyle(0.75, 400, 0.125, -0.015),
  },
} as const;

const effects = {
  dropShadows: {
    DS100: '0 0 0.25rem 0 rgba(25, 24, 29, 0.10)',
    DS200: '0 0.0625rem 0.75rem 0 rgba(25, 24, 29, 0.10)',
    DS300: '0 0.125rem 1.5rem 0 rgba(25, 24, 29, 0.10)',
    DS200_VT: '0 0.0625rem 0.75rem 0 rgba(151, 62, 233, 0.30)',
  },
  backdropBlur: {
    BG100: 'backdrop-filter: blur(0.25rem)',
    BG200: 'backdrop-filter: blur(0.5rem)',
    BG300: 'backdrop-filter: blur(1rem)',
    BG400: 'backdrop-filter: blur(1.5rem)',
  },
  gradients: {
    primary: 'linear-gradient(83deg, #973EE9 9.02%, #66D7BC 90.81%)',
    grayscale: 'linear-gradient(83deg, #D0D2DC 9.02%, #6F7587 90.81%)',
  },
} as const;

const responsive = {
  gap: (size: keyof typeof gaps) => gaps[size],
  border: (type: keyof typeof borders) => borders[type],
  width: (size: keyof typeof componentWidths) => componentWidths[size],
  sourceWidth: (size: keyof typeof sourceWidths) => sourceWidths[size],
  padding: (size: keyof typeof gaps) => gaps[size],
  borderRadius: (type: keyof typeof borders) => borders[type],
  overlayModalWidth: () => overlayModals.width,
  overlaySheetsWidth: () => overlaySheets.width,
  property: {
    gap: (size: keyof typeof gaps) => css`
      gap: ${gaps[size]};
    `,
    padding: (size: keyof typeof gaps) => css`
      padding: ${gaps[size]};
    `,
    paddingComplex: (
      top: keyof typeof gaps,
      right: keyof typeof gaps,
      bottom: keyof typeof gaps,
      left: keyof typeof gaps,
    ) => css`
      padding: ${gaps[top]} ${gaps[right]} ${gaps[bottom]} ${gaps[left]};
    `,
    borderRadius: (type: keyof typeof borders) => css`
      border-radius: ${borders[type]};
    `,
    width: (size: keyof typeof componentWidths) => css`
      width: ${componentWidths[size]};
    `,
    height: (size: keyof typeof componentWidths) => css`
      height: ${componentWidths[size]};
    `,
    sourceWidth: (size: keyof typeof sourceWidths) => css`
      width: ${sourceWidths[size]};
    `,
    sourceHeight: (size: keyof typeof sourceWidths) => css`
      height: ${sourceWidths[size]};
    `,
    overlayModalWidth: () => css`
      width: ${overlayModals.width};
    `,
    overlaySheetsWidth: () => css`
      width: ${overlaySheets.width};
    `,
    sourceSize: (size: keyof typeof sourceWidths) => css`
      width: ${sourceWidths[size]};
      height: ${sourceWidths[size]};
    `,
    generalViewport: () => css`
      width: ${generalViewport};
    `,
  },
} as const;

const layouts = {
  mobileCommon: css`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  `,
} as const;

export const theme = {
  colors,
  fonts,
  effects,
  layouts,
  media,
  borders,
  gaps,
  componentWidths,
  sourceWidths,
  overlaySheets,
  overlayModals,
  responsive,
  generalViewport,
  withOpacity,
  withTint,
  withShade,
} as const;

export type ThemeType = typeof theme;
