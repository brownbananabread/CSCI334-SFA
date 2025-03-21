import { createContext, useContext, useState, ReactNode } from "react";

interface AlertProps {
  variant: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  showLink?: boolean;
  linkHref?: string;
  linkText?: string;
}

const variantClasses = {
  success: {
    container:
      "border-success-500 bg-success-50 dark:border-success-500/30 dark:bg-success-500/15",
    icon: "text-success-500",
  },
  error: {
    container:
      "border-error-500 bg-error-50 dark:border-error-500/30 dark:bg-error-500/15",
    icon: "text-error-500",
  },
  warning: {
    container:
      "border-warning-500 bg-warning-50 dark:border-warning-500/30 dark:bg-warning-500/15",
    icon: "text-warning-500",
  },
  info: {
    container:
      "border-blue-light-500 bg-blue-light-50 dark:border-blue-light-500/30 dark:bg-blue-light-500/15",
    icon: "text-blue-light-500",
  },
};

// Define icons for different alert types
const icons = {
  success: "✔️",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️",
};

const AlertContext = createContext<{
  showAlert: (
    title: string,
    message: string,
    variant?: "success" | "error" | "warning" | "info",
    showLink?: boolean,
    linkHref?: string,
    linkText?: string
  ) => void;
} | null>(null);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useAlert must be used within an AlertProvider");
  return context;
};

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const showAlert = (
    title: string,
    message: string,
    variant: "success" | "error" | "warning" | "info" = "success",
    showLink?: boolean,
    linkHref?: string,
    linkText?: string
  ) => {
    setAlert({ title, message, variant, showLink, linkHref, linkText });

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <div className="fixed bottom-5 right-5 z-100 w-100">
          <div className={`rounded-xl border p-4 shadow-lg ${variantClasses[alert.variant].container}`}>
            <div className="flex items-start gap-3">
              <div className={`-mt-0.5 text-xl ${variantClasses[alert.variant].icon}`}>
                {icons[alert.variant]}
              </div>

              <div>
                <h4 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white/90">
                  {alert.title}
                </h4>

                <p className="text-sm text-gray-500 dark:text-gray-400">{alert.message}</p>

                {alert.showLink && alert.linkHref && alert.linkText && (
                  <a
                    href={alert.linkHref}
                    className="inline-block mt-3 text-sm font-medium text-gray-500 underline dark:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {alert.linkText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
};
