//2016.06.14

# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.

//*==========主页==========*//
//user_pref("browser.startup.homepage", "chrome://userchromejs/content/myNewTab/index.html");//首页
//user_pref("browser.newtab.url", "chrome://userchromejs/content/myNewTab/index.html");//本地Html
user_pref("browser.startup.homepage", "about:newtab");//首頁
user_pref("browser.newtabpage.columns", 6);//新标签页列数
user_pref("browser.newtabpage.rows", 3);//新标签页行数
//标签页固定的网站
user_pref("browser.newtabpage.pinned", "[{\"url\":\"http://bbs.kafan.cn/forum-215-1.html\",\"title\":\"Kafan\"},{\"url\":\"https://www.youtube.com/\",\"title\":\"Youtube\"},{\"url\":\"http://www.cnn.com/\",\"title\":\"CNN\"},{\"url\":\"http://www.economist.com/\",\"title\":\"Economist\"},{\"url\":\"http://twitter.com/\",\"title\":\"Twitter\"},{\"url\":\"http://www.facebook.com/\",\"title\":\"Facebook\"},{\"url\":\"http://www.chaojibiaoge.com/\",\"title\":\"超级表格\"},{\"url\":\"http://www.cnbeta.com/\",\"title\":\"cnBeta\"},{\"url\":\"http://www.woshipm.com/\",\"title\":\"pm\"},{\"url\":\"http://www.douban.com/\",\"title\":\"Douban\"},{\"url\":\"http://www.zhihu.com/explore\",\"title\":\" Zhihu\"},{\"url\":\"http://www.guokr.com/\",\"title\":\"Guokr\"},{\"url\":\"https://www.wikipedia.org/\",\"title\":\"Wikipedia\"},{\"url\":\"http://www.linkedin.com/today/?trk=nav_responsive_sub_nav_pulse\",\"title\":\"Pulse\"},{\"url\":\"http://www.shanbay.com/\",\"title\":\"Shanbay\"},{\"url\":\"http://music.163.com/\",\"title\":\"Music\"},{\"url\":\"http://email.163.com/\",\"title\":\"Mail\"},{\"url\":\"https://leanote.com/note/55dd7cc953b26f7350000019\",\"title\":\"Leanote\"}]");

//*==========选项卡里的设置==========*//
user_pref("signon.rememberSignons", false);//不保存密码
//字体硬件加速开启
user_pref("gfx.direct2d.disabled", true);//在 Windows 平台上强制使用 D2D 加速页面内容渲染
//字體語言編碼
user_pref("intl.charset.detector", "universal_charset_detector");//自動選擇
user_pref("font.name.serif.zh-CN", "Arial");//衬線字體
user_pref("font.name.sans-serif.zh-CN", "Arial");//無衬線字體
user_pref("font.name.monospace.zh-CN", "Arial");//等寬字體

//关闭安全检测健康中心类
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("datareporting.healthreport.service.firstRun", true);
user_pref("datareporting.healthreport.uploadEnabled", false);

//*==========標籤相關==========*//
user_pref("browser.tabs.animate", false);//關閉标签页动画
user_pref("browser.tabs.insertRelatedAfterCurrent", true);//紧邻当前标签打开相关标签
user_pref("browser.newtabpage.introShown", true);//去除新版newtab提示
user_pref("browser.tabs.warnOnClose", false);//關閉多個標籤時不提示
user_pref("browser.tabs.warnOnCloseOtherTabs", false);//關閉其它標籤時不提示

//*==========書籤相關==========*//
user_pref("browser.bookmarks.autoExportHTML", true);//關閉Firefox时自動生成HTML書籤備份
user_pref("browser.bookmarks.max_backups", 0);//最大备份数目
user_pref("browser.places.smartBookmarksVersion", -1);//禁用智能书签

//*==========下載相關==========*//
user_pref("browser.download.useDownloadDir", false);//下载时每次訊問我要存到何處
user_pref("browser.safebrowsing.downloads.enabled", false);//解決下載卡在最後一秒的問題
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描

