import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "./ReviewCard";

class Review {
    id;
    stars;
    clientId;
    clientName;
    content;

    constructor(data, clients) {
        this.id = data.id;
        this.stars = data.stars;
        this.clientId = data.clientId;
        this.clientName = clients.find((c) => c.id === data.clientId)?.name ?? "Cliente"
        this.content = data.content;
    }
}

const CARD_WIDTH = 580;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;

export default function ReviewList() {
  const [active, setActive] = useState(0);
  const [reviewData, setReviewData] = useState([]);
  const [clientData, setClientData] = useState([]);

  const reviews = reviewData.map((r) => new Review(r, clientData));

  function goTo(index) {
    setActive(Math.max(0, Math.min(index, reviews.length - 1)));
  }

  useEffect(() => {
  const loadData = async () => {
    try {
      const reviewRes = await fetch("/api/reviews.json");
      const reviewData = await reviewRes.json();
      setReviewData(reviewData);
      
      const clientRes = await fetch("/api/clients.json");
      const clientData = await clientRes.json();
      setClientData(clientData);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  };

  loadData();
}, []);

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="relative w-[95vw] flex items-center px-14">
        <button
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          className="absolute left-0 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-25 transition-all"
        >
          <ChevronLeft className="text-black" />
        </button>

        <div className="w-full overflow-hidden py-6">
          <div
            className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              transform: `translateX(calc(50% - ${active * STEP + CARD_WIDTH / 2}px))`,
            }}
          >
            {reviews.map((review, i) => {
              const dist = Math.abs(i - active);
              return (
                <div
                  key={review.id}
                  onClick={() => goTo(i)}
                  className="flex-none cursor-pointer transition-all duration-500"
                  style={{
                    transform: `scale(${dist === 0 ? 1 : dist === 1 ? 0.88 : 0.78})`,
                    opacity: dist === 0 ? 1 : dist === 1 ? 0.55 : 0.25,
                  }}
                >
                  <ReviewCard review={review} />
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => goTo(active + 1)}
          disabled={active === reviews.length - 1}
          className="absolute right-0 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-25 transition-all"
        >
          <ChevronRight className="text-black" />
        </button>
      </div>

      <div className="flex gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-5 bg-black" : "w-1.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}