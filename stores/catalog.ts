export const useCatalogStore = defineStore('catalog', {
  state: (): { item: any } => ({
    item: undefined,
  }),
  actions: {
    async getProduct(slug: string) {
      const data = await $fetch<any>(`/api/catalog/${slug}`)

      return this.item = data
    }
  }
})
