// Define common tailwind styles used across the website
// Style order follows as below
// <layout>, Flexbox & Grid, Spacing (margins paddings), Sizing (height width), typography (text, fonts), background, borders, effects( shadows), filters (blur backdrops), tables, transition & animation, transform, Interactivity (scroll cursors)
export const styles = {
  // Container
  container: {
    base: 'mx-auto max-w-screen-xl px-4 sm:px-6 xl:px-0',
    preview: `relative overflow-x-hidden
      flex flex-wrap items-center justify-center gap-2
      p-4 
      min-h-[6rem] min-w-[18rem]
      bg-preview-pattern bg-top
      border border-border-color rounded-md`,
  },
  typography: {
    title: 'h-6 text-2xl text-base-heading font-semibold',
  },
  link: {
    external: `after:inline-block after:h-3 after:w-3 after:bg-[url('/static/images/external-links.svg')] after:bg-contain`,
    underline: 'link-underline p-1 sm:p-4 text-base-heading font-medium',
  },
  header: {
    base: 'flex items-center justify-between',
    full: 'py-10',
  },
  hidden: 'hidden sm:block',
  button: {
    base: `inline-flex 
      flex-wrap items-center justify-center shrink-0 
      px-4 h-9 min-h-9 
      text-sm text-center uppercase font-semibold leading-4 no-underline
      border rounded
      focus-visible:outline focus-visible:outline-2
      transition duration-200 ease-in-out
      hover:scale-95 hover:animate-none
      focus:scale-95 focus:animate-none
      active:scale-95 active:animate-none
      animate-pop
      cursor-pointer select-none`,
    default: `text-default-content
      bg-default border-default
      hover:bg-default-focus hover:border-default-focus
      active:bg-default-focus active:border-default-focus
      focus-visible:outline-default-focus focus-visible:outline-offset-2`,
    primary: `text-primary-content
      bg-primary border-primary
      hover:bg-primary-focus hover:border-primary-focus
      active:bg-primary-focus active:border-primary-focus
      focus-visible:outline-primary-focus`,
    secondary: `text-secondary-content
      bg-secondary border-secondary
      hover:bg-secondary-focus hover:border-secondary-focus
      active:bg-secondary-focus active:border-secondary-focus
      focus-visible:outline-secondary-focus`,
    accent: `text-accent-content
      bg-accent border-accent
      hover:bg-accent-focus hover:border-accent-focus
      active:bg-accent-focus active:border-accent-focus
      focus-visible:outline-accent-focus`,
    info: `text-info-content
      bg-info border-info
      hover:bg-info-focus hover:border-info-focus
      active:bg-info-focus active:border-info-focus
      focus-visible:outline-info-focus`,
    success: `text-success-content
      bg-success border-success
      hover:bg-success-focus hover:border-success-focus
      active:bg-success-focus active:border-success-focus
      focus-visible:outline-success-focus`,
    warning: `text-warning-content
      bg-warning border-warning
      hover:bg-warning-focus hover:border-warning-focus
      active:bg-warning-focus active:border-warning-focus
      focus-visible:outline-warning-focus`,
    error: `text-error-content
      bg-error border-error
      hover:bg-error-focus hover:border-error-focus
      active:bg-error-focus active:border-error-focus
      focus-visible:outline-error-focus`,
    important: `text-important-content
      bg-important border-important
      hover:bg-important-focus hover:border-important-focus
      active:bg-important-focus active:border-important-focus
      focus-visible:outline-important-focus`,
    tip: `text-tip-content
      bg-tip border-tip
      hover:bg-tip-focus hover:border-tip-focus
      active:bg-tip-focus active:border-tip-focus
      focus-visible:outline-tip-focus`,
    question: `text-question-content
      bg-question border-question
      hover:bg-question-focus hover:border-question-focus
      active:bg-question-focus active:border-question-focus
      focus-visible:outline-question-focus`,
    quote: `text-quote-content
      bg-quote border-quote
      hover:bg-quote-focus hover:border-quote-focus
      active:bg-quote-focus active:border-quote-focus
      focus-visible:outline-quote-focus`,
    comment: `text-comment-content
      bg-comment border-comment
      hover:bg-comment-focus hover:border-comment-focus
      active:bg-comment-focus active:border-comment-focus
      focus-visible:outline-comment-focus`,
    docs: `text-docs-content
      bg-docs border-docs
      hover:bg-docs-focus hover:border-docs-focus
      active:bg-docs-focus active:border-docs-focus
      focus-visible:outline-docs-focus`,
    ghost: `text-base-content
      bg-transparent border-transparent
      hover:bg-base-content/20 hover:border-transparent/0
      active:bg-base-content/20 active:border-transparent/0
      focus-visible:outline-current`,
    link: `text-primary underline
      bg-transparent border-transparent
      hover:bg-transparent hover:border-transparent
      active:bg-transparent active:border-transparent
      focus-visible:outline-current`,
  },
};
