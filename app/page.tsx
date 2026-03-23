import Hero from "@/components/home/Hero";
import Banner from "@/components/home/Banner";
import InfoBanner from "@/components/home/InfoBanner";
import InfoCards from "@/components/home/InfoCards";
import CTABanner from "@/components/home/CTABanner";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <Banner />
      <InfoBanner />
      <InfoCards />
      <CTABanner />
      <ContactForm />
    </div>
  );
}
