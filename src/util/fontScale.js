/* getting fontscale according to the pixel ratio of device */
import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();
export const getFontSize = size => size / fontScale;