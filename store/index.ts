interface NotionDBType {
    results?: any[];
}
export const useMainStore = defineStore('main', {
    state: () => ({
        notionDB: null as NotionDBType | null,
        notionPage: {}
    }),
    actions: {
        async fetchNotionDB() {
            const data = await $fetch('https://api.notion.com/v1/databases/5ad9018ec1a9408cbc7781197832c880/query', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Authorization': 'Bearer secret_8Ujk50jsgGBNH8x1D8pi3DKB1ppeIRHAs9XNdMCoyog'
                }
            })
            if (data) {
                this.notionDB = data
            }
            return data
        },
        async fetchNotionPage(pageID: string) {
            const data = await $fetch(`https://api.notion.com/v1/blocks/${pageID}/children?page_size=999`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Authorization': 'Bearer secret_8Ujk50jsgGBNH8x1D8pi3DKB1ppeIRHAs9XNdMCoyog'
                }
            })
            if (data) {
                this.notionPage = data
            }
            return data
        },
    },
    getters: {
        getDBItemArr(): any {
            if (this.notionDB) {
                return this.notionDB?.results
            }
        },
    }
})
