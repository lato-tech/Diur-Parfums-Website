import React from 'react';
const Shipping = () => {
  return <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl mb-6">Shipping Policy</h1>
          <div className="prose prose-stone max-w-none">
            <p>Last updated: [Current Date]</p>
            <h2>Shipping Information</h2>
            <p>
              At Deodar Parfums, we strive to deliver your luxury fragrances
              promptly and securely. Please review our shipping policies below.
            </p>
            <h2>Processing Time</h2>
            <p>
              All orders are processed within 1-2 business days (excluding
              weekends and holidays) after receiving your order confirmation
              email. You will receive a shipping confirmation email with
              tracking information once your order has been shipped.
            </p>
            <h2>Shipping Options</h2>
            <table className="min-w-full border border-stone-200 my-6">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-200 px-4 py-2 text-left">
                    Shipping Method
                  </th>
                  <th className="border border-stone-200 px-4 py-2 text-left">
                    Estimated Delivery Time
                  </th>
                  <th className="border border-stone-200 px-4 py-2 text-left">
                    Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-200 px-4 py-2">
                    Standard Shipping
                  </td>
                  <td className="border border-stone-200 px-4 py-2">
                    5-7 business days
                  </td>
                  <td className="border border-stone-200 px-4 py-2">₹100</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 px-4 py-2">
                    Express Shipping
                  </td>
                  <td className="border border-stone-200 px-4 py-2">
                    2-3 business days
                  </td>
                  <td className="border border-stone-200 px-4 py-2">₹250</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 px-4 py-2">
                    Premium Delivery
                  </td>
                  <td className="border border-stone-200 px-4 py-2">
                    Next business day
                  </td>
                  <td className="border border-stone-200 px-4 py-2">₹500</td>
                </tr>
              </tbody>
            </table>
            <h2>Free Shipping</h2>
            <p>
              We offer free standard shipping on all orders above ₹5,000 within
              India.
            </p>
            <h2>International Shipping</h2>
            <p>
              We currently ship to select international destinations.
              International shipping rates and delivery times vary by location.
              Customs fees, import taxes, and duties are not included in the
              item price or shipping cost. These charges are the buyer's
              responsibility.
            </p>
            <h2>Tracking Information</h2>
            <p>
              Once your order ships, you will receive a tracking number via
              email. You can track your package's status and estimated delivery
              date using this number.
            </p>
            <h2>Shipping Restrictions</h2>
            <p>
              Due to regulations regarding alcohol-based products, there may be
              restrictions on shipping perfumes to certain locations. We will
              notify you if there are any issues with shipping to your address.
            </p>
            <h2>Delivery Issues</h2>
            <p>
              If you experience any issues with your delivery or have not
              received your package by the estimated delivery date, please
              contact our customer service team at info@namiex.com or call
              +91-9740553082.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default Shipping;