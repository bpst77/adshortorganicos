import { Star } from "lucide-react";

function StarRating({ stars }) {
  return (
    <span className="flex gap-1 my-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={16}
          className={i < stars ? "text-yellow-400" : "text-gray-300"}
          fill={i < stars ? "currentColor" : "none"}
        />
      ))}
    </span>
  );
}

export default function ReviewCard({review}) {
    
    return (
        <div className="review-card w-[580px] h-48 bg-white border-black shadow-xl rounded-lg flex flex-col gap-4 p-8">
            <span className="flex gap-4">
                <p className="text-black">{review.clientName}</p>
                <StarRating stars={review.stars}/>
            </span>
            <span className="my-4">
                <p className="text-black review-content">{review.content}</p>
            </span>
        </div>
    );
};
