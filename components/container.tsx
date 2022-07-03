import React from "react";

export const Container = ({
                            children,
                            className = "",
                            ...props
                          }) => {

  return (
    <div
      className={` mx-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
