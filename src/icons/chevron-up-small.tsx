import type { ComponentProps } from 'react';

export function IconChevronUpSmall(props: ComponentProps<'svg'>) {
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
        d="M12.3536 11.7678C12.1583 11.5725 11.8417 11.5725 11.6464 11.7678L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.2322 10.3536C11.2085 9.37726 12.7915 9.37726 13.7678 10.3536L16.7071 13.2929C17.0976 13.6834 17.0976 14.3166 16.7071 14.7071C16.3166 15.0976 15.6834 15.0976 15.2929 14.7071L12.3536 11.7678Z"
        fill="currentColor"
      />
    </svg>
  );
}
