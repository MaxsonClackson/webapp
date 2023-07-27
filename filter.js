function _createElement(tag, class_=null, text=null, src_=null) {
    var element = document.createElement(tag);
    if (class_ != null) {
        if (typeof class_ == 'string') {
            element.classList.add(class_);
        }
        else if (typeof class_ == 'object') {
            while (class_) {
                element.classList.add(class_.pop(0));
            }
        }
    }
    if (text != null) {
        element.textContent = text;
    }
    if (src_ != null) {
        element.src = src_;
    }
    return element
}

function loadBubbleSettingField(element, dict_setting) {
    var container = document.getElementsByClassName('container')[0];
    if (container.children.length != 0) {
        while (container.firstElementChild){
            container.firstElementChild.remove();
        }
    }
    var h3 = _createElement('h3', 'setting-title', element.textContent);
    container.appendChild(h3);
    for (var key in dict_setting) {
        var value = dict_setting[key];
        var div = _createElement('div', 'setting-bubble', value);
        div.id = key;
        container.appendChild(div);
    }
}

function loadExteriorSetting(element) {
    var exterior_dict_html_id = {'exterior_all': 'All', 'exterior_FN': 'Factory New', 'exterior_MW': 'Minimal Wear', 'exterior_FT': 'Field Tested', 'exterior_WW': 'Well Worn', 'exterior_BS': 'Battle Scarred'};
    loadBubbleSettingField(element, exterior_dict_html_id);
}

function loadQualitySetting(element) {
    var quality_dict_html_id = {'quality_cover': 'Covert/Тайное', 'quality_classified': 'Classified/Засекреченное', 'quality_restricted': 'Restricted/Запрещенное', 'quality_milspec': 'Mil-Spec/Армейское', 'quality_industrial': 'Industrial/Промышленное', 'quality_consumer': 'Consumer/Ширпотреб'};
    loadBubbleSettingField(element, quality_dict_html_id);
}

