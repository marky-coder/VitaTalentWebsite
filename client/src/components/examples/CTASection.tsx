import CTASection from '../CTASection';

export default function CTASectionExample() {
  return (
    <CTASection 
      onHireTalent={() => console.log('Hire Talent CTA clicked')}
      onJoinAsCandidate={() => console.log('Join as Candidate CTA clicked')}
    />
  );
}
