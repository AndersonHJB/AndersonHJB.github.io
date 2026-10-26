import { defineClientConfig } from "vuepress/client";
import PDF from "./components/PDF.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("PDF", PDF);
  },
});
