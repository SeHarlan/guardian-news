export interface contentInterface {
  id: string
  sectionId: string
  sectionName: string,
  webPublicationDate: string,
  webTitle: string,
  webUrl: string,
  apiUrl: string,
  fields: {
    thumbnail: string
    body: string
  }
}