function loadCollectionSetting() {
    var collection = JSON.parse('[{"id": "the-anubis-collection", "hash_name": "The Anubis Collection", "hash_name_ru": "The Anubis Collection", "release_date": 1682380800000, "path_img": "/skins/Collection/The Anubis Collection.png"}, {"id": "the-revolution-collection", "hash_name": "The Revolution Collection", "hash_name_ru": "The Revolution Collection", "release_date": 1675987200000, "path_img": "/skins/Collection/The Revolution Collection.png"}, {"id": "the-recoil-collection", "hash_name": "The Recoil Collection", "hash_name_ru": "The Recoil Collection", "release_date": 1656633600000, "path_img": "/skins/Collection/The Recoil Collection.png"}, {"id": "the-dreams-nightmares-collection", "hash_name": "The Dreams & Nightmares Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0413\u0440\u0451\u0437\u044b \u0438 \u043a\u043e\u0448\u043c\u0430\u0440\u044b\u00bb", "release_date": 1642723200000, "path_img": "/skins/Collection/The Dreams & Nightmares Collection.png"}, {"id": "the-2021-train-collection", "hash_name": "The 2021 Train Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f Train 2021", "release_date": 1632268800000, "path_img": "/skins/Collection/The 2021 Train Collection.png"}, {"id": "the-2021-dust-2-collection", "hash_name": "The 2021 Dust 2 Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f Dust 2 2021", "release_date": 1632268800000, "path_img": "/skins/Collection/The 2021 Dust 2 Collection.png"}, {"id": "the-2021-mirage-collection", "hash_name": "The 2021 Mirage Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f Mirage 2021", "release_date": 1632268800000, "path_img": "/skins/Collection/The 2021 Mirage Collection.png"}, {"id": "the-2021-vertigo-collection", "hash_name": "The 2021 Vertigo Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f Vertigo 2021", "release_date": 1632268800000, "path_img": "/skins/Collection/The 2021 Vertigo Collection.png"}, {"id": "the-operation-riptide-collection", "hash_name": "The Operation Riptide Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u00ab\u0425\u0438\u0449\u043d\u044b\u0435 \u0432\u043e\u0434\u044b\u00bb", "release_date": 1632268800000, "path_img": "/skins/Collection/The Operation Riptide Collection.png"}, {"id": "the-snakebite-collection", "hash_name": "The Snakebite Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0417\u043c\u0435\u0438\u043d\u044b\u0439 \u0443\u043a\u0443\u0441\u00bb", "release_date": 1620000000000, "path_img": "/skins/Collection/The Snakebite Collection.png"}, {"id": "the-operation-broken-fang-collection", "hash_name": "The Operation Broken Fang Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u00ab\u0421\u043b\u043e\u043c\u0430\u043d\u043d\u044b\u0439 \u043a\u043b\u044b\u043a\u00bb", "release_date": 1606983980202, "path_img": "/skins/Collection/The Operation Broken Fang Collection.png"}, {"id": "the-control-collection", "hash_name": "The Control Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u00bb", "release_date": 1606953600000, "path_img": "/skins/Collection/The Control Collection.png"}, {"id": "the-ancient-collection", "hash_name": "The Ancient Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abAncient\u00bb", "release_date": 1606953600000, "path_img": "/skins/Collection/The Ancient Collection.png"}, {"id": "the-havoc-collection", "hash_name": "The Havoc Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0425\u0430\u043e\u0441\u00bb", "release_date": 1606953600000, "path_img": "/skins/Collection/The Havoc Collection.png"}, {"id": "the-fracture-collection", "hash_name": "The Fracture Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0420\u0430\u0437\u043b\u043e\u043c\u00bb", "release_date": 1596672000000, "path_img": "/skins/Collection/The Fracture Collection.png"}, {"id": "the-prisma-2-collection", "hash_name": "The Prisma 2 Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u041f\u0440\u0438\u0437\u043c\u0430 2\u00bb", "release_date": 1585612800000, "path_img": "/skins/Collection/The Prisma 2 Collection.png"}, {"id": "the-canals-collection", "hash_name": "The Canals Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abCanals\u00bb", "release_date": 1574035200000, "path_img": "/skins/Collection/The Canals Collection.png"}, {"id": "the-st-marc-collection", "hash_name": "The St. Marc Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abSt. Marc\u00bb", "release_date": 1574035200000, "path_img": "/skins/Collection/The St. Marc Collection.png"}, {"id": "the-norse-collection", "hash_name": "The Norse Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0421\u0435\u0432\u0435\u0440\u00bb", "release_date": 1574035200000, "path_img": "/skins/Collection/The Norse Collection.png"}, {"id": "the-shattered-web-collection", "hash_name": "The Shattered Web Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0420\u0430\u0441\u043a\u043e\u043b\u043e\u0442\u0430\u044f \u0441\u0435\u0442\u044c\u00bb", "release_date": 1574035200000, "path_img": "/skins/Collection/The Shattered Web Collection.png"}, {"id": "the-cs20-collection", "hash_name": "The CS20 Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abCS20\u00bb", "release_date": 1571356800000, "path_img": "/skins/Collection/The CS20 Collection.png"}, {"id": "the-x-ray-collection", "hash_name": "The X-Ray Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0420\u0435\u043d\u0442\u0433\u0435\u043d\u00bb", "release_date": 1569801600000, "path_img": "/skins/Collection/The X-Ray Collection.png"}, {"id": "the-prisma-collection", "hash_name": "The Prisma Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u041f\u0440\u0438\u0437\u043c\u0430\u00bb", "release_date": 1552435200000, "path_img": "/skins/Collection/The Prisma Collection.png"}, {"id": "the-clutch-collection", "hash_name": "The Clutch Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0420\u0435\u0448\u0430\u044e\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442\u00bb", "release_date": 1544832000000, "path_img": "/skins/Collection/The Clutch Collection.png"}, {"id": "the-blacksite-collection", "hash_name": "The Blacksite Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abBlacksite\u00bb", "release_date": 1544054400000, "path_img": "/skins/Collection/The Blacksite Collection.png"}, {"id": "the-danger-zone-collection", "hash_name": "The Danger Zone Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0417\u0430\u043f\u0440\u0435\u0442\u043d\u0430\u044f \u0437\u043e\u043d\u0430\u00bb", "release_date": 1544054400000, "path_img": "/skins/Collection/The Danger Zone Collection.png"}, {"id": "the-2018-nuke-collection", "hash_name": "The 2018 Nuke Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abNuke 2018\u00bb", "release_date": 1535760000000, "path_img": "/skins/Collection/The 2018 Nuke Collection.png"}, {"id": "the-2018-inferno-collection", "hash_name": "The 2018 Inferno Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abInferno 2018\u00bb", "release_date": 1535760000000, "path_img": "/skins/Collection/The 2018 Inferno Collection.png"}, {"id": "the-horizon-collection", "hash_name": "The Horizon Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u00bb", "release_date": 1533254400000, "path_img": "/skins/Collection/The Horizon Collection.png"}, {"id": "the-spectrum-2-collection", "hash_name": "The Spectrum 2 Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0421\u043f\u0435\u043a\u0442\u0440 2\u00bb", "release_date": 1505347200000, "path_img": "/skins/Collection/The Spectrum 2 Collection.png"}, {"id": "operation-hydra", "hash_name": "Operation Hydra", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u00ab\u0413\u0438\u0434\u0440\u0430\u00bb", "release_date": 1495497600000, "path_img": "/skins/Collection/Operation Hydra.png"}, {"id": "the-spectrum-collection", "hash_name": "The Spectrum Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0421\u043f\u0435\u043a\u0442\u0440\u00bb", "release_date": 1489536000000, "path_img": "/skins/Collection/The Spectrum Collection.png"}, {"id": "the-glove-collection", "hash_name": "The Glove Collection", "hash_name_ru": "\u041f\u0435\u0440\u0447\u0430\u0442\u043e\u0447\u043d\u0430\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f", "release_date": 1480291200000, "path_img": "/skins/Collection/The Glove Collection.png"}, {"id": "the-gamma-2-collection", "hash_name": "The Gamma 2 Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0413\u0430\u043c\u043c\u0430 2\u00bb", "release_date": 1471478400000, "path_img": "/skins/Collection/The Gamma 2 Collection.png"}, {"id": "the-gamma-collection", "hash_name": "The Gamma Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0413\u0430\u043c\u043c\u0430\u00bb", "release_date": 1465948800000, "path_img": "/skins/Collection/The Gamma Collection.png"}, {"id": "the-chroma-3-collection", "hash_name": "The Chroma 3 Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u0438\u0437 \u0445\u0440\u043e\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u0435\u0439\u0441\u0430 #3", "release_date": 1461715200000, "path_img": "/skins/Collection/The Chroma 3 Collection.png"}, {"id": "the-wildfire-collection", "hash_name": "The Wildfire Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0414\u0438\u043a\u043e\u0435 \u043f\u043b\u0430\u043c\u044f\u00bb", "release_date": 1455667200000, "path_img": "/skins/Collection/The Wildfire Collection.png"}, {"id": "the-revolver-case-collection", "hash_name": "The Revolver Case Collection", "hash_name_ru": "\u0420\u0435\u0432\u043e\u043b\u044c\u0432\u0435\u0440\u043d\u0430\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f", "release_date": 1449532800000, "path_img": "/skins/Collection/The Revolver Case Collection.png"}, {"id": "the-shadow-collection", "hash_name": "The Shadow Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u043a\u0435\u0439\u0441\u0430", "release_date": 1442534400000, "path_img": "/skins/Collection/The Shadow Collection.png"}, {"id": "the-rising-sun-collection", "hash_name": "The Rising Sun Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0420\u0430\u0441\u0441\u0432\u0435\u0442\u00bb", "release_date": 1432598400000, "path_img": "/skins/Collection/The Rising Sun Collection.png"}, {"id": "the-gods-and-monsters-collection", "hash_name": "The Gods and Monsters Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0411\u043e\u0433\u0438 \u0438 \u0447\u0443\u0434\u043e\u0432\u0438\u0449\u0430\u00bb", "release_date": 1432598400000, "path_img": "/skins/Collection/The Gods and Monsters Collection.png"}, {"id": "the-chop-shop-collection", "hash_name": "The Chop Shop Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0427\u0438\u043a-\u0447\u0438\u043a\u00bb", "release_date": 1432598400000, "path_img": "/skins/Collection/The Chop Shop Collection.png"}, {"id": "the-falchion-collection", "hash_name": "The Falchion Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0424\u0430\u043b\u044c\u0448\u0438\u043e\u043d\u00bb", "release_date": 1432598400000, "path_img": "/skins/Collection/The Falchion Collection.png"}, {"id": "the-chroma-2-collection", "hash_name": "The Chroma 2 Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u0438\u0437 \u0445\u0440\u043e\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u0435\u0439\u0441\u0430 #2", "release_date": 1429056000000, "path_img": "/skins/Collection/The Chroma 2 Collection.png"}, {"id": "the-chroma-collection", "hash_name": "The Chroma Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u0438\u0437 \u0445\u0440\u043e\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u0435\u0439\u0441\u0430", "release_date": 1420675200000, "path_img": "/skins/Collection/The Chroma Collection.png"}, {"id": "the-vanguard-collection", "hash_name": "The Vanguard Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0410\u0432\u0430\u043d\u0433\u0430\u0440\u0434\u00bb", "release_date": 1415664000000, "path_img": "/skins/Collection/The Vanguard Collection.png"}, {"id": "the-cache-collection", "hash_name": "The Cache Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abCache\u00bb", "release_date": 1407456000000, "path_img": "/skins/Collection/The Cache Collection.png"}, {"id": "the-esports-2014-summer-collection", "hash_name": "The eSports 2014 Summer Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abeSports 2014 Summer\u00bb", "release_date": 1404950400000, "path_img": "/skins/Collection/The eSports 2014 Summer Collection.png"}, {"id": "the-breakout-collection", "hash_name": "The Breakout Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u041f\u0440\u043e\u0440\u044b\u0432\u00bb", "release_date": 1404172800000, "path_img": "/skins/Collection/The Breakout Collection.png"}, {"id": "the-baggage-collection", "hash_name": "The Baggage Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abBaggage\u00bb", "release_date": 1404172800000, "path_img": "/skins/Collection/The Baggage Collection.png"}, {"id": "the-overpass-collection", "hash_name": "The Overpass Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abOverpass\u00bb", "release_date": 1404172800000, "path_img": "/skins/Collection/The Overpass Collection.png"}, {"id": "the-cobblestone-collection", "hash_name": "The Cobblestone Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abCobblestone\u00bb", "release_date": 1404172800000, "path_img": "/skins/Collection/The Cobblestone Collection.png"}, {"id": "the-bank-collection", "hash_name": "The Bank Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abBank\u00bb", "release_date": 1398902400000, "path_img": "/skins/Collection/The Bank Collection.png"}, {"id": "the-huntsman-collection", "hash_name": "The Huntsman Collection", "hash_name_ru": "\u041e\u0445\u043e\u0442\u043d\u0438\u0447\u044c\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f", "release_date": 1398902400000, "path_img": "/skins/Collection/The Huntsman Collection.png"}, {"id": "the-phoenix-collection", "hash_name": "The Phoenix Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0424\u0435\u043d\u0438\u043a\u0441\u00bb", "release_date": 1392854400000, "path_img": "/skins/Collection/The Phoenix Collection.png"}, {"id": "the-arms-deal-3-collection", "hash_name": "The Arms Deal 3 Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abArms Deal 3\u00bb", "release_date": 1392163200000, "path_img": "/skins/Collection/The Arms Deal 3 Collection.png"}, {"id": "the-esports-2013-winter-collection", "hash_name": "The eSports 2013 Winter Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abeSports 2013 Winter\u00bb", "release_date": 1387324800000, "path_img": "/skins/Collection/The eSports 2013 Winter Collection.png"}, {"id": "the-winter-offensive-collection", "hash_name": "The Winter Offensive Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abWinter Offensive\u00bb", "release_date": 1387324800000, "path_img": "/skins/Collection/The Winter Offensive Collection.png"}, {"id": "the-italy-collection", "hash_name": "The Italy Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abItaly\u00bb", "release_date": 1385510400000, "path_img": "/skins/Collection/The Italy Collection.png"}, {"id": "the-mirage-collection", "hash_name": "The Mirage Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abMirage\u00bb", "release_date": 1385510400000, "path_img": "/skins/Collection/The Mirage Collection.png"}, {"id": "the-safehouse-collection", "hash_name": "The Safehouse Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abSafehouse\u00bb", "release_date": 1385510400000, "path_img": "/skins/Collection/The Safehouse Collection.png"}, {"id": "the-dust-2-collection", "hash_name": "The Dust 2 Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abDust 2\u00bb", "release_date": 1385510400000, "path_img": "/skins/Collection/The Dust 2 Collection.png"}, {"id": "the-lake-collection", "hash_name": "The Lake Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abLake\u00bb", "release_date": 1385510400000, "path_img": "/skins/Collection/The Lake Collection.png"}, {"id": "the-train-collection", "hash_name": "The Train Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abTrain\u00bb", "release_date": 1385510400000, "path_img": "/skins/Collection/The Train Collection.png"}, {"id": "the-arms-deal-2-collection", "hash_name": "The Arms Deal 2 Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abArms Deal 2\u00bb", "release_date": 1383868800000, "path_img": "/skins/Collection/The Arms Deal 2 Collection.png"}, {"id": "the-alpha-collection", "hash_name": "The Alpha Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0410\u043b\u044c\u0444\u0430\u00bb", "release_date": 1379548800000, "path_img": "/skins/Collection/The Alpha Collection.png"}, {"id": "the-bravo-collection", "hash_name": "The Bravo Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00ab\u0411\u0440\u0430\u0432\u043e\u00bb", "release_date": 1379548800000, "path_img": "/skins/Collection/The Bravo Collection.png"}, {"id": "the-assault-collection", "hash_name": "The Assault Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abAssault\u00bb", "release_date": 1376438400000, "path_img": "/skins/Collection/The Assault Collection.png"}, {"id": "the-dust-collection", "hash_name": "The Dust Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abDust\u00bb", "release_date": 1376438400000, "path_img": "/skins/Collection/The Dust Collection.png"}, {"id": "the-office-collection", "hash_name": "The Office Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abOffice\u00bb", "release_date": 1376438400000, "path_img": "/skins/Collection/The Office Collection.png"}, {"id": "the-nuke-collection", "hash_name": "The Nuke Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abNuke\u00bb", "release_date": 1376438400000, "path_img": "/skins/Collection/The Nuke Collection.png"}, {"id": "the-aztec-collection", "hash_name": "The Aztec Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abAztec\u00bb", "release_date": 1376438400000, "path_img": "/skins/Collection/The Aztec Collection.png"}, {"id": "the-inferno-collection", "hash_name": "The Inferno Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abInferno\u00bb", "release_date": 1376438400000, "path_img": "/skins/Collection/The Inferno Collection.png"}, {"id": "the-arms-deal-collection", "hash_name": "The Arms Deal Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abArms Deal\u00bb", "release_date": 1376438400000, "path_img": "/skins/Collection/The Arms Deal Collection.png"}, {"id": "the-militia-collection", "hash_name": "The Militia Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abMilitia\u00bb", "release_date": 1376438400000, "path_img": "/skins/Collection/The Militia Collection.png"}, {"id": "the-vertigo-collection", "hash_name": "The Vertigo Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abVertigo\u00bb", "release_date": 1376438400000, "path_img": "/skins/Collection/The Vertigo Collection.png"}, {"id": "the-esports-2013-collection", "hash_name": "The eSports 2013 Collection", "hash_name_ru": "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u00abeSports 2013\u00bb", "release_date": 1376438400000, "path_img": "/skins/Collection/The eSports 2013 Collection.png"}]');
    var container = document.getElementsByClassName('container')[0];
    if (container.children.length != 0) {
        while (container.firstElementChild){
            container.firstElementChild.remove();
        }
    }
    var h3 = _createElement('h3', class_='setting-title', text='Collection');
    container.appendChild(h3);

    var flex_wrap = _createElement('div', class_='flex-wrap');

    var data_list = []
    for (var i=0; i < collection.length; i++) {
        d = collection[i];
        data_list.push(d['release_date']);
    }
    data_list.sort();

    var col_control = []
    while (data_list.length > 0) {
        var d_time = data_list.pop(-1);
        for (var i=0; i < collection.length; i++) {
              d_collect = collection[i];
              if (d_collect['release_date'] == d_time && col_control.includes(d_collect['hash_name']) == false) {
                    // создаем item
                    var div_item = _createElement('div', class_='item');
                    // создаем дочерние item
                    // lable
                    var div_lable = _createElement('div', class_='item-label', text=d_collect['hash_name']);
                    // image_div
                    var div_img = _createElement('div', class_='item-img');
                    var img = _createElement('img', undefined, undefined, src_=`./media/images/collection/${d_collect['hash_name']}.png`);
                    div_img.appendChild(img)
                    // div button
                    var div_button = _createElement('div', class_='item-button');
                    var button = _createElement('button', 'item-collection-button', 'Выбрать');
                    button.value = d_collect['id']
                    div_button.appendChild(button)
                    div_item.appendChild(div_lable)
                    div_item.appendChild(div_img)
                    div_item.appendChild(div_button)
                    flex_wrap.appendChild(div_item)
                    col_control.push(d_collect['hash_name'])
                    break
              }
        }
    }
    container.appendChild(flex_wrap)
}

