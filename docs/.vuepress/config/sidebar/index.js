//侧边栏
module.exports = {
    '/views/': [
        '',
        
        {
            title: '规范 Standard',
            collapsable: true,
            children: [
                'specification/ali',
             
              
            ]
        },
        {
            title: '前端 Front-end',
            collapsable: true,
            children: [
                'frontend/EChartsStudy',
              
            ]
        },
        {
            title: '后端 Back-end',
            collapsable: true,
            children: [
                'backend/ArrayList',
        
            ]
        },
        {
            title: '随笔 Essay',
            collapsable: true,
            children: [
                'essay/你好世界',
                'essay/归档2020',
                
            ]
        }

    ]
}
