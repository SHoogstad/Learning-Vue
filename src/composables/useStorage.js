import { ref, watch} from "vue";

export function useStorage(key) {
    let storedVal = localStorage.getItem(key);

    let val = ref(storedVal);

    watch(val, () => {
        remember()
    })

    function remember() {
        localStorage.setItem(key, val.value)
    }

    return val
}