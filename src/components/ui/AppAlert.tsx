type AppAlertProps = {
  type: "success" | "danger";
  message: string;
  onClose: () => void;
};

export const AppAlert = ({ type, message, onClose }: AppAlertProps) => {
  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show shadow`}
      role="alert"
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        minWidth: "300px",
        zIndex: 9999,
      }}
    >
      {message}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
};
