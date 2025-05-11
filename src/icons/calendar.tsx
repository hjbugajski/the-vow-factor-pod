import type { ComponentProps } from 'react';

export function IconCalendar(props: ComponentProps<'svg'>) {
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
        d="M8 2C8.55228 2 9 2.44772 9 3V4H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V4C19.2091 4 21 5.79086 21 8V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V8C3 5.79086 4.79086 4 7 4V3C7 2.44772 7.44772 2 8 2ZM5 11V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V11H5Z"
        fill="currentColor"
      />
    </svg>
  );
}
