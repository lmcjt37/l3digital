const helper = {
    getScreenSize: () => {
        if (window.innerWidth < 768) {
            return { isHandheld: true }
        } else {
            return { isHandheld: false }
        }
    },
    getBannerClass: () => 'banner' + Math.floor(Math.random() * 6 + 1),
}
export default helper
