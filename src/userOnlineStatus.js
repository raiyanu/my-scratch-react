export default {
    getSnapShot() {
        return navigator.onLine;
    },
    subscribe(callback) {
        window.addEventListener('online', callback)
        window.addEventListener('offline', callback)
        return () => {
            window.removeEventListener('offline', callback)
            window.removeEventListener('offline', callback)
        }
    }
}
