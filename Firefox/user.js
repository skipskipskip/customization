
//2016.01.06  加入Ghacks參數
//2016.01.03  加入Auto Unload Tab參數
//2015.12.10  添加FFProfile設置參數：https://ffprofile.com/#start
//2015.09.19  啟用about:newtab
//2015.08.07 09:00  去掉網絡流水線設置，開啟後有時會出現不能上外網的問題，只能重啟電腦
//2015.07.07 21:00  新增禁止「HTTPS不允许混合内容」特性的參數
//2015.05.22 21:00  新增newDownloadPlus參數
//2015.04.16 13:00  加入新的平滑設置
//2015.04.14 17:00  使用SimpleWhite主題
//2015.04.05 09:00  調整UC管理器菜單

# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.

//*==========主页==========*//
user_pref("browser.startup.homepage", "about:newtab");//首頁
user_pref("browser.newtabpage.columns", 6);//新标签页列数
user_pref("browser.newtabpage.rows", 3);//新标签页行数
//标签页固定的网站
user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://www.google.com/ncr\",\"title\":\"Google\"},{\"url\":\"http://www.haosou.com/\",\"title\":\"Haosou\"},{\"url\":\"https://www.wikipedia.org/\",\"title\":\"Wikipedia\"},{\"url\":\"http://www.cnn.com/\",\"title\":\"CNN\"},{\"url\":\"http://www.economist.com/\",\"title\":\"Economist\"},{\"url\":\"http://www.linkedin.com/today/?trk=nav_responsive_sub_nav_pulse\",\"title\":\"Pulse\"},{\"url\":\"http://twitter.com/\",\"title\":\"Twitter\"},{\"url\":\"http://www.shanbay.com/\",\"title\":\"Shanbay\"},{\"url\":\"http://www.zhihu.com/explore\",\"title\":\" Zhihu\"},{\"url\":\"http://www.douban.com/\",\"title\":\"Douban\"},{\"url\":\"http://www.guokr.com/\",\"title\":\"Guokr\"},{\"url\":\"http://bbs.kafan.cn/forum-215-1.html\",\"title\":\"Kafan\"},{\"url\":\"https://github.com/dupontjoy\",\"title\":\"GitHub\"},{\"url\":\"https://www.youtube.com/\",\"title\":\"Youtube\"},{\"url\":\"http://music.163.com/\",\"title\":\"Music\"},{\"url\":\"http://email.163.com/\",\"title\":\"Mail\"},{\"url\":\"https://note.wiz.cn/web\",\"title\":\"Wiznote\"},{\"url\":\"https://getpocket.com/a/queue/list/\",\"title\":\"Pocket\"}]");

//*==========三道杠圖標排序==========*//
user_pref("browser.uiCustomization.state", "{\"placements\":{\"PanelUI-contents\":[\"edit-controls\",\"zoom-controls\",\"pocket-button\",\"preferences-button\",\"add-ons-button\",\"developer-button\",\"print-button\"],\"addon-bar\":[\"addonbar-closebutton\",\"noscript-tbb\",\"status-bar\"],\"PersonalToolbar\":[\"personal-bookmarks\"],\"nav-bar\":[\"urlbar-container\",\"downloads-button\",\"lpt_lastpass-compact-btn\",\"flashgot-media-tbb\",\"greasemonkey-tbb\",\"GrabScroll-image\",\"abp-toolbarbutton\",\"toggle-button--redirectoreinaregilssoncom-redirector\",\"loop-button\",\"bookmarks-menu-button\",\"pan-toolbarbutton\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"toolbar-menubar\":[\"menubar-items\"]},\"seen\":[\"GrabScroll-image\",\"abp-toolbarbutton\",\"toggle-button--redirectoreinaregilssoncom-redirector\",\"pan-toolbarbutton\"],\"dirtyAreaCache\":[\"addon-bar\",\"PersonalToolbar\",\"nav-bar\",\"TabsToolbar\",\"toolbar-menubar\",\"PanelUI-contents\"],\"currentVersion\":4,\"newElementCount\":0}");

