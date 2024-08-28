const Bornforthis = {
  // 欢迎语
  setWelcome_info: async () => {
    let ipStore = saveToLocal.get('location');

    try {
      if (!ipStore) {
        const response = await fetch(`https://ip.bornforthis.cn/Local`);
        // const response = await fetch(`https://api.qjqq.cn/api/Local`);
        const data = await response.json();

        // if (data.code === "Success") {
        // if (data.code === "200") {
        if (data.msg === "success") {
          // console.info(data);
          ipStore = data;
          /*
          第一行代码 将 location 的值保存到本地存储中，有效期为 24 小时。
          第二行代码 将 location 的值保存到本地存储中，有效期为 0.5 秒。
          */
          saveToLocal.set('location', ipStore, 3600 * 24);
          // saveToLocal.set('location', ipStore, 0.5);
          Bornforthis.showWelcome(ipStore);
        }
      }else{
        Bornforthis.showWelcome(ipStore);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  },
  //根据经纬度计算两点距离(点1经度,点1纬度,点2经度,点2纬度)
  getDistance: (e1, n1, e2, n2) => {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
      e *= PI / 180
      n *= PI / 180
      return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }
    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
  },
  //根据国家、省份、城市信息自定义欢迎语
  showWelcome: (ipStore) => {
    const WelcomeInfo = document.getElementById("welcome-info"),
      // IP = ipStore.ip || "未知";
      IP = ipStore.data.ip || "未知";
    // let dist = Bornforthis.getDistance(填写你的经度, 填写你的纬度, ipStore.data.lng, ipStore.data.lat),
    let dist = Bornforthis.getDistance(118.9929, 25.4536, ipStore.data.lng, ipStore.data.lat),
      address,
      welcome_info;
    //根据国家、省份、城市信息自定义欢迎语
    //海外地区不支持省份及城市信息
    switch (ipStore.data.country) {
      case "日本":
        welcome_info = "よろしく，一起去看樱花吗";
        break;
      case "美国":
        welcome_info = "Make America Great Again";
        break;
      case "英国":
        welcome_info = "想同你一起夜乘伦敦眼";
        break;
      case "俄罗斯":
        welcome_info = "干了这瓶伏特加";
        break;
      case "法国":
        welcome_info = "C'est La Vie";
        break;
      case "德国":
        welcome_info = "Die Zeit verging im Fluge";
        break;
      case "澳大利亚":
        welcome_info = "一起去大堡礁吧";
        break;
      case "加拿大":
        welcome_info = "拾起一片枫叶赠予你";
        break;
      case "中国":
        address = ipStore.data.prov + " " + ipStore.data.city + " " + ipStore.data.district;
        switch (ipStore.data.prov) {
          case "北京市":
            address = "北京市";
            welcome_info = "北——京——欢迎你";
            break;
          case "天津市":
            address = "天津市";
            welcome_info = "讲段相声吧";
            break;
          case "重庆市":
            address = "重庆市";
            welcome_info = "高德地图:已到达重庆，下面交给百度地图导航"
            break;
          case "河北省":
            welcome_info = "山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山";
            break;
          case "山西省":
            welcome_info = "展开坐具长三尺，已占山河五百余";
            break;
          case "内蒙古自治区":
            welcome_info = "天苍苍，野茫茫，风吹草低见牛羊";
            break;
          case "辽宁省":
            welcome_info = "我想吃烤鸡架";
            break;
          case "吉林省":
            welcome_info = "状元阁就是东北烧烤之王";
            break;
          case "黑龙江省":
            welcome_info = "很喜欢哈尔滨大剧院";
            break;
          case "上海市":
            address = "上海市";
            welcome_info = "众所周知，中国只有两个城市";
            break;
          case "江苏省":
            switch (ipStore.data.city) {
              case "南京市":
                welcome_info = "欢迎来自安徽省南京市的小伙伴";
                break;
              case "苏州市":
                welcome_info = "上有天堂，下有苏杭";
                break;
              case "泰州市":
                welcome_info = "这里也是我的故乡";
                break;
              default:
                welcome_info = "散装是必须要散装的";
                break;
            }
            break;
          case "浙江省":
            welcome_info = "东风渐绿西湖柳，雁已还人未南归";
            break;
          case "安徽省":
            welcome_info = "蚌埠住了，芜湖起飞";
            break;
          case "福建省":
            welcome_info = "井邑白云间，岩城远带山";
            break;
          case "江西省":
            welcome_info = "落霞与孤鹜齐飞，秋水共长天一色";
            break;
          case "山东省":
            welcome_info = "遥望齐州九点烟，一泓海水杯中泻";
            break;
          case "湖北省":
            welcome_info = "来碗热干面";
            break;
          case "湖南省":
            welcome_info = "74751，长沙斯塔克";
            break;
          case "广东省":
            welcome_info = "老板来两斤福建人";
            break;
          case "广西壮族自治区":
            welcome_info = "桂林山水甲天下";
            break;
          case "海南省":
            welcome_info = "朝观日出逐白浪，夕看云起收霞光";
            break;
          case "四川省":
            welcome_info = "康康川妹子";
            break;
          case "贵州省":
            welcome_info = "茅台，学生，再塞200";
            break;
          case "云南省":
            welcome_info = "玉龙飞舞云缠绕，万仞冰川直耸天";
            break;
          case "西藏自治区":
            welcome_info = "躺在茫茫草原上，仰望蓝天";
            break;
          case "陕西省":
            welcome_info = "来份臊子面加馍";
            break;
          case "甘肃省":
            welcome_info = "羌笛何须怨杨柳，春风不度玉门关";
            break;
          case "青海省":
            welcome_info = "牛肉干和老酸奶都好好吃";
            break;
          case "宁夏回族自治区":
            welcome_info = "大漠孤烟直，长河落日圆";
            break;
          case "新疆维吾尔自治区":
            welcome_info = "驼铃古道丝绸路，胡马犹闻唐汉风";
            break;
          case "台湾省":
            welcome_info = "我在这头，大陆在那头";
            break;
          case "香港特别行政区":
            address = "香港特别行政区";
            welcome_info = "永定贼有残留地鬼嚎，迎击光非岁玉";
            break;
          case "澳门特别行政区":
            address = "澳门特别行政区";
            welcome_info = "性感荷官，在线发牌";
            break;
          default:
            welcome_info = "带我去你的城市逛逛吧";
            break;
        }
        break;
      default:
        welcome_info = "带我去你的国家看看吧";
        break;
    }
    //判断时间
    let timeChange,
      date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span>🌤️上午好，一日之计在于晨</span>";
    else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span>☀️中午好，该摸鱼吃午饭了</span>";
    else if (date.getHours() >= 13 && date.getHours() < 15) timeChange = "<span>🕞下午好，懒懒地睡个午觉吧</span>";
    else if (date.getHours() >= 15 && date.getHours() < 16) timeChange = "<span>🍵三点几啦，饮茶先啦</span>";
    else if (date.getHours() >= 16 && date.getHours() < 19) timeChange = "<span>🌇夕阳无限好，只是近黄昏</span>";
    else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span>🌔晚上好，夜生活嗨起来</span>";
    else timeChange = "🌌夜深了，早点休息，少熬夜";

    //自定义文本需要放的位置
    WelcomeInfo && (WelcomeInfo.innerHTML = `🙋欢迎来自 <strong>${address}</strong> 的小伙伴<br>
    😊<strong>${welcome_info}</strong><br>
    🗺️您距离 <strong>AI悦创</strong> 约有 <strong>${dist}</strong> 公里！<br>
    当前 IP 地址为：<br>
    <strong style="font-size:12px;"><psw>${IP}</psw></strong><br>
    <strong>${timeChange}！</strong>`);

  }
}
// 初始化并调用
document.addEventListener("DOMContentLoaded", function () {
  Bornforthis.setWelcome_info();
});