//*==========網路相關==========*//
//HTTPS不允许混合内容，以下两条参数用以禁用此特性
user_pref("security.mixed_content.block_active_content", false);
user_pref("security.mixed_content.block_display_content", false);
//存储: 开启内存盘机制
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);

//*==========平滑滾動==========*//
user_pref("general.smoothScroll.durationToIntervalRatio", 500);
user_pref("mousewheel.min_line_scroll_amount", 35);

//*==========插件相關==========*//
user_pref("plugins.click_to_play", false);//关闭点击才运行插件
user_pref("dom.ipc.plugins.unloadASAP", true);//当插件空闲时自动关闭进程
user_pref("plugins.hide_infobar_for_missing_plugin", true);//隐藏信息栏缺失插件消息提醒
user_pref("plugins.hide_infobar_for_outdated_plugin", true);//过期插件不提示
user_pref("plugins.hide_infobar_for_blocked_plugin", true);//插件屏蔽选择不提示
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true);//禁用保护模式
user_pref("dom.ipc.plugins.sandbox-level.flash", 0);//64位关闭沙箱
user_pref("layers.async-pan-zoom.enabled",true);//开启异步平移/缩放
user_pref("dom.ipc.plugins.asyncInit.enabled", true);//开启插件异步加载
user_pref("dom.ipc.plugins.asyncdrawing.enabled", true);//开启插件异步绘制

//*==========附加組件==========*//
user_pref("extensions.ui.lastCategory", "addons://list/extension");//默认打开“扩展”项

//*==========FX其它类==========*//
user_pref("general.skins.selectedSkin", "simplewhite");//使用SimpleWhite主題
user_pref("extensions.lastSelectedSkin", "simplewhite");//使用SimpleWhite主題
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("general.warnOnAboutConfig", false);//About:Config警告
user_pref("view_source.editor.external", true);//页面源代码——使用外部編輯器查看
user_pref("privacy.popups.showBrowserMessage", false);//弹窗不提示消息
user_pref("extensions.autoDisableScopes", 0);//第一次运行不禁止任何扩展
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不检测版本，不弹欢迎页面
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
user_pref("extensions.blocklist.enabled", false);//关闭启动时插件检查窗口
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("network.standard-url.escape-utf8", false);//是否转化中文URL为utf-8格式，默认true
user_pref("browser.backspace_action", 2);//禁止Backspace键返回上一页
user_pref("browser.sessionstore.resume_from_crash", false);//关闭Firefox会话恢复功能
user_pref("browser.pagethumbnails.capturing_disabled", true);//禁用Firefox的thumbnails
user_pref("xpinstall.signatures.required", false);//去除扩展签名验证
user_pref("browser.sessionstore.max_tabs_undo", 10);//最近撤销标签历史最大数
user_pref("browser.search.openintab", true);//新标签打开搜索栏
user_pref("browser.search.context.loadInBackground", true);//后台打开搜索

//*==========扩展设置==========*//
//adblockplus
user_pref("extensions.adblockplus.patternsbackups", 0);
user_pref("extensions.adblockplus.frameobjects", false);//在Java和Flash上显示标签 - 否
user_pref("extensions.adblockplus.subscriptions_antiadblockurl", "https://easylist-downloads.adblockplus.org/easyprivacy.txt");//原反-反ADP列表
//-非侵入式广告地址換成个人ABP规则
user_pref("extensions.adblockplus.subscriptions_exceptionscheckbox", true);//非入侵式广告勾选框
user_pref("extensions.adblockplus.subscriptions_exceptionsurl", "https://github.com/dupontjoy/customization/raw/master/Rules/ABP/Floating-n-Porn-Ads-Filter.txt");//原非入侵式广告订阅网址

