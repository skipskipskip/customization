# 2014.10.16

# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.

/*==========FX29 Panel面板参数==========*/
//user_pref("browser.uiCustomization.state", "");

/*==========选项卡里的设置==========*/
user_pref("browser.shell.checkDefaultBrowser", true);//启动时检查是否为默认浏览器
user_pref("browser.download.useDownloadDir", false);//下载自动上次位置
user_pref("browser.download.lastDir.savePerSite",true);//火狐7以后，下载时根据不同的站点上次保存的路径，如D:\等
user_pref("signon.rememberSignons", false);//不保存密码
user_pref("general.autoScroll", false);//关闭自动滚屏（中键）
user_pref("general.smoothScroll",false);//禁用平滑滚动，多图会卡顿 
//字体设置
user_pref("font.minimum-size.zh-CN", 12);//最小字体大小
user_pref("font.size.variable.zh-CN", 16);//比例字体大小
user_pref("font.size.fixed.zh-CN", 16);//等宽字体大小
user_pref("font.minimum-size.zh-TW", 12);//最小字体大小
user_pref("font.size.variable.zh-TW", 16);//比例字体大小
user_pref("font.size.fixed.zh-TW", 16);//等宽字体大小

//语言区域设置
user_pref("intl.accept_languages","zh-CN,zh-cn,zh,zh-hk,zh-sg,zh-tw,en-us,en,en-gb,ja");
user_pref("intl.charset.detector", "universal_charset_detector");
user_pref("intl.charsetmenu.browser.cache", "UTF-8, windows-1252, EUC-JP, gbk");
//禁用硬件加速
user_pref("gfx.direct2d.disabled", true);//禁止使用D2D渲染网页文字内容
user_pref("layers.acceleration.disabled", true);//禁用硬件加速，关闭网页图层绘制的gpu加速
//強制开啓硬件加速
//user_pref("webgl.force-enabled", true);//强制启用 WebGL
//user_pref("webgl.msaa-force", true);//强制启用 WebGL 的抗锯齿
//user_pref("layers.acceleration.force-enabled", true);//强制启用硬件渲染（无视黑名单/白名单）
//user_pref("gfx.direct2d.force-enabled", true);//在 Windows 平台上强制使用 D2D 加速页面内容渲染

/*==========标签设置==========*/
user_pref("browser.tabs.closeWindowWithLastTab", false);//关闭最后一个标签页时不关闭窗口
//关闭标签和窗口不提示
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.warnOnQuit", false);

//browser
user_pref("middlemouse.paste", true);//启用中键粘贴
user_pref("extensions.autoDisableScopes", 0);//第一次运行不禁止任何扩展
user_pref("signed.applets.codebase_principal_support", true);//一些网站的下载协议支持
user_pref("browser.bookmarks.autoExportHTML", true);//书签生成html
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("browser.xul.error_pages.expert_bad_cert", true);//自动展开：此连接是不受信任的
user_pref("extensions.blocklist.enabled", false);//关闭启动时插件检查窗口
user_pref("extensions.getAddons.cache.enabled", false);//阻止每天更新附加组件元数据
user_pref("extensions.webservice.discoverURL","http://127.0.0.1");//禁用附加组件建议
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不检测版本，不弹欢迎页面
user_pref("ui.scrollToClick", 1); //更改滚动条的表现,在默认情况下，点击Firefox窗口中滚动条的空的区域只会让你在一个页面中向上或向下查看。按本项修改后，点击滚动条将能够直接让你调转到页面上你想要查看的那点，就等同于将滚动条拖动到那个位置。
user_pref("privacy.popups.showBrowserMessage", false);//弹窗不提示消息
user_pref("browser.sessionstore.interval",36000000); //降低会话保存频率，降低内存消耗
user_pref("view_source.wrap_long_lines", true);//页面源代码--将较长的行自动换行
user_pref("browser.slowStartup.notificationDisabled", true);//启动过慢时底部的提示信息
user_pref("extensions.ui.lastCategory", "addons://list/extension");//打开about:addons时默认打开“扩展”项
//字体渲染
user_pref("layout.paint_rects_separately", true);//重启浏览器，完美解决。。而且性能比关硬件加速要好很多。

/*缓存位置*/
user_pref("browser.cache.disk.parent_directory", "D:\Temp\Cache-FX");
user_pref("browser.cache.offline.parent_directory", "D:\Temp\Cache-FX.offline");
/*书签*/
user_pref("browser.bookmarks.max_backups", 0);//最大备份数目
user_pref("browser.places.smartBookmarksVersion", -1);//禁用智能书签
//关闭安全检测健康中心类
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
//关闭烦人提示
user_pref("security.warn_entering_weak", false);
user_pref("security.warn_viewing_mixed", false);
user_pref("xpinstall.whitelist.required", false);
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
user_pref("browser.syncPromoViewsLeftMap", "{\"bookmarks\":0}");

