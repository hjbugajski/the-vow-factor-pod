import type { ComponentProps } from 'react';

export function IconAlertTriangle(props: ComponentProps<'svg'>) {
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
        d="M8.6026 4.07088C10.1677 1.5532 13.8318 1.5532 15.3969 4.07088L21.4996 13.8884C23.156 16.5529 21.2399 20.0001 18.1025 20.0001H5.89699C2.75962 20.0001 0.843525 16.5529 2.49985 13.8884L8.6026 4.07088ZM12 8C12.5523 8 13 8.44771 13 9V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V9C11 8.44771 11.4477 8 12 8ZM10.75 15C10.75 14.3096 11.3096 13.75 12 13.75C12.6904 13.75 13.25 14.3096 13.25 15C13.25 15.6904 12.6904 16.25 12 16.25C11.3096 16.25 10.75 15.6904 10.75 15Z"
        fill="currentColor"
      />
    </svg>
  );
}
