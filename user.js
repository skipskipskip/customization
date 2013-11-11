/*禁用blocklist*/
user_pref("extensions.blocklist.enabled", false);
/*关闭进入about:config时的警告*/
user_pref("general.warnOnAboutConfig", false);
/*禁用健康报告日志记录*/
user_pref("datareporting.healthreport.logging.consoleEnabled", false);
/*禁用健康报告服务*/
user_pref("datareporting.healthreport.service.enabled", false);
/*禁用健康报告上传数据*/
user_pref("datareporting.healthreport.uploadEnabled", false);
/*接受访问过的Cookies*/
user_pref("network.cookie.cookieBehavior", 3);
/*关闭反病毒数据库*/
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
/*书签最大备份数目*/
user_pref("browser.bookmarks.max_backups", 0);
/*启动时检查是否为默认浏览器*/
user_pref("browser.shell.checkDefaultBrowser", false);
/*关闭多个标签页时警告*/
user_pref("browser.tabs.warnOnClose", false);
/*下载完成时扫描*/
user_pref("browser.download.manager.scanWhenDone", false);
/*在新标签页中打开链接时，立即切换至新标签页*/
user_pref("browser.tabs.loadInBackground", true);
/*关闭最后一个标签页时不关闭窗口*/
user_pref("browser.tabs.closeWindowWithLastTab", false);
/*标签页关闭按钮，0为只在激活的标签页上显示，1为在所有的标签页上显示，2为不在任何标签页上显示，3为作为一个单独按钮显示在最后一个标签页末尾*/
user_pref("browser.tabs.closeButtons", 0);
/*区域设置*/
user_pref("general.useragent.locale", "zh-CN");
/*拼写检查*/
user_pref("layout.spellcheckDefault", 0);
/*告诉网站不想被跟踪*/
user_pref("privacy.donottrackheader.enabled", true);
/*安装附加组件时的等待时间*/
user_pref("security.dialog_enable_delay", 0);
/*用于查看源代码的编辑器路径*/
user_pref("view_source.editor.path", "D:\\Program Files\\Notepad2\\Notepad2.exe");
/*丢失、过期插件提醒*/
user_pref("plugins.hide_infobar_for_missing_plugin", true);
user_pref("plugins.hide_infobar_for_outdated_plugin", true);
/*不生成新标签快拨缩略图*/
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.pagethumbnails.capturing_disabled", true);
/*无视自动缓存管理*/
user_pref("browser.cache.disk.smart_size.enabled", false);
/*磁盘缓存*/
user_pref("browser.cache.disk.capacity", 51200);
//50MiB,单位KB
/*内存缓存*/
user_pref("browser.cache.memory.capacity", 102400);
//-1时为自动;100MiB,单位KB
user_pref("browser.cache.disk.max_entry_size",4096);//最大磁盘缓存元素大小？暗月设为4MB，任何大于4MB的元素都不建议缓存
/*Winwos7及以上系统开启H.264支持*/
user_pref("media.windows-media-foundation.enabled", true);
/*字体*/
user_pref("font.name.monospace.zh-CN", "新宋体");
user_pref("font.name.sans-serif.zh-CN", "新宋体");
user_pref("font.name.serif.zh-CN", "新宋体");
user_pref("intl.charset.default", "UTF-8");
user_pref("intl.charsetmenu.browser.cache", "UTF-8");

