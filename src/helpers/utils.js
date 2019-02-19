const helper = {
    getScreenSize: () => {
        if (window.innerWidth < 768) {
            return { isHandheld: true }
        } else {
            return { isHandheld: false }
        }
    },
}
export default helper
