import { useSelector } from "react-redux";

export default function useReview(id: string) {
  return useSelector((state) =>
    state.reviews.data.find((review) => review.id === id)
  );
}
