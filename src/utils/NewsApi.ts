import axios, { AxiosResponse } from "axios"
import NewsArticle from "../types/NewsArticle"

class NewsApi {
  private baseUrl = "https://newsapi.org/v2"
  private topHeadlines = "/top-headlines"
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  public async getTopHeadlines(country?: string): Promise<NewsArticle[]> {
    const countryQueryParam = country ? `country=${country}&` : ""
    const apiKeyQueryParam = `apiKey=${this.apiKey}`
    const endpoint = `${this.baseUrl}${this.topHeadlines}?${countryQueryParam}${apiKeyQueryParam}`
    const response: AxiosResponse<{ articles: NewsArticle[]; status: string }> =
      await axios.get(endpoint)
    return response.data.articles
  }
}

export default NewsApi