//*==========选项卡里的设置==========*//
user_pref("browser.preferences.inContent", false);//選項 使用老版彈窗
user_pref("signon.rememberSignons", false);//不保存密码
user_pref("privacy.donottrackheader.enabled", true);//開啟DNT
user_pref("privacy.donottrackheader.value", 1);//0 同意被跟踪;1 不要被跟踪
//字體語言編碼
user_pref("intl.charset.detector", "universal_charset_detector");//自動選擇
user_pref("font.name.serif.zh-CN", "Arial");//衬線字體
user_pref("font.name.sans-serif.zh-CN", "Arial");//無衬線字體
user_pref("font.name.monospace.zh-CN", "Arial");//等寬字體
//拼写检查
user_pref("spellchecker.dictionary", "en-US");//字典
user_pref("layout.spellcheckDefault", 2);//开启单行和全文的拼写检查
//关闭安全检测健康中心类
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("datareporting.healthreport.pendingDeleteRemoteData", true);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.service.firstRun", true);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("dom.enable_performance",false);
user_pref("toolkit.telemetry.unified",false);
user_pref("sanity-test.running",false);

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

//*==========附加組件==========*//
user_pref("extensions.getAddons.cache.enabled", false);//阻止每天更新附加组件元数据
user_pref("extensions.webservice.discoverURL","http://127.0.0.1");//禁用附加组件建议
user_pref("extensions.ui.lastCategory", "addons://list/extension");//默认打开“扩展”项

//*==========FX其它类==========*//
user_pref("general.skins.selectedSkin", "simplewhite");//使用SimpleWhite主題
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
user_pref("browser.newtabpage.directory.ping", "");//取消新标签页建议磁贴并取消回传数据

//關閉预测服务，含推测性预连接
user_pref("network.predictor.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);


//*==========扩展与脚本设置==========*//
//Pan
user_pref("extensions.pan.patternsbackups", 0);

//LastPass
user_pref("extensions.lastpass.hidecontextmenu", true);
user_pref("extensions.lastpass.showHomepageAfterLogin", false);//登入後不轉到密码库
user_pref("extensions.lastpass.0a148091163b8a7de3368af449db2947c700bea1552b01964d4ae55f930562e0.toplevelmatchingsites", true);//将匹配网站移动到顶部菜单
user_pref("extensions.lastpass.loginusers", "dupontjoy%40163.com");//保存用戶名
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
user_pref("extensions.dta.sounds.error", true);//發生錯誤時播放音效
user_pref("extensions.dta.alertbox", 0);//下載完成後對話視窗提示
user_pref("extensions.dta.closedta", true);//辯識並列出Flash影片
user_pref("extensions.dta.ctxmenu", "0,0,0");//不顯示右鍵菜單
user_pref("extensions.dta.removecanceled", true);//從清單中移除中斷及錯誤的下載
user_pref("extensions.dta.confirmremove", false);//移除下載前不提示
user_pref("extensions.dta.maxchunks", 10);//每次下載最大塊數
user_pref("extensions.dta.timeout", 900);//下載超時時間（900秒/15分鐘）
user_pref("extensions.dta.loadendfirst", true);//先加載最後一部分數據
user_pref("extensions.dta.exposeInUA", true);//在UA中顯示DTA

//Greasemonkey
user_pref("extensions.greasemonkey.stats.prompted", true);//不弹改进建议提示
user_pref("extensions.greasemonkey.installDelay", 0);//安裝時的倒計時

//Stylish
user_pref("extensions.stylish.firstRun", 3);//重建配置不弹首页

//Auto Unload Tab
user_pref("extensions.autounloadtab.bypass_cache_after_minutes", 1);//xx分鐘後自動跳過緩存
user_pref("extensions.autounloadtab.closeTabAfterMinutes", 30);//xx分鐘後自動關閉未載入/已卸載標籤
user_pref("extensions.autounloadtab.load_background_tabs", 3);//後台標籤載入方式: One by One
user_pref("extensions.autounloadtab.max_loaded_tabs", 20);//最多打開xx個標籤
user_pref("extensions.autounloadtab.memoryIntervalInMinutes", 1);//每xx分鐘檢查標籤大小
user_pref("extensions.autounloadtab.memoryThresholdInMegabyte", 100);//大小超過xx(MB),自動卸載標籤
user_pref("extensions.autounloadtab.show_tab_menu", false);//不展示標籤右鍵菜單
user_pref("extensions.autounloadtab.timeoutInMinutes", 30);//xx分鐘後自動卸載標籤

//*==========脚本设置==========*//
//rebuild_userChrome脚本管理器
user_pref("userChromeJS.rebuildUI.menues", "addMenu-rebuild,anobtn_set,toolsbar_KeyChanger_rebuild,redirector-icon,usercssloader_Tools_Menu");

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
//user_pref("userChromeJS.downloadPlus.download_dialog_changeName_locking", true);//下載改名——鎖定保存文件按鈕

//uAutoPagerize2腳本
user_pref("uAutoPagerize.AUTO_START", false);//默認不翻頁

//ShowFlagS
user_pref("userChromeJS.showFlagS.RefChanger", true);//開啟圖片反盜鏈
user_pref("userChromeJS.showFlagS.UAChanger", true);//開啟UA切換
user_pref("userChromeJS.showFlagS.Reacquire", true);//失敗自動獲取

//*==========其它分享設置==========*//

//From: Ghacks-2016.01.04
/*** 0100: STARTUP ***/
// 0101: disable "slow startup" options
   // warnings, disk history, welcomes, intros, EULA, default browser check
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.rights.3.shown", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_override_url", "");
user_pref("browser.feeds.showFirstRunUI", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.usedOnWindows10.introURL", "");

/*** 0200: GEOLOCATION ***/
// 0201: disable location-aware browsing
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "http://127.0.0.1");
user_pref("geo.wifi.logging.enabled", false);
user_pref("browser.search.geoip.url", "");
// 0202: disable GeoIP-based search results
   // https://trac.torproject.org/projects/tor/ticket/16254
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");

