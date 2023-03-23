不论package.json中的type字段为何值，.mjs 的文件都按照es模块来处理，.cjs 的文件都按照commonjs模块来处理
所以需要注意，根目录下的 .js 配置文件一般都是commonjs模块，需要命名为 .cjs。如：下面会讲到的eslintrc如果是通过'npx eslint --init'自动生成的，那么其后缀自动为 .cjs，prettierrc 和 postcss.config是手动创建的，那么就需要命名为 .cjs
或者你也可以直接去掉package.json中的"type": "module"项，依旧使用 .js 


## 关于element-plus组件类型别名

// ElTree
const elTreeRef = ref<InstanceType<type ElTree>>()
// 使用对应方法时
elTreeRef.value?.setCheckedKeys()
// Form
const formRef = ref<FormInstance>()
// table
const tableRef = ref<InstanceType<type ElTable>>()

## 路由监听
(1)、onBeforeRouterUpdate
onBeforeRouterUpdate(to => {})

(2)、watch监听，可以监听整个路由，也可以监听其中某个参数变化
watch(()=> router.currentRoute.value, (newval, oldVal)=>{
  console.log(newval, oldVal)
}, { immediate: true})



interface PropsType {
  id: number,
  text?: number,
  isAuth?: boolean
}
let props = withDefaults(defineProps<PropsType>(), {
  text: 'this is text',
  isAuth: false
})