//Autoproxy
user_pref("extensions.autoproxy.customProxy", "Shadowsocks;;1080;socks$Lantern;;8787;$Psiphon;;8080;$GoAgent;;8087;$Free%20Gate;;8580;");
user_pref("extensions.autoproxy.patternsbackups", 0);
user_pref("extensions.autoproxy.defaultstatusbaraction", 0);//点击图标时-快捷菜单
user_pref("extensions.autoproxy.defaulttoolbaraction", 0);//点击图标时-快捷菜单


//LastPass
user_pref("extensions.lastpass.hidecontextmenu", true);
user_pref("extensions.lastpass.showHomepageAfterLogin", false);//登入後不轉到密码库
user_pref("extensions.lastpass.0a148091163b8a7de3368af449db2947c700bea1552b01964d4ae55f930562e0.toplevelmatchingsites", true);//将匹配网站移动到顶部菜单
user_pref("extensions.lastpass.loginpws", "");//不保存密码

//FlashGot
user_pref("flashgot.hide-all", true);
user_pref("flashgot.hide-buildGallery", true);
user_pref("flashgot.hide-icons", true);
user_pref("flashgot.hide-it", true);
user_pref("flashgot.hide-media", true);
user_pref("flashgot.hide-options", true);
user_pref("flashgot.hide-sel", true);
user_pref("flashgot.omitCookies", true);//不发送Cookie
user_pref("flashgot.firstRunRedirection", false);//重建配置不弹FlashGot首页

//DownThemAll！
user_pref("extensions.dta.conflictresolution", 0);//文檔已存在時自動重命名
user_pref("extensions.dta.alertbox", 0);//下載完成後對話視窗提示
user_pref("extensions.dta.closedta", true);//辯識並列出Flash影片
user_pref("extensions.dta.ctxmenu", "0,0,0");//不顯示右鍵菜單
user_pref("extensions.dta.removecanceled", true);//從清單中移除中斷及錯誤的下載
user_pref("extensions.dta.confirmremove", false);//移除下載前不提示
user_pref("extensions.dta.version", "102.0.18.1-signed");//重建配置不弹歡迎頁

//Greasemonkey
user_pref("extensions.greasemonkey.stats.prompted", true);//不弹改进建议提示
user_pref("extensions.greasemonkey.installDelay", 0);//安裝時的倒計時

//Stylish
user_pref("extensions.stylish.firstRun", 3);//重建配置不弹歡迎頁
user_pref("extensions.stylish.editorWindowMode", true);//窗口模式

//Auto Unload Tab
user_pref("extensions.autounloadtab.bypass_cache_after_minutes", 1);//xx分鐘後自動跳過緩存
user_pref("extensions.autounloadtab.load_background_tabs", 3);//後台標籤載入方式: One by One
user_pref("extensions.autounloadtab.show_tab_menu", false);//不展示標籤右鍵菜單
user_pref("extensions.autounloadtab.timeoutInMinutes", 120);//xx分鐘後自動卸載標籤
user_pref("extensions.autounloadtab.closeTabAfterMinutes", 60);//xx分鐘後自動關閉未載入/已卸載標籤

//iMacros
user_pref("extensions.imacros.store-in-profile", true);//存储到Profile文件夹下
user_pref("extensions.imacros.delay", 1000);//播放速度中等

//Pocket(Readitlater)
user_pref("extensions.isreaditlater.open", "tab");//新标签打开项目

//FireIE
user_pref("extensions.fireie.autoSwitchOnRuleMiss", "fx");//未匹配规则时切换到"Firefox"引擎
user_pref("extensions.fireie.hideUrlBarButton", true);//隐藏地址栏图标
user_pref("extensions.fireie.showSiteFavicon", false);//使用IE引擎图标
user_pref("extensions.fireie.compatMode", "ie11edge");//IE11边缘模式
user_pref("extensions.fireie.gpuRendering", true);//启用GPU渲染

//VimFx
user_pref("extensions.VimFx.prevent_autofocus", true);//阻止自动聚焦输入框
user_pref("extensions.VimFx.ignore_keyboard_layout", true);//忽略键盘布局

