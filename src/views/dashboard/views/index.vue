<template>
<!--  <Item :districts = 'districts'/>-->
  <single-select
    :name="name"
    :districts="districts"
    @myEmit='receiveEvent'
  ></single-select>
  <div style="margin-top: 20px;">
    <span>选中的元素为：<span style="color:red;">{{selectedName}}</span></span>
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent, ref } from "vue";
import type { Ref } from 'vue';

import singleSelect from "./components/single-select.vue"
import type { DistrictModal } from "@/types/biz/test";

export default defineComponent({
  components: {
    singleSelect
  },
  setup() {
    const districts: DistrictModal[] = [
      {
        name: '西安市',
        code: '02911'
      },
      {
        name: '咸阳市',
        code: '02912'
      },
      {
        name: '延安市',
        code: '02913'
      },
      {
        name: '渭南市',
        code: '02914'
      },
    ]
    const selectedName : Ref<string> = ref('')
    const name: Ref<string> = ref("单选")

    onMounted(() => {
      console.log('dashboard view')
    });
    const receiveEvent = (data: DistrictModal) => {
      selectedName.value = data.name;
    }
    return {
      name,
      selectedName,
      districts,
      receiveEvent
    }
  }
})

</script>

<style scoped lang="less">

</style>
