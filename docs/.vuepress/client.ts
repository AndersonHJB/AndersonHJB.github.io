import { useDebounceFn } from "@vueuse/core";
import { defineDocSearchConfig } from "@vuepress/plugin-docsearch/client";
import { defineClientConfig } from "vuepress/client";
import PDF from "./components/PDF.vue";

defineDocSearchConfig({
  transformSearchClient(client) {
    const waitForTyping = useDebounceFn(() => true, 500);
    return {
      ...client,
      async search<T>(...args: Parameters<typeof client.search>) {
        // DocSearch expects a results array even when the next keystroke cancels this query.
        return (await waitForTyping()) ? client.search<T>(...args) : { results: [] };
      },
    };
  },
});

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("PDF", PDF);
  },
});
