type UserAgentInfo = {
  ua: string;
  iOS: boolean;
  webkit: boolean;
  iOSSafari: boolean;
};

export const getUserAgent = (): UserAgentInfo => {
  const ua = window.navigator.userAgent;
  const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  const webkit = !!ua.match(/WebKit/i);
  const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

  return {
    ua,
    iOS,
    webkit,
    iOSSafari,
  };
};
