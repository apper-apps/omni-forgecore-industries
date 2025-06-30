import { capabilities } from '@/services/mockData/capabilities.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const capabilityService = {
  async getAll() {
    await delay(300)
    return [...capabilities]
  },

  async getById(id) {
    await delay(200)
    const capability = capabilities.find(c => c.Id === id)
    if (!capability) {
      throw new Error('Capability not found')
    }
    return { ...capability }
  },

  async create(capabilityData) {
    await delay(400)
    const newId = Math.max(...capabilities.map(c => c.Id)) + 1
    const newCapability = {
      ...capabilityData,
      Id: newId
    }
    capabilities.push(newCapability)
    return { ...newCapability }
  },

  async update(id, capabilityData) {
    await delay(400)
    const index = capabilities.findIndex(c => c.Id === id)
    if (index === -1) {
      throw new Error('Capability not found')
    }
    capabilities[index] = { ...capabilities[index], ...capabilityData }
    return { ...capabilities[index] }
  },

  async delete(id) {
    await delay(300)
    const index = capabilities.findIndex(c => c.Id === id)
    if (index === -1) {
      throw new Error('Capability not found')
    }
    capabilities.splice(index, 1)
    return true
  }
}