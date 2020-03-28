import './views/home.vue'
import './views/introduce.vue'
import './views/contact.vue'
import './views/companyDynamic.vue'
import './views/dynamic-1.vue'
import './views/mediaReport.vue'
import './views/product.vue'
import './views/investAcademy.vue'
import './views/download.vue'
import './views/strategicCooperation.vue'
import './views/employment.vue'
import './views/service.vue'
export default function (router) {
  router.map({
    '/home': {
      component (resolve) {
        require(['./views/home.vue'], resolve)
      },
      title: '颜态首页'
    },
    '/introduce': {
      component (resolve) {
        require(['./views/introduce.vue'], resolve)
      },
      title: '企业简介'
    },
    '/contact': {
      component (resolve) {
        require(['./views/contact.vue'], resolve)
      },
      title: '联系我们'
    },
    '/companyDynamic': {
      component (resolve) {
        require(['./views/companyDynamic.vue'], resolve)
      },
      title: '公司动态'
    },
    '/dynamic-1': {
      component (resolve) {
        require(['./views/dynamic-1.vue'], resolve)
      },
      title: '公司动态内容一'
    },
    '/service': {
      component (resolve) {
        require(['./views/service.vue'], resolve)
      },
      title: '服务大厅'
    },
    '/mediaReport': {
      component (resolve) {
        require(['./views/mediaReport.vue'], resolve)
      },
      title: '媒体报告'
    },
    '/product': {
      component (resolve) {
        require(['./views/product.vue'], resolve)
      },
      title: '产品介绍'
    },
    '/investAcademy': {
      component (resolve) {
        require(['./views/investAcademy.vue'], resolve)
      },
      title: '投资学院'
    },
    '/download': {
      component (resolve) {
        require(['./views/download.vue'], resolve)
      },
      title: '软件下载'
    },
    '/strategicCooperation': {
      component (resolve) {
        require(['./views/strategicCooperation.vue'], resolve)
      },
      title: '战略合作'
    },
    '/employment': {
      component (resolve) {
        require(['./views/employment.vue'], resolve)
      },
      title: '招聘'
    }
  })

  router.redirect({
    '/JF': '/JF/JF-Introduce',
    '/JF/*': '/JF/JF-Introduce',
    '/PS': '/PS/PS-Fortune',
    '/PS/*': '/PS/PS-Fortune',
    // 重定向任意未匹配路径到 /home
    '*': '/home'
  })
  router.beforeEach(({to, from, next, abort}) => {
    let toPath = to.path
    let fromPath = from.path
    console.log('to: ' + toPath + ' from: ' + fromPath)
    // if (process.env.NODE_ENV === 'development') {
    if (0 && process.env.NODE_ENV === 'development') {
      Promise.resolve(next()).then(() => {
        Array.from(document.querySelectorAll('body *')).forEach((dom) => {
          dom.style.outline = '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16)
        })
      })
    } else {
      next()
    }
  })
}