/*** 0300: QUIET FOX [PART 1]
     No auto-phoning home for anything. You can still do manual updates. It is still important
     to do updates for security reasons. If you don't auto update, make sure you do manually.
     There are many legitimate reasons to turn off AUTO updates, including hijacked monetized
     extensions, time constraints, legacy issues, and fear of breakage/bugs  ***/
// 0330a: disable telemetry
   // https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
   // the pref (.unified) affects the behaviour of the pref (.enabled)
   // IF unified=false then .enabled controls the telemetry module
   // IF unified=true then .enabled ONLY controls whether to record extended data
   // so make sure to have both set as false
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
// 0330b: set unifiedIsOptIn to make sure telemetry respects OptIn choice and that telemetry
   // is enabled ONLY for people that opted into it, even if unified Telemetry is enabled
user_pref("toolkit.telemetry.unifiedIsOptIn", true);
// 0331: remove url of server telemetry pings are sent to
user_pref("toolkit.telemetry.server", "");
// 0332: disable archiving pings locally - irrelevant if toolkit.telemetry.unified is false
user_pref("toolkit.telemetry.archive.enabled", false);
// 0333a: disable health report
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.service.enabled", false);
// 0333b: disable about:healthreport page (which connects to mozilla for locale/css+js+json)
   // If you have disabled health reports, then this about page is useless - disable it
   // If you want to see what health data is present, then these must be set at default
user_pref("datareporting.healthreport.about.reportUrl", "");
user_pref("datareporting.healthreport.about.reportUrlUnified", "");
// 0334a: disable FF41+ new data submission master kill switch
   // If disabled, no policy is shown or upload takes place, ever
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1195552
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// 0334b: disable FHR (Firefox Health Report) v2 data being sent Mozilla servers
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);
// 0335: remove a telemetry clientID
  // if you haven't got one, be proactive and set it now for future proofing
