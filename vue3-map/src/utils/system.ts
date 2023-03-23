// 设置网站标题
export function setTitle() {
  const title = import.meta.env.VITE_APP_WEB_TITLE
  document.title = title
}
