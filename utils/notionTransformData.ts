import {NotionDB, NotionPage} from '@/utils/types/notionTypes'

export const getItemCover = (notionItem?: NotionPage | null) => {
    const urls = notionItem?.properties?.Cover?.files.map(item => item.external.url);
    return urls ? urls[0] : undefined;
}
export const getItemProjectImage = (notionItem?: NotionPage | null) => {
    return notionItem?.properties?.ProjectImage?.files.map(item => item.external.url);
}
export const getItemTitleText = (notionItem?: NotionPage | null) => {
    return notionItem?.properties?.Name?.title.map(item => item.plain_text).join('') || '';
}

export const getItemText = (notionItem?: NotionPage | null) => {
    return notionItem?.properties?.Text?.text.map(item => item.plain_text.replace(/\n/g, "<br>")).join('') || '';
}

export const getItemTagIds = (notionItem?: NotionPage | null) => {
    return notionItem?.properties?.Tags?.multi_select.map(item => item.id);
}
