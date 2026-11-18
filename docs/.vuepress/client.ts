import { useDebounceFn } from "@vueuse/core";
import { defineDocSearchConfig } from "@vuepress/plugin-docsearch/client";
import { onMounted, watch } from "vue";
import { defineClientConfig, usePageHead } from "vuepress/client";
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
  setup() {
    const head = usePageHead();
    const positionSeoTags = () => {
      const viewport = document.head.querySelector('meta[name="viewport"]');
      const keywords = document.head.querySelector('meta[name="keywords"]');
      const description = document.head.querySelector('meta[name="description"]');

      if (viewport && keywords && description) {
        viewport.after(keywords, description);
      }
    };

    onMounted(() => {
      positionSeoTags();
      // VuePress appends changed metadata during navigation.
      watch(head, positionSeoTags, { flush: "post" });
    });
  },
});
