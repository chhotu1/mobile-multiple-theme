
// import { Themes } from '@/constants/Theme';
// import { useColorScheme } from '@/hooks/useColorScheme';

import { useTheme } from "@/components/ThemeContext";
import { Themes } from "@/constants/Theme";

// export function useThemeColor(
//   props: { light?: string; dark?: string },
//   colorName: keyof typeof Themes.light & keyof typeof Themes.dark
// ) {
//   const theme = useColorScheme() ?? 'light';
//   const colorFromProps = props[theme];

//   if (colorFromProps) {
//     return colorFromProps;
//   } else {
//     return Themes[theme][colorName];
//   }
// }


type ThemePropertyKeys = keyof typeof Themes['light'];

export const useThemeColor = (key: ThemePropertyKeys): string => {
  const { theme } = useTheme();
  return theme[key];
};