interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo = ({ className, width = 97, height = 32 }: LogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 97 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.55566 12.2984C3.55566 10.9308 4.79818 9.89957 6.14234 10.1516L8.42416 10.5794C13.4312 11.5183 18.569 11.5183 23.576 10.5794L25.8579 10.1516C27.202 9.89957 28.4446 10.9308 28.4446 12.2984C28.4446 13.3494 27.696 14.2514 26.6629 14.4452L24.6263 14.8269C18.9252 15.8959 13.075 15.8959 7.37388 14.8269L5.33731 14.4452C4.30426 14.2514 3.55566 13.3494 3.55566 12.2984Z"
        fill="#FF9500"
      />
      <path
        d="M18.2223 7.44434H13.7779C12.5506 7.44434 11.5557 8.43926 11.5557 9.66656C11.5557 10.8939 12.5506 11.8888 13.7779 11.8888H18.2223C19.4496 11.8888 20.4446 10.8939 20.4446 9.66656C20.4446 8.43926 19.4496 7.44434 18.2223 7.44434Z"
        fill="#FF9500"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.92623 14.1111C5.82867 14.6165 5.77783 15.1363 5.77783 15.6666C5.77783 20.6985 10.3545 24.7778 16.0001 24.7778C21.6456 24.7778 26.2223 20.6985 26.2223 15.6666C26.2223 15.1363 26.1714 14.6165 26.0738 14.1111H21.4229C21.6573 14.6276 21.7778 15.16 21.7778 15.6666C21.7778 17.777 19.6857 20.3333 16.0001 20.3333C12.3144 20.3333 10.2223 17.777 10.2223 15.6666C10.2223 15.16 10.3429 14.6276 10.5772 14.1111H5.92623Z"
        fill="#FF9500"
      />
      <path
        d="M53.4648 10.4453H35.957V8.03125H43.2461V5.80469H46.2227V8.03125H53.4648V10.4453ZM35.0195 19.6094H54.543V22.0469H46.2227V27.1797H43.2461V22.0469H35.0195V19.6094ZM37.3867 14.9219C37.3867 14.1406 37.6758 13.4766 38.2539 12.9297C38.8398 12.3828 39.6836 11.9688 40.7852 11.6875C41.8867 11.4062 43.207 11.2656 44.7461 11.2656C46.2773 11.2656 47.5898 11.4062 48.6836 11.6875C49.7852 11.9688 50.6289 12.3828 51.2148 12.9297C51.8086 13.4766 52.1055 14.1406 52.1055 14.9219C52.1055 15.6953 51.8086 16.3555 51.2148 16.9023C50.6289 17.4492 49.7852 17.8633 48.6836 18.1445C47.5898 18.4258 46.2773 18.5703 44.7461 18.5781C43.207 18.5703 41.8867 18.4258 40.7852 18.1445C39.6836 17.8633 38.8398 17.4531 38.2539 16.9141C37.6758 16.3672 37.3867 15.7031 37.3867 14.9219ZM40.4805 14.9219C40.4805 15.4062 40.832 15.7656 41.5352 16C42.2383 16.2344 43.3086 16.3516 44.7461 16.3516C46.168 16.3516 47.2305 16.2344 47.9336 16C48.6367 15.7656 48.9883 15.4062 48.9883 14.9219C48.9883 14.4375 48.6367 14.0781 47.9336 13.8438C47.2305 13.6016 46.168 13.4766 44.7461 13.4688C43.3164 13.4766 42.2461 13.6016 41.5352 13.8438C40.832 14.0781 40.4805 14.4375 40.4805 14.9219ZM73.0117 12.8359H61.082V14.6172H73.5039V17.0078H58.0586V10.5859H69.9414V8.89844H57.9883V6.48438H73.0117V12.8359ZM55.7383 18.6016H75.2617V20.9922H66.9648V27.2031H63.9648V20.9922H55.7383V18.6016ZM96.0039 19.2812H87.7305V20.9219H93.7539V27.1562H90.7305V23.3125H78.6602V20.9219H84.7539V19.2812H76.4805V16.9375H96.0039V19.2812ZM78.8711 6.22656H93.6367V12.0156H81.8945V13.4219H94.0352V15.7188H78.918V9.85938H90.6367V8.54688H78.8711V6.22656Z"
        fill="#1D2228"
      />
    </svg>
  );
};
export default Logo;