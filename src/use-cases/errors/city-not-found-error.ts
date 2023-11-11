export class CityNotFoundError extends Error {
  constructor() {
    super('City not found.')
  }
}
