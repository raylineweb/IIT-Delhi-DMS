import TeamShowcase from "@/components/ui/team-showcase";

export default function Team() {
  const members = [
    {
      id: "1",
      name: "Prof. Seema Sharma",
      role: "Professor, Department of Management Studies",
      image: "/IIT-Delhi-DMS/images/team/seema-sharma.jpg",
      social: { linkedin: "#" }
    },
    {
      id: "2",
      name: "Prof. Gourav Dwivedi",
      role: "Assistant Professor, Operations & Supply Chain",
      image: "/IIT-Delhi-DMS/images/team/gourav-dwivedi.jpg",
      social: { linkedin: "#" }
    }
  ];

  const researchTeam = [
    {
      id: "3",
      name: "Purari",
      role: "Doctoral Scholar",
      image: "/IIT-Delhi-DMS/images/team/purari.jpg",
      social: {}
    },
    {
      id: "4",
      name: "Vinay",
      role: "Senior Project Researcher",
      image: "",
      social: {}
    },
    {
      id: "5",
      name: "Harshi",
      role: "Project Researcher",
      image: "/IIT-Delhi-DMS/images/team/harshi.jpg",
      social: {}
    },
    {
      id: "6",
      name: "Hritika",
      role: "Project Researcher",
      image: "/IIT-Delhi-DMS/images/team/hritika.jpg",
      social: {}
    },
    {
      id: "7",
      name: "Pranjali",
      role: "Project Researcher",
      image: "/IIT-Delhi-DMS/images/team/pranjali.jpg",
      social: {}
    },
    {
      id: "8",
      name: "Shalini",
      role: "Senior Project Assistant",
      image: "",
      social: {}
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

        <div className="mt-16 mb-10 text-center">
          <h3 className="inline-block text-2xl font-semibold text-brand-navy border-b-[3px] border-brand-saffron pb-1">
            Project Research Team
          </h3>
        </div>

        <TeamShowcase members={researchTeam} />
      </div>
    </section>
  );
}
