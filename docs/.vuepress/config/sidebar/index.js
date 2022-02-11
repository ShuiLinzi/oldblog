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
            title: '操作系统',
            collapsable: true,
            children: [
                'backend/linux',
             
              
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
                'backend/ngnix和gateway搭配使用',
                'backend/bootDeploy',
                'backend/redis',
                'backend/springboot'
        
            ]
        },
        {
            title: '数据结构和算法',
            collapsable: true,
            children: [
                '数据结构/并查集',
                '数据结构/前缀树',
                '数据结构/滑动窗口',
                '数据结构/快速排序',
                
                
        
            ]
        },
        {
            title: '随笔 Essay',
            collapsable: true,
            children: [
                'essay/你好世界',
                'essay/归档2020',
                'essay/10月总结',
                'essay/迷茫',
               
                
            ]
        },
        {
            title: '读书',
            collapsable: true,
            children: [
                'book/富爸爸穷爸爸',
                'book/被讨厌的勇气',
                'book/Java核心技术卷知识'
                
                
            ]
        },
        {
            title: '工具',
            collapsable: true,
            children: [
                'essay/图床',
                
                
            ]
        }

    ]
}
