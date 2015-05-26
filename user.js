
//2015.05.26 15:00  精簡參數
//2015.05.23 10:00  新增FeiruoMouse參數
//2015.05.22 21:00  新增newDownloadPlus參數
//2015.05.21 12:00  加入一些參數，分組整理
//2015.05.18 11:00  關閉WebRTC
//2015.05.14 20:00  加入AutoClick設置
//2015.04.16 13:00  加入新的平滑設置
//2015.04.14 17:00  使用SimpleWhite主題
//2015.04.05 09:00  調整UC管理器菜單
//2015.04.04 08:00  加入江3省电版火狐
//2015.03.20 18:00  調整Flashgot和DTA设置
//2015.03.03 10:00  加入阻止此页面创建更多对话框
//2015.02.17 18:00  加入DTA設置
//2015.01.23 00:00  加入DNT，保存位置
//2015.01.18 00:00  加入鼠標滾動設置，NoScript參數

# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.

/*==========选项卡里的设置==========*/
//user_pref("browser.shell.checkDefaultBrowser", true);//启动时检查是否为默认浏览器
user_pref("browser.preferences.inContent", false);//選項 使用老版彈窗
user_pref("signon.rememberSignons", false);//不保存密码
user_pref("browser.download.useDownloadDir", false);//下載每次訊問我要存到何處
user_pref("security.OCSP.enabled", 0); //禁用OCSP安全驗證
//硬件加速
user_pref("gfx.direct2d.disabled", true);//禁用字体硬件加速，开启后标题会模糊，字体显示不一致
//语言区域设置
user_pref("intl.accept_languages","unicode,zh-CN,zh-cn,zh,zh-hk,zh-sg,zh-tw,en-us,en,en-gb,ja");
user_pref("intl.charset.detector", "universal_charset_detector");
user_pref("intl.charsetmenu.browser.cache", "UTF-8, windows-1252, EUC-JP, gbk, GB2312");
//拼写检查
user_pref("spellchecker.dictionary", "en-US");//字典
user_pref("layout.spellcheckDefault", 2);//开启单行和全文的拼写检查

/*==========標籤相關==========*/
user_pref("browser.tabs.insertRelatedAfterCurrent", true);//紧邻当前标签打开相关标签
user_pref("browser.tabs.animate", false);//關閉标签页动画
user_pref("browser.tabs.warnOnClose", false);//關閉時不提示

/*==========書籤相關==========*/
user_pref("browser.bookmarks.autoExportHTML", true);//书签生成html
user_pref("browser.bookmarks.max_backups", 0);//最大备份数目
user_pref("browser.places.smartBookmarksVersion", -1);//禁用智能书签

/*==========網路相關==========*/
user_pref("network.proxy.socks_remote_dns", true);//使用socks代理dns解析，据说可以解决dns污染或DNS劫持。前提是你有socks代理软件。

/*==========平滑滾動==========*/
pref("general.smoothScroll.mouseWheel.durationMaxMS", 150);
pref("general.smoothScroll.mouseWheel.durationMinMS", 150);
pref("mousewheel.acceleration.factor", 15);
pref("mousewheel.acceleration.start", 3);
pref("mousewheel.default.delta_multiplier_y", 160);

/*==========字體渲染==========*/
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);//[cleartype 级别，0 到 100 ，100 最大]
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);//渲染像素结构,0 = flat, 1 = RGB, 2 = BGR 液晶就用RGB
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);//字體渲染的模式，設定中最重要的項目: 1= Aliased, 2= GDI Classic, 3 = GDI Natural Widths, 4 = Natural, 5 = Natural Symmetric
user_pref("layout.paint_rects_separately", true);//重启浏览器，完美解决。。而且性能比关硬件加速要好很多。

/*==========插件相關==========*/
user_pref("plugins.click_to_play", false);//关闭点击才运行插件
user_pref("dom.ipc.plugins.unloadASAP", true);//当插件空闲时自动关闭进程
user_pref("plugins.hide_infobar_for_missing_plugin", true);//隐藏信息栏缺失插件消息提醒
user_pref("plugins.hide_infobar_for_outdated_plugin", true);//过期插件不提示
user_pref("plugins.hide_infobar_for_blocked_plugin", true);//插件屏蔽选择不提示
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true);//直接用火狐禁用flash保护模式
user_pref("microsoft.CLR.auto_install", false);//好像是和micro相关的东西自动安装

/*==========关闭安全检测健康中心类==========*/
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);//自带下载出问题时，有人推荐禁用此参数

/*==========主页==========*/
user_pref("browser.startup.homepage", "chrome://userchromejs/content/myNewTab/index.html");//首页
user_pref("browser.newtab.url", "chrome://userchromejs/content/myNewTab/index.html");//本地Html

/*==========附加組件==========*/
user_pref("extensions.getAddons.cache.enabled", false);//阻止每天更新附加组件元数据

