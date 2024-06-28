import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FooterDesktop from "../components/FooterDesktop";
import "./RefundPolicyPage.css";

const RefundPolicyPage = () => {
  return (
    <div className="refundpolicypage">
      <Header />
      <div className="refund-policy-wrapper">
        <h1 className="refund-policy">Refund Policy</h1>
      </div>
      <main className="lilylamb-kids-we-us-or-parent">
        <div className="lilylamb-kids-we">
          This Refund Policy outlines the terms and conditions regarding refunds
          for gift cards purchased from [Your Gift Card Website]. By purchasing
          a gift card from our website, you agree to the terms of this refund
          policy. Please read it carefully.
        </div>
        <FrameComponent
          generalRefundPolicy="General Refund Policy"
          generalRefundPolicy1="1.1 General Refund Policy"
          giftCardsPurchasedFromYou="Gift cards purchased from [Your Gift Card Website] are non-refundable and cannot be exchanged for cash, except where required by law. Once a gift card is purchased, the sale is final, and the value cannot be refunded."
          exceptions="1.2 Exceptions"
          inCertainExceptionalCircu="In certain exceptional circumstances, and at the sole discretion of [Your Company], a refund may be issued. These circumstances include, but are not limited to, technical errors during the purchase process or unauthorized transactions. Any decision to issue a refund is made on a case-by-case basis and is final."
        />
        <FrameComponent
          generalRefundPolicy=" Eligibility for Refunds"
          generalRefundPolicy1="2.1 Unauthorized Transactions"
          giftCardsPurchasedFromYou="If you believe that a purchase of a gift card was made without your authorization, you must contact our customer support team immediately. Unauthorized transactions may be eligible for a refund if reported promptly. You may be required to provide documentation or evidence supporting your claim."
          exceptions="2.2 Technical Errors"
          inCertainExceptionalCircu="If you experience a technical error during the purchase process that results in an incorrect charge or duplicate charge, you may be eligible for a refund. Please contact our customer support team with the details of the error, including any relevant transaction IDs or screenshots."
        />
        <FrameComponent1
          refundRequestProcess="Refund Request Process"
          toRequestARefundContactOu="To request a refund, contact our customer support team at [Email] or [Phone Number]. Provide the following information:"
          aDetailedExplanationOfThe="A detailed explanation of the reason for the refund request"
          reviewAndProcessing="3.2  Review and Processing"
          ourCustomerSupportTeamWil="Our customer support team will review your refund request and may ask for additional information or documentation. Refund requests are typically processed within [X] business days. You will be notified of the outcome of your request via email."
          approvedRefunds="3.2 Approved Refunds"
          ifYourRefundRequestIsAppr="If your refund request is approved, the refund will be processed using the original payment method used for the purchase. The time it takes for the refund to be credited to your account may vary depending on your bank or payment provider."
        />
        <FrameComponent
          generalRefundPolicy=" Special Cases"
          generalRefundPolicy1="4.1 Incorrect Amounts Loaded"
          giftCardsPurchasedFromYou="If an incorrect amount was loaded onto your gift card due to an error, you may be eligible for a refund of the incorrect amount or an adjustment to the correct value. Please contact our customer support team with the details of the error."
          exceptions="4.2 Lost or Stolen Gift Cards"
          inCertainExceptionalCircu="Lost or stolen gift cards are generally not eligible for a refund. Users are responsible for safeguarding their gift cards and treating them like cash. In certain circumstances, a replacement card may be issued at the discretion of [Your Company], but this does not constitute a refund."
        />
        <FrameComponent
          generalRefundPolicy="Non-Refundable Items"
          generalRefundPolicy1="5.1 Promotional and Bonus Cards"
          giftCardsPurchasedFromYou="Promotional or bonus gift cards received as part of a promotion or special offer are not eligible for a refund. These cards have no cash value and cannot be exchanged for cash or other gift cards."
          exceptions="5.2 Partially Used Gift Cards"
          inCertainExceptionalCircu="Gift cards that have been partially used are not eligible for a refund of the remaining balance. Once a gift card has been used, it cannot be returned or exchanged."
        />
        <FrameComponent
          generalRefundPolicy="Merchant Refunds"
          generalRefundPolicy1="6.1Product Returns"
          giftCardsPurchasedFromYou="If you return a product purchased with a gift card to a participating merchant, the return will be processed according to the merchant’s return policy. The merchant may issue a credit to the gift card or provide a store credit, but this is not managed by [Your Company]."
          exceptions="6.2 Disputes with Merchants"
          inCertainExceptionalCircu="Any disputes regarding purchases made with a gift card should be resolved directly with the merchant. [Your Company] is not responsible for resolving disputes related to merchant transactions. "
        />
        <div className="contact-information-parent">
          <h1 className="contact-information">
            <ol className="contact-information1">
              <li>Contact Information</li>
            </ol>
          </h1>
          <div className="if-you-have-any-questions-or-c-wrapper">
            <div className="if-you-have-container">
              <p className="if-you-have">
                If you have any questions or concerns about this Refund Policy,
                please contact us at:
              </p>
              <p className="blank-line">&nbsp;</p>
              <p className="brandname-customer-support">
                BrandName Customer Support
              </p>
              <p className="email-supportbrandnamecom">
                Email: support@brandname.com
              </p>
              <p className="phone-1-800-123-4567">Phone: +1-800-123-4567</p>
              <p className="address-123-main">
                Address: 123 Main Street, Suite 456, City, Country, ZIP Code
              </p>
            </div>
          </div>
        </div>
      </main>
      <FooterDesktop />
    </div>
  );
};

export default RefundPolicyPage;
