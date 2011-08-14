({
    block: 'b-page',
    title: 'Сергей Бережной — veged@yandex-team.ru',
    favicon: '//yandex.ru/favicon.ico',
    head: [
        { elem: 'css', url: 'veged.css' },
        { elem: 'js', url: '//yandex.st/jquery/1.6.2/jquery.min.js' },
        { elem: 'js', url: 'veged.js' }
    ],
    i18n: { langs: ['ru', 'en'], lang: 'ru' },
    content: {
        block: 'b-card',
        mods: { lang: 'ru' },
        content: [
            {
                block: 'b-card-layout',
                lang: 'ru',
                info: {
                    name: 'Сергей Бережной',
                    position: 'Руководитель группы разработки поисковых&nbsp;веб-интерфейсов',
                    company: {
                        country: 'Россия',
                        locality: 'Москва',
                        zip: '119021',
                        address: 'ул. Льва Толстого, д. 16',
                        phone: '+7 (495) 739-70-00',
                        'phone-add': '6449',
                    //  fax: '+7 (495) 739-70-70',
                        site: 'www.yandex.ru'
                    },
                    person: {
                        email: 'veged@yandex-team.ru',
                        cellular: '+7 (906) 089-10-54',
                    //  skype: 'mr.veged',
                        github: 'veged'
                    }
                }
            },
            {
                block: 'b-card-layout',
                lang: 'en',
                info: {
                    name: 'Sergey Berezhnoy',
                    position: 'Team lead of search web interfaces development',
                    company: {
                        country: 'Russia',
                        locality: 'Moscow',
                        zip: '119021',
                        address: '16, Leo Tolstoy St.',
                        phone: '+7 (495) 739-70-00',
                        'phone-add': '6449',
                        site: 'www.yandex.com'
                    },
                    person: {
                        email: 'veged@yandex-team.ru',
                        cellular: '+7 (906) 089-10-54',
                        github: 'veged'
                    }
                }
            }
        ]
    }
})
