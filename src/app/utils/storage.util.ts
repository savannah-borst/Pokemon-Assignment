export function storageSave(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

export function storageRead<T>(key: string): T | null {
    const storedValue = sessionStorage.getItem(key);
    try  {
        if (storedValue) {
            return JSON.parse(storedValue) as T;
        } else {
            return null;
        }
    } catch(e) {
        sessionStorage.removeItem(key);
        return null;
    }
}