export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (err: unknown, instance: ComponentPublicInstance | null, info: string) => {
    console.warn("ERROR: ", err, info);
  }

  nuxtApp.vueApp.config.warnHandler = (msg: string, instance: ComponentPublicInstance | null, trace: string) => {
    if (msg.startsWith('Failed to resolve component: Mjx')) {
      // TODO: Ignore these for now
      return;
    }
    if (msg.includes('mjx-container')) {
      // TODO: Ignore these for now
      return;
    }
    console.warn("WARN: ", msg, trace);
  }
})
