import Header from "../components/Header";
import SignInContent from "../components/SignInContent";
import FooterDesktop from "../components/FooterDesktop";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <Header />
      <SignInContent />
      <FooterDesktop />
    </div>
  );
};

export default SignInPage;
