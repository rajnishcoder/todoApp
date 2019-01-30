export class StorageUtils {

    static setItem(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    static getItem(key: string) {
        const data = localStorage.getItem(key);
        if (data) { return data; }
        return null;
    }

    static saveToLocalStorage(key: string, value: string) {
        if (key && value) {
            const stringValue = JSON.stringify(value);
            this.setItem(key, stringValue);
        }
    }

    static getFromLocalStorage(key: string) {
        if (key) {
            const data = this.getItem(key);
            if (data) { return JSON.parse(data) }
            return null;
        }
    }

    // custom functions start

    static saveTodoListToLocal(list) {
        this.saveToLocalStorage(StorageKeys.TODO_LIST_KEY, list);
    }

    static getTodoListFromoLocal() {
        return this.getFromLocalStorage(StorageKeys.TODO_LIST_KEY);
    }

}

export class StorageKeys {
    static TODO_LIST_KEY = 'TODO_LIST_KEY';
}
