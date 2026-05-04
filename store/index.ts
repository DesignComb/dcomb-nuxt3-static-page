import type {NotionDB, NotionPage} from '@/utils/types/notionTypes'

export const useMainStore = defineStore('main', {
    state: () => ({
        isMobileHeader:false,

        notionDB: null as NotionDB | null,
        notionPage: null as NotionPage | null,
        // notionPageBlock: null as NotionPage | null,
    }),
    persist: true,
    actions: {
        async fetchNotionDB() {
            // console.log('我有撈DB!')
            const data = await $fetch('https://api.notion.com/v1/databases/64be8f5b7e454a53b59f0f4561c0287a/query', {
                method: 'POST',

                headers: {
                    Accept: 'application/json',
                    'Notion-Version': '2022-06-28',
                    'Authorization': 'Bearer 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'
                },
                body: {
                    sorts: [
                        {
                            "property": "Sort",
                            "direction": "ascending"
                        }
                    ]
                }
            })
            if (data) {
                this.notionDB = data as NotionDB
            }
            return data
        },
        async fetchNotionPage(pageID: string): Promise<NotionPage>{
            // console.log(`我有撈!${pageID}`)
            const data = await $fetch(`https://api.notion.com/v1/pages/${pageID}`, {
                method: 'GET',

                headers: {
                    Accept: 'application/json',
                    'Notion-Version': '2022-06-28',
                    'Authorization': 'Bearer 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'
                }
            })
            if (data) {
                this.notionPage = data as NotionPage
            }
            return data as NotionPage
        },
        closeMobileHeader(){
            this.isMobileHeader = false
        }
        // async fetchNotionPageBlock(pageID: string) {
        //     const data = await $fetch(`https://api.notion.com/v1/blocks/${pageID}/children?page_size=999`, {
        //         method: 'GET',
        //         credentials: 'include',
        //         headers: {
        //             Accept: 'application/json',
        //             'Notion-Version': '2022-06-28',
        //             'Authorization': 'Bearer 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'
        //         }
        //     })
        //     if (data) {
        //         this.notionPageBlock = data
        //     }
        //     return data
        // },
    },
    getters: {
        getDBItemArr(): any {
            if (this.notionDB) {
                return this.notionDB?.results.filter(
                    (item: any) => item.properties?.Name?.title?.length > 0
                )
            }
        },
        getSimilarItems(): any {
            // console.log(this.notionPage)
            if (this.notionDB && this.notionPage) {
                // 1. 取得當前 notionPage 的 tags
                const currentPageTags = getItemTagIds(this.notionPage)

                // 2. 為每個 item 計算匹配的 tag 數量
                const scoredItems = this.notionDB?.results?.map(item => {
                    const itemTags = getItemTagIds(item);
                    const commonTagsCount = itemTags?.filter(tag => currentPageTags?.includes(tag)).length || 0

                    return {
                        item: item,
                        score: commonTagsCount
                    };
                });
                // 3. 依據匹配的 tag 數量進行排序且過濾掉當前的 notionPage
                const sortedItems = scoredItems.sort((a, b) => b.score - a.score)
                    .filter(scoredItem => scoredItem.item.id !== this.notionPage?.id)
                    .map(scoredItem => scoredItem.item);

                // 4. 返回匹配度最高的前三項
                return sortedItems.slice(0, 3);
            }
            return [];
        },
        getDBItemAllTags(): any{
            let skills:any = []
            if (this.notionDB) {
                this.notionDB?.results.forEach((res)=>{
                    res?.properties.Skill?.multi_select.forEach((item)=>{
                        if(!skills.some((obj:any) => obj.id === item.id)){
                            skills.push(item)
                        }
                    })
                })
            }
            return skills
        }
    }
})
