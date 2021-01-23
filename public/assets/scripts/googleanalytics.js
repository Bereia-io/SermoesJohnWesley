import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const GOOGLE_ANALYTICS_ID = publicRuntimeConfig.GOOGLE_ANALYTICS_ID

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', `${GOOGLE_ANALYTICS_ID}`);