const CacheHelper = {
  async cachingAppShell(request) {
    const cache = await this._openCache();
    cache.addAll(request);
  },
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames.filter((name) => name !== 'restaurant-calalogue-v1')
      .map((filteredName) => caches.delete(filteredName));
  },
  async revalidateCache(request) {
    const response = await caches.match(request);
    if (response) {
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  },
  async _openCache() {
    return caches.open('restaurant-catalogue-v1');
  },
  async _addCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  },
  async _fetchRequest(request) {
    const response = await fetch(request);
    if (!response || response.status !== 200) {
      return response;
    }
    await this._addCache(request);
    return response;
  },
};

export default CacheHelper;
