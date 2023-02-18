<template>
  <div class="w-full">
    <div
      class="flex items-center px-4 w-fit max-w-full h-9 rounded-xl"
      :class="
        props.isPlayerMessage
          ? 'bg-violet-500 rounded-br-none text-white ml-auto'
          : 'bg-violet-50 rounded-bl-none text-gray-700'
      "
    >
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isPlayerMessage: { type: Boolean, required: true },
  content: { type: String, required: true },
});
</script>
