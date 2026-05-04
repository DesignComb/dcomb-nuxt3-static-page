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
            const data = await $fetch('/api/notion-db', {
                method: 'POST',
            })
            if (data) {
                this.notionDB = data as NotionDB
            }
            return data
        },
        async fetchNotionPage(pageID: string): Promise<NotionPage>{
            const data = await $fetch('/api/notion-page', {
                method: 'GET',
                params: { id: pageID }
            })
            if (data) {
                this.notionPage = data as NotionPage
            }
            return data as NotionPage
        },
        closeMobileHeader(){
            this.isMobileHeader = false
        }
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
