import { BootLegacy } from "./boot"
import { subscribeHtml } from "./subscribeHTML"

export default function SubscribeHtmlPage() {
    return (
        <>
            <BootLegacy />
            <main dangerouslySetInnerHTML={{ __html: subscribeHtml }} />
        </>
    )
}
