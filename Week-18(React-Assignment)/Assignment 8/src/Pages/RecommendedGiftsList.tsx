// RecommendedGiftsList.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendedGifts } from "../Store/Slices/recommendedGiftsSlice";

function RecommendedGiftsList() {
  const dispatch: any = useDispatch();
  const { recommendations, loading, error } = useSelector(
    (state: any) => state.recommendedGifts
  );
  const { category, priceRange } = useSelector(
    (state: any) => state.userPreferences
  );

  useEffect(() => {
    if (category && priceRange) {
      dispatch(fetchRecommendedGifts({ category, priceRange }));
    }
  }, [category, priceRange, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Recommended Gifts</h2>
      <ul>
        {recommendations.map(
          (gift: {
            id: React.Key | null | undefined;
            name:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined;
          }) => (
            <li key={gift.id}>{gift.name}</li>
          )
        )}
      </ul>
    </div>
  );
}

export default RecommendedGiftsList;
