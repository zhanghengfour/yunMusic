import request from "../../uitls/request";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerList: [],
        recommendList: [],
        topList: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        let bannerListDate = await request('/banner', {type: 2});
        this.setData({
            bannerList: bannerListDate.banners,
        })

        let recommendListDate = await request('/personalized', {limit: 10, type: 2});
        this.setData({
            recommendList: recommendListDate.result,
        })
        // 获取排行榜数据
        /*
        需求分析:
        1.根据idx的值获取对应的数据
        2.idx需要的值是0-4
        3.需要发送五次请求
         */
        let index = 0;
        let resultArr = [];
        while (index < 5) {
            let topListDate = await request('/top/list', {idx: index++, type: 2});
            let topListItem = {name: topListDate.playlist.name, tracks: topListDate.playlist.tracks.slice(0, 3)}
            resultArr.push(topListItem)
            // 增快数据展示
            this.setData({
                topList: resultArr,
            })
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})