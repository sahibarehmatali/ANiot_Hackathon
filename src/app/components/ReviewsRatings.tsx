// app/components/ReviewsRatings.tsx
interface Review {
    id: number;
    user: string;
    rating: number;
    comment: string;
  }
  
  interface ReviewsRatingsProps {
    reviews: Review[];
  }
  
  export default function ReviewsRatings({ reviews }: ReviewsRatingsProps) {
    return (
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="border-b py-4">
            <p>{review.user}</p>
            <p>Rating: {review.rating}/5</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    );
  }