function chooseCollection (element) {
    element.textContent = '';
    var load_gif = _createElement('img', undefined, undefined, src_='./media/loading.gif');
    element.appendChild(load_gif);

    var collection_id = element.value


}

function settingFieldEventHandler(event){
    var element = event.target

    if (element.tagName == 'BUTTON' && element.className == 'item-collection-button') {
        chooseCollection (element)
    }

    if (element.className == 'setting-bubble') {
        blocks = document.getElementsByClassName('setting-bubble')
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            if (element.id == block.id) {
                element.classList.add('on');
            }
            else {
                if (block.className.includes('on')) {
                    block.classList.remove('on');
               }
            }
        }
    }
}


function filterButtonsEventHandler(event){
    var element = event.target

    blocks = document.getElementsByClassName('filter-block')
    for (var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        if (element.id == block.id) {
            element.classList.add('on');
            if (element.id == 'exterior_btn') {
                loadExteriorSetting(element);
                }
            else if (element.id == 'quality_btn') {
                loadQualitySetting(element);
                }
            else if (element.id == 'collection_btn') {
                loadCollectionSetting()
            }


        }
        else {
            if (block.className.includes('on')) {
                block.classList.remove('on');
            }
        }

    }
}

document.getElementsByClassName('filter-column-block')[0].addEventListener('click', filterButtonsEventHandler)
document.getElementsByClassName('container')[0].addEventListener('click', settingFieldEventHandler)

//event.target.className.includes('on')