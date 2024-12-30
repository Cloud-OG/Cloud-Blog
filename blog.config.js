// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a
const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 6, // 更新内容缓存间隔 单位(秒)；即每个页面有5秒的纯静态期、此期间无论多少次访问都不会抓取notion数据；调大该值有助于节省Vercel资源、同时提升访问速率，但也会使文章更新有延迟。
  THEME: process.env.NEXT_PUBLIC_THEME || 'hexo', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2024, // e.g if leave this empty, current year will be used.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜间模式起至时间，false时关闭根据时间自动切换夜间模式

  TAG_SORT_BY_COUNT: true, // 标签是否按照文章数量倒序排列，文章多的标签排在前。
  IS_TAG_COLOR_DISTINGUISHED:
    process.env.NEXT_PUBLIC_IS_TAG_COLOR_DISTINGUISHED === 'true' || true, // 对于名称相同的tag是否区分tag的颜色

  // 3.14.1版本后，欢迎语在此配置，英文逗号隔开 ,  即可支持多个欢迎语打字效果。
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'FREE WRITING!',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || false, // 支持Menu 类型，从3.12.0版本起，各主题将逐步支持灵活的二级菜单配置，替代了原来的Page类型，此配置是试验功能、默认关闭。

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Cloud', // 您的昵称 例如 tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || 'Stay hungry.Stay foolish.', // 作者简介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://cloud09.xyz', // 网站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion,Cloud;Blog, 博客', // 网站关键词 英文逗号隔开

  // 社交链接，不需要可留空白，例如 CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'cloudring2004@gmail.com', // 邮箱地址 例如mail@tangly1024.com
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // 你的微博个人主页
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // 你的twitter个人主页
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com/Cloud-OG', // 你的github个人主页 例如 https://github.com/tangly1024
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // 你的telegram 地址 例如 https://t.me/tangly_1024
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // 你的linkedIn 首页
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // 您的instagram地址
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || 'https://space.bilibili.com/350267607', // B站主页
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Youtube主页
  CONTACT_XIAOHONGSHU: process.env.NEXT_PUBLIC_CONTACT_XIAOHONGSHU || '', // 小红书主页
  CONTACT_ZHISHIXINGQIU: process.env.NEXT_PUBLIC_CONTACT_ZHISHIXINGQIU || '', // 知识星球
  CONTACT_WEHCHAT_PUBLIC: process.env.NEXT_PUBLIC_CONTACT_WEHCHAT_PUBLIC || '', // 微信公众号 格式：https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=【xxxxxx】==#wechat_redirect

  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Notion域名，您可以选择用自己的域名进行反向代理，如果不懂得什么是反向代理，请勿修改此项

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon 配置, 默认使用 /public/favicon.ico，支持在线图片，如 https://img.imesong.com/favicon.png

  IMAGE_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_WIDTH || 800, // 图片压缩宽度默认值，作用于博客封面和文章内容 越小加载图片越快
  IMAGE_ZOOM_IN_WIDTH: process.env.NEXT_PUBLIC_IMAGE_ZOOM_IN_WIDTH || 1200, // 文章图片点击放大后的画质宽度，不代表在网页中的实际展示宽度
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || 'https://imgapi.jinghuashang.cn/random', // 随机图片API,如果未配置下面的关键字，主页封面，头像，文章封面图都会被替换为随机图片
  RANDOM_IMAGE_REPLACE_TEXT:
    process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT ||
    'source.unsplash.com', // 触发替换图片的 url 关键字(多个支持用英文逗号分开)，只有图片地址中包含此关键字才会替换为上方随机图片url
  // eg: images.unsplash.com(notion图床的所有图片都会替换),如果你在 notion 里已经添加了一个随机图片 url，恰巧那个服务跑路或者挂掉，想一键切换所有配图可以将该 url 配置在这里
  // 默认下会将你上传到 notion的主页封面图和头像也给替换，建议将主页封面图和头像放在其他图床，在 notion 里配置 link 即可。

  // START ************网站字体*****************
  // ['font-serif','font-sans'] 两种可选，分别是衬线和无衬线: 参考 https://www.jianshu.com/p/55e410bd2115
  // 后面空格隔开的font-light的字体粗细，留空是默认粗细；参考 https://www.tailwindcss.cn/docs/font-weight
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans font-light',
  // 字体CSS 例如 https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL: [
    // 'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],
  // 无衬线字体 例如'"LXGW WenKai"'
  FONT_SANS: [
    // '"LXGW WenKai"',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // 衬线字体 例如'"LXGW WenKai"'
  FONT_SERIF: [
    // '"LXGW WenKai"',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // font-awesome 字体图标地址; 可选 /css/all.min.css ， https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // END ************网站字体*****************

  // 路径和组件映射，不同路径分别展示主题的什么组件
  LAYOUT_MAPPINGS: {
    '-1': 'LayoutBase',
    '/': 'LayoutIndex',
    '/archive': 'LayoutArchive',
    '/page/[page]': 'LayoutPostList',
    '/category/[category]': 'LayoutPostList',
    '/category/[category]/page/[page]': 'LayoutPostList',
    '/tag/[tag]': 'LayoutPostList',
    '/tag/[tag]/page/[page]': 'LayoutPostList',
    '/search': 'LayoutSearch',
    '/search/[keyword]': 'LayoutSearch',
    '/search/[keyword]/page/[page]': 'LayoutSearch',
    '/404': 'Layout404',
    '/tag': 'LayoutTagIndex',
    '/category': 'LayoutCategoryIndex',
    '/[prefix]': 'LayoutSlug',
    '/[prefix]/[slug]': 'LayoutSlug',
    '/[prefix]/[slug]/[...suffix]': 'LayoutSlug',
    '/auth/result': 'LayoutAuth',
    '/sign-in/[[...index]]': 'LayoutSignIn',
    '/sign-up/[[...index]]': 'LayoutSignUp',
    '/dashboard/[[...index]]': 'LayoutDashboard'
  },

  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允许复制页面内容 默认允许，如果设置为false、则全栈禁止复制内容。
  // 自定义右键菜单
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || true, // 自定义右键菜单，覆盖系统菜单
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH ||
    false, // 是否显示切换主题
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE || true, // 是否显示深色模式
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK || true, // 是否显示分享链接
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST || true, // 是否显示随机博客
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY || true, // 是否显示分类
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_TAG:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_TAG || true, // 是否显示标签

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXXX

  // START********代码相关********
  // PrismJs 代码相关
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_JS_AUTO_LOADER:
    'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

  // 代码主题 @see https://github.com/PrismJS/prism-themes
  PRISM_THEME_PREFIX_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css', // 代码块默认主题
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // 是否开启浅色/深色模式代码主题切换； 开启后将显示以下两个主题
  PRISM_THEME_LIGHT_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css', // 浅色模式主题
  PRISM_THEME_DARK_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // 深色模式主题

  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // 代码左上角显示mac的红黄绿图标
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false, // 是否显示行号
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || true, // 是否支持折叠代码框
  CODE_COLLAPSE_EXPAND_DEFAULT:
    process.env.NEXT_PUBLIC_CODE_COLLAPSE_EXPAND_DEFAULT || true, // 折叠代码默认是展开状态

  // END********代码相关********

  // Mermaid 图表CDN
  MERMAID_CDN:
    process.env.NEXT_PUBLIC_MERMAID_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN
  // QRCodeCDN
  QR_CODE_CDN:
    process.env.NEXT_PUBLIC_QR_CODE_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // 文章分享功能 ，将在底部显示一个分享条
  POSTS_SHARE_SERVICES:
    process.env.NEXT_PUBLIC_POST_SHARE_SERVICES ||
    'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // 分享的服務，按顺序显示,逗号隔开
  // 所有支持的分享服务：link(复制链接),wechat(微信),qq,weibo(微博),email(邮件),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

  // 文章URL前缀
  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX ?? 'article',
  // POST类型文章的默认路径前缀，例如默认POST类型的路径是  /article/[slug]
  // 如果此项配置为 '' 空， 则文章将没有前缀路径
  // 支援類似 WP 可自訂文章連結格式的功能：https://wordpress.org/documentation/article/customize-permalinks/，目前只先實作 %year%/%month%/%day%
  // 例：如想連結改成前綴 article + 時間戳記，可變更為： 'article/%year%/%month%/%day%'

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll] 文章列表样式:页码分页、单页滚动加载
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  是否在列表加载文章预览
  POST_PREVIEW_LINES: process.env.NEXT_PUBLIC_POST_POST_PREVIEW_LINES || 12, // 预览博客行数
  POST_RECOMMEND_COUNT: process.env.NEXT_PUBLIC_POST_RECOMMEND_COUNT || 6, // 推荐文章数量
  POSTS_PER_PAGE: process.env.NEXT_PUBLIC_POST_PER_PAGE || 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // 排序方式 'date'按时间,'notion'由notion控制

  POST_WAITING_TIME_FOR_404:
    process.env.NEXT_PUBLIC_POST_WAITING_TIME_FOR_404 || '8', // 文章加载超时时间，单位秒；超时后跳转到404页面

  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // 在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // 管理后台的KEY，不要暴露在代码中，在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY:
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // 客户端搜索用的KEY
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // 在Algolia中创建一个index用作数据库
  //   ALGOLIA_RECREATE_DATA: process.env.ALGOLIA_RECREATE_DATA || process.env.npm_lifecycle_event === 'build', // 为true时重新构建索引数据; 默认在build时会构建

  PREVIEW_CATEGORY_COUNT: 16, // 首页最多展示的分类数量，0为不限制
  PREVIEW_TAG_COUNT: 16, // 首页最多展示的标签数量，0为不限制

  POST_TITLE_ICON: process.env.NEXT_PUBLIC_POST_TITLE_ICON || true, // 是否显示标题icon
  POST_DISABLE_GALLERY_CLICK:
    process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // 画册视图禁止点击，方便在友链页面的画册插入链接

  //   ********动态特效相关********
  // 鼠标点击烟花特效
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false, // 开关
  // 烟花色彩，感谢 https://github.com/Vixcity 提交的色彩
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // 鼠标跟随特效
  MOUSE_FOLLOW: process.env.NEXT_PUBLIC_MOUSE_FOLLOW || false, // 开关
  // 这两个只有在鼠标跟随特效开启时才生效
  // 鼠标类型 1：路劲散点 2：下降散点 3：上升散点 4：边缘向鼠标移动散点 5：跟踪转圈散点 6：路径线条 7：聚集散点 8：聚集网格 9：移动网格 10：上升粒子 11：转圈随机颜色粒子 12：圆锥放射跟随蓝色粒子
  MOUSE_FOLLOW_EFFECT_TYPE: 11, // 1-12
  MOUSE_FOLLOW_EFFECT_COLOR: '#ef672a', // 鼠标点击特效颜色 #xxxxxx 或者 rgba(r,g,b,a)

  // 樱花飘落特效
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false, // 开关
  // 漂浮线段特效
  NEST: process.env.NEXT_PUBLIC_NEST || false, // 开关
  // 动态彩带特效
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // 开关
  // 静态彩带特效
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // 开关
  // 星空雨特效 黑夜模式才会生效
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || true, // 开关

  //   ********挂件组件相关********
  // AI 文章摘要生成 @see https://docs_s.tianli0.top/
  TianliGPT_CSS:
    process.env.NEXT_PUBLIC_TIANLI_GPT_CSS ||
    'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.css',
  TianliGPT_JS:
    process.env.NEXT_PUBLIC_TIANLI_GPT_JS ||
    'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.js',
  TianliGPT_KEY: process.env.NEXT_PUBLIC_TIANLI_GPT_KEY || '',

  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
  WEB_WHIZ_BASE_URL:
    process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID
  DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
  DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
  DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',
  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://raw.githubusercontent.com/imuncle/live2d/master/model/snow_miku/model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // 点击宠物挂件切换博客主题

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: '鳥の詩',
      artist: 'Lia',
      url: 'https://music.163.com/song/media/outer/url?id=28151022.mp3',
      cover: 'http://p2.music.126.net/CI_u3SfBgdTIAQtFnn_wnQ==/6040716883009850.jpg'
    },
    {
      name: 'Memoria-君の赴くままに',
      artist: '藤崎わと',
      url: 'https://Cloud-OG.github.io/FileHub/root/Music/Memoria-君の赴くままに.m4a',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMiehT3mFTCvo7gRCx6_e9e5DSAm8Q19M7w&s'
    },
    {
      name: 'Come on,sweet death',
      artist: 'ARIANNE',
      url: 'https://Cloud-OG.github.io/FileHub/root/Music/come on,sweet death.mp3',
      cover: 'https://p1.music.126.net/S4Kcgr9CmA_1yM6wbjL3Rg==/109951165354140879.jpg'
    },
    {
      name: 'Beautiful World',
      artist: '宇多田ヒカル',
      url: 'https://Cloud-OG.github.io/FileHub/root/Music/Beautiful_World.mp3',
      cover: 'https://p1.music.126.net/l3G4LigZnOxFE9lB4bz_LQ==/109951165791860501.jpg'
    },
    {
      name: '桜流し (2021 Remastered)',
      artist: '宇多田ヒカル',
      url: 'https://music.163.com/song/media/outer/url?id=1825843935.mp3',
      cover: 'https://p1.music.126.net/l3G4LigZnOxFE9lB4bz_LQ==/109951165791860501.jpg'
    },
    {
      name: 'Beautiful World(Da Capo Version)',
      artist: '宇多田ヒカル',
      url: 'https://Cloud-OG.github.io/FileHub/root/Music/Beautiful_World(Da_Capo_Version).mp3',
      cover: 'https://p1.music.126.net/l3G4LigZnOxFE9lB4bz_LQ==/109951165791860501.jpg'
    },
    {
      name: 'One Last Kiss',
      artist: '宇多田ヒカル',
      url: 'https://Cloud-OG.github.io/FileHub/root/Music/One Last Kiss.mp3',
      cover: 'https://p1.music.126.net/l3G4LigZnOxFE9lB4bz_LQ==/109951165791860501.jpg'
    },
    {
      name: 'Merry Christmas Mr. Lawrence',
      artist: '坂本龍一',
      url: 'https://Cloud-OG.github.io/FileHub/root/Music/Merry Christmas Mr. Lawrence.flac',
      cover: 'https://p1.music.126.net/Vnb5M_-BCkEARNVGSF_KKg==/109951167113646412.jpg'
    },
    {
      name: 'energy flow',
      artist: '坂本龍一',
      url: 'https://Cloud-OG.github.io/FileHub/root/Music/energy flow.flac',
      cover: 'https://p1.music.126.net/92bUIG25fZW2TqOT53dP9w==/109951168429185109.jpg'
    },
    {
      name: 'Let It Be (Remastered 2009)',
      artist: 'Beatles',
      url: 'https://Cloud-OG.github.io/FileHub/root/Music/Let It Be (Remastered 2009).flac',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPQLBmAd4ABWAtGQRQOyDWVOsiHPFOMRqhw&s'
    },
    {
      name: '崩坏世界的歌姬 (Movie Ver.)',
      artist: '小林未郁',
      url: 'https://music.163.com/song/media/outer/url?id=1459722976.mp3',
      cover: 'https://p2.music.126.net/2Rcimduy6Oj5Xz6beJDSIg==/3364505581118558.jpg'
    },
    {
      name: '崩坏世界的歌姬（Chinese Ver.）',
      artist: '泠鸢yousa',
      url: 'https://music.163.com/song/media/outer/url?id=33682747.mp3',
      cover: 'https://p1.music.126.net/XftX_EwaEBhjPgddMv7Lbw==/109951165105147714.jpg'
    },
    {
      name: 'Da Capo',
      artist: 'HOYO-MiX',
      url: 'https://music.163.com/song/media/outer/url?id=2026565329.mp3',
      cover: 'http://p1.music.126.net/awzv1LpuBJiKTeB7roh_Aw==/109951168434956885.jpg'
    },
    {
      name: '星间旅行 Interstellar Journey (中文版)',
      artist: 'HOYO-MiX,茶理理',
      url: 'https://music.163.com/song/media/outer/url?id=2043169389.mp3',
      cover: 'http://p2.music.126.net/JaSa3Gt5oaJ77cDfJBR1fg==/109951168575641463.jpg'
    },
    {
      name: '轻涟 La vaguelette',
      artist: 'HOYO-MiX',
      url: 'https://music.163.com/song/media/outer/url?id=2100334024.mp3',
      cover: 'http://p2.music.126.net/I-cw5yaq4Pz0EL2dZAmq1g==/109951169058808374.jpg'
    },
    {
      name: 'Moon Halo',
      artist: '茶理理,TetraCalyx,Hanser,HOYO-MiX',
      url: 'https://music.163.com/song/media/outer/url?id=1859652717.mp3',
      cover: 'http://p2.music.126.net/ciLKATqflV2YWSV3ltE2Kw==/109951166159281275.jpg'
    },
    {
      name: '蒲苇如丝 Lovers\' Oath',
      artist: '陈致逸,HOYO-MiX',
      url: 'https://music.163.com/song/media/outer/url?id=1861577585.mp3',
      cover: 'http://p2.music.126.net/klj1ylCHIDtuINQEXo1WEg==/109951166180599033.jpg'
    },
    {
      name: 'Regression',
      artist: '阿云嘎,HOYO-MiX',
      url: 'https://music.163.com/song/media/outer/url?id=1913478990.mp3',
      cover: 'http://p1.music.126.net/DbD08enxZN2kDFScDFxcdQ==/109951166957048928.jpg'
    },
    {
      name: '在银河中孤独摇摆',
      artist: '知更鸟,HOYO-MiX,Chevy',
      url: 'https://Cloud-OG.github.io/FileHub/root/Music/01 在银河中孤独摇摆 Sway To My Beat In Cosmos.m4a',
      cover: 'http://p1.music.126.net/aR4BlDNkA84tFbg8bBpriA==/109951169585655912.jpg'
    },
    {
      name: '使一颗心免于哀伤',
      artist: '知更鸟,HOYO-MiX,Chevy',
      url: 'https://Cloud-OG.github.io/FileHub/root/Music/02 使一颗心免于哀伤 If I Can Stop One Heart From Breaking.m4a',
      cover: 'http://p1.music.126.net/aR4BlDNkA84tFbg8bBpriA==/109951169585655912.jpg'
    },
    {
      name: '希望有羽毛和翅膀',
      artist: '知更鸟,HOYO-MiX,Chevy',
      url: 'https://Cloud-OG.github.io/FileHub/root/Music/03 希望有羽毛和翅膀 Hope Is The Thing With Feathers.m4a',
      cover: 'http://p1.music.126.net/aR4BlDNkA84tFbg8bBpriA==/109951169585655912.jpg'
    },
    {
      name: '若我不曾见过太阳',
      artist: '知更鸟,HOYO-MiX,Chevy',
      url: 'https://Cloud-OG.github.io/FileHub/root/Music/04 若我不曾见过太阳 Had I Not Seen The Sun.m4a',
      cover: 'http://p1.music.126.net/aR4BlDNkA84tFbg8bBpriA==/109951169585655912.jpg'
    },
    {
      name: '红透晚烟青',
      artist: '金玟岐,三Z-STUDIO,HOYO-MiX',
      url: 'http://music.163.com/song/media/outer/url?id=2618046004.mp3',
      cover: 'https://p1.music.126.net/xZwzMCIG6Tb0RvIf64q2Lg==/109951169878501910.jpg'
    },
    {
      name: '小停再出发',
      artist: '三Z-STUDIO,HOYO-MiX',
      url: 'http://music.163.com/song/media/outer/url?id=2644569024.mp3',
      cover: 'https://p2.music.126.net/lCNxRyqAuVvIPkuhUXkcdg==/109951170130858980.jpg'
    },
    {
      name: '穏ヤカナ眠リ',
      artist: '岡部啓一',
      url: 'http://music.163.com/song/media/outer/url?id=468490565.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '砂塵ノ記憶',
      artist: '高橋邦幸',
      url: 'http://music.163.com/song/media/outer/url?id=468490566.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '遊園施設',
      artist: '帆足圭吾',
      url: 'http://music.163.com/song/media/outer/url?id=468490569.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '還ラナイ声/ギター',
      artist: '岡部啓一',
      url: 'http://music.163.com/song/media/outer/url?id=468490571.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '澱ンダ祈リ/暁風',
      artist: '帆足圭吾 / 岡部啓一',
      url: 'http://music.163.com/song/media/outer/url?id=468490573.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: 'エミール/ショップ',
      artist: '高橋邦幸 / 石濱翔 / 門脇舞以',
      url: 'http://music.163.com/song/media/outer/url?id=468490574.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '大切ナ時間',
      artist: '帆足圭吾 / 石井咲希',
      url: 'http://music.163.com/song/media/outer/url?id=468490575.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '曖昧ナ希望/氷雨',
      artist: '帆足圭吾',
      url: 'http://music.163.com/song/media/outer/url?id=468490576.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '遺サレタ場所/遮光',
      artist: '岡部啓一',
      url: 'http://music.163.com/song/media/outer/url?id=468490579.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: 'パスカル',
      artist: '岡部啓一 / 石井咲希',
      url: 'http://music.163.com/song/media/outer/url?id=468490582.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '森ノ王国',
      artist: '帆足圭吾',
      url: 'http://music.163.com/song/media/outer/url?id=468490583.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '愚カシイ兵器:乙:甲',
      artist: '岡部啓一',
      url: 'http://music.163.com/song/media/outer/url?id=468490586.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '愚カシイ兵器:丙',
      artist: '岡部啓一',
      url: 'http://music.163.com/song/media/outer/url?id=468490589.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '曖昧ナ希望/翠雨',
      artist: '帆足圭吾',
      url: 'http://music.163.com/song/media/outer/url?id=468490598.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: 'イニシエノウタ/贖罪',
      artist: '岡部啓一',
      url: 'http://music.163.com/song/media/outer/url?id=468490599.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '澱ンダ祈リ/星空',
      artist: '帆足圭吾 / 岡部啓一',
      url: 'http://music.163.com/song/media/outer/url?id=468490602.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '顕現シタ異物',
      artist: '岡部啓一 / 帆足圭吾',
      url: 'http://music.163.com/song/media/outer/url?id=468490603.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: '「塔」',
      artist: '岡部啓一',
      url: 'http://music.163.com/song/media/outer/url?id=468490604.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: 'カイネ／救済',
      artist: 'MONACA / 岡部啓一',
      url: 'http://music.163.com/song/media/outer/url?id=4937739.mp3',
      cover: 'https://p1.music.126.net/tet1byB8_pPwwoedxzFKhg==/2356253418376742.jpg'
    },
    {
      name: 'Weight of the World/壊レタ世界ノ歌',
      artist: '河野マリナ',
      url: 'http://music.163.com/song/media/outer/url?id=468490592.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: 'Weight of the World (Nouveau-FR Version)',
      artist: 'Emi Evans / 岡部啓一',
      url: 'http://music.163.com/song/media/outer/url?id=468490607.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: 'Weight of the World/the End of YoRHa',
      artist: 'YoRHa',
      url: 'http://music.163.com/song/media/outer/url?id=468490608.mp3',
      cover: 'https://p2.music.126.net/2mq_C15bHzYnbPX4fZHomw==/109951165543440452.jpg'
    },
    {
      name: 'Wake Up, Get Up, Get Out There',
      artist: 'Lyn',
      url: 'http://music.163.com/song/media/outer/url?id=454224827.mp3',
      cover: 'https://p1.music.126.net/FmuZirfGmg9FbMy3hkEqAA==/109951165567176149.jpg'
    },
    {
      name: 'Life Will Change',
      artist: 'Lyn',
      url: 'http://music.163.com/song/media/outer/url?id=454231736.mp3',
      cover: 'https://p1.music.126.net/FmuZirfGmg9FbMy3hkEqAA==/109951165567176149.jpg'
    },
    {
      name: 'Last Surprise',
      artist: 'Lyn',
      url: 'http://music.163.com/song/media/outer/url?id=454224836.mp3',
      cover: 'https://p1.music.126.net/FmuZirfGmg9FbMy3hkEqAA==/109951165567176149.jpg'
    },
    {
      name: 'Beneath the Mask',
      artist: 'Lyn',
      url: 'http://music.163.com/song/media/outer/url?id=454224842.mp3',
      cover: 'https://p1.music.126.net/FmuZirfGmg9FbMy3hkEqAA==/109951165567176149.jpg'
    },
    {
      name: 'Rivers In the Desert',
      artist: 'Lyn',
      url: 'http://music.163.com/song/media/outer/url?id=454231899.mp3',
      cover: 'https://p1.music.126.net/FmuZirfGmg9FbMy3hkEqAA==/109951165567176149.jpg'
    },
    {
      name: '星と僕らと',
      artist: 'Lyn',
      url: 'http://music.163.com/song/media/outer/url?id=454224997.mp3',
      cover: 'https://p1.music.126.net/FmuZirfGmg9FbMy3hkEqAA==/109951165567176149.jpg'
    },
    {
      name: 'Trailer Theme - Just a To the Moon Series Beach Episode',
      artist: 'Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633699898.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'Title Theme - Just a To the Moon Series Beach Episode',
      artist: 'Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633698053.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'The Day Off (Bus Map Music)',
      artist: 'Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633698058.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'For River - Lobby Piano Version',
      artist: 'Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633698054.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'Born a Stranger - Lobby Piano Version',
      artist: 'Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633698059.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'Time is a Place - Lobby Piano Version',
      artist: 'Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633699892.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'Faye\'s Theme - Lobby Piano Version',
      artist: 'Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633699899.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'Lullaby from a Star - Lobby Piano Version',
      artist: 'Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633699893.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'To Realize (Quintessence) - Lobby Piano Version',
      artist: 'Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633699900.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'Envy (Quintessence) - Lobby Piano Version',
      artist: 'Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633699894.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'Kaire\'s Theme (Quintessence) - Lobby Piano Version',
      artist: 'Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633698060.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'To the Moon Lofi Medley',
      artist: 'Kan R. Gao / Sunmin Kim',
      url: 'http://music.163.com/song/media/outer/url?id=2633698063.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'Finding Paradise Lofi Medley',
      artist: 'Ferdk / Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633699896.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'Impostor Factory Lofi Medley',
      artist: 'Ferdk / Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633699901.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'Neil and Eva Lofi Medley',
      artist: 'Ferdk / Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633698057.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'World in a Memory',
      artist: 'Kan R. Gao / Pealeaf',
      url: 'http://music.163.com/song/media/outer/url?id=2633698064.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'I Still Remember Everything',
      artist: 'Kan R. Gao',
      url: 'http://music.163.com/song/media/outer/url?id=2633699897.mp3',
      cover: 'https://p1.music.126.net/q7j2CUBo6u-ivxzkjjaf1w==/109951170017498007.jpg'
    },
    {
      name: 'Everything\'s Alright (Bonus Version)',
      artist: 'Kan R. Gao / Laura Shigihara',
      url: 'http://music.163.com/song/media/outer/url?id=454966468.mp3',
      cover: 'https://p2.music.126.net/0AYWra9rCzgeprGp6OUyUw==/868614185993997.jpg'
    },
    {
      name: 'Opus - ending',
      artist: '坂本龍一',
      url: 'http://music.163.com/song/media/outer/url?id=2610262431.mp3',
      cover: 'https://p2.music.126.net/YUFj5W_FSTK8euT5xWGr7A==/109951169805864161.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  //   ********挂件组件相关********
  // ----> 评论互动 可同时开启多个支持 WALINE VALINE GISCUS CUSDIS UTTERRANCES GITALK

  COMMENT_HIDE_SINGLE_TAB:
    process.env.NEXT_PUBLIC_COMMENT_HIDE_SINGLE_TAB || false, // Whether hide the tab when there's no tabs. 只有一个评论组件时是否隐藏切换组件的标签页

  // artalk 评论插件
  COMMENT_ARTALK_SERVER: process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '', // ArtalkServert后端地址 https://artalk.js.org/guide/deploy.html
  COMMENT_ARTALK_JS:
    process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS ||
    'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.js', // ArtalkServert js cdn
  COMMENT_ARTALK_CSS:
    process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS ||
    'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.css', // ArtalkServert css cdn

  // twikoo
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || 'https://my-twikoo-phi-ten.vercel.app', // TWIKOO后端地址 腾讯云环境填envId；Vercel环境填域名，教程：https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE:
    process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, // 博客列表是否显示评论数
  COMMENT_TWIKOO_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/twikoo@1.6.17/dist/twikoo.all.min.js', // twikoo客户端cdn

  // utterance
  COMMENT_UTTERRANCES_REPO:
    process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // 你的代码仓库名， 例如我是 'tangly1024/NotionNext'； 更多文档参考 https://utteranc.es/

  // giscus @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // 你的Github仓库名 e.g 'tangly1024/NotionNext'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // 你的Github Repo ID e.g ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_CATEGORY_ID:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // 你的Github Discussions 內的 Category ID ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_MAPPING:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // 你的Github Discussions 使用哪種方式來標定文章, 預設 'pathname'
  COMMENT_GISCUS_REACTIONS_ENABLED:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // 你的 Giscus 是否開啟文章表情符號 '1' 開啟 "0" 關閉 預設開啟
  COMMENT_GISCUS_EMIT_METADATA:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // 你的 Giscus 是否提取 Metadata '1' 開啟 '0' 關閉 預設關閉
  COMMENT_GISCUS_INPUT_POSITION:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // 你的 Giscus 發表留言位置 'bottom' 尾部 'top' 頂部, 預設 'bottom'
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // 你的 Giscus 語言 e.g 'en', 'zh-TW', 'zh-CN', 預設 'en'
  COMMENT_GISCUS_LOADING:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // 你的 Giscus 載入是否漸進式載入, 預設 'lazy'
  COMMENT_GISCUS_CROSSORIGIN:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // 你的 Giscus 可以跨網域, 預設 'anonymous'

  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '', // data-app-id 36位 see https://cusdis.com/
  COMMENT_CUSDIS_HOST:
    process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC:
    process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC || '/js/cusdis.es.js', // change this if you're using self-hosted version

  // gitalk评论插件 更多参考 https://gitalk.github.io/
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // 你的Github仓库名，例如 'NotionNext'
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // 你的用户名 e.g tangly1024
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // 管理员用户名、一般是自己 e.g 'tangly1024'
  COMMENT_GITALK_CLIENT_ID:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // e.g 20位ID ， 在gitalk后台获取
  COMMENT_GITALK_CLIENT_SECRET:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // e.g 40位ID， 在gitalk后台获取
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // 类似facebook的无干扰模式
  COMMENT_GITALK_JS_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // gitalk客户端 js cdn
  COMMENT_GITALK_CSS_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // gitalk客户端 css cdn

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // gitter聊天室 see https://gitter.im/ 不需要则留空
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN:
    process.env.NEXT_PUBLIC_VALINE_CDN ||
    'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html 或 https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
  COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || '',
  COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', // 该配置适用于国内自定义域名用户, 海外版本会自动检测(无需手动填写) @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER:
    process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || '抢个沙发吧~', // 可以搭配后台管理评论 https://github.com/DesertsP/Valine-Admin  便于查看评论，以及邮件通知，垃圾评论过滤等功能

  COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '', // 请配置完整的Waline评论地址 例如 hhttps://preview-waline.tangly1024.com @see https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false, // 最新评论

  // 此评论系统基于WebMention，细节可参考https://webmention.io
  // 它是一个基于IndieWeb理念的开放式评论系统，下方COMMENT_WEBMENTION包含的属性皆需配置：
  // ENABLE: 是否开启
  // AUTH: Webmention使用的IndieLogin，可使用Twitter或Github个人页面连结
  // HOSTNAME: Webmention绑定之网域，通常即为本站网址
  // TWITTER_USERNAME: 评论显示区域需要的资讯
  // TOKEN: Webmention的API token
  COMMENT_WEBMENTION_ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false,
  COMMENT_WEBMENTION_AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
  COMMENT_WEBMENTION_HOSTNAME:
    process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
  COMMENT_WEBMENTION_TWITTER_USERNAME:
    process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
  COMMENT_WEBMENTION_TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || '',

  // <---- 评论插件

  // ----> 站点统计
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // vercel自带的统计 https://vercel.com/docs/concepts/analytics/quickstart https://github.com/tangly1024/NotionNext/issues/897
  ANALYTICS_BUSUANZI_ENABLE:
    process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // 展示网站阅读量、访问数 see http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // e.g 只需要填写百度统计的id，[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // 只需要填写站长统计的id, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // 谷歌Analytics的id e.g: G-XXXXXXXXXX

  // 51la 站点统计 https://www.51.la/
  ANALYTICS_51LA_ID: process.env.NEXT_PUBLIC_ANALYTICS_51LA_ID || '', // id，在51la后台获取 参阅 https://docs.tangly1024.com/article/notion-next-51-la
  ANALYTICS_51LA_CK: process.env.NEXT_PUBLIC_ANALYTICS_51LA_CK || '', // ck，在51la后台获取

  // Matomo 网站统计
  MATOMO_HOST_URL: process.env.NEXT_PUBLIC_MATOMO_HOST_URL || '', // Matomo服务器地址，不带斜杠
  MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '', // Matomo网站ID
  // ACKEE网站访客统计工具
  ANALYTICS_ACKEE_TRACKER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.tangly1024.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.tangly1024.com , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  SEO_GOOGLE_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  SEO_BAIDU_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  // 微软 Clarity 站点分析
  CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || null, // 只需要复制Clarity脚本中的ID部分，ID是一个十位的英文数字组合

  // <---- 站点统计

  // START---->营收相关

  // 谷歌广告
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // 谷歌广告ID e.g ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // 谷歌广告ID测试模式，这种模式获取假的测试广告，用于开发 https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '3806269138', // Google AdScene>广告>按单元广告>新建文章内嵌广告 粘贴html代码中的data-ad-slot值
  ADSENSE_GOOGLE_SLOT_FLOW:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '1510444138', // Google AdScene>广告>按单元广告>新建信息流广告
  ADSENSE_GOOGLE_SLOT_NATIVE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '4980048999', // Google AdScene>广告>按单元广告>新建原生广告
  ADSENSE_GOOGLE_SLOT_AUTO:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '8807314373', // Google AdScene>广告>按单元广告>新建展示广告 （自动广告）

  // 万维广告
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // https://wwads.cn/ 创建您的万维广告单元ID
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false, // 是否开启WWADS广告屏蔽插件检测,开启后会在广告位上以文字提示 @see https://github.com/bytegravity/whitelist-wwads

  // END<----营收相关

  // 自定义配置notion数据库字段名
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // 文章类型，
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // 当type文章类型与此值相同时，为博文。
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // 当type文章类型与此值相同时，为单页。
    type_notice:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // 当type文章类型与此值相同时，为公告。
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // 当type文章类型与此值相同时，为菜单。
    type_sub_menu:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // 当type文章类型与此值相同时，为子菜单。
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // 文章标题
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // 当status状态值与此相同时为发布，可以为中文
    status_invisible:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // 当status状态值与此相同时为隐藏发布，可以为中文 ， 除此之外其他页面状态不会显示在博客上
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon',
    ext: process.env.NEXT_PUBLIC_NOTION_PROPERTY_EXT || 'ext' // 扩展字段，存放json-string，用于复杂业务
  },

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅功能
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // 开启mailichimp邮件订阅 客户列表ID ，具体使用方法参阅文档
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // 开启mailichimp邮件订阅 APIkey

  // ANIMATE.css 动画
  ANIMATE_CSS_URL:
    process.env.NEXT_PUBLIC_ANIMATE_CSS_URL ||
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', // 动画CDN

  // 网站图片
  IMG_LAZY_LOAD_PLACEHOLDER:
    process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER ||
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // 懒加载占位图片地址，支持base64或url
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // 此配置已失效，请勿使用；AMAZON方案不再支持，仅支持Notion方案。 ['Notion','AMAZON'] 站点图片前缀 默认 Notion:(https://notion.so/images/xx) ， AMAZON(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // 文章图片是否自动添加阴影
  IMG_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMG_COMPRESS_WIDTH || 800, // Notion图片压缩宽度

  // 作废配置
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // 作者头像，被notion中的ICON覆盖。若无ICON则取public目录下的avatar.png
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'Loading...', // 站点标题 ，被notion中的页面标题覆盖；此处请勿留空白，否则服务器无法编译
  HOME_BANNER_IMAGE:
    process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // 首页背景大图, 会被notion中的封面图覆盖，若无封面图则会使用代码中的 /public/bg_image.jpg 文件
  DESCRIPTION:
    process.env.NEXT_PUBLIC_DESCRIPTION || 'Loading...', // 站点描述，被notion中的页面描述覆盖

  // 开发相关
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // 是否显示调试按钮
  ENABLE_CACHE:
    process.env.ENABLE_CACHE ||
    process.env.npm_lifecycle_event === 'build' ||
    process.env.npm_lifecycle_event === 'export', // 在打包过程中默认开启缓存，开发或运行时开启此功能意义不大。
  isProd: process.env.VERCEL_ENV === 'production' || process.env.EXPORT, // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  BUNDLE_ANALYZER: process.env.ANALYZE === 'true' || false, // 是否展示编译依赖内容与大小
  VERSION: (() => {
    try {
      // 优先使用环境变量，否则从package.json中获取版本号
      return (
        process.env.NEXT_PUBLIC_VERSION || require('./package.json').version
      )
    } catch (error) {
      console.warn('Failed to load package.json version:', error)
      return '1.0.0' // 缺省版本号
    }
  })()
}

module.exports = BLOG
