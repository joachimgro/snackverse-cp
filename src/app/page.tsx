import { snackverseHtml } from "./snackverseHTML";

export default function Page() {
  return (
    <main
      dangerouslySetInnerHTML={{ __html: snackverseHtml }}
    />
  );
}
