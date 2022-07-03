import React from "react";

export const Container = ({
                            children,
                            size = "medium",
                            className = "",
                            ...props
                          }) => {
  const verticalPadding = {
    small: "pb-8",
    medium: "pb-12",
    large: "pb-24",
    default: "pb-12",
  };

  return (
    <div
      className={`max-w-7xl mx-auto ${verticalPadding[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
