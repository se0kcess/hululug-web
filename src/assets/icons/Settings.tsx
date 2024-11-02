interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const Settings = ({ width = 24, height = 24, color = 'currentColor' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4256 2L11.4026 2H11.4025C11.2244 1.99998 11.0492 1.99997 10.8993 2.00998C10.7338 2.02103 10.5396 2.04692 10.3362 2.12729C9.92698 2.28906 9.59027 2.59378 9.38858 2.98492C9.28837 3.17926 9.24328 3.36993 9.21582 3.53349C9.19094 3.68172 9.17352 3.85605 9.15582 4.03325L9.15353 4.05619C9.1147 4.44446 9.09028 4.68193 9.05994 4.85053C9.05766 4.86325 9.05544 4.87488 9.05331 4.88549C9.0443 4.87948 9.0345 4.87282 9.02387 4.86544C8.88318 4.76765 8.69795 4.61696 8.39589 4.36983L8.37807 4.35524C8.24017 4.24239 8.10452 4.13138 7.98205 4.04413C7.84693 3.94786 7.68016 3.84488 7.47179 3.77832C7.05273 3.64445 6.59934 3.66706 6.19568 3.84196C5.99498 3.92892 5.83929 4.04797 5.71442 4.15721C5.60125 4.2562 5.47734 4.38014 5.35138 4.50613L5.33509 4.52242L4.52296 5.33455L4.50666 5.35085C4.38064 5.47684 4.25667 5.60079 4.15764 5.71399C4.04838 5.8389 3.92931 5.99463 3.84234 6.1954C3.66754 6.59896 3.64493 7.05221 3.77871 7.47116C3.84527 7.67958 3.94826 7.8464 4.04455 7.98155C4.13182 8.10405 4.24285 8.23972 4.35571 8.37763L4.35571 8.37764L4.37031 8.39547C4.61754 8.69765 4.76828 8.88295 4.8661 9.0237C4.87348 9.03431 4.88014 9.04411 4.88614 9.05312C4.87553 9.05525 4.86389 9.05746 4.85118 9.05975C4.68249 9.09011 4.44489 9.11455 4.05641 9.15339L4.03351 9.15568L4.03346 9.15569C3.85616 9.1734 3.68174 9.19082 3.53343 9.21573C3.36979 9.24321 3.17902 9.28833 2.9846 9.38863C2.59372 9.59029 2.28918 9.92679 2.12743 10.3358C2.04697 10.5392 2.02105 10.7335 2.00999 10.8991C1.99997 11.0491 1.99998 11.2244 2 11.4026V11.4027L2 11.4257V12.5743L2 12.5973V12.5974C1.99998 12.7755 1.99997 12.9507 2.00999 13.1007C2.02104 13.2663 2.04694 13.4605 2.12736 13.6639C2.28912 14.073 2.59375 14.4096 2.98475 14.6113C3.17914 14.7116 3.36985 14.7567 3.53346 14.7841C3.68172 14.809 3.85609 14.8265 4.03333 14.8442L4.03338 14.8442L4.0563 14.8465C4.44468 14.8853 4.68222 14.9097 4.85086 14.9401C4.86358 14.9424 4.87521 14.9446 4.88582 14.9467C4.87982 14.9557 4.87317 14.9655 4.86579 14.9761C4.768 15.1168 4.6173 15.3021 4.37014 15.6042L4.35554 15.622C4.24272 15.7599 4.13172 15.8955 4.04448 16.018C3.94822 16.1531 3.84525 16.3198 3.77869 16.5282C3.64482 16.9472 3.66743 17.4006 3.84234 17.8043C3.9293 18.005 4.04835 18.1607 4.15758 18.2856C4.25657 18.3987 4.38049 18.5226 4.50646 18.6486L4.50648 18.6486L4.52279 18.6649L5.33499 19.4771L5.35128 19.4934C5.47724 19.6194 5.60117 19.7433 5.71434 19.8423C5.83921 19.9516 5.99491 20.0706 6.19562 20.1576C6.59927 20.3325 7.05264 20.3551 7.47168 20.2212C7.68005 20.1547 7.84682 20.0517 7.98194 19.9554C8.10441 19.8682 8.24004 19.7572 8.37792 19.6443L8.39575 19.6298C8.69786 19.3826 8.88312 19.2319 9.02384 19.1341C9.03445 19.1267 9.04424 19.12 9.05325 19.114C9.05537 19.1246 9.0576 19.1363 9.05989 19.149C9.09024 19.3177 9.11467 19.5552 9.15351 19.9436L9.1558 19.9666C9.17351 20.1438 9.19093 20.3183 9.21583 20.4666C9.24331 20.6302 9.28842 20.8209 9.3887 21.0153C9.59036 21.4063 9.92692 21.7109 10.336 21.8726C10.5394 21.953 10.7337 21.979 10.8992 21.99C11.0493 22 11.2245 22 11.4027 22H11.4027H11.4257H12.5743H12.5973H12.5973C12.7755 22 12.9508 22 13.1009 21.99C13.2664 21.979 13.4608 21.953 13.6642 21.8726C14.0732 21.7108 14.4097 21.4063 14.6113 21.0154C14.7116 20.821 14.7568 20.6302 14.7843 20.4665C14.8092 20.3182 14.8266 20.1438 14.8443 19.9664L14.8443 19.9664L14.8466 19.9435C14.8854 19.555 14.9099 19.3174 14.9402 19.1488C14.9425 19.136 14.9447 19.1244 14.9469 19.1138C14.9559 19.1198 14.9657 19.1264 14.9763 19.1338C15.117 19.2316 15.3022 19.3823 15.6043 19.6294L15.6222 19.644C15.76 19.7569 15.8956 19.8678 16.0181 19.9551C16.1532 20.0513 16.3199 20.1543 16.5283 20.2209C16.9473 20.3547 17.4008 20.3321 17.8045 20.1572C18.0051 20.0702 18.1608 19.9512 18.2857 19.842C18.3988 19.743 18.5227 19.6191 18.6487 19.4931L18.6487 19.4931L18.665 19.4768L19.4773 18.6645L19.4936 18.6481L19.4937 18.6481C19.6196 18.5222 19.7435 18.3984 19.8424 18.2852C19.9516 18.1604 20.0706 18.0048 20.1576 17.8042C20.3326 17.4004 20.3552 16.9468 20.2213 16.5276C20.1547 16.3194 20.0518 16.1527 19.9555 16.0176C19.8683 15.8952 19.7574 15.7596 19.6446 15.6218L19.63 15.6039C19.3829 15.3019 19.2322 15.1167 19.1345 14.9761C19.1271 14.9655 19.1204 14.9557 19.1144 14.9467C19.125 14.9445 19.1367 14.9423 19.1494 14.94C19.318 14.9097 19.5555 14.8853 19.9438 14.8465L19.9667 14.8442C20.1439 14.8265 20.3183 14.809 20.4665 14.7842C20.6301 14.7567 20.8208 14.7116 21.0151 14.6114C21.4062 14.4097 21.7109 14.073 21.8727 13.6638C21.9531 13.4604 21.979 13.2662 21.99 13.1007C22 12.9507 22 12.7755 22 12.5974V12.5974V12.5744V11.4256V11.4026V11.4026C22 11.2244 22 11.0492 21.99 10.8991C21.979 10.7336 21.9531 10.5393 21.8726 10.3359C21.7109 9.92682 21.4063 9.59023 21.0153 9.38857C20.8209 9.2883 20.6302 9.24319 20.4665 9.21572C20.3183 9.19082 20.1439 9.1734 19.9666 9.15569L19.9437 9.1534C19.5553 9.11456 19.3177 9.09013 19.1491 9.05979C19.1364 9.0575 19.1247 9.05527 19.1141 9.05315C19.1201 9.04414 19.1268 9.03435 19.1341 9.02374C19.2319 8.88303 19.3826 8.69779 19.6298 8.3957L19.6444 8.3778C19.7572 8.23996 19.8682 8.10436 19.9554 7.98192C20.0517 7.84681 20.1547 7.68006 20.2212 7.47171C20.3551 7.05263 20.3325 6.59922 20.1576 6.19554C20.0706 5.99485 19.9516 5.83917 19.8424 5.71431C19.7434 5.60115 19.6194 5.47724 19.4935 5.35129L19.4934 5.35128L19.4771 5.33499L18.8343 5.97781L19.4771 5.33499L18.6649 4.52274L18.6486 4.50641C18.5226 4.38045 18.3987 4.25654 18.2856 4.15756C18.1607 4.04833 18.0051 3.92929 17.8044 3.84233C17.4007 3.6674 16.9473 3.64478 16.5282 3.77868C16.3198 3.84524 16.1531 3.9482 16.018 4.04446C15.8955 4.13169 15.7599 4.24267 15.6221 4.35548L15.622 4.35551L15.6042 4.37009C15.3021 4.61724 15.1169 4.76792 14.9762 4.86571C14.9656 4.87308 14.9558 4.87974 14.9468 4.88574C14.9447 4.87513 14.9425 4.86349 14.9402 4.85078C14.9098 4.68215 14.8854 4.44462 14.8466 4.05627L14.8443 4.03338C14.8266 3.85613 14.8092 3.68174 14.7843 3.53347C14.7568 3.36987 14.7117 3.17917 14.6114 2.9848C14.4098 2.59375 14.0731 2.28911 13.664 2.12735C13.4606 2.04694 13.2663 2.02104 13.1008 2.00998C12.9508 1.99997 12.7756 1.99998 12.5975 2H12.5975L12.5744 2H11.4256ZM11.0089 3.83453L11.0106 3.82482L11.0204 3.82412C11.1023 3.81866 11.2155 3.81819 11.4256 3.81819H12.5744C12.7846 3.81819 12.8978 3.81866 12.9797 3.82412L12.9895 3.82482L12.9912 3.83453C13.0048 3.91546 13.0165 4.02807 13.0374 4.23719L13.0407 4.27035C13.0752 4.61493 13.1062 4.92507 13.1507 5.17279C13.1952 5.41974 13.2736 5.74199 13.4873 6.02208C13.8835 6.5415 14.5279 6.80843 15.1753 6.72131C15.5245 6.67433 15.8078 6.50193 16.0139 6.35872C16.2205 6.21508 16.4618 6.0177 16.7298 5.7984L16.7556 5.77728C16.9182 5.64419 17.0061 5.57286 17.073 5.52524L17.081 5.51956L17.0885 5.52601C17.1502 5.58005 17.2306 5.65977 17.3792 5.80838L18.1915 6.62064C18.3401 6.76926 18.4198 6.84965 18.4739 6.91142L18.4803 6.91886L18.4747 6.92691C18.427 6.99376 18.3557 7.08168 18.2226 7.24436L18.2015 7.27017C17.9822 7.53819 17.7848 7.77942 17.6411 7.98612C17.4979 8.19219 17.3255 8.47554 17.2785 8.8247C17.1915 9.47209 17.4583 10.1164 17.9777 10.5126C18.2578 10.7263 18.5801 10.8048 18.8271 10.8492C19.0748 10.8938 19.385 10.9248 19.7296 10.9592L19.7628 10.9626C19.9719 10.9835 20.0845 10.9952 20.1655 11.0088L20.1752 11.0105L20.1759 11.0203C20.1813 11.1022 20.1818 11.2154 20.1818 11.4256V12.5744C20.1818 12.7845 20.1813 12.8977 20.1759 12.9796L20.1752 12.9894L20.1655 12.9911C20.0845 13.0047 19.9719 13.0164 19.7628 13.0373L19.7296 13.0406C19.3851 13.075 19.0751 13.106 18.8274 13.1506C18.5805 13.195 18.2583 13.2734 17.9783 13.487C17.4587 13.8832 17.1917 14.5278 17.2789 15.1754C17.3259 15.5245 17.4983 15.8077 17.6415 16.0137C17.7851 16.2204 17.9824 16.4615 18.2017 16.7295L18.2228 16.7553C18.3558 16.9179 18.4271 17.0058 18.4747 17.0726L18.4804 17.0807L18.474 17.0881C18.42 17.1499 18.3403 17.2302 18.1917 17.3788L17.3793 18.1911C17.2307 18.3398 17.1503 18.4195 17.0886 18.4735L17.0811 18.48L17.0731 18.4743C17.0062 18.4267 16.9183 18.3553 16.7556 18.2222L16.7298 18.2011C16.4618 17.9818 16.2206 17.7844 16.0139 17.6408C15.8078 17.4976 15.5245 17.3252 15.1753 17.2782C14.5279 17.1911 13.8836 17.458 13.4873 17.9774C13.2737 18.2575 13.1952 18.5798 13.1508 18.8268C13.1062 19.0745 13.0752 19.3847 13.0408 19.7293L13.0408 19.7294L13.0374 19.7626C13.0165 19.9718 13.0048 20.0845 12.9912 20.1654L12.9895 20.1752L12.9797 20.1759C12.8978 20.1813 12.7845 20.1818 12.5743 20.1818H11.4257C11.2155 20.1818 11.1023 20.1813 11.0204 20.1759L11.0106 20.1752L11.0089 20.1655C10.9953 20.0845 10.9836 19.9719 10.9627 19.7627L10.9594 19.7296L10.9593 19.7295C10.9249 19.3849 10.8939 19.0747 10.8493 18.827C10.8049 18.58 10.7264 18.2577 10.5127 17.9776C10.1165 17.4583 9.47222 17.1914 8.82488 17.2784C8.47569 17.3254 8.19231 17.4978 7.98623 17.641C7.77951 17.7847 7.53826 17.9821 7.27022 18.2014L7.24441 18.2226C7.08172 18.3557 6.99379 18.427 6.92694 18.4746L6.91889 18.4803L6.91145 18.4739C6.84967 18.4198 6.76928 18.3401 6.62064 18.1914L5.80843 17.3792C5.65981 17.2306 5.58008 17.1502 5.52604 17.0885L5.51959 17.081L5.52527 17.073C5.5729 17.0061 5.64423 16.9182 5.77733 16.7555L5.79844 16.7297C6.01776 16.4617 6.21516 16.2204 6.35882 16.0137C6.50203 15.8077 6.67444 15.5243 6.72141 15.1752C6.8085 14.5278 6.54159 13.8834 6.02223 13.4872C5.74213 13.2735 5.41985 13.1951 5.17288 13.1506C4.92515 13.1061 4.615 13.0751 4.27041 13.0406L4.23722 13.0373C4.02808 13.0164 3.91547 13.0047 3.83453 12.9911L3.82483 12.9894L3.82412 12.9796C3.81866 12.8977 3.81819 12.7845 3.81819 12.5743V11.4257C3.81819 11.2155 3.81866 11.1022 3.82413 11.0203L3.82483 11.0105L3.83453 11.0088C3.91549 10.9952 4.02813 10.9835 4.23733 10.9626L4.27054 10.9592L4.27056 10.9592C4.61522 10.9248 4.92545 10.8938 5.17323 10.8492C5.42026 10.8047 5.74261 10.7262 6.02276 10.5125C6.54192 10.1163 6.80874 9.47215 6.72177 8.82492C6.67484 8.47566 6.50239 8.19222 6.35914 7.9861C6.21546 7.77935 6.01801 7.53806 5.79864 7.26996L5.79864 7.26996L5.7775 7.24413C5.64436 7.0814 5.573 6.99344 5.52536 6.92657L5.51968 6.91852L5.52613 6.91108C5.58019 6.84929 5.65994 6.76887 5.80861 6.6202L6.62074 5.80807C6.76936 5.65944 6.84976 5.57971 6.91154 5.52567L6.91898 5.51922L6.92704 5.52491C6.9939 5.57255 7.08185 5.6439 7.24455 5.77702L7.27037 5.79814C7.53835 6.01743 7.77955 6.2148 7.9862 6.35843C8.19221 6.50161 8.4755 6.67401 8.82457 6.72102C9.47215 6.80823 10.1167 6.54124 10.513 6.02166C10.7266 5.7416 10.805 5.41942 10.8494 5.17251C10.8939 4.92487 10.9249 4.61483 10.9594 4.27037L10.9594 4.2703L10.9627 4.2371C10.9836 4.02802 10.9953 3.91544 11.0089 3.83453ZM9.72727 12C9.72727 10.7448 10.7448 9.72727 12 9.72727C13.2552 9.72727 14.2727 10.7448 14.2727 12C14.2727 13.2552 13.2552 14.2727 12 14.2727C10.7448 14.2727 9.72727 13.2552 9.72727 12ZM12 7.90909C9.74066 7.90909 7.90909 9.74066 7.90909 12C7.90909 14.2593 9.74066 16.0909 12 16.0909C14.2593 16.0909 16.0909 14.2593 16.0909 12C16.0909 9.74066 14.2593 7.90909 12 7.90909Z"
        fill={color}
      />
    </svg>
  );
};

export default Settings;