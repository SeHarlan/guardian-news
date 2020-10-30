export interface contentInterface {
  id: string
  sectionId: string
  sectionName: string,
  webPublicationDate: Date,
  webTitle: string,
  webUrl: string,
  apiUrl: string,
  fields: {
    thumbnail: string
  }
}