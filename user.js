
//2015.08.14  ucjsPermission換用黑名單法
//2015.08.07 09:00  去掉網絡流水線設置，開啟後有時會出現不能上外網的問題，只能重啟電腦
//2015.07.28 22:00  精簡少量參數，增加DTA參數
//2015.07.07 21:00  新增禁止「HTTPS不允许混合内容」特性的參數
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
//2015.01.18 00:00  加入鼠標滾動設置，NoScript參數

# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.

/*==========选项卡里的设置==========*/
user_pref("browser.preferences.inContent", false);//選項 使用老版彈窗
user_pref("signon.rememberSignons", false);//不保存密码
user_pref("privacy.donottrackheader.enabled", true);//告訴網站不想被追蹤
user_pref("browser.download.useDownloadDir", false);//每次訊問我要存到何處
user_pref("security.OCSP.enabled", 0); //禁用OCSP安全驗證
//硬件加速
user_pref("layers.acceleration.disabled", false);//选項卡中『可用時開啟硬體加速』
user_pref("webgl.force-enabled", true);//强制启用 WebGL
user_pref("webgl.msaa-force", true);//强制启用 WebGL 的抗锯齿
user_pref("layers.acceleration.force-enabled", true);//强制启用硬件渲染（无视黑名单/白名单），最重要的设置！
user_pref("gfx.direct2d.force-enabled", true);//在 Windows 平台上强制使用 D2D 加速页面内容渲染
user_pref("gfx.direct2d.disabled", true);//禁用字体硬件加速，开启后标题会模糊，字体显示不一致
//字體語言編碼
user_pref("intl.charset.detector", "universal_charset_detector");//自動選擇
user_pref("font.name.serif.zh-CN", "Arial");//衬線字體
user_pref("font.name.sans-serif.zh-CN", "Arial");//無衬線字體
user_pref("font.name.monospace.zh-CN", "Arial");//等寬字體
//拼写检查
user_pref("spellchecker.dictionary", "en-US");//字典
user_pref("layout.spellcheckDefault", 2);//开启单行和全文的拼写检查

/*==========標籤相關==========*/
user_pref("browser.tabs.insertRelatedAfterCurrent", true);//紧邻当前标签打开相关标签
user_pref("browser.tabs.animate", false);//關閉标签页动画
user_pref("browser.tabs.warnOnClose", false);//關閉多個標籤時不提示
user_pref("browser.tabs.warnOnCloseOtherTabs", false);//關閉其它標籤時不提示

/*==========書籤相關==========*/
user_pref("browser.bookmarks.autoExportHTML", true);//關閉Firefox时自動生成HTML書籤備份
user_pref("browser.bookmarks.max_backups", 0);//最大备份数目
user_pref("browser.places.smartBookmarksVersion", -1);//禁用智能书签

/*==========緩存相關==========*/
user_pref("browser.cache.disk.smart_size.enabled", false);//关闭磁盘缓存容量自动管理
user_pref("browser.cache.disk.smart_size.first_run", false);//标记是否属于首次smart sizing？默认true
user_pref("browser.cache.disk.capacity", 512000);//最大缓存文件大小(500MB)       
user_pref("browser.cache.disk.max_entry_size", 4096);//最大磁盘缓存元素大小？暗月设为4MB，任何大于4MB的元素都不建议缓存
user_pref("browser.cache.memory.max_entry_size", 51200);//单个文件內存缓存上限(50MB) 

/*==========圖片相關==========*/
user_pref("layout.imagevisibility.enabled", false);//是否仅解码可见区域的图片（否，没必要用NoLazyload腳本嘛）
user_pref("image.mem.decodeondraw", false);//不解码非激活标签的图片

/*==========Javascript相關==========*/
user_pref("javascript.options.xml.content", true);//总是 jit 加速 javascript，改善JS内存占用
user_pref("javascript.options.methodjit_always", true);//始终采用JIT编译器编译JS，即使这些JS利用率很低
user_pref("javascript.options.mem.gc_incremental_slice_ms", 25);//add IGC and adjust time slice

