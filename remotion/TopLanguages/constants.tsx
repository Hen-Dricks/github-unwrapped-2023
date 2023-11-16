import { getBoundingBox, getLength, scalePath } from "@remotion/paths";
import { SVGProps } from "react";
import { z } from "zod";
import { JavaPlanetBoundingBox, JavaPlanetSVG } from "./svgs/JavaPlanetSVG";
import {
  JavaScriptPlanetBoundingBox,
  JavaScriptPlanetSVG,
} from "./svgs/JavaScriptPlanetSVG";
import {
  PythonPlanetBoundingBox,
  PythonPlanetSVG,
} from "./svgs/PythonPlanetSVG";

export const ACTION_DURATION = 60;

// export const PLANET_1_ACTION_FRAME = 20;
export const PLANET_1_POSITION = 0.5;
export const PLANET_2_POSITION = 0.65;
export const PLANET_3_POSITION = 0.8;
export const PLANET_POSITIONS = [
  PLANET_1_POSITION,
  PLANET_2_POSITION,
  PLANET_3_POSITION,
];

const rocketPath =
  "M2.00659 1.77441C6.80236 44.9363 58.8918 96.6656 83.1907 128.696C112.176 166.904 143.416 215.221 176.953 248.757C235.703 307.507 310.932 347.84 372.48 402.549C459.885 480.242 617.849 526.612 732.663 526.612C818.206 526.612 895.152 530.445 974.5 506.03C1060.94 479.434 1119.48 427.199 1195.76 384.826C1228.79 366.475 1264.69 338.268 1294.09 310.503C1317.96 287.962 1362.56 266.646 1380.99 243.611C1431.03 181.071 1522.17 187.155 1586.81 158.425C1618.24 144.457 1675.57 156.138 1710.3 156.138C1754.49 156.138 1805.39 148.843 1848.66 156.71C1947.67 174.712 2049.73 225.792 2137.38 274.484C2227.05 324.304 2331.02 357.438 2418.09 413.412C2467.92 445.448 2522.41 461.571 2574.74 487.735C2621.97 511.35 2679.51 513.554 2723.39 541.477C2805.41 593.674 2942.9 608.94 3037.83 608.94C3104.25 608.94 3226.17 630.031 3276.81 590.645C3287.66 582.211 3296.23 617.346 3300.82 618.659C3317.08 623.303 3339.95 619.231 3356.85 619.231C3408.22 619.231 3457.92 598.649 3506.07 598.649C3542.67 598.649 3576.57 582.181 3608.98 567.776C3668.71 541.231 3734.89 529.843 3797.08 508.317C3878.9 479.993 4002.71 453.18 4046.35 376.822C4073.55 329.21 4106.13 204.486 4062.35 160.712C3997.29 95.6515 3922.13 68.6254 3830.24 63.52C3764.24 59.8536 3656.97 46.5784 3598.69 78.9565C3564.01 98.2209 3531.25 115.614 3496.35 135.557C3465.41 153.238 3451.24 192.741 3428.89 217.884C3398.25 252.354 3390.73 305.501 3356.85 341.375C3334.33 365.223 3302.83 427.556 3295.68 459.721C3282.91 517.165 3219.45 572.783 3212.78 629.522C3204.59 699.15 3157.21 768.947 3141.31 840.486C3108.24 989.306 2997.7 1126.64 2893.76 1236.69C2829.12 1305.13 2767.07 1359.81 2693.09 1417.35C2619.34 1474.71 2576.06 1483.67 2482.12 1483.67C2294.89 1483.67 2108.16 1470.7 1930.99 1535.12C1868.15 1557.97 1806.32 1597.76 1764.04 1650.61C1721.25 1704.11 1717.75 1789.28 1684.58 1849C1649.61 1911.93 1631.35 1985.76 1599.39 2049.67C1583.94 2080.56 1567.44 2141.32 1540.5 2162.87C1525.88 2174.57 1475.43 2250.29 1473.61 2265.78C1471 2288.01 1432.24 2316.79 1419.87 2337.82C1402.29 2367.71 1363.04 2424.2 1334.11 2440.73C1270.4 2477.13 1201.93 2566.69 1123.72 2574.51C1058.25 2581.06 982.634 2620.56 917.9 2638.54C846.768 2658.3 774.142 2676.8 701.79 2687.14C590.966 2702.97 474.798 2698 362.189 2698C214.398 2698 198.302 2389.27 351.898 2389.27C502.568 2389.27 667.481 2460.98 692.071 2620.82C702.147 2686.31 721.182 2795.3 693.786 2856.94C680.948 2885.82 645.163 2934.86 640.045 2965.56C635.862 2990.66 578.309 3038.73 562.291 3063.9C545.014 3091.05 502.33 3114.47 495.4 3145.66C485.909 3188.36 475.39 3218.22 475.39 3264C475.39 3332.9 521.127 3409.89 568.008 3459.53C630.739 3525.95 710.676 3565.09 789.263 3608.75C813.234 3622.07 855.945 3655.06 881.882 3655.06C916.047 3655.06 979.168 3669.71 1010.52 3683.64C1073.69 3711.72 1178.46 3675.64 1242.06 3675.64C1316.36 3675.64 1394.2 3608.77 1447.88 3567.01C1595.02 3452.57 1760.08 3356.42 1941.85 3316.03C2026.41 3297.24 2106.29 3294.87 2193.98 3294.87C2265.02 3294.87 2319.49 3354.3 2384.93 3382.35C2459.59 3414.35 2641.25 3439.9 2706.24 3374.92C2731.83 3349.33 2762.54 3328.9 2788.56 3302.88C2833.04 3258.4 2818.66 3227.54 2806.29 3165.67C2800.29 3135.69 2819.04 2924.37 2785.13 2914.68C2753.15 2905.54 2701.44 2913.4 2677.65 2934.69C2651.86 2957.76 2595.32 2994.72 2595.32 3032.46C2595.32 3087.38 2576.94 3147.25 2574.74 3204.54C2572.64 3259.28 2558.23 3312.42 2582.75 3366.91C2594.49 3393.01 2605.74 3475.45 2631.91 3490.4C2704.88 3532.1 2778.95 3562.44 2862.89 3562.44C2899.42 3562.44 2942.73 3569.26 2976.09 3554.44C3009.74 3539.48 3068.37 3521.28 3104.72 3521.28C3148.3 3521.28 3204 3501.18 3243.65 3482.4C3312.36 3449.85 3391.87 3451.09 3459.19 3413.22C3589.61 3339.86 3780.62 3346.33 3927.43 3346.33C4018.38 3346.33 4120.62 3369.71 4180.13 3444.09C4227.45 3503.25 4319.45 3521.18 4385.95 3554.44C4430.57 3576.75 4555.02 3594.76 4581.47 3541.86";

