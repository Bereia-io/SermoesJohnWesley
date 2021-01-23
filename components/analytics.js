import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const env = publicRuntimeConfig.ENV

export default function Analytics() {
    if(env !== 'dev') {
        return(
            <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-HCLENHTT0N"></script>
            <script src="/assets/scripts/googleanalytics.js"/>
            </>
        )
    }
    return(
        <>
        </>
    ) 
}