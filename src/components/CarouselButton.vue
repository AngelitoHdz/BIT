<template>
  <button 
    class="carousel-btn" 
    :class="[direction, { disabled }]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <font-awesome-icon :icon="buttonIcon" />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  direction: {
    type: String,
    required: true,
    validator: (value) => ['prev', 'next'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const buttonIcon = computed(() => 
  props.direction === 'prev' ? 'chevron-left' : 'chevron-right'
)
</script>

<style scoped>
.carousel-btn {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.carousel-btn:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.7);
}

.carousel-btn.disabled {
  background: rgba(0, 0, 0, 0.2);
  cursor: not-allowed;
}

.carousel-btn:focus {
  outline: none;
}
</style>