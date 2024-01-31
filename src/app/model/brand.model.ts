export class Brand {
    public id: number;
    public name: string;
    public logoUrl: string;
    public mobileNumber: string;

    constructor(id?: number, name?: string, logoUrl?: string, mobileNumber?: string) {
        this.id = id || 0;
        this.name = name || '';
        this.logoUrl = logoUrl || '';
        this.mobileNumber = mobileNumber || '';
  }
}