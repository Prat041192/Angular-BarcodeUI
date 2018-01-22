export class Customer {
  constructor(public id: number,
              public barcodeText: string,
              public barcodeType: string,
              createdAt: Date,
              updatedAt: Date,
              ) {
  }
}
