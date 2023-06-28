<!--
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-27 23:19:23
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-27 23:57:08
 * @FilePath: /rspack-project/src/components/HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script >
import { defineComponent } from 'vue';
import json from '../example.json';


export default defineComponent({
  props: {
    msg: {
      type: String,
    }
  },
  data() {
    return { count: 0 }
  },
  created() {
    console.log('json', json.foo)
  },
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out Rspack which support Vue
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Rspack and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
