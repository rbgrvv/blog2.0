import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Archive</h1>
      <div className="grid grid-cols-2 mt-9 gap-4">
<img src="tech1.jpg" alt="" className="rounded-xl" />
<p className="text-xl">
We set up servers for company X at Delta telecom.
  <br />

  Baku. June, 2024
</p>
      </div>
    </div>
  );
}
