import React from 'react';

const FAQ = () => {
    return (
        <div className='my-5 w-11/12 mx-auto bg-base-300 rounded-2xl p-4'>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">Frequently Asked Questions</h3>
            <div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="faq-accordion" defaultChecked />
  <div className="collapse-title font-semibold">How do I book a tour package on TourNow?</div>
  <div className="collapse-content text-sm">
    Simply go to the “All Packages” page, browse through available tours, and click “Book Now” on the package you like. Fill in the form and submit your booking.
  </div>
</div>

<div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="faq-accordion" />
  <div className="collapse-title font-semibold">Can I cancel or modify a booking after confirmation?</div>
  <div className="collapse-content text-sm">
    Yes, you can cancel or request modifications from your dashboard under “My Bookings.” Cancellation policies may vary by tour.
  </div>
</div>

<div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="faq-accordion" />
  <div className="collapse-title font-semibold">How do I become a tour guide on TourNow?</div>
  <div className="collapse-content text-sm">
    Click on “Become a Guide” or go to your profile settings and register as a guide. You’ll be able to create your own packages and start earning.
  </div>
</div>

<div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="faq-accordion" />
  <div className="collapse-title font-semibold">Is it safe to travel with local guides?</div>
  <div className="collapse-content text-sm">
    Yes, all guides on TourNow go through verification. You can also view reviews and ratings from other travelers before booking.
  </div>
</div>

<div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="faq-accordion" />
  <div className="collapse-title font-semibold">What payment methods are accepted?</div>
  <div className="collapse-content text-sm">
    We currently support major credit/debit cards and mobile payment options. Cash payment policies depend on the specific guide.
  </div>
</div>

<div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="faq-accordion" />
  <div className="collapse-title font-semibold">Can I contact my tour guide before the trip?</div>
  <div className="collapse-content text-sm">
    Yes, once your booking is confirmed, you’ll be able to message your guide directly through your account.
  </div>
</div>

<div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="faq-accordion" />
  <div className="collapse-title font-semibold">Do I need an account to browse tour packages?</div>
  <div className="collapse-content text-sm">
    No account is needed to view packages. However, you must sign in to book a tour, save favorites, or access personalized recommendations.
  </div>
</div>

        </div>
    );
};

export default FAQ;