/*==========網路相關==========*/
user_pref("network.prefetch-next", false); //默认关闭预读引擎
user_pref("network.http.max-connections", 48); // 不要最大化网络层，以保证家庭网络和无线网络! (FF=256)
user_pref("network.http.max-connections-per-server", 8); // 使用了流水线，这个值应该小一点儿 (FF=15)
user_pref("network.http.max-persistent-connections-per-proxy", 8);
user_pref("network.http.max-persistent-connections-per-server", 6);
user_pref("network.dns.disableIPv6", true); //禁用IPv6
user_pref("network.dnsCacheEntries", 20); //DNS緩存數
user_pref("network.dnsCacheExpiration", 36000); //DNS緩存失效時間（單位秒）
user_pref("network.proxy.socks_remote_dns", true);//使用socks代理dns解析，据说可以解决dns污染或DNS劫持。前提是你有socks代理软件。
//HTTPS不允许混合内容，以下两条参数用以禁用此特性
user_pref("security.mixed_content.block_active_content", false);
user_pref("security.mixed_content.block_display_content", false);

/*==========平滑滾動==========*/
user_pref("general.smoothScroll.durationToIntervalRatio", 500);
user_pref("mousewheel.min_line_scroll_amount", 35);

/*==========插件相關==========*/
user_pref("plugins.click_to_play", false);//关闭点击才运行插件
user_pref("dom.ipc.plugins.unloadASAP", true);//当插件空闲时自动关闭进程
user_pref("plugins.hide_infobar_for_missing_plugin", true);//隐藏信息栏缺失插件消息提醒
user_pref("plugins.hide_infobar_for_outdated_plugin", true);//过期插件不提示
user_pref("plugins.hide_infobar_for_blocked_plugin", true);//插件屏蔽选择不提示
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true);//直接用火狐禁用flash保护模式
user_pref("microsoft.CLR.auto_install", false);//好像是和micro相关的东西自动安装

/*==========关闭自动更新类==========*/
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);
user_pref("app.update.service.enabled", false);
user_pref("browser.search.update", false);
user_pref("app.update.disable_button.showUpdateHistory", false);

/*==========关闭安全检测健康中心类==========*/
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);//解決下載卡在最後一秒的問題

/*==========主页==========*/
user_pref("startup.homepage_welcome_url", "");
user_pref("browser.startup.homepage", "chrome://userchromejs/content/myNewTab/index.html");//首页
user_pref("browser.newtab.url", "chrome://userchromejs/content/myNewTab/index.html");//本地Html

/*==========附加組件==========*/
user_pref("extensions.getAddons.cache.enabled", false);//阻止每天更新附加组件元数据
user_pref("extensions.webservice.discoverURL","http://127.0.0.1");//禁用附加组件建议
user_pref("extensions.ui.lastCategory", "addons://list/extension");//打开附加组件时默认打开“扩展”项

/*==========FX其它类==========*/
user_pref("general.skins.selectedSkin", "simplewhite");//使用SimpleWhite主題
user_pref("general.warnOnAboutConfig", false);//AboutConfig警告
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("view_source.editor.external", true);//页面源代码——使用外部編輯器查看
user_pref("view_source.wrap_long_lines", true);//页面源代码——将较长的行自动换行
user_pref("privacy.popups.showBrowserMessage", false);//弹窗不提示消息
user_pref("dom.successive_dialog_time_limit", 0);//避免此页面产生更多对话框
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描
user_pref("signed.applets.codebase_principal_support", true);//一些网站的下载协议支持
user_pref("nglayout.initialpaint.delay", 0);//当浏览器收到信息后等待的时间
user_pref("extensions.autoDisableScopes", 0);//第一次运行不禁止任何扩展
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不检测版本，不弹欢迎页面
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
user_pref("extensions.blocklist.enabled", false);//关闭启动时插件检查窗口
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("browser.sessionstore.interval", 999999999);//保存会话的时间间隔，不能关闭，所以取能取的最大值
user_pref("browser.pagethumbnails.capturing_disabled", true);//禁止截图最新访问页面的缩略图
user_pref("security.tls.version.fallback-limit", 0);//SSLv3 error messages，让fx忽略连接安全检查
user_pref("security.tls.version.min", 0);//SSLv3 error messages，让fx忽略连接安全检查
user_pref("network.standard-url.escape-utf8", false);//是否转化中文URL为utf-8格式，默认true
user_pref("reader.parse-on-load.enabled", false);//禁用閱讀模式

