"use client";
import { useEffect, useState } from "react";

interface LikeButtonProps {
  id: number;
}

export default function LikeButton({ id }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // خواندن LocalStorage هنگام mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("IdsProduct");
      if (stored) {
        const likedIds: number[] = JSON.parse(stored);
        setLiked(likedIds.includes(id));
      }
    } catch (err) {
      console.error("Failed to read from localStorage:", err);
      setError("مشکلی در خواندن وضعیت لایک پیش آمد.");
    }
  }, [id]);

  const toggleLike = () => {
    try {
      // Optimistic update
      setLiked((prev) => !prev);

      const stored = localStorage.getItem("IdsProduct");
      let likedIds: number[] = stored ? JSON.parse(stored) : [];

      if (liked) {
        likedIds = likedIds.filter((pid) => pid !== id);
      } else {
        likedIds.push(id);
      }

      localStorage.setItem("IdsProduct", JSON.stringify(likedIds));
    } catch (err) {
      console.error("Failed to update localStorage:", err);
      setError("مشکلی در ذخیره‌سازی وضعیت لایک پیش آمد.");
      // ریست به حالت قبل اگر خطا رخ داد
      setLiked((prev) => !prev);
    }
  };

  return (
    <button onClick={toggleLike} className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">
      {liked ? "Liked ❤️" : "Like 🤍"}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </button>
  );
}
