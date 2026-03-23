import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      {/* Rest of the content will go here */}
      <section className="bg-white py-20 px-4 md:px-20" aria-label="Features or Content Section">
        {/* Placeholder for other sections in the image */}
      </section>
    </div>
  );
}
