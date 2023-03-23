import * as Icons from '@element-plus/icons-vue'
import App from '@/App.vue'
import { setTitle } from '@/utils/system'

setTitle()
const app = createApp(App)

// // 注册  icon 全局组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

app.mount('#app')
