interface IconProps {
  width?: number;
  height?: number;
}

const SearchDefault = ({ width = 120, height = 120 }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M82.7985 86.3376C82.3326 86.3403 81.8708 86.251 81.4395 86.0748C81.0082 85.8987 80.6159 85.6391 80.2852 85.311L73.4532 78.479C72.7866 77.8125 72.4121 76.9084 72.4121 75.9657C72.4121 75.023 72.7866 74.1189 73.4532 73.4524C74.1197 72.7858 75.0238 72.4113 75.9665 72.4113C76.9092 72.4113 77.8132 72.7858 78.4798 73.4524L85.3118 80.2844C85.6436 80.6135 85.907 81.005 86.0867 81.4363C86.2664 81.8677 86.3589 82.3304 86.3589 82.7977C86.3589 83.265 86.2664 83.7277 86.0867 84.1591C85.907 84.5904 85.6436 84.9819 85.3118 85.311C84.9811 85.6391 84.5888 85.8987 84.1575 86.0748C83.7262 86.251 83.2644 86.3403 82.7985 86.3376Z"
      fill="#FFBF66"
    />
    <path
      d="M50.9389 89.8778C43.2375 89.8778 35.7091 87.5941 29.3056 83.3154C22.9022 79.0367 17.9113 72.9553 14.9641 65.8402C12.0169 58.725 11.2458 50.8957 12.7482 43.3423C14.2507 35.7889 17.9593 28.8507 23.405 23.405C28.8507 17.9593 35.7889 14.2507 43.3423 12.7482C50.8957 11.2458 58.725 12.0169 65.8402 14.9641C72.9553 17.9113 79.0367 22.9022 83.3154 29.3056C87.5941 35.7091 89.8778 43.2375 89.8778 50.9389C89.8778 61.2661 85.7753 71.1704 78.4729 78.4729C71.1704 85.7753 61.2661 89.8778 50.9389 89.8778ZM50.9389 19.0798C44.6378 19.0798 38.4781 20.9483 33.2389 24.449C27.9997 27.9498 23.9163 32.9255 21.5049 38.747C19.0936 44.5684 18.4627 50.9742 19.692 57.1543C20.9213 63.3344 23.9556 69.0111 28.4111 73.4667C32.8667 77.9222 38.5434 80.9565 44.7235 82.1858C50.9036 83.4151 57.3094 82.7842 63.1308 80.3729C68.9523 77.9615 73.928 73.8781 77.4288 68.6389C80.9295 63.3997 82.798 57.24 82.798 50.9389C82.798 42.4893 79.4414 34.3859 73.4667 28.4111C67.4919 22.4364 59.3885 19.0798 50.9389 19.0798Z"
      fill="#FFF0E1"
    />
    <path
      d="M104.782 89.1352L92.3927 76.7455C92.0636 76.4137 91.6721 76.1504 91.2407 75.9707C90.8093 75.7909 90.3466 75.6984 89.8793 75.6984C89.412 75.6984 88.9493 75.7909 88.518 75.9707C88.0866 76.1504 87.6951 76.4137 87.366 76.7455L76.7463 87.3652C76.4145 87.6943 76.1512 88.0858 75.9715 88.5172C75.7917 88.9486 75.6992 89.4112 75.6992 89.8785C75.6992 90.3459 75.7917 90.8085 75.9715 91.2399C76.1512 91.6713 76.4145 92.0628 76.7463 92.3919L89.136 104.782C91.2174 106.844 94.029 108.001 96.9591 108.001C99.8892 108.001 102.701 106.844 104.782 104.782C106.845 102.7 108.002 99.8884 108.002 96.9583C108.002 94.0282 106.845 91.2167 104.782 89.1352Z"
      fill="#FF9500"
    />
  </svg>
);

export default SearchDefault;
