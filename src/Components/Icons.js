const BorderRight = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3"
      height="21"
      viewBox="0 0 3 21"
      fill="none"
      className={className}
    >
      <path
        d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
        fill="currentColor"
      />
    </svg>
  );
};

const BulkCategory = ({ isActive, className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.24 10H13.34C11.15 10 10 11.15 10 13.33V15.23C10 17.41 11.15 18.56 13.33 18.56H15.23C17.41 18.56 18.56 17.41 18.56 15.23V13.33C18.57 11.15 17.42 10 15.24 10Z"
        fill="currentColor"
      />
      <path
        opacity={isActive ? 0.4 : 1}
        d="M26.6699 10H24.7699C22.5899 10 21.4399 11.15 21.4399 13.33V15.23C21.4399 17.41 22.5899 18.56 24.7699 18.56H26.6699C28.8499 18.56 29.9999 17.41 29.9999 15.23V13.33C29.9999 11.15 28.8499 10 26.6699 10Z"
        fill="currentColor"
      />
      <path
        d="M26.6699 21.4301H24.7699C22.5899 21.4301 21.4399 22.5801 21.4399 24.7601V26.6601C21.4399 28.8401 22.5899 29.9901 24.7699 29.9901H26.6699C28.8499 29.9901 29.9999 28.8401 29.9999 26.6601V24.7601C29.9999 22.5801 28.8499 21.4301 26.6699 21.4301Z"
        fill="currentColor"
      />
      <path
        opacity={isActive ? 0.4 : 1}
        d="M15.24 21.4301H13.34C11.15 21.4301 10 22.5801 10 24.7601V26.6601C10 28.8501 11.15 30.0001 13.33 30.0001H15.23C17.41 30.0001 18.56 28.8501 18.56 26.6701V24.7701C18.57 22.5801 17.42 21.4301 15.24 21.4301Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Transactions = ({ isActive, className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20.98V23C10 28 12 30 17 30H23C28 30 30 28 30 23V17C30 12 28 10 23 10H17C12 10 10 12 10 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.17 20L18.7 19.3L15.5 22.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 17.5L22.99 19.01L22 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 17.5H24.5V19.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const People = ({ isActive, className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6801 11.96C21.1601 12.67 21.4401 13.52 21.4401 14.44C21.4301 16.84 19.5401 18.79 17.1601 18.87C17.0601 18.86 16.9401 18.86 16.8301 18.87C14.4501 18.79 12.5601 16.84 12.5601 14.44C12.5601 11.99 14.5401 10 17.0001 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.4098 12C26.3498 12 27.9098 13.57 27.9098 15.5C27.9098 17.39 26.4098 18.93 24.5398 19C24.4598 18.99 24.3698 18.99 24.2798 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1602 22.56C9.74021 24.18 9.74021 26.82 12.1602 28.43C14.9102 30.27 19.4202 30.27 22.1702 28.43C24.5902 26.81 24.5902 24.17 22.1702 22.56C19.4302 20.73 14.9202 20.73 12.1602 22.56Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.3398 28C27.0598 27.85 27.7398 27.56 28.2998 27.13C29.8598 25.96 29.8598 24.03 28.2998 22.86C27.7498 22.44 27.0798 22.16 26.3698 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Square = ({ isActive, className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1699 15.4401L19.9999 20.55L28.7699 15.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 29.61V20.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3901 17.1701C10.3901 15.7901 11.3801 14.1101 12.5901 13.4401L17.9301 10.4701C19.0701 9.84006 20.9401 9.84006 22.0801 10.4701L27.4201 13.4401C28.6301 14.1101 29.6201 15.7901 29.6201 17.1701V22.8201C29.6201 24.2001 28.6301 25.8801 27.4201 26.5501L22.0801 29.5201C20.9401 30.1501 19.0701 30.1501 17.9301 29.5201L12.5901 26.5501C11.3801 25.8801 10.3901 24.2001 10.3901 22.8201V22.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.9998 21.24V17.58L18.9297 14.07L17.8798 13.47L15.5098 12.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Discount = ({ isActive, className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.6599 28.01L21.1399 29.53C20.5199 30.15 19.4999 30.15 18.8799 29.53L17.3599 28.01C17.0999 27.75 16.5899 27.54 16.2299 27.54H14.0799C13.1999 27.54 12.4799 26.8199 12.4799 25.9399V23.79C12.4799 23.43 12.2699 22.92 12.0099 22.66L10.4899 21.14C9.8699 20.52 9.8699 19.5 10.4899 18.88L12.0099 17.36C12.2699 17.1 12.4799 16.59 12.4799 16.23V14.08C12.4799 13.2 13.1999 12.48 14.0799 12.48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3398 11.99L18.8598 10.47C19.4798 9.85 20.4998 9.85 21.1198 10.47L22.6399 11.99C22.8999 12.25 23.4098 12.46 23.7698 12.46H25.9199C26.7999 12.46 27.5198 13.1801 27.5198 14.0601V16.21C27.5198 16.57 27.7298 17.08 27.9898 17.34L29.5099 18.86C30.1299 19.48 30.1299 20.5 29.5099 21.12L27.9898 22.64C27.7298 22.9 27.5198 23.4101 27.5198 23.7701V25.9201C27.5198 26.8001 26.7999 27.5201 25.9199 27.5201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 23L23 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.4945 22.5H22.5035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4945 17.5H17.5035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Info = ({ isActive, className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 16V21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14C10.75 15.67 10 17.75 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20C30 14.48 25.52 10 20 10C18.57 10 17.2 10.3 15.97 10.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9946 24H20.0036"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Light = ({ isActive, className }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="30"
        height="30"
        rx="15"
        fill={isActive ? "#34CAA5" : "#555555"}
      />
      <g clipPath="url(#clip0_1826_462)">
        <path
          d="M15 19.2188C17.33 19.2188 19.2188 17.33 19.2188 15C19.2188 12.67 17.33 10.7812 15 10.7812C12.67 10.7812 10.7812 12.67 10.7812 15C10.7812 17.33 12.67 19.2188 15 19.2188Z"
          fill="currentColor"
        />
        <path
          d="M15 9.09345C14.5336 9.09345 14.1562 8.71564 14.1562 8.2497V7.40625C14.1562 6.94031 14.5336 6.5625 15 6.5625C15.4664 6.5625 15.8438 6.94031 15.8438 7.40625V8.2497C15.8438 8.71564 15.4664 9.09345 15 9.09345Z"
          fill="currentColor"
        />
        <path
          d="M19.7734 11.0706C19.5576 11.0706 19.3417 10.9882 19.1769 10.8234C18.8473 10.4939 18.8473 9.95964 19.1769 9.63015L19.7734 9.03369C20.103 8.7043 20.637 8.7042 20.9666 9.03379C21.2961 9.36328 21.2961 9.89751 20.9666 10.227L20.37 10.8235C20.2052 10.9882 19.9893 11.0706 19.7734 11.0706Z"
          fill="currentColor"
        />
        <path
          d="M22.5937 15.8438H21.75C21.2836 15.8438 20.9062 15.4659 20.9062 15C20.9062 14.5341 21.2836 14.1562 21.75 14.1562H22.5937C23.0601 14.1562 23.4375 14.5341 23.4375 15C23.4375 15.4659 23.0601 15.8438 22.5937 15.8438Z"
          fill="currentColor"
        />
        <path
          d="M20.37 21.2133C20.1541 21.2133 19.9382 21.131 19.7734 20.9662L19.1769 20.3698C18.8473 20.0403 18.8473 19.5061 19.1769 19.1766C19.5065 18.847 20.0404 18.8469 20.37 19.1765L20.9666 19.7729C21.2961 20.1024 21.2961 20.6366 20.9666 20.9661C20.8018 21.1309 20.5859 21.2133 20.37 21.2133Z"
          fill="currentColor"
        />
        <path
          d="M15 23.4374C14.5336 23.4374 14.1562 23.0596 14.1562 22.5937V21.7502C14.1562 21.2843 14.5336 20.9065 15 20.9065C15.4664 20.9065 15.8438 21.2843 15.8438 21.7502V22.5937C15.8438 23.0596 15.4664 23.4374 15 23.4374Z"
          fill="currentColor"
        />
        <path
          d="M9.63037 21.2134C9.41449 21.2134 9.19861 21.131 9.03381 20.9662C8.70422 20.6367 8.70422 20.1025 9.03381 19.773L9.63037 19.1765C9.95996 18.8471 10.4939 18.847 10.8235 19.1766C11.1531 19.5061 11.1531 20.0403 10.8235 20.3698L10.2269 20.9663C10.0621 21.131 9.84625 21.2134 9.63037 21.2134Z"
          fill="currentColor"
        />
        <path
          d="M8.25 15.8438H7.40625C6.93988 15.8438 6.5625 15.4659 6.5625 15C6.5625 14.5341 6.93988 14.1562 7.40625 14.1562H8.25C8.71637 14.1562 9.09375 14.5341 9.09375 15C9.09375 15.4659 8.71637 15.8438 8.25 15.8438Z"
          fill="currentColor"
        />
        <path
          d="M10.2269 11.0706C10.011 11.0706 9.79517 10.9883 9.63037 10.8235L9.03381 10.2271C8.70422 9.89759 8.70422 9.36335 9.03381 9.03386C9.3634 8.70427 9.89734 8.70417 10.2269 9.03376L10.8235 9.63022C11.1531 9.95971 11.1531 10.4939 10.8235 10.8234C10.6587 10.9882 10.4428 11.0706 10.2269 11.0706Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1826_462">
          <rect
            width="16.875"
            height="16.875"
            fill="currentColor"
            transform="translate(6.5625 6.5625)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const Moon = ({ isActive, className }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 4.6875C15.2486 4.6875 15.4871 4.58873 15.6629 4.41291C15.8387 4.2371 15.9375 3.99864 15.9375 3.75V2.8125C15.9375 2.56386 15.8387 2.3254 15.6629 2.14959C15.4871 1.97377 15.2486 1.875 15 1.875C14.7514 1.875 14.5129 1.97377 14.3371 2.14959C14.1613 2.3254 14.0625 2.56386 14.0625 2.8125V3.75C14.0625 3.99864 14.1613 4.2371 14.3371 4.41291C14.5129 4.58873 14.7514 4.6875 15 4.6875Z"
        fill="currentColor"
      />
      <path
        d="M15 25.3125C14.7514 25.3125 14.5129 25.4113 14.3371 25.5871C14.1613 25.7629 14.0625 26.0014 14.0625 26.25V27.1875C14.0625 27.4361 14.1613 27.6746 14.3371 27.8504C14.5129 28.0262 14.7514 28.125 15 28.125C15.2486 28.125 15.4871 28.0262 15.6629 27.8504C15.8387 27.6746 15.9375 27.4361 15.9375 27.1875V26.25C15.9375 26.0014 15.8387 25.7629 15.6629 25.5871C15.4871 25.4113 15.2486 25.3125 15 25.3125Z"
        fill="currentColor"
      />
      <path
        d="M27.1875 14.0625H26.25C26.0014 14.0625 25.7629 14.1613 25.5871 14.3371C25.4113 14.5129 25.3125 14.7514 25.3125 15C25.3125 15.2486 25.4113 15.4871 25.5871 15.6629C25.7629 15.8387 26.0014 15.9375 26.25 15.9375H27.1875C27.4361 15.9375 27.6746 15.8387 27.8504 15.6629C28.0262 15.4871 28.125 15.2486 28.125 15C28.125 14.7514 28.0262 14.5129 27.8504 14.3371C27.6746 14.1613 27.4361 14.0625 27.1875 14.0625Z"
        fill="currentColor"
      />
      <path
        d="M3.75 14.0625H2.8125C2.56386 14.0625 2.3254 14.1613 2.14959 14.3371C1.97377 14.5129 1.875 14.7514 1.875 15C1.875 15.2486 1.97377 15.4871 2.14959 15.6629C2.3254 15.8387 2.56386 15.9375 2.8125 15.9375H3.75C3.99864 15.9375 4.2371 15.8387 4.41291 15.6629C4.58873 15.4871 4.6875 15.2486 4.6875 15C4.6875 14.7514 4.58873 14.5129 4.41291 14.3371C4.2371 14.1613 3.99864 14.0625 3.75 14.0625Z"
        fill="currentColor"
      />
      <path
        d="M22.9549 5.71883L22.2921 6.38164C22.2025 6.46813 22.1311 6.57157 22.082 6.68595C22.0328 6.80033 22.007 6.92335 22.0059 7.04783C22.0048 7.17231 22.0285 7.29576 22.0757 7.41098C22.1228 7.52619 22.1924 7.63087 22.2804 7.71889C22.3685 7.80691 22.4731 7.87653 22.5884 7.92366C22.7036 7.9708 22.827 7.99452 22.9515 7.99344C23.076 7.99236 23.199 7.9665 23.3134 7.91736C23.4278 7.86823 23.5312 7.79681 23.6177 7.70727L24.2814 7.04539C24.3685 6.95829 24.4376 6.85488 24.4848 6.74108C24.5319 6.62727 24.5562 6.5053 24.5562 6.38211C24.5562 6.25893 24.5319 6.13695 24.4848 6.02315C24.4376 5.90934 24.3685 5.80594 24.2814 5.71883C24.1943 5.63173 24.0909 5.56263 23.9771 5.51549C23.8633 5.46835 23.7413 5.44409 23.6182 5.44409C23.495 5.44409 23.373 5.46835 23.2592 5.51549C23.1454 5.56263 23.042 5.63173 22.9549 5.71883Z"
        fill="currentColor"
      />
      <path
        d="M6.38185 22.292L5.7181 22.9548C5.631 23.0419 5.5619 23.1453 5.51476 23.2591C5.46762 23.3729 5.44336 23.4949 5.44336 23.6181C5.44336 23.7413 5.46762 23.8632 5.51476 23.977C5.5619 24.0909 5.631 24.1943 5.7181 24.2814C5.89401 24.4573 6.1326 24.5561 6.38138 24.5561C6.50456 24.5561 6.62654 24.5318 6.74035 24.4847C6.85415 24.4376 6.95756 24.3685 7.04466 24.2814L7.70747 23.6185C7.79458 23.5315 7.86368 23.4282 7.91085 23.3144C7.95801 23.2007 7.98231 23.0787 7.98235 22.9556C7.9824 22.8325 7.95819 22.7105 7.9111 22.5967C7.86402 22.483 7.79499 22.3796 7.70794 22.2925C7.6209 22.2054 7.51756 22.1362 7.40381 22.0891C7.29006 22.0419 7.16813 22.0176 7.04499 22.0176C6.7963 22.0175 6.55776 22.1162 6.38185 22.292Z"
        fill="currentColor"
      />
      <path
        d="M23.6171 22.292C23.4403 22.1212 23.2035 22.0267 22.9577 22.0288C22.7119 22.031 22.4767 22.1296 22.3029 22.3034C22.1291 22.4772 22.0305 22.7124 22.0284 22.9582C22.0262 23.204 22.1207 23.4408 22.2915 23.6176L22.9543 24.2814C23.1302 24.4573 23.3688 24.5561 23.6176 24.5561C23.8664 24.5561 24.1049 24.4573 24.2809 24.2814C24.4568 24.1054 24.5556 23.8668 24.5556 23.6181C24.5556 23.3693 24.4568 23.1307 24.2809 22.9548L23.6171 22.292Z"
        fill="currentColor"
      />
      <path
        d="M6.38185 7.70821C6.55866 7.87898 6.79548 7.97347 7.04129 7.97134C7.2871 7.9692 7.52223 7.87061 7.69605 7.69679C7.86987 7.52297 7.96847 7.28783 7.97061 7.04202C7.97274 6.79621 7.87825 6.5594 7.70747 6.38258L7.04466 5.71883C6.86875 5.54292 6.63016 5.44409 6.38138 5.44409C6.1326 5.44409 5.89401 5.54292 5.7181 5.71883C5.54219 5.89474 5.44336 6.13333 5.44336 6.38211C5.44336 6.63089 5.54219 6.86948 5.7181 7.04539L6.38185 7.70821Z"
        fill="currentColor"
      />
      <path
        d="M23.1567 16.3903C23.0357 16.271 22.8846 16.1867 22.7195 16.1466C22.5543 16.1065 22.3814 16.112 22.2192 16.1625C21.5901 16.3568 20.9351 16.4542 20.2767 16.4513C18.4926 16.4495 16.7821 15.7401 15.5205 14.4787C14.2589 13.2173 13.5493 11.5069 13.5473 9.72285C13.545 9.06465 13.643 8.40995 13.8379 7.78128C13.8888 7.61887 13.8945 7.44566 13.8544 7.28025C13.8144 7.11483 13.73 6.96344 13.6104 6.84232C13.4909 6.7212 13.3406 6.63492 13.1757 6.59273C13.0108 6.55055 12.8375 6.55404 12.6745 6.60285C11.2513 7.03321 9.96401 7.82507 8.9381 8.9012C7.91218 9.97733 7.18269 11.301 6.82077 12.7431C6.45885 14.1851 6.47687 15.6964 6.87306 17.1294C7.26925 18.5624 8.03008 19.8683 9.08136 20.9197C10.1326 21.9711 11.4385 22.732 12.8715 23.1283C14.3045 23.5247 15.8157 23.5428 17.2578 23.181C18.6999 22.8192 20.0236 22.0898 21.0999 21.064C22.1761 20.0382 22.9681 18.751 23.3985 17.3278C23.4473 17.1644 23.4506 16.9907 23.408 16.8255C23.3654 16.6603 23.2785 16.5098 23.1567 16.3903Z"
        fill="currentColor"
      />
    </svg>
  );
};

const ArrowRight = ({ isActive, className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 20H22.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 23L23.5 20L20.5 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14C10.75 15.67 10 17.75 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20C30 14.48 25.52 10 20 10C18.57 10 17.2 10.3 15.97 10.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ArrowDown = ({ isActive, className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Settings = ({ isActive, className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 20C23 18.34 21.66 17 20 17C18.34 17 17 18.34 17 20C17 21.66 18.34 23 20 23C20.41 23 20.81 22.92 21.17 22.76"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8799 28.5799L15.9699 29.2099C16.7599 29.6799 17.7799 29.3999 18.2499 28.6099L18.3599 28.4199C19.2599 26.8499 20.7399 26.8499 21.6499 28.4199L21.7599 28.6099C22.2299 29.3999 23.2499 29.6799 24.0399 29.2099L25.7699 28.2199C26.6799 27.6999 26.9899 26.5299 26.4699 25.6299C25.5599 24.0599 26.2999 22.7799 28.1099 22.7799C29.1499 22.7799 30.0099 21.9299 30.0099 20.8799V19.1199C30.0099 18.0799 29.1599 17.2199 28.1099 17.2199C27.0999 17.2199 26.4199 16.8199 26.1799 16.1899C25.9899 15.6999 26.0699 15.0599 26.4699 14.3699C26.9899 13.4599 26.6799 12.2999 25.7699 11.7799L24.9599 11.3199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.64 11.5801C20.74 13.1501 19.26 13.1501 18.35 11.5801L18.24 11.3901C17.78 10.6001 16.76 10.3201 15.97 10.7901L14.24 11.7801C13.33 12.3001 13.02 13.4701 13.54 14.3801C14.45 15.9401 13.71 17.2201 11.9 17.2201C10.86 17.2201 10 18.0701 10 19.1201V20.8801C10 21.9201 10.85 22.7801 11.9 22.7801C13.71 22.7801 14.45 24.0601 13.54 25.6301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Logout = ({ isActive, className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.56 22.5599L12 19.9999L14.56 17.4399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2398 20H12.0698"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2398 20H20.2798"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.01 14.48C27.25 15.84 28 17.71 28 20C28 25 24.42 28 20 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12C21.05 12 22.05 12.17 22.97 12.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Search = ({ isActive, className }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Calendar = ({ isActive, className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 9.79483C2 6.70067 2 5.15318 2.9376 4.19236C3.8744 3.23071 5.3832 3.23071 8.4 3.23071H11.6C14.6168 3.23071 16.1256 3.23071 17.0624 4.19236C18 5.15318 18 6.70067 18 9.79483V11.4359C18 14.53 18 16.0775 17.0624 17.0383C16.1256 18 14.6168 18 11.6 18H8.4C5.3832 18 3.8744 18 2.9376 17.0383C2 16.0775 2 14.53 2 11.4359V9.79483Z"
        stroke="currentColor"
        strokeWidth="1.37144"
      />
      <path
        d="M5.9999 3.23077V2M13.9999 3.23077V2M2.3999 7.33334H17.5999"
        stroke="currentColor"
        strokeWidth="1.37144"
        strokeLinecap="round"
      />
      <path
        d="M14.8002 13.8974C14.8002 14.115 14.7159 14.3237 14.5659 14.4776C14.4159 14.6314 14.2124 14.7179 14.0002 14.7179C13.788 14.7179 13.5845 14.6314 13.4345 14.4776C13.2845 14.3237 13.2002 14.115 13.2002 13.8974C13.2002 13.6798 13.2845 13.4711 13.4345 13.3172C13.5845 13.1633 13.788 13.0769 14.0002 13.0769C14.2124 13.0769 14.4159 13.1633 14.5659 13.3172C14.7159 13.4711 14.8002 13.6798 14.8002 13.8974ZM14.8002 10.6153C14.8002 10.8329 14.7159 11.0416 14.5659 11.1955C14.4159 11.3494 14.2124 11.4358 14.0002 11.4358C13.788 11.4358 13.5845 11.3494 13.4345 11.1955C13.2845 11.0416 13.2002 10.8329 13.2002 10.6153C13.2002 10.3977 13.2845 10.189 13.4345 10.0351C13.5845 9.88125 13.788 9.7948 14.0002 9.7948C14.2124 9.7948 14.4159 9.88125 14.5659 10.0351C14.7159 10.189 14.8002 10.3977 14.8002 10.6153ZM10.8002 13.8974C10.8002 14.115 10.7159 14.3237 10.5659 14.4776C10.4159 14.6314 10.2124 14.7179 10.0002 14.7179C9.78802 14.7179 9.58454 14.6314 9.43451 14.4776C9.28448 14.3237 9.2002 14.115 9.2002 13.8974C9.2002 13.6798 9.28448 13.4711 9.43451 13.3172C9.58454 13.1633 9.78802 13.0769 10.0002 13.0769C10.2124 13.0769 10.4159 13.1633 10.5659 13.3172C10.7159 13.4711 10.8002 13.6798 10.8002 13.8974ZM10.8002 10.6153C10.8002 10.8329 10.7159 11.0416 10.5659 11.1955C10.4159 11.3494 10.2124 11.4358 10.0002 11.4358C9.78802 11.4358 9.58454 11.3494 9.43451 11.1955C9.28448 11.0416 9.2002 10.8329 9.2002 10.6153C9.2002 10.3977 9.28448 10.189 9.43451 10.0351C9.58454 9.88125 9.78802 9.7948 10.0002 9.7948C10.2124 9.7948 10.4159 9.88125 10.5659 10.0351C10.7159 10.189 10.8002 10.3977 10.8002 10.6153ZM6.8002 13.8974C6.8002 14.115 6.71591 14.3237 6.56588 14.4776C6.41585 14.6314 6.21237 14.7179 6.0002 14.7179C5.78802 14.7179 5.58454 14.6314 5.43451 14.4776C5.28448 14.3237 5.2002 14.115 5.2002 13.8974C5.2002 13.6798 5.28448 13.4711 5.43451 13.3172C5.58454 13.1633 5.78802 13.0769 6.0002 13.0769C6.21237 13.0769 6.41585 13.1633 6.56588 13.3172C6.71591 13.4711 6.8002 13.6798 6.8002 13.8974ZM6.8002 10.6153C6.8002 10.8329 6.71591 11.0416 6.56588 11.1955C6.41585 11.3494 6.21237 11.4358 6.0002 11.4358C5.78802 11.4358 5.58454 11.3494 5.43451 11.1955C5.28448 11.0416 5.2002 10.8329 5.2002 10.6153C5.2002 10.3977 5.28448 10.189 5.43451 10.0351C5.58454 9.88125 5.78802 9.7948 6.0002 9.7948C6.21237 9.7948 6.41585 9.88125 6.56588 10.0351C6.71591 10.189 6.8002 10.3977 6.8002 10.6153Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Bell = ({ isActive, className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7062 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91412 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z"
        fill="currentColor"
      />
    </svg>
  );
};

const DocumentDownload = ({ isActive, className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
        fill="currentColor"
      />
      <path
        d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
        fill="currentColor"
      />
      <path
        d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
        fill="currentColor"
      />
      <path
        d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
        fill="currentColor"
      />
    </svg>
  );
};

const BoxCheck = ({ isActive, className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.4"
        d="M19.3499 5.65995L13.0599 2.27C12.3999 1.91 11.5999 1.91 10.9299 2.27L4.63992 5.65995C4.17992 5.90995 3.8999 6.39998 3.8999 6.93998C3.8999 7.47998 4.17992 7.96995 4.63992 8.21995L10.9299 11.61C11.2599 11.79 11.6299 11.88 11.9899 11.88C12.3499 11.88 12.7199 11.79 13.0499 11.61L19.3399 8.21995C19.7999 7.96995 20.0799 7.47998 20.0799 6.93998C20.0999 6.39998 19.8099 5.90995 19.3499 5.65995Z"
        fill="currentColor"
      />
      <path
        opacity="0.4"
        d="M9.90021 12.79L4.0502 9.86001C3.6002 9.63001 3.08021 9.66001 2.65021 9.92001C2.22021 10.18 1.97021 10.64 1.97021 11.14V16.67C1.97021 17.63 2.5002 18.49 3.3602 18.92L9.21021 21.8401C9.4102 21.9401 9.63022 21.99 9.85022 21.99C10.1102 21.99 10.3702 21.92 10.6002 21.77C11.0302 21.51 11.2802 21.05 11.2802 20.55V15.02C11.2902 14.08 10.7602 13.22 9.90021 12.79Z"
        fill="currentColor"
      />
      <path
        opacity="0.4"
        d="M22.03 11.15V15.74C22.02 15.73 22.01 15.71 22 15.7C22 15.69 21.99 15.68 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.82 21.11 15.03 21.37 15.26 21.61L14.79 21.85C14.59 21.95 14.37 22 14.15 22C13.89 22 13.63 21.93 13.39 21.78C12.97 21.52 12.71 21.06 12.71 20.56V15.04C12.71 14.08 13.24 13.22 14.1 12.79L19.95 9.87C20.4 9.64 20.92 9.66 21.35 9.93C21.77 10.19 22.03 10.65 22.03 11.15Z"
        fill="currentColor"
      />
      <path
        d="M21.98 15.67C21.16 14.66 19.91 14.02 18.5 14.02C17.44 14.02 16.46 14.39 15.69 15.01C14.65 15.83 14 17.1 14 18.52C14 19.36 14.24 20.16 14.65 20.84C14.92 21.29 15.26 21.68 15.66 22H15.67C16.44 22.64 17.43 23.02 18.5 23.02C19.64 23.02 20.67 22.6 21.46 21.9C21.81 21.6 22.11 21.24 22.35 20.84C22.76 20.16 23 19.36 23 18.52C23 17.44 22.62 16.44 21.98 15.67ZM20.76 17.96L18.36 20.18C18.22 20.31 18.03 20.38 17.85 20.38C17.66 20.38 17.47 20.31 17.32 20.16L16.21 19.05C15.92 18.76 15.92 18.28 16.21 17.99C16.5 17.7 16.98 17.7 17.27 17.99L17.87 18.59L19.74 16.86C20.04 16.58 20.52 16.6 20.8 16.9C21.09 17.21 21.07 17.68 20.76 17.96Z"
        fill="currentColor"
      />
    </svg>
  );
};

const TrendUp = ({ isActive, className }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.5 8.5L4.5 5.5L6.5 7.5L10.5 3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 3.5H10.5V7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const TrendDown = ({ isActive, className }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.5 3.5L4.5 6.5L6.5 4.5L10.5 8.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 8.5H10.5V5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Rotate3D = ({ isActive, className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.57821 2.91194C4.8091 3.55436 2.75 6.03342 2.75 9C2.75 9.41421 2.41421 9.75 2 9.75C1.58579 9.75 1.25 9.41421 1.25 9C1.25 4.71579 4.71579 1.25 9 1.25C9.2702 1.25 9.51952 1.39534 9.65265 1.63047C9.78578 1.8656 9.78214 2.15417 9.64312 2.38587L8.59313 4.13587C8.38002 4.49105 7.91933 4.60623 7.56414 4.39312C7.20896 4.18001 7.09378 3.71932 7.30689 3.36413L7.57821 2.91194ZM22 14.25C22.4142 14.25 22.75 14.5858 22.75 15C22.75 19.2842 19.2842 22.75 15 22.75C14.7298 22.75 14.4805 22.6047 14.3474 22.3695C14.2142 22.1344 14.2179 21.8458 14.3569 21.6141L15.4069 19.8641C15.62 19.5089 16.0807 19.3938 16.4359 19.6069C16.791 19.82 16.9062 20.2807 16.6931 20.6359L16.4218 21.0881C19.1909 20.4456 21.25 17.9666 21.25 15C21.25 14.5858 21.5858 14.25 22 14.25Z"
        fill="currentColor"
      />
      <path
        d="M16.4004 8.20996L12.6404 6.17996C12.2404 5.96996 11.7704 5.96996 11.3704 6.17996L7.61038 8.20996C7.34038 8.35996 7.17041 8.64996 7.17041 8.97996C7.17041 9.30996 7.34038 9.59996 7.61038 9.74996L11.3704 11.78C11.5704 11.89 11.7904 11.94 12.0104 11.94C12.2304 11.94 12.4504 11.89 12.6504 11.78L16.4104 9.74996C16.6804 9.59996 16.8504 9.30996 16.8504 8.97996C16.8404 8.64996 16.6704 8.35996 16.4004 8.20996Z"
        fill="currentColor"
      />
      <path
        opacity="0.4"
        d="M10.7402 12.4699L7.24023 10.7199C6.97023 10.5899 6.66024 10.5999 6.40024 10.7599C6.14024 10.9199 5.99023 11.1899 5.99023 11.4899V14.7999C5.99023 15.3699 6.31025 15.8899 6.82025 16.1399L10.3203 17.8899C10.4403 17.9499 10.5702 17.9799 10.7102 17.9799C10.8702 17.9799 11.0202 17.9399 11.1602 17.8499C11.4202 17.6899 11.5703 17.4199 11.5703 17.1199V13.8099C11.5703 13.2399 11.2602 12.7299 10.7402 12.4699Z"
        fill="currentColor"
      />
      <path
        opacity="0.4"
        d="M17.5904 10.7599C17.3304 10.5999 17.0204 10.5899 16.7504 10.7199L13.2504 12.4699C12.7404 12.7299 12.4204 13.2399 12.4204 13.8099V17.1199C12.4204 17.4199 12.5704 17.6899 12.8304 17.8499C12.9704 17.9399 13.1204 17.9799 13.2804 17.9799C13.4104 17.9799 13.5404 17.9499 13.6704 17.8899L17.1704 16.1399C17.6804 15.8799 18.0004 15.3699 18.0004 14.7999V11.4899C18.0004 11.1899 17.8504 10.9199 17.5904 10.7599Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Cart = ({ isActive, className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z"
        fill="currentColor"
      />
      <path
        d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z"
        fill="currentColor"
      />
      <path
        opacity="0.4"
        d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.92999 21.55 6.50999C21.68 4.73999 20.33 3.3 18.56 3.3H6.28999C6.18999 2.86 5.98999 2.44 5.67999 2.09C5.18999 1.56 4.49 1.25 3.77 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74001C4.05001 2.75 4.34 2.88001 4.55 3.10001C4.76 3.33001 4.86 3.63 4.84 3.94Z"
        fill="currentColor"
      />
      <path
        d="M20.5101 8.75H5.17006C4.75006 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.53 5.21006 17 6.92006 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.60001C21.3401 9.14001 20.9801 8.75 20.5101 8.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Coin = ({ isActive, className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.4"
        d="M9.99 17.98C14.4028 17.98 17.98 14.4028 17.98 9.99C17.98 5.57724 14.4028 2 9.99 2C5.57724 2 2 5.57724 2 9.99C2 14.4028 5.57724 17.98 9.99 17.98Z"
        fill="currentColor"
      />
      <path
        d="M21.9701 15.99C21.9701 19.29 19.2901 21.97 15.9901 21.97C13.9501 21.97 12.1601 20.95 11.0801 19.4C15.4401 18.91 18.9101 15.44 19.4001 11.08C20.9501 12.16 21.9701 13.95 21.9701 15.99Z"
        fill="currentColor"
      />
      <path
        d="M11.45 9.71003L9.05 8.87003C8.81 8.79003 8.76 8.77003 8.76 8.42003C8.76 8.16003 8.94 7.95003 9.17 7.95003H10.67C10.99 7.95003 11.25 8.24003 11.25 8.60003C11.25 9.01003 11.59 9.35003 12 9.35003C12.41 9.35003 12.75 9.01003 12.75 8.60003C12.75 7.45003 11.86 6.51003 10.75 6.46003V6.41003C10.75 6.00003 10.41 5.66003 10 5.66003C9.59 5.66003 9.25 5.99003 9.25 6.41003V6.46003H9.16C8.11 6.46003 7.25 7.34003 7.25 8.43003C7.25 9.38003 7.67 9.99003 8.54 10.29L10.95 11.13C11.19 11.21 11.24 11.23 11.24 11.58C11.24 11.84 11.06 12.05 10.83 12.05H9.33C9.01 12.05 8.75 11.76 8.75 11.4C8.75 10.99 8.41 10.65 8 10.65C7.59 10.65 7.25 10.99 7.25 11.4C7.25 12.55 8.14 13.49 9.25 13.54V13.6C9.25 14.01 9.59 14.35 10 14.35C10.41 14.35 10.75 14.01 10.75 13.6V13.55H10.84C11.89 13.55 12.75 12.67 12.75 11.58C12.75 10.63 12.32 10.02 11.45 9.71003Z"
        fill="currentColor"
      />
    </svg>
  );
};

export {
  BorderRight,
  BulkCategory,
  Transactions,
  People,
  Square,
  Discount,
  Info,
  Light,
  Moon,
  ArrowRight,
  ArrowDown,
  Settings,
  Logout,
  Search,
  Calendar,
  Bell,
  DocumentDownload,
  BoxCheck,
  TrendUp,
  TrendDown,
  Rotate3D,
  Cart,
  Coin,
};
