import careIllustration from "@assets/generated_images/Balance_and_partnership_illustration_c94418e5.png";

export default function CareSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/20 via-primary/25 to-primary/15" data-testid="section-care">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-foreground">
            We care about people — and partnerships.
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              At Vita Talent, we believe great hiring is about balance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We care equally for our clients' business success and our candidates' wellbeing. Even if a match doesn't work out, we continue to support both sides.
            </p>
          </div>
          
          <div className="mt-12">
            <img 
              src={careIllustration} 
              alt="Balance and partnership illustration" 
              className="w-full max-w-2xl mx-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
