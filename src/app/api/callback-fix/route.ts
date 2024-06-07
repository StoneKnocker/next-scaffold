import { eq } from "drizzle-orm";
import { type NextRequest } from "next/server";
import { db, webhookEvents } from "@/db/schema";
import { processWebhookEvent } from "@/app/actions";

export async function GET(request: NextRequest) {
    const enventId = request.nextUrl.searchParams.get("event_id");
    if (enventId === null) {
        return new Response("Missing event_id", { status: 400 });
    }
    const dbwebhookEvents = await db
        .select()
        .from(webhookEvents)
        .where(eq(webhookEvents.id, parseInt(enventId, 10)));
    dbwebhookEvents.forEach((webhookEvent) => processWebhookEvent(webhookEvent));
    return new Response("OK", { status: 200 });
}