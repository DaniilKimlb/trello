export default function storage(n, d) {
    if(d){
        localStorage.setItem(n, d)
    }
    return  localStorage.getItem(n)
}
