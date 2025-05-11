import type { ComponentProps } from 'react';

export function IconChevronRightSmall(props: ComponentProps<'svg'>) {
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
        d="M9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L13.6464 10.2322C14.6228 11.2085 14.6228 12.7915 13.6464 13.7678L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L12.2322 12.3536C12.4275 12.1583 12.4275 11.8417 12.2322 11.6464L9.29289 8.70711C8.90237 8.31658 8.90237 7.68342 9.29289 7.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
