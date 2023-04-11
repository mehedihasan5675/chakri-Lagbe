export { setDataInLocal, getDataInLocal }
const setDataInLocal=(id)=>{
localStorage.setItem('job-id',id)

}
const getDataInLocal=()=>{
    return localStorage.getItem('job-id')
}