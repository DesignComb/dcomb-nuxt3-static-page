type NotionText = {
    plain_text: string;
};
type NotionFile = {
    type: string;
    external:{
        url:string
    }
};
type NotionItem = {
    properties: {
        Name?: {
            title: NotionText[];
        };
        Text?: {
            text: NotionText[];
        };
        ProjectImage?:{
            files: NotionFile[];
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
            if(item.properties.Cover?.files[0]?.type === 'external'){
                return item.properties.Cover?.files[0]?.external?.url
            }
            else {
                return item.properties.Cover?.files[0]?.file?.url
            }
        }  else {
            return ''
        }
    }
    else {
        return ''
    }
}
export const getItemProjectImage = (item:any) => {
    const imgObj = item?.properties?.ProjectImage?.files
    return imgObj.map((item:NotionFile) => {
        return item.external.url
    })
}
export const getItemTitleText = (notionItem: NotionItem) => {
    return notionItem?.properties?.Name?.title.map(item => item.plain_text).join('') || '';
}

export const getItemText = (notionItem: NotionItem) => {
    return notionItem?.properties?.Text?.text.map(item => item.plain_text.replace(/\n/g,"<br>")).join('') || '';
}
