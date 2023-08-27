type NotionText = {
    plain_text: string;
};

type NotionItem = {
    properties: {
        Name?: {
            title: NotionText[];
        };
        Text?: {
            text: NotionText[];
        };
    };
};
export const getItemCover = (item:any) => {
    if (item?.cover) {
        if (item.cover.type === 'external') {
            return item.cover.external.url
        } else if (item.cover.type === 'file') {
            return item.cover.file.url
        } else {
            return ''
        }
    }
    else if(item?.properties?.Cover){
        if (item.properties.Cover?.type === 'files') {
            return item.properties.Cover?.files[0]?.file?.url
        }  else {
            return ''
        }
    }
    else {
        return ''
    }
}

export const getItemTitleText = (notionItem: NotionItem) => {
    return notionItem?.properties?.Name?.title.map(item => item.plain_text).join('') || '';
}

export const getItemText = (notionItem: NotionItem) => {
    return notionItem?.properties?.Text?.text.map(item => item.plain_text.replace(/\n/g,"<br>")).join('') || '';
}
