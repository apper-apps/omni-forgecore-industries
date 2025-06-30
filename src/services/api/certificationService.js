import { certifications } from '@/services/mockData/certifications.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const certificationService = {
  async getAll() {
    await delay(300)
    return [...certifications]
  },

  async getById(id) {
    await delay(200)
    const certification = certifications.find(c => c.Id === id)
    if (!certification) {
      throw new Error('Certification not found')
    }
    return { ...certification }
  },

  async create(certificationData) {
    await delay(400)
    const newId = Math.max(...certifications.map(c => c.Id)) + 1
    const newCertification = {
      ...certificationData,
      Id: newId
    }
    certifications.push(newCertification)
    return { ...newCertification }
  },

  async update(id, certificationData) {
    await delay(400)
    const index = certifications.findIndex(c => c.Id === id)
    if (index === -1) {
      throw new Error('Certification not found')
    }
    certifications[index] = { ...certifications[index], ...certificationData }
    return { ...certifications[index] }
  },

  async delete(id) {
    await delay(300)
    const index = certifications.findIndex(c => c.Id === id)
    if (index === -1) {
      throw new Error('Certification not found')
    }
    certifications.splice(index, 1)
    return true
  }
}