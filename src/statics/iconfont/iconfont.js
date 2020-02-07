import {createGlobalStyle} from 'styled-components';

export const IconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1580980482210'); /* IE9 */
    src: url('./iconfont.eot?t=1580980482210#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPEAAsAAAAAB8wAAAN3AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDDIJwATYCJAMQCwoABCAFhG0HRBveBlGUDkaD7KcmTxYzQWYIY4AXIDAJCRRQQAFAKgAAEA+f+32em+S/zeYvsALFYHn8qh0PLTsSvqo1moSuMBWq49mId7W2xaSEnY5HkmnSftzvvfj+YtNpmZQIEUJjUI9K24OBDQBW4dEVIzZhLg5VM22DzQeKyxzjPJQLYHhrwMZcbUEK3IIUyDuMXXkR+wk0y1pyN4vdEaoKY1ggXru2gmpKq9QUhip0JXOL+ARVTR/SD+Cj//vx3yAwSAaZMfb26dyC0S9+lRP6BDYuAm88M9giMnaAQjwvtd4rhNEdBU3pXHQGVFVirBZ/1feIvxdpNaX6/uMlomPkj4ETGMv8wubGMqFaQFkwT4IXIq8w5z3wmYFbdHlSpFkcjDq/GRufwr/zkPngwGxvz2R/3zT7UJnEUt4vTT48NGeVvAEfywzHBMsb29KqgA6rjMLCcRQ7G4AWWFMtawNKNDdP9M+UMe1rAgnN2NmzEGRu7s5vnpiIZVaQB0zmXEyLWNzz61aoyKxLqN3JzUtbB/tZTYf3eSZ/W5fcMZDy2a0cJBcBZrgcjlnhWN0khS+WT7QomroopLYdTjJTajui4EgYc/E3awdTburbHCrbrnj/nZQPvOT0TWElJ0+5Q5RfueCQeQl+CFWRz5/TzBPXFltbQerOzjxklZL0l4r1mZUO/MWpCIAns0WsIBjK0AMEgT+amPLxMrNX87Q0cIAmmpwCm6yX6klT2Kr60yuUMl1XjVRPFQQA6GeRcUTWp/5HpjKIJ2ZLJPbf/Y1v6rQa9vgy787rsICf/yTo7hOLdjL4AbzWvD/Fa1lSVIGhK0UW2lzNVhwkhkloGv5Pkhm/MeTzrfMJ1XwMyYglyKoVZMHuwMDQCXSqc2i2LRcPzWIFUUax5QUgTHlDMuE7ZFM+yIL9wsCCP3SmAoHmLojXHFoLz7oykxKy8PJEV8eRsQxSDwr3ZF8DxUmBTzkTZ24A+3wC2cSSIuIxJmQ3eyBi0HAc4gIcRkEQY8KxR1o6jkgy7PK7lX1RR8ch1F1jRBHEgi6ekEuLRYxbWdRzP79HbFcBhWuKKsxnhGXc9lFfR68FcimNWhVdyyOZG9uAEAYyWCyEFsBMAjMaQ0l5Lw/RRIfTI5wY6qJypq20M788fMJV0BjblUiRo8RA94YUayevqJo3IGpHmaR9NwIAAA==') format('woff2'),
    url('./iconfont.woff?t=1580980482210') format('woff'),
    url('./iconfont.ttf?t=1580980482210') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1580980482210#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .iconsearch:before {
    content: "\e623";
  }
  
  .iconAa:before {
    content: "\e636";
  }
  
  .iconicon-checkin:before {
    content: "\e615";
  }
`;
