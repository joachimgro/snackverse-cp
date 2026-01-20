import { BootLegacy } from "./boot"
import { snackverseHtml } from "../../snackverseHTML"

export default function Page() {
    return (
        <>
            <BootLegacy />
            <main dangerouslySetInnerHTML={{ __html: snackverseHtml }} />
        </>
    )
}
