"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type LikeContextType = {
  liked: string[];
  toggleLike: (id: string) => void;
  isLiked: (id: string) => boolean;
};

const LikeContext = createContext<LikeContextType | undefined>(undefined);

export const LikeProvider = ({ children }: { children: React.ReactNode }) => {
  const [liked, setLiked] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("IdsProduct");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("IdsProduct", JSON.stringify(liked));
  }, [liked]);

  const toggleLike = (id: string) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isLiked = (id: string) => liked.includes(id);

  return (
    <LikeContext.Provider value={{ liked, toggleLike, isLiked }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = () => {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error("useLike must be used within a LikeProvider");
  }
  return context;
};
