import { unstable_after as after } from "next/server";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { formatViewText } from "@/lib/utils";
import { writeClient } from "@/sanity/lib/write-client";

export default async function View({ id }: { id: string }) {
  const { views } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: views + 1 })
        .commit()
  );

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">
          {formatViewText(views)}: {views}
        </span>
      </p>
    </div>
  );
}
