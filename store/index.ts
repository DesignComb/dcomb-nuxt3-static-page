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
            console.log('我有撈DB!')
            const data = await $fetch('https://api.notion.com/v1/databases/5ad9018ec1a9408cbc7781197832c880/query', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Authorization': 'Bearer secret_8Ujk50jsgGBNH8x1D8pi3DKB1ppeIRHAs9XNdMCoyog'
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
            console.log(`我有撈!${pageID}`)
            const data = await $fetch(`https://api.notion.com/v1/pages/${pageID}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Authorization': 'Bearer secret_8Ujk50jsgGBNH8x1D8pi3DKB1ppeIRHAs9XNdMCoyog'
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
        //             'Authorization': 'Bearer secret_8Ujk50jsgGBNH8x1D8pi3DKB1ppeIRHAs9XNdMCoyog'
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
                return this.notionDB?.results
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
    }
})
