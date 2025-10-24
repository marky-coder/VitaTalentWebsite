import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection 
      onHireTalent={() => console.log('Hire Talent clicked')}
      onJoinAsCandidate={() => console.log('Join as Candidate clicked')}
    />
  );
}
