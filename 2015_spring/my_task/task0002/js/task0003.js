initData();


// 数据初始化
function initData() {
    if (!localStorage.childCate && !localStorage.task) {
        var cateJson = [
            {
                id: 0,
                name: "默认分类",
                child: [0]
            }
        ];

        var childCateJson = [
            {
                id: 0,
                name: "默认子分类",
                child: [0],
                father: [0]
            }
        ];

        var taskJson = [
            {
                id: 0,
                name: "todo-1",
                date: "2017-02-16",
                content: "这是默认的任务。",
                finish: true,
                father: 0
            }
        ];

        localStorage.cate = JSON.stringify(cateJson);
        localStorage.childCate = JSON.stringify(childCateJson);
        localStorage.task = JSON.stringify(taskJson);
    }
}

