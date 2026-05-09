import { Navigation } from "lucide-react";

const offices = [
  {
    city: "Bengaluru",
    type: "Corporate Headquarters",
    address: "Potentiall Facility Service Pvt. Ltd, Mahadevapura, Bengaluru, KA 560001",
    img: "/bangalore.jpg"
  },
  {
    city: "Hyderabad",
    type: "Regional Sales Office",
    address: "Madhapur, Hyderabad, TS 560098",
    img: "/Hyderabad.jpg"
  }
];

export default function Locations() {
  return (
    <main className="pt-28 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h1 className="text-5xl lg:text-7xl font-black text-[#1A1A1A] tracking-tighter mb-16">Global <span className="text-[#2D5A27]">Presence.</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices.map((office, i) => (
            <div key={i} className="group relative rounded-[50px] overflow-hidden aspect-video shadow-2xl">
              <img src={office.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={office.city} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-[#6bc73a] font-black uppercase tracking-widest text-[10px] mb-2">{office.type}</p>
                <h3 className="text-3xl font-black text-white mb-4">{office.city}</h3>
                <p className="text-white/70 font-medium text-sm mb-6 max-w-xs">{office.address}</p>
                <button className="px-8 py-3 bg-white text-[#1A1A1A] rounded-full font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-[#6bc73a] hover:text-white transition-all">
                  Get Directions <Navigation className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}