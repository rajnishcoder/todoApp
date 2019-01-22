export class StorageUtil {

    static setItem(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    static getItem(key: string) {
        return localStorage.getItem(key);
    }

    static getConvertedObject(key: string) {
        return this.getItem(key);
    }

}
