<template>
  <div class="page-content">
    <div>
      <div class="page-content_block">
        <span
          class="content-type"
        >{{name}}</span>
      </div>
      <div
        v-for='c in districts'
        :key="c.code"
        class="content"
        :class="c.checked? 'selected' : 'unselect'"
        @click='selectItem(c)'
      >
        <div>{{c.name}}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits } from "vue";
import type { DistrictModal } from "@/types/biz/test";
import { useDashboardStore } from '../../store';

const store = useDashboardStore()
/**
 * emit两种定义形式：运行时声明和 基于类型的声明
 * https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props
 */
//运行时
// const emit = defineEmits(["myEmit"])
//基于类型的声明
const emit = defineEmits<{
  (e: 'myEmit', value: object): void
}>()

//defineProps同样也有两者形式，
//运行时，ts中推荐用类型式
// const props = defineProps({
//   name: {
//     type: String,
//     default: ''
//   },
//   districts: {
//     type: Array as PropType<DistrictModal[]>,
//     default: () => []
//   }
// })
//类型式
interface Props {
  name?: string;
  districts?: DistrictModal[]
}
const props = withDefaults(defineProps<Props>(), {
  name: '',
  districts: ()=>[{
    name: '',
    code: ''
  }]
})

const subjects = ref(props.districts)

function selectItem(item: DistrictModal) {
  store.toStoreDistricts(item)
  emit('myEmit', {
    ...item
  })
}


</script>
<style lang="less" scoped>
.page-content {
  width: 30%;
  margin: 0 auto;
  border-radius: 10px;
  .page-content_block {
    display: flex;
    .content-type {
      display: flex;
      justify-content: center;
      font-size: 13px;
      width: 40px;
      height: 20px;
      line-height: 20px;
      color: red;
      background-size: 39px 20px;
      margin-top: 4px;
    }
  }
  .content {
    margin-top: 10px;
    display: flex;
    align-items: center;
    font-size: 15px;
    border-radius: 6px;
    color: #666;
    padding: 15px;
    line-height: 21px;
  }
  .unselect {
    background-color: #f9f9f9;
  }
  .selected {
    color: #7224dc;
    border: 1px solid #7224dc;
    background-color: #f9f5ff;
  }
  .content-title {
    margin-left: 11px;
    display: inline-block;
    font-size: 20px;
    color: #000000;
    flex: 1;
    // padding-right: 24px;
  }
}
</style>
