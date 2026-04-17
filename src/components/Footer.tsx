import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="True Friends Foods" className="h-10 rounded bg-primary-foreground p-1" />
          <span className="font-semibold">True Friends Foods</span>
        </div>
        <p className="text-primary-foreground/60 text-sm text-center">
          © {new Date().getFullYear()} True Friends Foods. All rights reserved. | Bite of Taste & Trust
        </p>
      </div>
    </footer>
  );
};

export default Footer;
