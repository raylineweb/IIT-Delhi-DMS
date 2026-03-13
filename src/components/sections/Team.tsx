import TeamShowcase from "@/components/ui/team-showcase";

export default function Team() {
  const members = [
    {
      id: "1",
      name: "Prof. Seema Sharma",
      role: "Professor, Department of Management Studies",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      social: { linkedin: "#" }
    },
    {
      id: "2",
      name: "Prof. Gourav Dwivedi",
      role: "Assistant Professor, Operations & Supply Chain",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      social: { linkedin: "#" }
    }
  ];

  return (
    <section className="w-full bg-brand-ivory py-16 md:py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Project Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Led by esteemed faculty from IIT Delhi's Department of Management Studies.
          </p>
        </div>
        
        <TeamShowcase members={members} />
      </div>
    </section>
  );
}
