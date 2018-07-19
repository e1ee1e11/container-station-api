Search.setIndex({docnames:["application","background","changelog","container","dqpkg","image","index","log","preference","qnet","resource","system"],envversion:50,filenames:["application.rst","background.rst","changelog.rst","container.rst","dqpkg.rst","image.rst","index.rst","log.rst","preference.rst","qnet.rst","resource.rst","system.rst"],objects:{"":{"/api/v1/apps":[0,0,1,"get--api-v1-apps"],"/api/v1/apps/(string:name)":[0,0,1,"get--api-v1-apps-(string-name)"],"/api/v1/apps/(string:name)/kill":[0,2,1,"put--api-v1-apps-(string-name)-kill"],"/api/v1/apps/(string:name)/restart":[0,2,1,"put--api-v1-apps-(string-name)-restart"],"/api/v1/apps/(string:name)/start":[0,2,1,"put--api-v1-apps-(string-name)-start"],"/api/v1/apps/(string:name)/stop":[0,2,1,"put--api-v1-apps-(string-name)-stop"],"/api/v1/background/":[1,0,1,"get--api-v1-background-"],"/api/v1/background/(string:category)":[1,3,1,"post--api-v1-background-(string-category)"],"/api/v1/background/(string:task_id)":[1,1,1,"delete--api-v1-background-(string-task_id)"],"/api/v1/background/application":[1,3,1,"post--api-v1-background-application"],"/api/v1/background/application_upgrade":[1,3,1,"post--api-v1-background-application_upgrade"],"/api/v1/background/container_export":[1,3,1,"post--api-v1-background-container_export"],"/api/v1/background/container_import":[1,3,1,"post--api-v1-background-container_import"],"/api/v1/background/create":[1,3,1,"post--api-v1-background-create"],"/api/v1/background/image_download":[1,3,1,"post--api-v1-background-image_download"],"/api/v1/background/image_export":[1,3,1,"post--api-v1-background-image_export"],"/api/v1/background/image_push":[1,3,1,"post--api-v1-background-image_push"],"/api/v1/background/image_remove":[1,3,1,"post--api-v1-background-image_remove"],"/api/v1/container":[3,3,1,"post--api-v1-container"],"/api/v1/container/(string:container_type)/(string:container_id)":[3,0,1,"get--api-v1-container-(string-container_type)-(string-container_id)"],"/api/v1/container/(string:container_type)/(string:container_id)/all":[10,0,1,"get--api-v1-container-(string-container_type)-(string-container_id)-all"],"/api/v1/container/(string:container_type)/(string:container_id)/autostart/(string:state)":[10,2,1,"put--api-v1-container-(string-container_type)-(string-container_id)-autostart-(string-state)"],"/api/v1/container/(string:container_type)/(string:container_id)/inspect":[3,0,1,"get--api-v1-container-(string-container_type)-(string-container_id)-inspect"],"/api/v1/container/(string:container_type)/(string:container_id)/logs":[3,0,1,"get--api-v1-container-(string-container_type)-(string-container_id)-logs"],"/api/v1/container/(string:container_type)/(string:container_id)/network/port":[10,3,1,"post--api-v1-container-(string-container_type)-(string-container_id)-network-port"],"/api/v1/container/(string:container_type)/(string:container_id)/network/ports":[10,3,1,"post--api-v1-container-(string-container_type)-(string-container_id)-network-ports"],"/api/v1/container/(string:container_type)/(string:container_id)/resource/device":[10,3,1,"post--api-v1-container-(string-container_type)-(string-container_id)-resource-device"],"/api/v1/container/(string:container_type)/(string:container_id)/resource/devices":[10,3,1,"post--api-v1-container-(string-container_type)-(string-container_id)-resource-devices"],"/api/v1/container/(string:container_type)/(string:container_id)/resource/limit":[10,3,1,"post--api-v1-container-(string-container_type)-(string-container_id)-resource-limit"],"/api/v1/container/(string:container_type)/(string:container_id)/restart":[3,2,1,"put--api-v1-container-(string-container_type)-(string-container_id)-restart"],"/api/v1/container/(string:container_type)/(string:container_id)/start":[3,2,1,"put--api-v1-container-(string-container_type)-(string-container_id)-start"],"/api/v1/container/(string:container_type)/(string:container_id)/stop":[3,2,1,"put--api-v1-container-(string-container_type)-(string-container_id)-stop"],"/api/v1/container/(string:container_type)/(string:container_id)/volume/host":[10,3,1,"post--api-v1-container-(string-container_type)-(string-container_id)-volume-host"],"/api/v1/event":[7,0,1,"get--api-v1-event"],"/api/v1/event/wait/(string:container_type)/(string:container_id)/(string:state)":[7,0,1,"get--api-v1-event-wait-(string-container_type)-(string-container_id)-(string-state)"],"/api/v1/image":[5,0,1,"get--api-v1-image"],"/api/v1/image/(string:image_name)/tags":[5,0,1,"get--api-v1-image-(string-image_name)-tags"],"/api/v1/image/(string:image_type)/(string:image_name)/(string:image_tag)/inspect":[5,0,1,"get--api-v1-image-(string-image_type)-(string-image_name)-(string-image_tag)-inspect"],"/api/v1/image/(string:repository)/(string:image_type)/(string:image_name)":[5,1,1,"delete--api-v1-image-(string-repository)-(string-image_type)-(string-image_name)"],"/api/v1/import/config":[3,0,1,"get--api-v1-import-config"],"/api/v1/log":[7,0,1,"get--api-v1-log"],"/api/v1/log/export":[7,0,1,"get--api-v1-log-export"],"/api/v1/login":[11,3,1,"post--api-v1-login"],"/api/v1/login_refresh":[11,0,1,"get--api-v1-login_refresh"],"/api/v1/logout":[11,2,1,"put--api-v1-logout"],"/api/v1/preference/":[8,0,1,"get--api-v1-preference-"],"/api/v1/preference/(string:key)":[8,2,1,"put--api-v1-preference-(string-key)"],"/api/v1/preference/network":[8,2,1,"put--api-v1-preference-network"],"/api/v1/preference/network_docker":[8,2,1,"put--api-v1-preference-network_docker"],"/api/v1/preference/repo":[8,2,1,"put--api-v1-preference-repo"],"/api/v1/proxypass":[0,3,1,"post--api-v1-proxypass"],"/api/v1/proxypass/(string:virtual_path)":[0,0,1,"get--api-v1-proxypass-(string-virtual_path)"],"/api/v1/registry":[5,3,1,"post--api-v1-registry"],"/api/v1/registry/ping":[5,0,1,"get--api-v1-registry-ping"],"/api/v1/registry/push":[5,0,1,"get--api-v1-registry-push"],"/api/v1/resource/device":[10,0,1,"get--api-v1-resource-device"],"/api/v1/sharefolder/":[11,0,1,"get--api-v1-sharefolder-"],"/api/v1/system":[11,0,1,"get--api-v1-system"],"/api/v1/system/bridge":[11,0,1,"get--api-v1-system-bridge"],"/api/v1/system/port/(string:protocol)/(string:port)":[11,0,1,"get--api-v1-system-port-(string-protocol)-(string-port)"],"/api/v1/system/report":[11,0,1,"get--api-v1-system-report"],"/api/v1/system/resource":[11,0,1,"get--api-v1-system-resource"],"/api/v1/template/(string:application)/wizard":[0,0,1,"get--api-v1-template-(string-application)-wizard"],"/api/v1/tls":[11,3,1,"post--api-v1-tls"],"/api/v1/tls/domain_names":[11,2,1,"put--api-v1-tls-domain_names"],"/api/v1/tls/export":[11,0,1,"get--api-v1-tls-export"],"/api/v1/tls/export/registry":[11,0,1,"get--api-v1-tls-export-registry"],"/api/v1/wizard/workspace":[8,0,1,"get--api-v1-wizard-workspace"],"/api/v1/wizard/workspace/status":[8,0,1,"get--api-v1-wizard-workspace-status"],"download image":[5,3,1,"-"]}},objnames:{"0":["http","get","HTTP get"],"1":["http","delete","HTTP delete"],"2":["http","put","HTTP put"],"3":["http","post","HTTP post"]},objtypes:{"0":"http:get","1":"http:delete","2":"http:put","3":"http:post"},terms:{"00z":5,"01t00":5,"03940e9bd2a4":9,"04_20171130_amd64":[5,8],"04_20171130_armhf":[5,8],"04_20180208_arm64":[5,8],"0cdb5bacd3f0":3,"0cdb5bacd3f01abe09c17cd3bc9cd394308bf2bd4bd38649b56820eb562959e3":3,"0faa17aacb06":7,"0faa17aacb066b560392806dc0770df66763cc12dcb9415dd3903d37c5a09c93":[3,7],"11_x86_64":4,"1229f940eeb1":9,"12k":11,"16k":11,"17t00":5,"19t09":3,"1_x86_64_prod_132_20170921_ec726d73":11,"1beta":[5,8],"1de2febfecad":9,"1gb":0,"20hub":5,"219d5a9f3bbed0fb0e8297ce5475876a0d0624dfaaed09ae507d7f182ec7d2f7":5,"21cbde7bbb24ef0acf938e57a2dcd78958cb932852ca0a80df9c423ffd571792":[3,5],"24k":11,"30e04ddada6eb09c12330c7df72cad1573916c7100168c34076808169ff6d805":5,"374f3534200b3c4a58274adfc1d7e562487e1e5cb0ba68a5e28532df995d219a":5,"3c3350f4b8b3add7b93cd546048446d0b4050c286229af427f650fb222d02c9d":3,"40ghz":11,"512m":10,"58118e89f3a912897c070adbf76221572c52609d":4,"5ed9568d606c3a19345df695c54587c3a523cd9ce8313df77345e5150947a4f6":3,"5ivel":0,"64m":[3,10],"64x64":4,"67b9b2a215eaa8ca51b27acf004e3395e92aa865e3408512569dec72707a4573":5,"6_x86_64":4,"74f8760a2a8b28abade3fcbcdb6998543f1d9b4a6fb61463c10adc0765c3cb12":[3,5],"75147294z":3,"768m":[1,3],"80x80":4,"85381847989495e":3,"85fbe06a66d8":9,"85fbe06a66d82ba8109d304e1b891598d7c21e9f6c9a99a34f586250c7d8b92d":9,"860458362z":3,"878ad98c813b":9,"8fec0692e6a1e06dfdafbbd6af7d7a3809ab28787fbac96398d7d79c632796cc":5,"956940650d5db025fdc6a45088bed1dec36fd4acc7f55de593bf4db80842b370":5,"957971986z":5,"965224723z":3,"9e3b67877569":9,"9e3b67877569d6da0f5587c736c4981b3206c7f31bd22e7acdfe1a347e41122c":9,"\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac":4,"\u0440\u0443\u0441\u0441\u043a\u0438\u0439":4,"\u0e44\u0e17\u0e22":4,"\u4e39\u9ea5\u8a9e":4,"\u4fc4\u7f85\u65af\u8a9e":4,"\u5308\u7259\u5229\u8a9e":4,"\u571f\u8033\u5176\u8a9e":4,"\u5e0c\u81d8\u8a9e":4,"\u5fb7\u8a9e":4,"\u610f\u5927\u5229\u8a9e":4,"\u632a\u5a01\u8a9e":4,"\u6377\u514b\u8a9e":4,"\u65e5\u672c\u8a9e":4,"\u6cd5\u570b\u8a9e":4,"\u6ce2\u862d\u8a9e":4,"\u6cf0\u570b\u8a9e":4,"\u745e\u5178\u8a9e":4,"\u7b80\u4f53\u4e2d\u6587":4,"\u7e41\u9ad4\u4e2d\u6587":4,"\u7f85\u99ac\u5c3c\u4e9e\u8a9e":4,"\u82ac\u862d\u8a9e":4,"\u82f1\u6587":4,"\u8377\u862d\u8a9e":4,"\u8461\u8404\u7259\u8a9e":4,"\u897f\u73ed\u7259\u8a9e":4,"\u97d3\u8a9e":4,"\ud55c\uae00":4,"boolean":[0,1,3,4,5,8,10,11],"byte":9,"case":4,"class":4,"default":[0,1,3,4,7,9,11],"espa\u00f1ol":4,"export":[6,7,11],"final":[4,9],"float":3,"fran\u00e7ai":4,"function":[5,7,8],"import":[3,7],"int":[0,1,3,5,7,8,10,11],"new":[1,3,4,5,9],"null":[3,5,7,9,11],"portugu\u00ea":4,"public":[3,5,8,11],"return":[0,3,7,11],"rom\u00e2n":4,"short":4,"static":9,"switch":[9,11],"true":[0,1,3,4,5,7,8,10,11],"var":3,"while":[5,8],CHS:4,DNS:[3,8,11],Dns:3,For:[1,3,4,5,8],NAS:[3,5,6,9,11],NOT:4,PCs:[5,8],QTS:[0,4,9],RUS:4,The:[0,1,4,5,8,10,11],Then:4,There:9,These:4,Use:[4,9],Used:[0,11],Using:5,With:4,_116:10,_80:4,_blank:0,_grai:4,a4af24dfe4329015e3adebbc169cbb04bb771f458167b41b07ebf98c882cce59:1,a8e2dd3faa515c607ed6c21a1bbf9b262994c8c066bb5509acc18cebb4795013:5,a8e2dd3faa51:5,abort:7,about:4,access:[5,10],accord:4,account:[5,8],acm_usb_modems_:10,action:[5,7],activ:[5,8],adapt:11,add:[3,6,7,10],added:[4,9],addit:[0,5],addr:9,address:[3,8,9,11],admin:[1,3,5,7,8,11],administr:11,adv:4,advanc:9,after:[3,4,9,11],agnost:[5,8],ai_default:[5,8],ai_en:8,ai_mxnet:[5,8],ai_tensorflow:[5,8],alia:3,alias:3,all:[0,1,4,5,7,10],allow:[0,1,3,4,5,8,10],alpin:[4,5,8,9],also:[1,5,8,9],amd64:[5,8,10,11],amqp:[5,8],anchor12:4,ani:[4,5,8],anonym:11,anoth:[3,9],any_str:4,apach:[4,5,8],api:[0,1,3,5,6,7,8,10,11],api_vers:[0,4],app:[0,4,5,8],app_choos:2,app_gitlab:[5,8],app_joomla:[5,8],app_odoo:[5,8],app_redmin:[5,8],app_registri:[5,8],app_releasenot:2,app_wordpress:[5,8],apparmorprofil:3,append:7,appli:4,applic:[4,5,6,7,8],application_upgrad:1,apt:[4,5,8],arch:[5,8,10],architectur:[5,8],archiv:3,arg:3,argsescap:5,argument:9,arm32v7:[5,8],arm64:[5,8],arm64v8:[5,8],arm:[5,8],armhf:[5,8],armv7l:11,around:[5,8],arrai:[1,3,4,5],assign:3,associ:[5,8],attach:9,attachstderr:[3,5],attachstdin:[3,5],attachstdout:[3,5],attent:4,attribut:4,auth:5,authent:6,author:[4,5],auto:6,autom:[5,8],automat:[3,9,10],autoremov:3,autostart:[1,3,10],avail:[0,4,5,8,10],avoid:4,back:6,background:[5,6,7],backup:[3,7],backup_concurr:8,balanc:4,bar:9,base:[3,4,5,8],bash:[3,4,5],basic:6,bcast:9,becaus:4,been:[1,5,11],befor:[4,5,10,11],begin:4,belong:9,below:[4,9],between:3,bin:[3,5],bind:[1,3,4,10],blkiodevicereadbp:3,blkiodevicereadiop:3,blkiodevicewritebp:3,blkiodevicewriteiop:3,blkioweight:3,blkioweightdevic:3,blob:0,blog:[5,8],boot:5,both:[5,8],br0:11,branch:8,bridg:[3,8,9,11],brief:11,broadcast:9,browser:11,buffer:11,bug:3,build:[5,6,8],builder:[5,8],built:[4,5,8],busi:[5,8],busybox:[1,5,7,8],button:[4,9],bvlc:[5,8],cach:[3,4,11],cachedev1_data:[3,5],caff:[5,8],caffedemo:[5,8],calc:[5,8],call:[4,5,8],can:[1,4,9],cannot:[1,5,11],capabl:1,capadd:3,capdrop:3,carrier:9,cat:[3,9],categori:[1,5,7],caus:[5,8],center:4,cento:[5,8],centos_icon:[5,8],cert:5,cert_endd:8,cert_md5:8,cert_startd:8,certif:[5,6],cfg:4,cgroup:3,cgrouppar:3,ch_data_path:8,ch_statu:8,chang:[4,6],charact:4,check:[0,3,4,5,8,9,11],chines:[0,4],choos:9,chrome:[5,8],chs:0,cht:[0,4],cid:7,clear:7,click:[4,9],client:[5,8],clone:4,cmd:[3,5],cntk:[5,8],code:[0,3,5,8,9],cognit:[5,8],colinhuang:[5,8],collis:9,com:[0,1,2,3,4,5,7,8,11],combin:4,comma:7,command:[3,4,5,6,8],commander_amd64:[5,8],commander_armhf:[5,8],comment:5,common:[5,8],commun:[5,8],complet:[1,4,7],compos:[4,5,6,8],compress:[1,7],compris:4,condit:4,conf:[3,4],config:[0,3,4,5,9],configur:[0,3,9],conflict:[3,5],connect:[4,5,7,8,9],consoles:3,contaienr:1,contain:[0,2,4,5,7,8,10,11],container_export:1,container_id:[3,7,10],container_import:1,container_port:4,container_typ:[3,7,10],containerconfig:5,containeridfil:3,containerst:[0,1,3,5,7,8,10,11],context:4,continu:4,control:11,convolut:[5,8],cooki:[0,1,3,5,7,8,10,11],core:[5,8,11],correctli:4,count:11,cpu:[3,5,6,8,11],cpu_usag:11,cpucor:11,cpucount:3,cpuperc:3,cpuperiod:3,cpuquota:3,cpurealtimeperiod:3,cpurealtimeruntim:3,cpusetcpu:3,cpusetmem:3,cpushar:3,cputhread:11,cputim:[1,3,10],cpuweight:[1,3,10],creat:[5,6,7,8,10,11],cross:[5,8],css:4,csv:7,ctest:[1,3,7],cuda8:[5,8],cudnn6:[5,8],cultur:4,curl:[0,1,3,5,7,8,10,11],current:[4,8],custom:[0,1,3],customhostnam:[1,3],cze:[0,4],czech:[0,4],d3f88a4293cd4a3b2f6412b3eb41c12b71936983a00f037dca2adfbc0efcdf58:[3,7],d3f88a4293cd:7,daemon:3,damn:[5,8],dan:[0,4],danish:0,dansk:4,dash:[5,8],dashboard:[4,5,8],dashing_amd64:[5,8],dashing_armhf:[5,8],data:[1,3,4,5,8,11],data_path:8,databas:[5,8],date:[7,11],dead:3,deb:4,debian:[5,8],debian_icon:[5,8],deep:[5,8],definit:4,delet:[0,3,5,6,7,8,10],delug:[5,8],deluge_icon:[5,8],demo:[5,8],demonstr:4,depend:4,deploi:[5,8],depot:5,depth:4,deriv:3,describ:4,descript:[0,1,3,4,5,8],design:[5,8],desktop:[5,8],destin:3,destroi:7,detail:[1,4],detail_st:[1,5],determin:11,deutsch:[0,4],dev:[3,4,8],develop:[4,5,8],devic:[1,3,6,11],devicecgrouprul:3,dhcp:[8,9],diagnosi:11,dialog:[4,9],die:7,differ:[0,4],digit:4,dili:4,direct_rendering_infrastructure_:10,directli:4,directori:[3,4,11],disabl:[4,11],disableerrorst:4,disablesuccessst:4,disconnect:7,diskquota:3,displai:[4,11],displaynam:[5,8],displaynamelow:5,distribut:[4,5,8],div:[0,4],dj2:11,dj2_v1:11,dmisdani:[5,8],dns:3,dnsoption:3,dnssearch:3,doc:[0,4],doc_test:8,docker0:8,docker:[0,1,3,5,6,7,8,10,11],docker_net_addr:8,docker_net_bridg:8,docker_net_dhcp_max:8,docker_net_dhcp_rang:8,docker_net_dns_primari:8,docker_net_dns_secondari:8,docker_net_netmask:8,docker_net_network:8,dockerhub:[1,5,7,8],dockerproject:4,dockertestapi2:[3,7],dockertestapi:[3,7],dockervers:[5,11],document:[0,5,8],domain_nam:11,domainnam:[3,5],done:[4,8],dorowu:[5,8],dot:4,down:9,download:[6,7,8],dqpkg:6,draw:[5,8],driver:[3,9],driver_opt:9,driveropt:3,drop:9,dtest:[1,3,7],durat:7,dure:[1,4],dut:[0,4],dutch:0,dynam:[5,8],e1369e8797ad:9,easi:[5,8],easiest:4,easili:4,ec704fa58dacf6e1cd323ea5437e6e737bd4f576149c2bdb8b7e63cd9fa64330:5,echo:4,ecommerc:[5,8],edit:[4,7,8,10],effect:4,effici:[5,8],either:[5,8],embed:[5,8],emerg:[5,8],empti:11,enabl:[4,5],enabletrustcert:5,encap:9,end:[1,3,4,6,7],enddat:11,endpointid:3,eng:[0,4],engin:[4,5,8],english:[0,4],enterpris:[5,8],entir:[5,8],entrypoint:[3,5],env:[3,5],environ:[3,4,5,8,9],epoch:[1,7],erp:[5,8],error:[0,1,3,4,5,7,9],essenti:6,etc:[3,4],eth0:[9,11],eth1:11,eth2:11,eth3:11,ethernet:[3,9],event:6,everyth:4,exampl:[0,1,3,5,6,7,8,9,10,11],execid:3,exist:[0,3,10],exit:[3,9],exitcod:3,explain:4,explan:4,expos:[3,4],expose_port:3,exposedport:3,express:[4,5,8],express_amd64:[5,8],express_armhf:[5,8],extend:3,extra:11,extrahost:3,f4a9c3efac4418fdce28d183db6b607f7aee2aba4b8b8d2d0dfafc3f09dbdb3c:3,f4a9c3efac44:7,fail:4,fake_id:1,fals:[1,3,5,7,10,11],fast:[5,8],fb7e087c04ae3d2182e97fcf4fb69bfc:8,featur:[5,8,11],fedora:[5,8],fedora_icon:[5,8],feed:[5,8],fetch:6,few:[0,4,5],field:[4,9],fieldhtmlclass:4,fieldset:4,file:[0,1,3,6,10],fill:4,filter:[5,7],filter_text:5,filtertext:5,fin:[0,4],finish:[4,5,7,9],finishedat:3,finnish:0,firefox:[5,8],firmwar:11,first:[4,9],flavor:4,flowchart:[5,8],folder:[3,4,6],follow:[0,4,10],forbidden:5,forc:0,form:[0,3,4],format:[3,4,5,7,11],formerli:[5,8],forward:[3,6],found:[0,4],frame:9,framework:[5,8],fre:[0,4],free:[5,8],freeboard:[5,8],freeboard_amd64:[5,8],freeboard_armhf:[5,8],french:0,from:[1,3,4,5,6,7,10],frontend:[5,8],full:4,further:4,futur:[5,8],game:3,gatewai:[3,9,11],gener:[4,5,8,11],ger:[0,4],get:[0,1,6,7,8,9,10,11],gif:4,git:[5,8],github:[0,4,8],gitlab:[0,5,6,8],gitlab_8:4,gitlabhq:0,give:3,given:[1,3,4],globalipv6address:3,globalipv6prefixlen:3,gnat:3,gnu:[5,8],golang:[5,8],gpu:[5,8,11],gpu_1:[5,8],gpudriv:11,graphdriv:[3,5],grayscal:4,greek:0,grk:[0,4],group:[5,8,11],groupadd:3,grow:[5,8],hairpinmod:3,handl:4,hardock14:5,hardwar:0,has:[4,11],hat:[5,8],have:[0,1,4,5,8],health:4,hello:4,help:[5,8],here:4,hide:4,high:[5,8],higher:[3,10],highli:[5,8],hkp:4,home:[5,8],host:[0,3,9,10],host_path:10,host_port:4,hostconfig:3,hostip:3,hostnam:[1,3,5,10,11],hostnamepath:3,hostport:3,hostspath:3,how:4,href:0,html:4,htmlclass:4,http:[0,1,2,3,4,5,7,8,10,11],http_port:[0,4],hub:[1,5,8],hun:[0,4],hungarian:0,hwaddr:9,hyphen:4,i18n:4,icon:[1,4,5,8],ifac:9,ifconfig:9,imag:[3,4,6,7,9,10],image_download:[1,5,7],image_export:1,image_nam:5,image_push:1,image_remov:[1,7],image_tag:5,image_typ:5,imageid:3,imap:4,impress:[5,8],includ:[4,5,6,8],incred:[5,8],independ:4,index:[4,7],individu:[5,8],inet:9,info:7,inform:[0,4,5,6],inherit:4,init:[1,5],initi:[1,4],input:[3,4],input_:10,insid:[3,4,10],inspect:[6,8],instal:[0,5,9],instanc:4,instruct:4,integ:[0,4],integr:[4,5,8],intel:11,intellig:[5,8],intend:[5,8],interact:[5,8],interfac:[3,4,5,8,9,11],internation:4,internet:[5,8],interpret:[5,8],iomaximumbandwidth:3,iomaximumiop:3,iot:[5,8],iot_default:[5,8],iot_en:8,iot_freeboard:[5,8],iot_kafka:[5,8],iot_mongo:[5,8],iot_mqtt:[5,8],iot_node_r:[5,8],iot_openhab:[5,8],iot_rabbit_mq:[5,8],iot_redi:[5,8],ipaddress:3,ipam:9,ipamconfig:3,ipcmod:3,ipprefixlen:3,ipv4_address:9,ipv6gatewai:3,irc:[5,8],ircd:3,irssi:[5,8],is_autom:5,is_offici:5,isadmin:11,isdir:11,iso:5,isol:3,issu:[5,8],ita:[0,4],italian:0,italiano:4,item:4,japanes:0,javascript:[5,8],jenkin:[5,8],jenkins_icon:[5,8],jessi:[5,8],jessie_8_amd64:[5,8],jessie_8_armhf:[5,8],join:[3,11],joomla:[5,8],jpn:[0,4],json:[0,1,3,4,5,7,8,10,11],just:4,kafka:[5,8],kafka_amd64:[5,8],kafka_armhf:[5,8],kei:[3,4,5,8],kernel:[5,8],kernelmemori:3,kernelvers:[5,8],keyserv:4,keyword:4,kill:0,kind:4,kit:4,kor:[0,4],korean:0,kvm:5,label:[3,4,5],labelhtmlclass:4,lang:0,languag:[0,4,5,8],laptop:[5,8],last:[3,4],lasttagtim:5,later:9,latest:[1,3,4,5,7,8,10],launch:4,layer:5,ldap:4,learn:[5,8],left:9,let:[4,5,8],letter:10,level:[3,5,6,7,8],lib:[3,5],librari:[5,8],libreoffic:[5,8],libreoffice_icon:[5,8],licens:[5,8],lightop:5,lightweight:[5,8],like:7,limit:[1,3,4,6,7],line:3,link:[3,9],linklocalipv6address:3,linklocalipv6prefixlen:3,linux:[3,4,5,8],linuxserv:[5,8],list:[0,2,4,6,7,10,11],list_en:8,listen:[5,8],load:[4,5,8,9],local:[3,4,5,7,9],locat:[1,5,8],log:[5,6,8],log_rot:8,logconfig:3,login:[4,7,11],login_refresh:11,logintim:11,logout:11,logpath:3,lose:4,low:3,lower:9,lowercas:4,lowerdir:3,lpd:3,lxc:[1,3,5,6,7,8,10,11],lxc_addr:8,lxc_auto:8,lxc_bridg:8,lxc_dhcp_max:8,lxc_dhcp_rang:8,lxc_dns_primari:8,lxc_dns_secondari:8,lxc_netmask:8,lxc_network:8,lxcbr0:[3,8],lxcversion:11,lxde:[5,8],lxqt:5,macaddress:3,machin:[5,8,11],made:[5,8],magyar:4,mail:3,main:4,mainli:6,mainlin:5,make:[4,5,8],makefil:4,man:3,manag:[3,4,5,8],manager_amd64:[5,8],manager_armhf:[5,8],mani:[4,9],manual:[4,9],map:4,markdown:4,mashup:[5,8],mask:9,master:[0,4,8],match:4,math:[5,8],mathemat:[5,8],max:8,maximum:[0,4],maximumretrycount:3,mean:[1,7,11],meet:4,memori:[1,3,6,11],memory_usag:11,memoryreserv:3,memoryswap:3,memoryswappi:3,mention:4,merg:3,mergeddir:3,messag:[0,3,4,5,7,8],metadata:[1,5,7],method:[5,9],metric:9,microsoft:[5,8],migrate_statu:8,million:[5,8],millisecond:[3,10],minecraft:[5,8],minecraft_icon:[5,8],minimum:4,minut:[0,4],mirror:[5,8],mnt:3,mod_proxi:4,mode:[3,9],modifi:4,modul:4,mongo:[5,8],mongo_icon:[5,8],mongodb:[5,8],mongodb_amd64:[5,8],mongodb_armhf:[5,8],monitor:[5,8],more:[0,7,10],mosquitto:[5,8],mosquitto_amd64:[5,8],mosquitto_armhf:[5,8],most:[4,5,8],mount:[3,4,10],mountlabel:3,mqtt:[5,8],mtu:9,multi:4,multicast:9,multipl:[5,8,10],multiplay:[5,8],must:[0,3,4,10],mxnet:[5,8],my_new_pass:5,my_new_us:5,my_pass:5,my_registri:8,my_us:5,mybusybox:1,myqnapcloud:11,mysql:[5,8],mysql_icon:[5,8],mysql_root_password:[5,8],n__note__:0,n_apt:3,name:[0,1,3,4,5,7,8,9,10,11],namespac:3,nanocpu:3,nat:3,nbackup:3,nbin:3,ndaemon:3,nederland:4,need:[0,4,9],needrestart:11,net:[4,9],net_bridg:11,netmask:[8,9,11],netn:3,network:[1,3,5,6,9,10],network_dock:8,networkid:3,networkmod:3,networkset:3,neural:[5,8],new_test:[5,7],newest:7,newimag:1,newtag:1,next:[4,11],ngame:3,nginx:[5,8],nginx_1:4,nginx_base_pag:4,nginx_icon:[5,8],nginx_nam:4,nginx_web_host_port_desc:4,ngnat:3,nic:9,nirc:3,nlist:3,nlogin:0,nlp:3,nmail:3,nman:3,nnew:3,nnobodi:3,nobodi:3,node:[5,8],nodejs_amd64:5,nodejs_icon:[5,8],nologin:3,none:9,nonexist:3,nop:5,nor:[0,4],norsk:4,norwegian:0,notat:4,note:0,notifi:11,notitl:4,novnc:[5,8],now:4,npassword:0,nproxi:3,nsy:3,nsync:3,ntopng:5,number:[0,3,5,7,11],nusernam:0,nuucp:3,nwww:3,nyour:0,object:[0,1,3,4,5,7,8,10,11],occur:5,odoo:[5,8],odooarm:[5,8],off:[4,10],offic:[5,8],offici:[5,8],offset:7,oldnam:5,oliv:11,onbuild:[3,5],one:[1,3,5,7,8,10],onli:[1,3,4,5,10],onlin:[5,8],oomkil:3,oomkilldis:3,oomscoreadj:3,open:[4,5,8],openerp:[5,8],openhab:[5,8],openssh:5,openstdin:[3,5],oper:[5,6,8],opt:9,option:[1,3,4,5,7,9,10],order:4,org:4,orient:[5,8],origin:[4,5,10],other:[0,1,5,8,11],out:4,outdat:11,outdatednotifi:11,output:3,overlai:[3,5],overrid:4,overrun:9,overwrit:3,own:[5,6,8,9],p80:4,pack:4,packag:[4,5,8],package_routin:[4,11],packet:9,page:[4,9],pair:4,panel:11,param:[1,5],paramet:[0,1,3,4,5,7,10,11],parent:[3,5],part:[4,5,8],passwd:3,password:[0,1,4,5,8,11],path:[0,1,3,5,7,8,10,11],paus:[3,7],percent:11,percent_buff:11,percent_cach:11,percentag:[8,11],perl:[5,8],permiss:[10,11],photo:[5,8],php:[2,5,8],physic:9,pid:3,pidmod:3,pidslimit:3,pixel:4,pkg_instal:4,pkg_main_remov:4,pkg_post_instal:4,pkg_post_remov:4,pkg_pre_instal:4,pkg_pre_remov:4,plai:[5,8],platform:[3,4,5,8],player:[5,8],pleas:[0,4],plugin:[5,8],png:[1,5,8],point:[4,10],pol:[0,4],polish:0,polski:4,pont:[5,8],ponte_amd64:[5,8],ponte_armhf:[5,8],pool:4,pop3:4,pop:4,por:[0,4],port:[0,1,3,4,5,6,7,8,11],portbind:3,portugues:0,post:[0,1,3,5,8,10,11],postgr:[5,8],postgresql:[5,8],postgresql_icon:[5,8],power:[5,8],pre:[5,8],prefer:[4,6],prerequisit:[0,4],present:[5,8],previou:4,primari:8,privat:[1,5,8],privateregistri:5,privileg:3,procedur:4,process:4,processlabel:3,processor:[5,8,11],product:4,program:[5,8],progress:1,project:[5,8],pronounc:4,propag:3,proper:4,properti:[0,4],protocol:[4,11],provid:[4,5,6,8,9],proxi:[3,4,6],proxypass:[0,4],proxypassrevers:4,proxyrequest:4,publish:3,publishallport:3,pull:4,purpos:[4,5,8],put:[0,3,4,8,10,11],pwd:4,py3:[5,8],python3:[5,8],python:[5,8],qbu:4,qcs:3,qcs_1:8,qcspassword:1,qcsuser:1,qcsversion:[5,8],qdk2:[4,5],qdk:4,qemu:5,qinstal:11,qiot:[5,8],qip:[0,1,3,5,7,8,10,11],qnap:[1,2,3,4,5,7,8],qnapna:[4,5,8],qnet:6,qnet_dhcp:9,qnet_dhcp_1:9,qnet_stat:9,qnet_static_1:9,qpkg:[1,5,6,8,11],qpkg_author:4,qpkg_displaynam:4,qpkg_name:4,qpkg_requir:4,qpkg_service_program:4,qpkg_summari:4,qpkg_timeout:4,qpkg_ver:4,qpkg_web_port:4,qpkg_webui:4,qport:[0,1,3,5,7,8,10,11],queri:[0,1,3,5,7,11],quick:6,quickli:[5,8],rabbitmq:[5,8],rabbitmq_amd64:[5,8],rabbitmq_armhf:[5,8],ram:0,randomli:[5,8],rang:8,rate:3,raw:4,read:[0,10],readonli:4,readonlyrootf:3,real:[5,8],reat:4,reboot:3,receiv:3,recent:11,recognit:[5,8],recommend:[5,9],record:7,recv:4,recycl:11,red:[5,8],red_amd64:[5,8],red_armhf:[5,8],redi:[5,8],redirect:4,redis_amd64:[5,8],redis_armhf:[5,8],redis_icon:[5,8],redmin:[5,8],refer:[0,4,5],reflect:[5,8],registri:[6,7,8,11],registry_nam:[1,5],rel:[3,10],relat:[5,8],releas:[5,8],reliabl:[5,8],rememb:1,rememberm:1,remot:[5,8],remov:[0,4,6,7,10],render:4,repo:[4,5,8],repo_branch:8,repo_project:8,repo_us:8,repodigest:5,report:[3,11],repositori:[1,4,5,6,7],repotag:5,repres:4,request:[0,1,3,5,7,8,9,10,11],requir:[0,1,3,4,5,10,11],resolv:3,resolvconfpath:3,resourc:[1,3,4,6,11],respons:[0,1,3,5,7,8,10,11],rest:6,restart:[0,6,7],restartcount:3,restartpolici:3,result:[1,5,7,8,11],revers:[4,6],review:[5,8],rich:[5,8],rom:[0,4],romanian:0,root:[0,3,4,5,8,11],root_qnet:9,root_qnet_dhcp_1:9,root_qnet_static_1:9,rootdir:5,rootf:5,row:7,rprivat:3,rubi:[5,8],ruby_amd64:5,rule:4,run:[0,1,3,4,5,7,8,9,11],runc:3,runtim:[3,5,8],rus:0,russian:0,rwm:10,same:[1,4,9,11],sameersbn:[5,8],sandboxid:3,sandboxkei:3,save:4,sbin:[3,5],scalabl:[5,8],schema:[0,4],scope:9,script:[5,8],scroll:9,search:6,second:[5,7],secondari:8,secondaryipaddress:3,secondaryipv6address:3,section:4,securityopt:3,see:9,select:9,selenium:[3,10,11],self:5,sensit:4,sequenc:10,serv:4,server:[0,3,4,5,6,8,9,11],servic:[0,4,7,9],set:[1,4,5,6,9,10,11],seterrychen:[5,8],setfattr:8,settodefault:5,setup:4,sexi:[5,8],sha256:[3,5],share:[3,5,6,8,10],shareabl:3,sharefold:11,ship:4,shmsize:3,should:[4,5],show:[4,9],shown:[4,9],side:[5,8,9],sign:[4,5],similar:4,simpl:[5,8],simpli:4,simplifi:0,situat:9,size:[3,5,11],sks:4,small:[5,8],smoothli:4,smtp:4,snapshot:11,softwar:[5,8],someth:7,sound_and_alsa_:10,sourc:[1,3,4,5,6,8],spa:[0,4],spanish:0,spec:[3,11],specif:[0,1,4,5,9],specifi:[3,4,9,10],speed:8,sphinx:8,spool:3,spreadsheet:[5,8],spy:[5,8],spy_amd64:[5,8],src:4,ssh:[0,5],ssh_port:0,ssl:5,stabl:5,stamp:7,standard:[5,8],star_count:5,start:[0,1,6,7,9],startdat:11,startedat:3,state:[1,3,5,7,10],station:[1,2,3,4,5,8,9,11],statu:[3,8,11],stdinonc:[3,5],step:[4,11],stop:[0,4,6,7],storag:6,store:[4,5,8],str:3,string:[0,1,3,4,5,7,8,10,11],structur:[5,8],subnet:9,subtitl:4,success:[1,3,4,5,7,8],successfulli:[4,7],sudo:4,suit:[5,8],suomi:4,supershel:5,support:[0,3,4,5,8,9],suppos:4,sure:4,svenska:4,swe:[0,4],swedish:0,sync:3,syntax:4,sys:3,system:[3,4,5,6,7,8],tab:4,tag:[1,3,6,7],tail:3,take:[4,5],taken:4,tar:[5,8],target:[0,4],task:[6,7,10],task_id:1,tcp:[3,10,11],tcpport:[3,7],technolog:[5,6,8],tee:4,templat:[1,4,6],tensorflow:[5,8],terrychu:[5,8],test1:10,test2:10,test:[0,1,3,5,7,10,11],text:7,tgz:[1,3],tha:[0,4],thai:0,than:[3,7,10],thei:4,them:0,theme:[5,8],therefor:9,thi:[1,3,4,5,8,9,11],thing:[4,5,8],thread:11,three:4,tid:7,time:[1,3,4,5,7,8,10,11],timeout:7,timestamp:7,titl:[0,4],tls:[5,11],togeth:[5,8],tool:[4,5,8],toolkit:[5,8],topic:[5,8],total:11,total_s:8,totalcount:5,totals:11,tpl:4,track:[5,8],tradit:[0,4],train:[5,8],transfer_s:8,translat:4,transmit:3,trust:5,trusti:[1,3,5,7,8,10],trusty_14:[5,8],tty:[3,5],tty_:10,ttyj:5,tur:[0,4],turk:4,turkish:0,twentyfour:[5,8],twentyfour_24_amd64:[5,8],two:7,txqueuelen:9,txt:[0,1,3,5,7,8,10,11],type:[0,1,3,4,5,7,8,10,11],ubuntu:[1,3,4,5,7,8,9,10],ubuntu_amd64:5,ubuntu_armhf:5,ubuntu_icon:[1,5,8],udp:[3,10,11],uid:3,ulimit:3,under:[5,8],uninstal:4,uniqu:[1,4],unit:10,unix:4,unless:1,unpaus:7,updat:[4,7,10],upgrad:4,upper:3,upperdir:3,url:[1,5],usag:[3,10,11],use:[4,5,8,9,11],used:[0,4,5,8,11],useds:11,user:[1,3,4,5,6,7,8,11],usernam:[0,1,3,4,5,8,11],usernsmod:3,using:[0,4,5,8,9],usr:[3,5],usual:4,utest:[1,3,7,10],utest_import1:1,util:[5,6,8],utsmod:3,uucp:3,valid:4,validataion:4,validationmessag:4,valu:[4,5,8,11],variabl:[3,4,5,8],vendor:[5,8],verifi:4,version:[3,4,5,6,8,9,10,11],video4linux_:[1,3,10],virtual:[0,6,9,11],virtual_path:[0,1],virtuals:5,visual:[5,8],vnc:[5,8],vol1:3,vol2:3,volum:[3,4,5,10],volumedriv:3,volumesfrom:3,vswitchnam:11,wai:[4,9],wait:[1,4,5,7],walkerle:4,want:[4,7],warn:7,web:[4,5,6,8,11],websit:[4,5,8],well:4,what:6,when:[1,4,5,8,9],which:[1,4,5,8,11],who:[5,7,8],whole:[5,8],widget:[5,8],wiki:[5,8],wikipedia:6,wire:[5,8],without:[0,3,5,8,9],wizard:[0,4,8],word:[4,5,8],wordpress:[5,8],work:3,workdir:3,working_dir:3,workingdir:[3,5],workspac:6,world:[4,5,8],would:4,write:[4,9,10,11],writer:[5,8],written:[5,8],wrong:7,www:[2,3],x80:11,x86_64:11,xdelet:[0,1,3,5,7,8,10],xenial:[4,5,8],xenial_16:[5,8],xget:[0,1,3,5,7,8,10,11],xpost:[0,1,3,5,8,10,11],xput:[0,3,8,10,11],xxxxxx:9,yaml:4,yen3:[5,8],yet:10,yml:[4,9],you:[4,5,7,8,9],your:[3,5,6,8,9],zip:11,zookeep:[5,8]},titles:["Application","Background tasks","Change Log","Container","Dockerized QPKG","Image","QNAP Container Station","Log and Event","Preference","Qnet","Resource","System"],titleterms:{"default":5,"export":[1,3],"import":1,NAS:4,add:[1,4,5],applic:[0,1],authent:11,auto:10,background:1,basic:3,build:4,certif:11,chang:2,code:4,command:9,compon:4,compos:9,configur:4,contain:[1,3,6,9],content:[0,1,3,4,5,6,7,8,9,10,11],cpu:10,creat:[1,3,4,9],custom:4,defin:4,delet:1,devic:10,docker:[4,9],download:[1,4,5],dqpkg:4,edit:5,event:7,exampl:4,fetch:3,file:[4,11],folder:11,forward:10,from:9,get:[3,4,5],git:4,gitlab:4,imag:[1,5,8],inform:[3,11],inspect:[3,5],instal:4,limit:10,list:[1,3,5,8],log:[2,3,7],memori:10,network:[8,11],nginx:4,other:4,own:4,ping:5,port:10,prefer:8,project:4,proxi:0,push:[1,5],qnap:6,qnet:9,qpkg:4,quick:4,registri:[1,5],remov:[1,3,5],repositori:8,resourc:10,restart:3,revers:0,routin:4,sampl:4,search:5,set:[3,8],share:[4,11],start:[3,4,10],station:6,stop:3,storag:10,system:11,tag:5,task:1,templat:0,under:4,upgrad:1,user:0,what:4,workspac:8,your:4}})