/*==========FX其它类==========*/
user_pref("general.skins.selectedSkin", "simplewhite");//使用SimpleWhite主題
user_pref("general.warnOnAboutConfig", false);//AboutConfig警告
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("privacy.popups.showBrowserMessage", false);//弹窗不提示消息
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描
user_pref("extensions.autoDisableScopes", 0);//第一次运行不禁止任何扩展
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不检测版本，不弹欢迎页面
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
user_pref("extensions.blocklist.enabled", false);//关闭启动时插件检查窗口
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("browser.taskbar.lists.enabled", false);//开启jump list？默认true
user_pref("browser.pagethumbnails.capturing_disabled", true);//禁止截图最新访问页面的缩略图
user_pref("security.tls.version.fallback-limit", 0);//SSLv3 error messages
user_pref("security.tls.version.min", 0);//SSLv3 error messages
user_pref("network.http.spdy.enabled.http2draft", false);//目前浏览器默认还没有启用 HTTP/2 的支持。所以暫時關閉此項。
user_pref("media.peerconnection.enabled", false);//關閉WebRTC，因爲webrtc的漏洞可以获取真实ip（FQ時不安全）

/*==========扩展设置==========*/
//adblockplus
user_pref("extensions.adblockplus.hideContributeButton", true);//隐藏助力abp项
user_pref("extensions.adblockplus.patternsbackups", 0);
user_pref("extensions.adblockplus.subscriptions_exceptionscheckbox", false);//非入侵式广告
user_pref("extensions.adblockplus.subscriptions_exceptionsurl", "");//删除非入侵式广告订阅网址
user_pref("extensions.adblockplus.subscriptions_antiadblockurl", "");//去掉自带的反-反ADP列表
user_pref("extensions.adblockplus.frameobjects", false);//在Java和Flash上显示标签 - 否

//LastPass
user_pref("extensions.lastpass.hidecontextmenu", true);
user_pref("extensions.lastpass.showHomepageAfterLogin", false);//不登入密码库
user_pref("extensions.lastpass.0a148091163b8a7de3368af449db2947c700bea1552b01964d4ae55f930562e0.toplevelmatchingsites", true);//将匹配网站移动到顶部菜单
user_pref("extensions.lastpass.loginpws", "");//不保存密码
user_pref("extensions.lastpass.loginusers", "dupontjoy%40163.com");//用戶名

//FlashGot
user_pref("flashgot.hide-all", true);
user_pref("flashgot.hide-buildGallery", true);
user_pref("flashgot.hide-icons", true);
user_pref("flashgot.hide-it", true);
user_pref("flashgot.hide-media", true);
user_pref("flashgot.hide-options", true);
user_pref("flashgot.hide-sel", true);
user_pref("flashgot.includeImages", true);//包含当前页面的图片
user_pref("flashgot.autoStart", false);//取消 自动下载已监视的文件（開啟後所有下載自動調用DTA）
user_pref("flashgot.interceptAll", true);//接管所有下载
user_pref("flashgot.logEnabled", false);//禁用日志
user_pref("flashgot.firstRunRedirection", false);//重建配置不弹FlashGot首页

//Greasemonkey
user_pref("extensions.greasemonkey.stats.prompted", true);//不弹改进建议提示
user_pref("extensions.greasemonkey.installDelay", 0);//安裝時的倒計時

//Stylish
user_pref("extensions.stylish.firstRun", 3);//重建配置不弹首页

/*==========脚本设置==========*/
//rebuild_userChrome脚本管理器
user_pref("userChromeJS.rebuildUI.menues", "more-tools-menu");

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

//ShowFlagS
user_pref("userChromeJS.showFlagS.RefChanger", true);//開啟圖片反盜鏈
user_pref("userChromeJS.showFlagS.UAChanger", true);//開啟UA切換
user_pref("userChromeJS.showFlagS.libIconPath", "Local\\ShowFlagS\\countryflags.js");//國旗圖標庫
user_pref("userChromeJS.showFlagS.LocalFlags", "Local\\ShowFlagS\\LocalFlags\\");//本地PNG圖標文件夾

//AutoClick
user_pref("userChromeJS.AutoClick.enable", false);//默認關閉
user_pref("userChromeJS.AutoClick.BUTTON_TYPE", 2);//顯示为菜單
user_pref("userChromeJS.AutoClick.hovering_time", 800);//悬停xx毫秒開始點擊

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
user_pref("userChromeJS.downloadPlus.download_dialog_changeName_locking", true);//下載改名——鎖定保存文件按鈕

//FeiruoMouse
user_pref("userChromeJS.FeiRuoMouse.GesCustom", "1|%u8F6C%u5230%u9875%u9762%u9876%u90E8|U|||;;1|%u8F6C%u5230%u9875%u9762%u5E95%u90E8|D|||;;1|%u540E%u9000/%u4E0A%u4E00%u9875|L|||;;1|%u524D%u8FDB/%u4E0B%u4E00%u9875|R|||");//鼠標手勢
