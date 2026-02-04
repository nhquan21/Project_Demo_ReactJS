import { type JSX } from "react";

type Props = {
  isLoading: boolean;
};

export const Loading = ({ isLoading }: Props): JSX.Element | null => {
  if (!isLoading) return null;

  return (
    <div className="d-flex align-items-center justify-content-center gap-2 p-3">
      <strong>Loading...</strong>
      <div className="spinner-border spinner-border-sm text-danger" role="status" aria-hidden="true"></div>
    </div>
  );
};
