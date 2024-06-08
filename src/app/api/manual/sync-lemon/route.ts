import {syncPlans} from "@/app/actions";

export async function GET(request: Request) {
    await syncPlans();
    return new Response("OK", { status: 200 });
}