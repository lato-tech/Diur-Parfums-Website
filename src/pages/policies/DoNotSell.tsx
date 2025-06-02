import React from 'react';
const DoNotSell = () => {
  return <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl mb-6">
            Do Not Sell My Information
          </h1>
          <div className="prose prose-stone max-w-none">
            <p>Last updated: [Current Date]</p>
            <h2>Your Right to Control Personal Information</h2>
            <p>
              Under certain privacy laws, including the California Consumer
              Privacy Act (CCPA), you have the right to opt-out of the sale of
              your personal information to third parties. Although Deodar
              Parfums does not typically sell personal information in the
              traditional sense, we want to provide you with the ability to
              control how your information is shared.
            </p>
            <h2>What This Means</h2>
            <p>When you select "Do Not Sell My Information," we will:</p>
            <ul>
              <li>
                Stop sharing your personal information with third parties for
                marketing purposes
              </li>
              <li>
                Opt you out of targeted advertising based on your browsing
                behavior
              </li>
              <li>
                Limit data sharing to only what is necessary for our core
                business operations
              </li>
            </ul>
            <h2>How to Submit Your Request</h2>
            <p>
              To exercise your right to opt-out of the sale of your personal
              information, you may:
            </p>
            <ol>
              <li>Complete the form below</li>
              <li>Email your request to info@namiex.com</li>
              <li>Call us at +91-9740553082</li>
            </ol>
            <h2>Verification Process</h2>
            <p>
              To protect your privacy, we may need to verify your identity
              before processing your request. We may ask you to provide
              additional information for verification purposes.
            </p>
            <h2>Response Timeline</h2>
            <p>
              We will process your request within 45 days of receipt. If we need
              additional time, we will notify you and may take up to 90 days
              total to respond.
            </p>
            <h2>Do Not Sell My Information Form</h2>
            <form className="space-y-4 mt-6 border p-6 bg-stone-50">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input type="text" id="name" className="w-full border border-stone-300 px-3 py-2" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input type="email" id="email" className="w-full border border-stone-300 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Request Type
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="request_type" className="mr-2" />
                    Do not sell my personal information
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="request_type" className="mr-2" />
                    Delete my personal information
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="request_type" className="mr-2" />
                    Access my personal information
                  </label>
                </div>
              </div>
              <button type="submit" className="px-6 py-2 bg-stone-900 text-white">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>;
};
export default DoNotSell;