"use client";
import { useLike } from "@/context/LikeContext";
import { useOptimistic, useTransition, useEffect, useState } from "react";

interface LikeButtonProps {
  id: number;
}

export default function LikeButton({ id }: LikeButtonProps) {
  const { isLiked, toggleLike } = useLike();
  const [isPending, startTransition] = useTransition();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [optimisticLiked, setOptimisticLiked] = useOptimistic(
    false,
    (_, newState: boolean) => newState
  );

  const handleToggle = () => {
    startTransition(() => {
      const newLikedState = !optimisticLiked;
      setOptimisticLiked(newLikedState);
      toggleLike(id.toString());
    });
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className={`px-3 py-1 rounded transition-colors ${
        isPending
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      {isLiked(id.toString()) ? "Liked ❤️" : "Like 🤍"}
      {isPending && " ..."}
    </button>
  );
}
