import type { ComponentProps } from 'react';

export function IconChevronDownSmall(props: ComponentProps<'svg'>) {
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
        d="M12.3536 12.2322C12.1583 12.4275 11.8417 12.4275 11.6464 12.2322L8.70711 9.29288C8.31658 8.90235 7.68342 8.90235 7.29289 9.29288C6.90237 9.6834 6.90237 10.3166 7.29289 10.7071L10.2322 13.6464C11.2085 14.6227 12.7915 14.6227 13.7678 13.6464L16.7071 10.7071C17.0976 10.3166 17.0976 9.6834 16.7071 9.29288C16.3166 8.90235 15.6834 8.90235 15.2929 9.29288L12.3536 12.2322Z"
        fill="currentColor"
      />
    </svg>
  );
}
