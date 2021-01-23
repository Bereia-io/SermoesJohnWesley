import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const env = publicRuntimeConfig.ENV
const GOOGLE_ANALYTICS_ID = publicRuntimeConfig.GOOGLE_ANALYTICS_ID

export default function Analytics() {
    if(env !== 'dev') {
        return(
            <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}></script>
            <script src="/assets/scripts/googleanalytics.js"/>
            </>
        )
    }
    return(
        <>
        </>
    ) 
}