//*==========脚本设置==========*//
//rebuild_userChrome脚本管理器
user_pref("userChromeJS.rebuildUI.menues", "addMenu-rebuild,anobtn_set,toolsbar_KeyChanger_rebuild,redirector-icon,usercssloader_Tools_Menu");
user_pref("userChrome.rebuildUI.menues", "addMenu-rebuild,anobtn_set,toolsbar_KeyChanger_rebuild,redirector-icon,usercssloader_Tools_Menu");//W版无重启

//UC管理器取消延迟加载
user_pref("userChrome.EXPERIMENT", true);

//UserCSSLoader引导器
user_pref("UserCSSLoader.innereditor", false);//使用外部编辑器
user_pref("UserCSSLoader.showtoolbutton", false);//显示为菜单

//InspectElementModY
user_pref("userChromeJS.InspectElement.contentType", 2);//查看页面:Dom Inspector
user_pref("userChromeJS.InspectElement.mainWinType", 2);//查看窗口:Dom Inspector

//AddmenuPlus
user_pref("addMenu.FILE_PATH", "local\_addMenu.js");//配置路径

//GrabScroll
user_pref("grabScroll.button", 1);//使用GrabScroll抓取的键位：中键
user_pref("grabScroll.clickable", false);//能够在链接上使用GrabScroll

//newDownloadPlus
//主界面
user_pref("userChromeJS.downloadPlus.downloadSound_Play", true);//下載完成提示音
user_pref("userChromeJS.downloadPlus.downloadFileSize", true);//精確顯示文件大小
user_pref("userChromeJS.downloadPlus.autoClose_blankTab", true);//自動關閉空白標籤
user_pref("userChromeJS.downloadPlus.download_speed", true);//下載面皮顯示下載速度
//下載界面
user_pref("userChromeJS.downloadPlus.download_dialog_saveas", true);//另存爲
user_pref("userChromeJS.downloadPlus.download_dialog_saveTo", true);//保存到
user_pref("userChromeJS.downloadPlus.download_dialog_saveTo_suffix", 1);//保存到——後綴樣式
user_pref("userChromeJS.downloadPlus.download_dialog_showCompleteURL", true);//双擊複製完整地址
user_pref("userChromeJS.downloadPlus.download_dialog_doubleclicksaveL", false);//双击保存執行下載
user_pref("userChromeJS.downloadPlus.download_dialog_doubleclickanyW", false);//双击任意地方執行下載
//其他
user_pref("userChromeJS.downloadPlus.new_Download", true);//新建下載
user_pref("userChromeJS.downloadPlus.new_Download_popups", true);//新建下載——是否彈窗
user_pref("userChromeJS.downloadPlus.downloadsPanel_removeFile", true);//從硬盤刪除
user_pref("userChromeJS.downloadPlus.download_checksum", true);//Hash計算
user_pref("userChromeJS.downloadPlus.save_And_Open", true);//保存并打開
user_pref("userChromeJS.downloadPlus.save_And_Open_RorL", 1);//保存并打開——打開文件
user_pref("userChromeJS.downloadPlus.download_dialog_changeName", true);//下載改名
user_pref("userChromeJS.downloadPlus.download_dialog_changeName_encodingConvert", true);//下載改名——是否開啟下拉菜單
user_pref("userChromeJS.downloadPlus.download_dialog_changeName_locking", true);//下載改名——锁定保存文件按钮

//FeiRuoNet
user_pref("userChromeJS.FeiRuoNet.EnableRefChanger", true);//Refer切換,破解反盗链
user_pref("userChromeJS.FeiRuoNet.EnableUAChanger", true);//UA切換
user_pref("userChromeJS.FeiRuoNet.ModifyHeader", true);//HTTP头信息
user_pref("userChromeJS.FeiRuoNet.UrlbarSafetyLevel", false);//HTTPS等級高亮
user_pref("userChromeJS.FeiRuoNet.EnableProxyByError", false);//网络错误时代理
