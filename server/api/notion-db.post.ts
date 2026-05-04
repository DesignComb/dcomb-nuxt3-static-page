export default defineEventHandler(async () => {
    const config = useRuntimeConfig()
    const data: any = await $fetch('https://api.notion.com/v1/databases/64be8f5b7e454a53b59f0f4561c0287a/query', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'Authorization': `Bearer ${config.notionApiKey}`
        },
        body: {
            sorts: [
                {
                    property: 'Sort',
                    direction: 'ascending'
                }
            ]
        }
    })

    // Fix image URLs at build time
    for (const item of data.results) {
        await fixFileUrls(item.properties?.Cover?.files)
        await fixFileUrls(item.properties?.ProjectImage?.files)
    }

    return data
})