//plugin
user_pref("plugins.click_to_play", false);//关闭点击才运行插件
user_pref("dom.ipc.plugins.unloadASAP", true);//当插件空闲时自动关闭进程
user_pref("plugins.hide_infobar_for_missing_plugin", true);//隐藏信息栏缺失插件消息提醒
user_pref("plugins.hide_infobar_for_outdated_plugin", true);//过期插件不提示
user_pref("plugins.hide_infobar_for_blocked_plugin", true);//插件屏蔽选择不提示
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);//禁用火狐插件防崩溃功能

/*主页*/
user_pref("browser.startup.homepage", "chrome://userchromejs/content/myNewTab/index.html");//首页
user_pref("browser.newtab.url", "chrome://userchromejs/content/myNewTab/index.html");//本地Html

/*==========扩展设置==========*/
/*adblockplus*/
user_pref("extensions.adblockplus.hideContributeButton", true);//隐藏助力abp项
user_pref("extensions.adblockplus.patternsbackups", 0);
user_pref("extensions.adblockplus.subscriptions_exceptionscheckbox", false);//非入侵式广告
user_pref("extensions.adblockplus.subscriptions_exceptionsurl", "");//删除非入侵式广告订阅网址
user_pref("extensions.adblockplus.subscriptions_antiadblockurl", "");//去掉自带的反-反ADP列表
user_pref("extensions.adblockplus.please_kill_startup_performance", true);//关闭延迟启动
user_pref("extensions.adblockplus.frameobjects", false);//在Java和Flash上显示标签 - 否

/*LastPass*/
user_pref("extensions.lastpass.hidecontextmenu", true);
user_pref("extensions.lastpass.showHomepageAfterLogin", false);//不登入密码库
user_pref("extensions.lastpass.0a148091163b8a7de3368af449db2947c700bea1552b01964d4ae55f930562e0.toplevelmatchingsites", true);//将匹配网站移动到顶部菜单
user_pref("extensions.lastpass.loginpws", "");//不保存密码

/*FlashGot*/
user_pref("flashgot.hide-all", true);
user_pref("flashgot.hide-buildGallery", true);
user_pref("flashgot.hide-icons", true);
user_pref("flashgot.hide-it", true);
user_pref("flashgot.hide-media", true);
user_pref("flashgot.hide-options", true);
user_pref("flashgot.hide-sel", true);
user_pref("flashgot.altClick", false);//禁用 Alt+Click
user_pref("flashgot.includeImages", true);//包含当前页面的图片
user_pref("flashgot.autoStart", false);//取消 自动下载已监视的文件
user_pref("flashgot.interceptAll", false);//取消 接管所有下载
user_pref("flashgot.extensions", "");//取消自带监视.jpg, .mp3, .mpg|无效
user_pref("flashgot.logEnabled", false);//禁用日志
user_pref("flashgot.firstRunRedirection", false);//重建配置不弹FlashGot首页

/*Greasemonkey*/
user_pref("extensions.greasemonkey.stats.prompted", true);//不弹改进建议提示

/*==========脚本设置==========*/
/*SmartProxyforChina代理*/
//user_pref("userChromeJS.SmartProxy.proxyMode", "auto");
//user_pref("userChromeJS.SmartProxy.default_proxy", 6);
//user_pref("userChromeJS.SmartProxy.knownProxy", "Free Gate;127.0.0.1;8580;http$Puff;127.0.0.1;1984;http$ssh -D;127.0.0.1;7070;socks$Toonel;127.0.0.1;8080;http$Tor;127.0.0.1;9050;socks$Shadowsocks;127.0.0.1;1080;http$Goagent;127.0.0.1;8087;http");

/*rebuild_userChrome脚本管理器*/
user_pref("userChromeJS.rebuildUI.menues", "addMenu-rebuild,toolsbar_KeyChanger_rebuild,ucjsMouseGestures,RefererChanger,wordhighlight-toolbar-menuitem,youkuAntiADsMod,uc-movebutton,InspectElement-menuitem,GrabScroll_optionsMenu,redirector-icon,ucjs_UserAgentChanger,usercssloader_Tools_Menu,UserScriptLoader_Tools_Menu,abp-menuitem,gm_general_menu");

/*UserCSSLoader引导器*/
user_pref("UserCSSLoader.innereditor", false);//使用外部编辑器
user_pref("UserCSSLoader.showtoolbutton", false);//显示为菜单

/*UserScriptLoader引导器*/
user_pref("UserScriptLoader.showtoolbutton", false);//显示为菜单

/*InspectElementModY*/
user_pref("userChromeJS.InspectElement.contentType", 2);//查看页面:Dom Inspector
user_pref("userChromeJS.InspectElement.mainWinType", 2);//查看窗口:Dom Inspector

/*userpermissions2*/
//user_pref("permissions.default.script", 3);//禁止第三方脚本

/*AddmenuPlus*/
user_pref("addMenu.FILE_PATH", "local\_addMenu.js");//配置路径

/*GrabScroll*/
user_pref("grabScroll.button", 1);//使用GrabScroll抓取的键位：中键
user_pref("grabScroll.clickable", false);//能够在链接上使用GrabScroll