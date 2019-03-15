const helper = {
    getScreenSize: () => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            return { isHandheld: true }
        } else {
            return { isHandheld: false }
        }
    },
    getBannerName: () => 'banner' + Math.floor(Math.random() * 6 + 1),
}
export default helper
