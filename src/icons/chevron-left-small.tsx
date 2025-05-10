import type { ComponentProps } from 'react';

export function IconChevronLeftSmall(props: ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.086 7.29289C13.6955 6.90237 13.0623 6.90237 12.6718 7.29289L9.73246 10.2322C8.75615 11.2085 8.75615 12.7915 9.73246 13.7678L12.6718 16.7071C13.0623 17.0976 13.6955 17.0976 14.086 16.7071C14.4765 16.3166 14.4765 15.6834 14.086 15.2929L11.1467 12.3536C10.9514 12.1583 10.9514 11.8417 11.1467 11.6464L14.086 8.70711C14.4765 8.31658 14.4765 7.68342 14.086 7.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
