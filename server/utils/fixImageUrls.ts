const PRIMARY_PREFIX = 'dcomb-web.s3.ap-northeast-1.amazonaws.com/webp/'
const FALLBACK_PREFIX = 'dcomb-web-image.s3.ap-northeast-1.amazonaws.com/'

async function urlExists(url: string): Promise<boolean> {
    try {
        const res = await $fetch.raw(url, { method: 'HEAD' })
        return res.status === 200
    } catch {
        return false
    }
}

export async function fixFileUrls(files: any[]): Promise<void> {
    if (!files) return
    for (const file of files) {
        const url = file?.external?.url
        if (url && url.includes(PRIMARY_PREFIX)) {
            const exists = await urlExists(url)
            if (!exists) {
                file.external.url = url.replace(PRIMARY_PREFIX, FALLBACK_PREFIX)
            }
        }
    }
}
