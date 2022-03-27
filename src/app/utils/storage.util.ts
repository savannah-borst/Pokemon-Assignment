export class StorageUtil {
    public static storageSave<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    public static storageRead<T>(key: string): T | null {
        const storedValue = localStorage.getItem(key);
        try  {
            if (storedValue) {
                return JSON.parse(storedValue) as T;
            }
            return null;
            
        } catch(e) {
            localStorage.removeItem(key);
            return null;
        }
    }
}