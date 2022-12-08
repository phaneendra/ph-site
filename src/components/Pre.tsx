import type { ReactNode } from "react";
import { useState, useRef } from "react";

interface Props {
  file?: string;
  children?: ReactNode;
}

const Pre = (props: Props) => {
  const { file, children } = props;
  const textInput = useRef<HTMLInputElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const onEnter = () => {
    setHovered(true);
  };
  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };
  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(
      textInput?.current?.textContent ? textInput.current.textContent : ""
    );
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit}>
      <div className="relative my-4 w-full flex-col rounded border border-border-color shadow">
        {file && (
          <div className="relative flex w-full items-center justify-start rounded-t border-b border-border-color bg-base-100 p-1">
            <div className="flex items-center justify-center p-1">
              <div className=" m-1 h-3 w-3 rounded-full bg-base-light" />
              <div className=" m-1 h-3 w-3 rounded-full bg-base-light" />
              <div className=" m-1 h-3 w-3 rounded-full bg-base-light" />
            </div>
            <div className="absolute left-0 flex w-full items-center justify-center">
              <span className="filename font-sans text-sm font-bold text-base-muted">
                {file}
              </span>
            </div>
          </div>
        )}

        <pre className={`${file ? "rounded-t-none" : "rounded"}`}>
          {children}
        </pre>

        {hovered && (
          <button
            aria-label="Copy code"
            type="button"
            className={`border-1 absolute right-0 bottom-0 h-8 w-8 rounded bg-base-100 p-1 ${
              copied
                ? "border-tip focus:border-tip-focus focus:outline-none"
                : "border-border-color"
            }`}
            onClick={onCopy}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className={copied ? "text-tip" : "text-base-muted"}
            >
              {copied ? (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </>
              ) : (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </>
              )}
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Pre;