user_pref("toolkit.telemetry.cachedClientID", "");
// 0340: disable experiments
   // https://wiki.mozilla.org/Telemetry/Experiments
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
// 0341: disable mozilla permission to silently opt you into tests
user_pref("network.allow-experiments", false);
// 0350: disable crash reports
user_pref("breakpad.reportURL", "");
// 0370: disable "Snippets" (Mozilla content shown on about:home screen)
   // https://wiki.mozilla.org/Firefox/Projects/Firefox_Start/Snippet_Service
   // MUST use HTTPS - arbitrary content injected into this page via http opens up MiTM attacks
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");
// 0371: disable "Heartbeat" (Mozilla user rating telemetry)
user_pref("browser.selfsupport.url", "");
// 0372: disable "Hello" (TokBox/Telefonica WebRTC voice & video call PUP) WebRTC (IP leak)
   // https://www.mozilla.org/en-US/privacy/firefox-hello/
   // https://security.stackexchange.com/questions/94284/how-secure-is-firefox-hello
user_pref("loop.enabled", false);
user_pref("loop.server", "");
// 0373a: disable "Reader View"
user_pref("reader.parse-on-load.enabled", false);
// 0374: disable "social" integration
   // https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Social_API
user_pref("social.whitelist", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.directories", "");
user_pref("social.share.activationPanelEnabled", false);

/*** 0400: QUIET FOX [PART 2]
     This section has security & tracking protection implications vs privacy concerns.
     These settings are geared up to make FF "quiet" & private. If you want safebrowsing
     & tracking protection then don't use this section (or parts of it) ***/
// 0401: DON'T disable extension blocklist - SECURITY
   // It now includes updates for "revoked certificates" - security trumps privacy here
   // NOTE: requires extensions.blocklist.url to be set at default    
   // https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl
user_pref("extensions.blocklist.enabled", true);
// 0402: disable "Block reported web forgeries" - PRIVACY
   // If true this compares visited URLs against a blacklist or submits URLs to a third party
   // to determine whether a site is legitimate. This setting is under Options>Security
user_pref("browser.safebrowsing.enabled", false);
// 0410: disable "Block reported attack sites" - PRIVACY
   // Safebrowsing uses locally stored data, but if the item is not found, then
   // google is contacted. This setting is under Options>Security
user_pref("browser.safebrowsing.malware.enabled", false);
// 0411: disable safebrowsing urls & download
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
// 0411b: disable FF43+ safebrowsing urls
user_pref("browser.safebrowsing.provider.google.appRepURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
// 0420: disable tracking protection
   // https://support.mozilla.org/en-US/kb/tracking-protection-firefox
   // I believe there are no privacy concerns here, but you are better off using an
   // extension such as uBlock Origin which is not decided by a third party (disconnect)
   // and which is far more effective (when used correctly)
user_pref("privacy.trackingprotection.enabled", false);
user_pref("browser.trackingprotection.gethashURL", "");
user_pref("browser.trackingprotection.getupdateURL", "");
user_pref("privacy.trackingprotection.pbmode.enabled", false);
// 0421: disable SSL Error Reporting - PRIVACY
   // https://gecko.readthedocs.org/en/latest/browser/base/sslerrorreport/preferences.html
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");

/*** 0600: BLOCK IMPLICIT OUTBOUND [not explicitly asked for - eg clicked on] ***/
// 0601: disable link prefetching
   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
user_pref("network.prefetch-next", false);
// 0602: disable dns prefetching
   // http://www.ghacks.net/2013/04/27/firefox-prefetching-what-you-need-to-know/
   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
// 0603: disable Seer/Necko
user_pref("network.predictor.enabled", false);
// 0603a: disable more Necko stuff (not sure what this will do but so far no ill effects)
   // https://wiki.mozilla.org/Necko/CaptivePortal
user_pref("captivedetect.canonicalURL", "");
// 0604: disable search suggestions
user_pref("browser.search.suggest.enabled", false);
// 0605: disable link-mouseover opening connection to linked server
   // http://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
   // http://www.ghacks.net/2015/08/16/block-firefox-from-connecting-to-sites-when-you-hover-over-links
user_pref("network.http.speculative-parallel-limit", 0);
// 0606: disable pings (but enforce same host in case)
   // http://kb.mozillazine.org/Browser.send_pings
   // http://kb.mozillazine.org/Browser.send_pings.require_same_host
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

/*** 1000: CACHE ***/
// 1001: disable disk cache
user_pref("browser.cache.disk.enable", false);
// 1002: disable disk caching of SSL pages
   // http://kb.mozillazine.org/Browser.cache.disk_cache_ssl
user_pref("browser.cache.disk_cache_ssl", false);
// 1004: disable offline cache
user_pref("browser.cache.offline.enable", false);
// 1005: disable storing extra session data 0=all 1=http-only 2=none
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.privacy_level_deferred", 2);
   
/*** 2000: MEDIA / CAMERA / MIKE ***/
// 2001: disable WebRTC
   // https://www.privacytools.io/#webrtc
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
// 2001a: FF42+ pref which improves the WebRTC IP Leak issue, as opposed to completely
   // disabling WebRTC. You still need to enable WebRTC for this to be used.
   // https://wiki.mozilla.org/Media/WebRTC/Privacy
user_pref("media.peerconnection.ice.default_address_only", true);
// 2002: disable WebRTC - firefox making automatic connections#w_media-capabilities
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.url", "");
// 2003: disable EME (Adobe "Primetime Content Decryption Module" DRM)
   // https://trac.torproject.org/projects/tor/ticket/16285
user_pref("browser.eme.ui.enabled", false);
user_pref("media.gmp-eme-adobe.enabled", false);
user_pref("media.eme.enabled", false);
user_pref("media.eme.apiVisible", false);
// 2004: disable getUserMedia
   // https://wiki.mozilla.org/Media/getUserMedia
user_pref("media.navigator.enabled", false);
// 2010: disable WebGL, force bare minimum feature set if used & disable WebGL extensions
   // http://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
   // https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern
user_pref("webgl.disabled", true);
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
// 2020: disable video statistics fingerprinting vector - JS performance fingerprinting
user_pref("media.video_stats.enabled", false);
// 2021: disable speech recognition
user_pref("media.webspeech.recognition.enable", false);
// 2022: disable screensharing
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
// 2023: disable camera stuff
user_pref("camera.control.autofocus_moving_callback.enabled", false);
user_pref("camera.control.face_detection.enabled", false);
   
/*** 2600: MISC - LEAKS / FINGERPRINTING / PRIVACY / SECURITY ***/
// 2601: disable sending additional analytics to web servers
   // https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref("beacon.enabled", false);
// 2602: CIS 2.3.2 disable downloading on desktop
user_pref("browser.download.folderList", 2);
// 2603: always ask the user where to download - enforce user interaction for security
user_pref("browser.download.useDownloadDir", false);
// 2604: https://bugzil.la/238789#c19
user_pref("browser.helperApps.deleteTempFileOnExit", true);
// 2605: don't integrate activity into windows recent documents
user_pref("browser.download.manager.addToRecentDocs", false); 
// 2606: disable hiding mime types (Options>Applications) not associated with a plugin
user_pref("browser.download.hide_plugins_without_extensions", false);
// 2607: disable page thumbnails - privacy
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("pageThumbs.enabled", false);
user_pref("browser.pagethumbnails.storage_version", 3); // not sure
// 2608: disable JAR from opening Unsafe File Types
user_pref("network.jar.open-unsafe-types", false);
// 2609: disable insecure active content on https pages - mixed content
user_pref("security.mixed_content.block_active_content", true);
// 2610: disable insecure passive content (such as images) on https pages - mixed context
   // current default=false, leave it this way as too many sites break visually
   // user_pref("security.mixed_content.block_display_content", true); 
// 2611: disable WebIDE to prevent remote debugging and addon downloads
   // https://trac.torproject.org/projects/tor/ticket/16222
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.enabled", false);
// 2612: disable SimpleServiceDiscovery - which can bypass proxy settings - eg Roku
   // https://trac.torproject.org/projects/tor/ticket/16222
user_pref("browser.casting.enabled", false);
user_pref("gfx.layerscope.enabled", false);
// 2613: disable device sensor API - fingerprinting vector
user_pref("device.sensors.enabled", false);
// 2614: disable SPDY as it can contain identifiers
   // SPDY will be deprecated in 2016
   // https://www.torproject.org/projects/torbrowser/design/#identifier-linkability (no. 10)
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.v3-1", false);
// 2615: disable http2 for now as well
user_pref("network.http.spdy.enabled.http2", false);
// 2617: disable pdf.js as an option to preview PDFs within Firefox
   // see mime-types under Options>Applications) - EXPLOIT risk
   // Enabling this (set to true) will change your option most likely to "Ask" or "Open with
   // some external pdf reader". This does NOT necessarily prevent pdf.js being used via
   // other means, it only removes the option. I think this should be left at default (false).
   // 1. It won't stop JS bypassing it. 2. Depending on external pdf viewers there is just as
   // much risk or more (acrobat). 3. mozilla are very quick to patch these sorts of exploits,
   // they treat them as severe/critical and 4. for convenience
user_pref("pdfjs.disabled", false);
// 2618: when using SOCKS have the proxy server do the DNS lookup - dns leak issue
   // http://kb.mozillazine.org/Network.proxy.socks_remote_dns
   // https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers
   // eg in TOR, this stops your local DNS server from knowing your Tor destination
   // as a remote Tor node will handle the DNS request
user_pref("network.proxy.socks_remote_dns", true);
// 2619: limit HTTP redirects (this does not control redirects with HTML meta tags or JS)
   // WARNING: a low setting of 5 or under will probably break some sites (eg gmail logins)
   // To control HTML Meta tag and JS redirects, use an addon (eg NoRedirect). Default is 20
user_pref("network.http.redirection-limit", 10);
// 2620: disable middle mouse click opening links
   // https://trac.torproject.org/projects/tor/ticket/10089
user_pref("middlemouse.contentLoadURL", false);
// 2621: disable IPv6 (included for knowledge ONLY - not recommended)
   // This is all about covert channels such as MAC addresses being included/abused in the
   // IPv6 protocol for tracking. If you want to mask your IP address, this is not the way
   // to do it. It's 2016, IPv6 is here. Here are some old links
   // 2010: https://www.christopher-parsons.com/ipv6-and-the-future-of-privacy/
   // 2011: https://iapp.org/news/a/2011-09-09-facing-the-privacy-implications-of-ipv6
   // 2012: http://www.zdnet.com/article/security-versus-privacy-with-ipv6-deployment/
   // NOTE: It is a myth that disabling IPv6 will speed up your internet connection
   // http://www.howtogeek.com/195062/no-disabling-ipv6-probably-wont-speed-up-your-internet-connection
   // user_pref("network.dns.disableIPv6", true);
   // user_pref("network.http.fast-fallback-to-IPv4", true);
// 2622: ensure you have a security delay when installing add-ons (milliseconds)
   // default=1000, This also covers the delay in "Save" on downloading files.
   // http://kb.mozillazine.org/Disable_extension_install_delay_-_Firefox
   // http://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/
user_pref("security.dialog_enable_delay", 1000); 
   
/*** 3000: PERSONAL SETTINGS
     Settings that are handy to be able to easily migrate to a new profile. Users
     can put their own non-security/privacy/fingerprinting/tracking stuff here ***/
// 3001: disable annoying warnings
user_pref("general.warnOnAboutConfig", false); 
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false); 
// 3001a disable warning when a domain requests full screen
   // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
   // user_pref("full-screen-api.warning.delay", 0);
   // user_pref("full-screen-api.warning.timeout", 0);
// 3002: disable closing browser with last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);
// 3004: disable backspace
user_pref("browser.backspace_action", 2);
// 3005: disable autocopy default (use extensions autocopy 2 & copy plain text 2)
user_pref("clipboard.autocopy", false);
// 3006: disable enforced addon signing: FF43 turned on signatures required,
   // until F44 stable you can disable this to buy some time for any addons you
   // need to replace or get signed. It will be deprecated in FF44 most likely, but
   // will still be retained for Aurora/Dev-Edition
user_pref("xpinstall.signatures.required", false);
// 3007: open new windows in a new tab instead
   // This setting is under Options>General>Tabs
   // 1=current window, 2=new window, 3=most recent window
user_pref("browser.link.open_newwindow", 3);
// 3008: disable "Do you really want to leave this site?" popups
   // https://support.mozilla.org/en-US/questions/1043508
user_pref("dom.disable_beforeunload", true);