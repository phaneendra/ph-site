import React, { useRef, useState } from 'react';

import { siteMetadatum } from 'contentlayer/generated';

const NewsletterForm = ({ title = 'Subscribe to the newsletter' }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(`/api/${siteMetadatum.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      setError(true);
      setMessage('Your e-mail address is invalid or you are already subscribed!');
      return;
    }

    inputEl.current.value = '';
    setError(false);
    setSubscribed(true);
    setMessage('Successfully! 🎉 You are now subscribed.');
  };

  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-base-content">{title}</div>
      <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="w-72 rounded-md border border-border-color bg-base-light px-4 text-base-content focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            id="email-input"
            name="email"
            placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            className={`w-full rounded-md bg-primary py-2 px-4 font-medium text-white sm:py-0 ${
              subscribed ? 'cursor-default' : 'hover:bg-primary-focus'
            } focus:outline-none focus:ring-2 focus:ring-primary-focus focus:ring-offset-2`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'Thank you!' : 'Sign up'}
          </button>
        </div>
      </form>
      {error && <div className="w-72 pt-2 text-sm text-error sm:w-96">{message}</div>}
    </div>
  );
};

export default NewsletterForm;

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="bg-base-200 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
);