// export const rocketPath =
//   "M2.28125 35.3745C268.977 35.3745 535.674 35.3745 802.37 35.3745C1071.23 35.3745 1338.01 52.199 1606.17 57.6163C1748.72 60.4963 1894.58 82.8654 2036.79 96.5396C2189.58 111.231 2346.2 106.078 2499.55 112.603C2732.73 122.526 2967.96 113.221 3201.4 113.221C3362.81 113.221 3523.44 102.1 3685.16 102.1C3877.04 102.1 4062.85 46.4954 4252.94 46.4954C4430.3 46.4954 4603.2 13.1326 4781.19 13.1326C4900.02 13.1326 5018.85 13.1326 5137.68 13.1326C5176.56 13.1326 5229.72 23.8504 5262.48 2.01172";

const boundingBox = getBoundingBox(rocketPath);
const scale = boundingBox.width / 2160;
export const newPath = scalePath(rocketPath, 1 / scale, 1 / scale);
export const complexCurvePathLength = getLength(newPath);

export const LanguagesEnum = z.enum(["Java", "Python", "JavaScript"]);

const LanguageOptions = LanguagesEnum.options;
export type LanguageEnumType = (typeof LanguageOptions)[number];

export const mapLanguageToPlanet: Record<
  LanguageEnumType,
  {
    boundingBox: {
      width: number;
      height: number;
    };
    PlanetSVG: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  }
> = {
  [LanguagesEnum.enum.Java]: {
    boundingBox: JavaPlanetBoundingBox,
    PlanetSVG: JavaPlanetSVG,
  },
  [LanguagesEnum.enum.Python]: {
    boundingBox: PythonPlanetBoundingBox,
    PlanetSVG: PythonPlanetSVG,
  },
  [LanguagesEnum.enum.JavaScript]: {
    boundingBox: JavaScriptPlanetBoundingBox,
    PlanetSVG: JavaScriptPlanetSVG,
  },
};
