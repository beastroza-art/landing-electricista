import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  srOnly?: boolean;
  error?: string;
  className?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, srOnly = false, error, className = "", id, ...props }, ref) => {
    const textareaId = id || `textarea-${label.toLowerCase().replace(/\s+/g, "-")}`;
    const errorId = `${textareaId}-error`;

    return (
      <div className="w-full text-left">
        <label
          htmlFor={textareaId}
          className={`block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ${srOnly ? "sr-only" : ""}`}
        >
          {label}
        </label>
        
        <textarea
          id={textareaId}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
          className={`
            w-full
            p-4
            rounded-xl
            border
            text-slate-900
            dark:text-white
            bg-slate-50/50
            dark:bg-slate-950/20
            focus:outline-none
            focus:ring-2
            transition-all
            text-sm
            sm:text-base
            ${error
              ? "border-red-500 focus:ring-red-550/30"
              : "border-slate-200 dark:border-slate-800 focus:ring-accent/40 focus:border-accent"
            }
            ${className}
          `}
          {...props}
        />

        {error && (
          <p
            id={errorId}
            className="mt-1.5 text-xs text-red-550 font-semibold"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
