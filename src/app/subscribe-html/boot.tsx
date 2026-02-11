"use client"

import { useEffect } from "react"

export function BootLegacy() {
    useEffect(() => {
        // Try to re-trigger common init hooks for legacy scripts
        document.dispatchEvent(new Event("DOMContentLoaded"))
        window.dispatchEvent(new Event("load"))

        // If theme expects jQuery ready:
        // @ts-expect-error legacy global
        const $ = window.jQuery
        if ($) {
            $(function () {
                // no-op, but ensures ready queue flushes
            })
        }
    }, [])

    return null
}
