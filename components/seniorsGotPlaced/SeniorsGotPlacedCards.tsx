import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useRef } from "react";

interface Senior {
  id: number;
  name: string;
  company: string;
  category: string;
}

const MOCK_DATA: Senior[] = [
  { id: 1, name: "Rahul S.", company: "Google", category: "Got into Top MNCs" },
  { id: 2, name: "Sneha K.", company: "TCS", category: "Non IT Branch to IT Job" },
  { id: 3, name: "Amit P.", company: "Infosys", category: "Career Gap" },
  { id: 4, name: "Priya M.", company: "Meta", category: "Non Enginering Degree" },
  { id: 5, name: "Vikram R.", company: "Amazon", category: "Got into Top MNCs" },
];

interface Props {
  selectedCategory: string;
}

const SeniorsGotPlacedCards: React.FC<Props> = ({ selectedCategory }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredData = useMemo(() => {
    if (selectedCategory === "All") return MOCK_DATA;
    return MOCK_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const scroll = (direction: "left" | "right"): void => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="flex w-full justify-start overflow-x-auto gap-6 px-6 py-8 no-scrollbar scroll-smooth"
      >
        {filteredData.length > 0 ? (
          filteredData.map((senior) => (
            <div key={senior.id} className="shrink-0">
              <div className="w-80 h-96 bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-all">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <p className="font-semibold text-gray-700 text-lg">{senior.name}</p>
                <p className="text-sm text-gray-500 mb-2">Placed at {senior.company}</p>
                <span className="text-[10px] uppercase tracking-widest bg-blue-50 px-2 py-1 rounded text-blue-500 font-bold">
                  {senior.category}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full py-20 text-center text-gray-400 italic">
            No success stories found for "{selectedCategory}" yet.
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      <div className="flex w-full justify-center gap-3 pb-6">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition active:scale-90 shadow-sm disabled:opacity-30"
          disabled={filteredData.length === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition active:scale-90 shadow-sm disabled:opacity-30"
          disabled={filteredData.length === 0}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SeniorsGotPlacedCards;