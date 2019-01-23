export class StorageUtil {

    static setItem(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    static getItem(key: string) {
        return localStorage.getItem(key);
    }

    static saveToLocalStorage(key: string, value: string) {
        if (key && value) {
            const stringValue = JSON.stringify(value);
            this.setItem(key, value);
        }
    }

    static getFromLocalStorage(key: string) {
        if (key) {
            const obj = JSON.parse(this.getItem(key));
            if (obj) {
                return this.getItem(key);
            }
        }
    }

    // custom functions start

    static saveTodoListToLocal(list) {
        this.saveToLocalStorage(list, StorageKeys.TODO_LIST_KEY);
    }

    static getTodoListToLocal() {
        return this.getFromLocalStorage(StorageKeys.TODO_LIST_KEY);
    }

}

export class StorageKeys {
    static TODO_LIST_KEY = 'TODO_LIST_KEY';
}
