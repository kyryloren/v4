import { css } from 'styled-components';

import MaziusRegularWOFF from '@fonts/Mazius/MaziusDisplayRegular.woff';
import MaziusRegularWOFF2 from '@fonts/Mazius/MaziusDisplayRegular.woff2';
import MaziusItalicWOFF from '@fonts/Mazius/MaziusDisplayItalic.woff';
import MaziusItalicWOFF2 from '@fonts/Mazius/MaziusDisplayItalic.woff2';
import MaziusExtraItalicWOFF from '@fonts/Mazius/MaziusDisplayExtraitalic.woff';
import MaziusExtraItalicWOFF2 from '@fonts/Mazius/MaziusDisplayExtraitalic.woff2';

const maziusRegularWeights = {
  500: [MaziusRegularWOFF, MaziusRegularWOFF2],
};

const maziusItalicWeights = {
  500: [MaziusItalicWOFF, MaziusItalicWOFF2],
  600: [MaziusExtraItalicWOFF, MaziusExtraItalicWOFF2],
};

const mazius = {
  name: 'Mazius Display',
  normal: maziusRegularWeights,
  italic: maziusItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const maziusRegular = createFontFaces(mazius);
const maziusItalic = createFontFaces(mazius, 'italic');

const Fonts = css`
  ${maziusRegular + maziusItalic}
`;

export default Fonts;
