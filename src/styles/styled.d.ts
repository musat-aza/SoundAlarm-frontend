import 'styled-components';
import type { ThemeType } from './theme';

declare module 'styled-components' {
  // styled-components module augmentation pattern.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
