// TS识别不了以.vue结尾的模块的

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
