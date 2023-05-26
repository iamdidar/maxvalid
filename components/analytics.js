import Script from 'next/script';

const Analytics = () => {
  return (
    <>
    {/* Google Analytics */}
    <Script
    id="google-analytics"
    strategy="afterInteractive"
    src={`https://www.googletagmanager.com/gtag/js?id=G-DJTHS4TWXH`}
  />
  <Script

  
    id="google-analytics-inline"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DJTHS4TWXH');
      `,
    }}
  />

    {/* Google Tag Manager */}
<Script
id="tagmanager"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,s,l,i) {
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-K9CT97W');
    `,
  }}
/>
{/* End Google Tag Manager */}



</>
  )
}

export default Analytics