/*缓存位置*/
user_pref("browser.cache.disk.parent_directory", "D:\\Temp");
user_pref("browser.cache.offline.parent_directory", "D:\\Temp");
/*禁用火狐插件防崩溃功能*/
user_pref("dom.ipc.plugins.enabled", false);
/*及时退出Plugin-container*/
user_pref("dom.ipc.plugins.unloadASAP", true);
/*不保存密码*/
user_pref("signon.rememberSignons", false);
/*主页*/
user_pref("browser.startup.homepage", "http://www.baidu.com");
/*证书自动选择*/
user_pref("security.default_personal_cert", "Select Automatically");
user_pref("security.OCSP.enabled", 0);  //禁用OSCP验证
/*禁用平滑滚动*/
user_pref("general.autoScroll", false);
user_pref("general.smoothScroll", false);
/*下载自动上次位置*/
user_pref("browser.download.useDownloadDir", false);
/*最大历史数*/
user_pref("places.history.expiration.max_pages",500);
user_pref("places.history.expiration.transient_current_max_pages", 500);
/*关闭更新*/
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);
user_pref("app.update.migrated.updateDir", false);
/*快进快退*/
user_pref("browser.sessionhistory.max_total_viewers", 10);
/*能够同时弹出窗口的数目*/
user_pref("dom.popup_maximum", 10);
/*JavaScript禁用或替换上下文菜单*/ 
user_pref("dom.event.contextmenu.enabled", false);
/*Cookie保存30天*/
user_pref("network.cookie.lifetimePolicy", 3);
user_pref("network.cookie.lifetime.days", 30);
/*中键 粘贴*/
user_pref("middlemouse.paste", true);
/*禁止自动聚焦到输入框*/
user_pref("browser.autofocus", false);
//降低会话保存频率，降低内存消耗
user_pref("browser.sessionstore.interval",600000); //每十分钟（默认每10秒）
user_pref("browser.sessionstore.privacy_level",1); //会话保存哪些内容？1不保存加密站点的会话（填表内容等）
//改善JS内存占用
user_pref("javascript.options.mem.high_water_mark", 64);
user_pref("javascript.options.mem.gc_incremental_slice_ms",25);

/***扩展***/

/***脚本***/
/*自动清理*/
user_pref("userChromeJS.UCCM.CMcleardomain", true);
user_pref("userChromeJS.UCCM.CMcookies", false);
user_pref("userChromeJS.UCCM.CMhistcache", true);
user_pref("userChromeJS.UCCM.CMhttpLogins", true);
user_pref("userChromeJS.UCCM.CMimage", true);
user_pref("userChromeJS.UCCM.CMlocal", true);
user_pref("userChromeJS.UCCM.CMlsos", true);
user_pref("userChromeJS.UCCM.CMoffline", true);
user_pref("userChromeJS.UCCM.MaxMemory", 700);
user_pref("userChromeJS.UCCM.useafom", true);

/*NS脚本版*/
user_pref("permissions.default.cookie", 4);
user_pref("permissions.default.object", 3);
user_pref("permissions.default.script", 3);
user_pref("permissions.default.subdocument", 3);

/*UserScriptLoader*/
user_pref("UserScriptLoader.CACHE_SCRIPT", false);

/*AutoProxy脚本版*/
user_pref("userChromeJS.SmartProxy.default_proxy", 5);
user_pref("userChromeJS.SmartProxy.knownProxy", "Free Gate;127.0.0.1;8580;http$Puff;127.0.0.1;1984;http$ssh -D;127.0.0.1;7070;socks$Toonel;127.0.0.1;8080;http$Tor;127.0.0.1;9050;socks$Goagent;127.0.0.1;8087;http$Your Freedom;127.0.0.1;8080;http");


/***网络***/
/*连接*/

user_pref("network.dns.disablePrefetch", true);//禁用DNS预读，防止路由阻塞
user_pref("network.prefetch-next", false);//关闭链接预读
/*DNS缓存中保存条目的数目*/
user_pref("network.dnsCacheEntries", 20);
user_pref("network.dnsCacheExpiration", 3600); //1小时后失效

/*流水线等加速*/
user_pref("network.http.pipelining", true);//启用流水线
user_pref("network.http.pipelining.ssl", true);//对安全连接启用流水线
user_pref("network.http.proxy.pipelining", true);
user_pref("content.interrupt.parsing", true);
user_pref("content.max.tokenizing.time", 2250000);
user_pref("content.notify.interval", 750000);
user_pref("content.notify.ontimer", true);
user_pref("content.notify.backoffcount", 5);
user_pref("content.switch.threshold", 750000);
user_pref("nglayout.initialpaint.delay", 0);
