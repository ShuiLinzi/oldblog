//导航栏
module.exports = [
    {text: '主页', link: '/index.html', icon: 'reco-home'},
    {
        text: '其它', icon: 'reco-document',
        items: [
            {
                text: 'Projects🎈',
                items: [{
                    text: 'My Project',
                    link: '/other/project',
                }]
            }, {
                text: 'Common sites🎈',
                items: [{
                    text: '✔ 友 链 →',
                    link: '/other/friends',
                }]
            },]
    },
    {text: '时间线', link: '/timeline/', icon: 'reco-date'},
    {text: '关于我', link: '/about/', icon: 'reco-message'}
]
