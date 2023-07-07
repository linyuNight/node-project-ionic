const ispro = import.meta.env.MODE === 'pro'

export const isPro = ispro

export const baseUrl = ispro ? 'https://bibibi.website:3333' : 'http://10.95.33.88:3333'