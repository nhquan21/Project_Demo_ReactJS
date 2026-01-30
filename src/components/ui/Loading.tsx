import { type JSX } from "react";

type Props = {
  isLoading: boolean;
};

export const Loading = ({ isLoading }: Props): JSX.Element | null => {
  if (!isLoading) return null;

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="spinner-border" role="status" />
    </div>
  );
};
