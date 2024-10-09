function FindProxyForURL(url, host) {
    // Прокси сервер
    var proxy = "PROXY 185.245.105.106:58058";
    
    // Сайты, для которых включается прокси
    // Условие для YouTube
    if (dnsDomainIs(host, ".youtube.com") || dnsDomainIs(host, ".googlevideo.com")) {
        return proxy;
    }

    // // Условие для ChatGPT
    // if (dnsDomainIs(host, ".openai.com") || dnsDomainIs(host, ".chat.openai.com")) {
    //     return proxy;
    // }

    // Условие для 2ip.ru
    if (shExpMatch(url, "*://2ip.ru/*")) {
        return proxy;
    }

    // Во всех других случаях прямое соединение
    return "DIRECT";
}