/*==========扩展设置==========*/
//adblockplus
user_pref("extensions.adblockplus.hideContributeButton", true);//隐藏助力abp项
user_pref("extensions.adblockplus.patternsbackups", 0);
user_pref("extensions.adblockplus.subscriptions_exceptionscheckbox", false);//非入侵式广告
user_pref("extensions.adblockplus.subscriptions_exceptionsurl", "");//删除非入侵式广告订阅网址
user_pref("extensions.adblockplus.subscriptions_antiadblockurl", "");//去掉自带的反-反ADP列表
user_pref("extensions.adblockplus.please_kill_startup_performance", true);//关闭延迟启动
user_pref("extensions.adblockplus.frameobjects", false);//在Java和Flash上显示标签 - 否

//Autoproxy
user_pref("extensions.autoproxy.customProxy", "Free%20Gate;;8580;$GoAgent;;8087;$Shadowsocks;;1080;socks");
user_pref("extensions.autoproxy.patternsbackups", 0);

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
user_pref("flashgot.altClick", false);//取消 Alt+Click = 使用 FlashGot 下載
user_pref("flashgot.autoStart", false);//取消 自动下载已监视的文件（開啟後所有下載自動調用DTA）
user_pref("flashgot.interceptAll", true);//接管所有下载
user_pref("flashgot.logEnabled", false);//禁用日志
user_pref("flashgot.firstRunRedirection", false);//重建配置不弹FlashGot首页

//DownThemAll！
user_pref("extensions.dta.conflictresolution", 0);//文檔已存在時自動重命名
user_pref("extensions.dta.sounds.error", true);//發生錯誤時播放音效
user_pref("extensions.dta.alertbox", 0);//下載完成後對話視窗提示
user_pref("extensions.dta.closedta", true);//辯識並列出Flash影片
user_pref("extensions.dta.ctxmenu", "0,0,0");//不顯示右鍵菜單
user_pref("extensions.dta.removecanceled", true);//從清單中移除中斷及錯誤的下載
user_pref("extensions.dta.confirmremove", false);//移除下載前不提示
user_pref("extensions.dta.exposeInUA", true);//在UA中顯示DTA

//Greasemonkey
user_pref("extensions.greasemonkey.stats.prompted", true);//不弹改进建议提示
user_pref("extensions.greasemonkey.installDelay", 0);//安裝時的倒計時
user_pref("extensions.greasemonkey.sync.enabled", false); //禁止同步

//Stylish
user_pref("extensions.stylish.firstRun", 3);//重建配置不弹首页

/*==========脚本设置==========*/
//rebuild_userChrome脚本管理器
//user_pref("userChromeJS.rebuildUI.menues", "more-tools-menu");

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
user_pref("userChromeJS.showFlagS.Reacquire", true);//自動重新获取
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
//user_pref("userChromeJS.downloadPlus.download_dialog_changeName_locking", true);//下載改名——鎖定保存文件按鈕

//ucjsPermission腳本
//簡單敎程：http://bbs.kafan.cn/thread-1527284-1-1.html，禁止第三方腳本，對象和框架，基本就能過濾掉大部分廣告和不必要的內容。
//白名单放行好麻烦，還是換用黑名單好了

//uAutoPagerize2腳本
user_pref("uAutoPagerize.AUTO_START", false);//默認不翻頁
