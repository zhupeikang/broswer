import { defineConfig, presetAttributify, presetWind3 } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
export default defineConfig({
    presets: [
        presetAttributify({ /* preset options */}),
        presetWind3(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                // 全站默认 sans 字体：Montserrat Alternates
                sans: [
                    {
                        name: 'Montserrat',
                        weights: [300, 400, 500, 600, 700],
                    },
                ],
            },
        }),
    ],
})
