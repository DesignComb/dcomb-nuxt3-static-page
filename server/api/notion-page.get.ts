export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const pageID = query.id as string
    if (!pageID) {
        throw createError({ statusCode: 400, message: 'Missing page id' })
    }
    const config = useRuntimeConfig()
    const data: any = await $fetch(`https://api.notion.com/v1/pages/${pageID}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'Authorization': `Bearer ${config.notionApiKey}`
        }
    })

    // Fix image URLs at build time
    await fixFileUrls(data.properties?.Cover?.files)
    await fixFileUrls(data.properties?.ProjectImage?.files)

    return data
})
