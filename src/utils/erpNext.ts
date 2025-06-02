interface ERPNextConfig {
  apiUrl: string;
  apiKey: string;
  apiSecret: string;
}
export const sendCustomerToERP = async (customerData: CustomerData) => {
  // Implementation for sending customer data to ERP Next
  // This will need to be configured based on your ERP Next setup
  try {
    // Make API call to ERP Next
    // Return success/failure
  } catch (error) {
    console.error('Failed to sync customer with ERP Next:', error);
    throw error;
  }
};
export const syncOrderToERP = async (orderData: any) => {
  // Implementation for sending order data to ERP Next
  // This will need to be configured based on your ERP Next setup
};