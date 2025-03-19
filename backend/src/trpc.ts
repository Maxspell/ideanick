import { initTRPC } from "@trpc/server";

const ideas = [
    {nick: 'test-1', name: 'test', description: 'Description test'},
    {nick: 'test-2', name: 'test', description: 'Description test'},
    {nick: 'test-3', name: 'test', description: 'Description test'},
    {nick: 'test-4', name: 'test', description: 'Description test'},
]

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
    getIdeas: trpc.procedure.query(() => {
        return { ideas };
    }),
});