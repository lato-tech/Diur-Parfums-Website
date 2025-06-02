export interface CustomerData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  marketing: {
    emailConsent: boolean;
    whatsappConsent: boolean;
    consentDate: Date;
  };
  orderHistory: {
    orderId: string;
    date: Date;
    amount: number;
    status: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
export interface CustomerDataExport {
  customers: CustomerData[];
  exportDate: Date;
  totalCustomers: number;
}