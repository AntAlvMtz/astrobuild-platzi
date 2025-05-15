module.exports = {
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    useTabs: true,
    plugins: [
        reequire("prettier-plugins-astro")
    ],
    overrides: [
        {
            files: '**/*astro',
            options: {
                parser: "astro",
            },
        },
    ],
}