const quotes = []

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const quoteService = {
  async getAll() {
    await delay(300)
    return [...quotes]
  },

  async getById(id) {
    await delay(200)
    const quote = quotes.find(q => q.Id === id)
    if (!quote) {
      throw new Error('Quote not found')
    }
    return { ...quote }
  },

  async create(quoteData) {
    await delay(500)
    const newId = quotes.length > 0 ? Math.max(...quotes.map(q => q.Id)) + 1 : 1
    const newQuote = {
      ...quoteData,
      Id: newId,
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    quotes.push(newQuote)
    return { ...newQuote }
  },

  async update(id, quoteData) {
    await delay(400)
    const index = quotes.findIndex(q => q.Id === id)
    if (index === -1) {
      throw new Error('Quote not found')
    }
    quotes[index] = { ...quotes[index], ...quoteData }
    return { ...quotes[index] }
  },

  async delete(id) {
    await delay(300)
    const index = quotes.findIndex(q => q.Id === id)
    if (index === -1) {
      throw new Error('Quote not found')
    }
    quotes.splice(index, 1)
    return true
  }
}