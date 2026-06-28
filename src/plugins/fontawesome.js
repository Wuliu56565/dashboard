// src/plugins/fontawesome.js 或类似文件
import { library } from '@fortawesome/fontawesome-svg-core'

// 按需引入你需要的图标(fas为实心图标)
// Font Awesome的图标分几个大类：fa-solid、fa-regular、fa-light、fa-thin、fa-duotone、fa-brands
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBell, faStar as farStar } from '@fortawesome/free-regular-svg-icons' // 注意这里用了别名
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// 把它们加入库里
library.add(
  fas,
  faUser, 
  faHome, 
  faTwitter, 
  faGithub, 
  farStar,
  faBell,
  faVuejs,
  far,
  fab
)