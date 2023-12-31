import type {Theme} from '@unocss/preset-mini'
import {defineConfig, e, presetAttributify, presetIcons, presetUno} from 'unocss'
import {presetWebFonts} from 'unocss'
import {boxShadow} from "@unocss/preset-mini/theme";

export default defineConfig({
    shortcuts: [
        {
            'btn': 'px-4 py-1 rounded inline-block bg-primary text-white cursor-pointer tracking-wide op90 hover:op100 disabled:cursor-default disabled:bg-gray-600 disabled:!op50 disabled:pointer-events-none',
            'icon-btn': 'text-1.2em cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary disabled:pointer-events-none',
            'square-btn': 'flex flex-gap-2 items-center border border-base px2 py1 relative !outline-none',
            'square-btn-mark': 'absolute h-2 w-2 bg-primary -right-0.2rem -top-0.2rem',

            'bg-base': 'bg-white dark:bg-[#121212]',
            'bg-overlay': 'bg-[#eee]:50 dark:bg-[#222]:50',
            'bg-header': 'bg-gray-500:5',
            'bg-active': 'bg-gray-500:8',
            'bg-hover': 'bg-gray-500:20',
            'border-base': 'border-gray-400:10',

            'tab-button': 'font-light op50 hover:op80 h-full px-4',
            'tab-button-active': 'op100 bg-gray-500:10',

            'notion-bg-default': 'bg-[#cecdca80]',
            'notion-bg-lightgray': 'bg-[#cecdca80]',
            'notion-bg-gray': 'bg-[#9b9a9766]',
            'notion-bg-brown': 'bg-[#8c2e0033]',
            'notion-bg-orange': 'bg-[#f55d0033]',
            'notion-bg-yellow': 'bg-[#e9a80033]',
            'notion-bg-green': 'bg-[#00876b33]',
            'notion-bg-blue': 'bg-[#0078df33]',
            'notion-bg-purple': 'bg-[#6724de33]',
            'notion-bg-pink': 'bg-[#dd008133]',
            'notion-bg-red': 'bg-[#ff001a33]',

            'max-w-content': 'max-w-[1440px] mx-auto',
        },
        [/^(flex|grid)-center/g, () => 'justify-center items-center'],
        [/^(flex|grid)-x-center/g, () => 'justify-center'],
        [/^(flex|grid)-y-center/g, () => 'items-center'],
    ],
    rules: [
        ['max-h-screen', {'max-height': 'calc(var(--vh, 1vh) * 100)'}],
        ['h-screen', {height: 'calc(var(--vh, 1vh) * 100)'}],
        ['w-screen', {width: 'calc(var(--vw, 1vw) * 100)'}],
        ['shadow-card', {'box-shadow': '0px 4px 4px 0px #00000040'}],
    ],
    theme: <Theme>{
        colors: {
            'comb': '#ffca84',
            'comb-light':'#F6EDDC',
            'ok': 'var(--c-ok)',
            'primary': 'var(--c-primary)',
            'primary-deep': 'var(--c-primary-deep)',
            'mis': 'var(--c-mis)',
        },
        breakpoints: {
            xs: '320px',
            sm: '425px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
        },
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
        }),
        presetWebFonts({
            provider: 'google',
            fonts: {
                noto: 'Noto Sans TC',
                Orbitron: 'Orbitron',
                Inter: 'Inter',
                Heebo: 'Heebo',
                Anton: 'Anton',
                'Roboto_Mono': 'Roboto Mono',
                Roboto: [
                    {
                        name: 'Roboto',
                        weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
                        italic: true,
                    },
                ]
            }
        }),
    ],
    content: {
        pipeline: {
            include: [
                // the default
                /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                // include js/ts files
                // 'src/**/*.{js,ts}',
            ],
        }
    }
})